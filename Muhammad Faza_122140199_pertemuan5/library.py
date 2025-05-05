class Library:
    def __init__(self):
        self._items = []  # protected list of LibraryItem

    def add_item(self, item):
        self._items.append(item)

    def list_items(self):
        return [item.describe() for item in self._items]

    def find_by_title(self, title):
        return [item for item in self._items if item.title.lower() == title.lower()]

    def find_by_id(self, id):
        for item in self._items:
            if item.id == id:
                return item
        return None