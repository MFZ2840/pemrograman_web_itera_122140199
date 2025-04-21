import React, { createContext, useContext } from 'react';
import useBooks from '../hooks/useBooks.jsx';

const BookContext = createContext();
export function BookProvider({ children }) {
  const api = useBooks();
  return <BookContext.Provider value={api}>{children}</BookContext.Provider>;
}
export function useBookContext() {
  return useContext(BookContext);
}