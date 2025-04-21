import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { BookProvider } from './context/BookContext.jsx';
import Header from './components/Header.jsx';
import BookForm from './components/BookForm.jsx';
import BookFilter from './components/BookFilter.jsx';
import SearchBar from './components/SearchBar.jsx';
import BookList from './components/BookList.jsx';

export default function App() {
  return (
    <BookProvider>
      <div style={{ maxWidth: 800, margin: 'auto', padding: 20, fontFamily: 'Arial' }}>
        <Header />
        <nav style={{ margin: '10px 0' }}>
          <NavLink to="/" style={{ marginRight: 10 }}>Daftar Buku</NavLink>
          <NavLink to="/add">Tambah Buku</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: 20 }}>
                <BookFilter />
                <SearchBar />
              </div>
              <BookList />
            </>
          } />
          <Route path="/add" element={<BookForm />} />
          <Route path="/edit/:id" element={<BookForm />} />
        </Routes>
      </div>
    </BookProvider>
  );
}