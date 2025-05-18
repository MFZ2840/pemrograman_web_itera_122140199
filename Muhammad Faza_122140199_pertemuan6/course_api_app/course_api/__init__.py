from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker, scoped_session
import course_api.routes

# Configure a scoped session for SQLAlchemy
DBSession = scoped_session(sessionmaker())


def main(global_config, **settings):
    """WSGI app factory"""
    # Setup SQLAlchemy engine
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)

    config = Configurator(settings=settings)
    config.registry['dbsession'] = DBSession

    config.include('pyramid_debugtoolbar')
    config.include('course_api.routes')
    config.scan('course_api')

    # Create tables
    from course_api.models import Base
    Base.metadata.create_all(engine)

    return config.make_wsgi_app()