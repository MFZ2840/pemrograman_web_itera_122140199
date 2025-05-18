from setuptools import setup, find_packages

requires = [
    'pyramid',
    # removed pyramid_sqlalchemy in favor of SQLAlchemy directly
    'pyramid_debugtoolbar',
    'waitress',
    'SQLAlchemy'
]

setup(
    name='course_api_app',
    version='0.1',
    packages=find_packages(),
    install_requires=requires,
    entry_points={
        'paste.app_factory': [
            'main = course_api:main'
        ],
    },
)