from library_item import LibraryItem

class Book(LibraryItem):
    def __init__(self, title, author):
        super().__init__(title)
        self.author = author

    def describe(self):
        return f"Book [ID: {self.id}] Title: '{self.title}', Author: {self.author}"