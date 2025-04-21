import React from 'react';
import { useBookContext } from '../context/BookContext.jsx';
import { Link } from 'react-router-dom';

export default function BookList() {
  const { filteredBooks, deleteBook } = useBookContext();
  if (!filteredBooks.length) return <p>Tidak ada buku.</p>;
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {filteredBooks.map(book => (
        <li key={book.id} style={{ marginBottom: 10, border: '1px solid #ccc', padding: 10 }}>
          <h3>{book.title}</h3>
          <p>Penulis: {book.author}</p>
          <p>Status: {book.status === 'dimiliki' ? 'Dimiliki' : book.status === 'baca' ? 'Sedang Dibaca' : 'Ingin Dibeli'}</p>
          <div style={{ display: 'flex', gap: 5 }}>
            <Link to={`/edit/${book.id}`}><button>Edit</button></Link>
            <button onClick={() => deleteBook(book.id)}>Hapus</button>
          </div>
        </li>
      ))}
    </ul>
  );
}