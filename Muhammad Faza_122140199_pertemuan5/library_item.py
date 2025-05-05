from abc import ABC, abstractmethod

class LibraryItem(ABC):
    _id_counter = 1

    def __init__(self, title):
        # private attribute
        self.__id = LibraryItem._id_counter
        LibraryItem._id_counter += 1
        # protected attribute
        self._title = title

    @property
    def id(self):
        return self.__id

    @property
    def title(self):
        return self._title

    @abstractmethod
    def describe(self):
        pass