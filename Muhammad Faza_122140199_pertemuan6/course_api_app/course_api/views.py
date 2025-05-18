from pyramid.view import view_config
from pyramid.response import Response
from course_api import DBSession
from course_api.models import Matakuliah

@view_config(route_name='get_all', renderer='json', request_method='GET')
def get_all(request):
    session = request.registry['dbsession']()
    items = session.query(Matakuliah).all()
    return [i.to_dict() for i in items]

@view_config(route_name='get_one', renderer='json', request_method='GET')
def get_one(request):
    session = request.registry['dbsession']()
    item = session.query(Matakuliah).get(int(request.matchdict['id']))
    if item:
        return item.to_dict()
    request.response.status = 404
    return {'error': 'Not Found'}

@view_config(route_name='create', renderer='json', request_method='POST')
def create(request):
    data = request.json_body
    session = request.registry['dbsession']()
    mk = Matakuliah(
        kode_mk=data['kode_mk'],
        nama_mk=data['nama_mk'],
        sks=data['sks'],
        semester=data['semester']
    )
    session.add(mk)
    session.flush()
    return mk.to_dict()

@view_config(route_name='update', renderer='json', request_method='PUT')
def update(request):
    data = request.json_body
    session = request.registry['dbsession']()
    mk = session.query(Matakuliah).get(int(request.matchdict['id']))
    if not mk:
        request.response.status = 404
        return {'error': 'Not Found'}
    for field in ['kode_mk','nama_mk','sks','semester']:
        if field in data:
            setattr(mk, field, data[field])
    return mk.to_dict()

@view_config(route_name='delete', renderer='json', request_method='DELETE')
def delete(request):
    session = request.registry['dbsession']()
    mk = session.query(Matakuliah).get(int(request.matchdict['id']))
    if not mk:
        request.response.status = 404
        return {'error': 'Not Found'}
    session.delete(mk)
    return {'status': 'Deleted'}