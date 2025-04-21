import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BookProvider } from '../context/BookContext.jsx';
import BookForm from '../components/BookForm.jsx';

test('validasi error jika kosong', () => {
  render(
    <BrowserRouter>
      <BookProvider>
        <BookForm />
      </BookProvider>
    </BrowserRouter>
  );
  fireEvent.click(screen.getByText(/Tambah/i));
  expect(screen.getByText(/wajib diisi/i)).toBeInTheDocument();
});