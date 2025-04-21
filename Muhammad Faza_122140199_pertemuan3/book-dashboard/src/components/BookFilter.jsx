import React from 'react';
import { useBookContext } from '../context/BookContext.jsx';

export default function BookFilter() {
  const { filter, setFilter } = useBookContext();
  return (
    <select value={filter} onChange={e => setFilter(e.target.value)}>
      <option value="all">Semua</option>
      <option value="dimiliki">Dimiliki</option>
      <option value="baca">Sedang Dibaca</option>
      <option value="beli">Ingin Dibeli</option>
    </select>
  );
}