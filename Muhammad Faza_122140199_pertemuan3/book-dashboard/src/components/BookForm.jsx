import React, { useState, useEffect } from 'react';
import { useBookContext } from '../context/BookContext.jsx';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function BookForm() {
  const { id } = useParams();
  const { books, addBook, editBook } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('dimiliki');
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      const book = books.find(b => b.id === +id);
      if (book) {
        setTitle(book.title);
        setAuthor(book.author);
        setStatus(book.status);
      }
    }
  }, [id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError('Judul dan penulis wajib diisi');
      return;
    }
    const data = { title, author, status };
    if (id) editBook({ ...data, id: +id }); else addBook(data);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input placeholder="Judul" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Penulis" value={author} onChange={e => setAuthor(e.target.value)} />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="dimiliki">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit">{id ? 'Update' : 'Tambah'}</button>
    </form>
  );
}

BookForm.propTypes = {};