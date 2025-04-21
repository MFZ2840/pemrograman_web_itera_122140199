import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage.jsx';
import { useNavigate } from 'react-router-dom';

export default function useBooks() {
  const [books, setBooks] = useLocalStorage('books', []);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
    navigate('/');
  };
  const editBook = (updated) => {
    setBooks(books.map(b => b.id === updated.id ? updated : b));
    navigate('/');
  };
  const deleteBook = (id) => setBooks(books.filter(b => b.id !== id));

  // filteredBooks
  const filteredBooks = books
    .filter(b => filter === 'all' ? true : b.status === filter)
    .filter(b => b.title.toLowerCase().includes(search.toLowerCase()));

  return { books, addBook, editBook, deleteBook, filter, setFilter, search, setSearch, filteredBooks };
}