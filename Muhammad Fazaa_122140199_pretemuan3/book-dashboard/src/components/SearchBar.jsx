import React from 'react';
import { useBookContext } from '../context/BookContext.jsx';

export default function SearchBar() {
  const { search, setSearch } = useBookContext();
  return (
    <input
      placeholder="Cari judul..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
}