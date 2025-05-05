from library_item import LibraryItem

class Magazine(LibraryItem):
    def __init__(self, title, issue_number):
        super().__init__(title)
        self._issue = issue_number  # protected

    @property
    def issue(self):
        return self._issue

    def describe(self):
        return f"Magazine [ID: {self.id}] Title: '{self.title}', Issue: {self.issue}"