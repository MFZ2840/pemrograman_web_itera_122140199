from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class Matakuliah(Base):
    __tablename__ = 'matakuliah'
    id = Column(Integer, primary_key=True)
    kode_mk = Column(String, unique=True, nullable=False)
    nama_mk = Column(String, nullable=False)
    sks = Column(Integer, nullable=False)
    semester = Column(Integer, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'kode_mk': self.kode_mk,
            'nama_mk': self.nama_mk,
            'sks': self.sks,
            'semester': self.semester,
        }