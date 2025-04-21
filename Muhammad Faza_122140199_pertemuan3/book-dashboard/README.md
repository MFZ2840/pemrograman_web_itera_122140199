# Aplikasi Manajemen Buku Pribadi

## Deskripsi Aplikasi

Aplikasi ini memungkinkan pengguna untuk:

- **Menambah** buku baru dengan informasi judul, penulis, dan status (Dimiliki, Sedang Dibaca, Ingin Dibeli)
- **Mengedit** data buku yang sudah tersimpan
- **Menghapus** buku dari daftar
- **Memfilter** buku berdasarkan status
- **Mencari** buku berdasarkan judul

State aplikasi dikelola dengan **Context API** dan disimpan di browser menggunakan **localStorage**. Navigasi multi-halaman di-handle oleh **React Router**.

## Instruksi Instalasi dan Menjalankan

1. Clone repository:
   ```bash
   git clone https://github.com/MFZ2840/pemrograman_web_itera_122140199.git
   cd pemrograman_web_itera_122140199
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm start
   ```
4. Akses aplikasi di: [http://localhost:3000](http://localhost:3000)

## Screenshot Antarmuka

**Daftar Buku**  
![Daftar Buku](images/03.png)

**Tambah Buku**  
![Tambah Buku](images/02.png)

**Edit Buku**  
![Edit Buku](images/04.png)

## Fitur React yang Digunakan

- **Functional Components** dengan Hooks (`useState`, `useEffect`)
- **Context API** (pada `src/context/BookContext.jsx`) untuk state global
- **Custom Hooks**:
  - `useLocalStorage` untuk sinkronisasi state dengan localStorage
  - `useBooks` untuk logika CRUD dan filter/search
- **React Router** di `App.jsx` untuk multi-halaman (`/`, `/add`, `/edit/:id`)
- **PropTypes** untuk validasi props pada komponen
- **Error Handling** pada form input di `BookForm.jsx`

## Komentar dalam Kode

- Pada `BookForm.jsx`: validasi input dengan state `error` dan menampilkan pesan kesalahan
- Pada `useLocalStorage.js`: sinkronisasi otomatis ke localStorage melalui `useEffect`
- Pada `BookFilter.jsx` dan `SearchBar.jsx`: controlled components untuk filter & search
- Pada `BookList.jsx`: mapping `filteredBooks` dan penanganan `deleteBook` dari context

## Laporan Testing

Berikut screenshot hasil menjalankan unit tests dengan React Testing Library:

![SS 01](images/01.png)
![SS 02](images/02.png)
![SS 03](images/03.png)
![SS 04](images/04.png)
![SS 05](images/05.png)
![SS 06](images/06.png)

Pastikan menjalankan:

```bash
npm test
```

