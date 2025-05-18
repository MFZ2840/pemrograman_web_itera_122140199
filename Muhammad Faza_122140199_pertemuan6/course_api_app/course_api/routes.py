from pyramid.config import Configurator

def includeme(config: Configurator):
    config.add_route('get_all',    '/matakuliah')
    config.add_route('get_one',    '/matakuliah/{id}')
    config.add_route('create',     '/matakuliah')
    config.add_route('update',     '/matakuliah/{id}')
    config.add_route('delete',     '/matakuliah/{id}')