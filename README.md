# Aplikasi Manajemen Matakuliah dengan Pyramid

**Deskripsi**

Aplikasi ini adalah API sederhana untuk manajemen data matakuliah yang dibangun dengan Pyramid dan SQLAlchemy. Fitur CRUD (Create, Read, Update, Delete) diimplementasikan melalui endpoint RESTful:

* **GET /matakuliah** : Menampilkan daftar semua matakuliah
* **GET /matakuliah/{id}** : Menampilkan detail satu matakuliah berdasarkan ID
* **POST /matakuliah** : Menambahkan matakuliah baru
* **PUT /matakuliah/{id}** : Memperbarui data matakuliah
* **DELETE /matakuliah/{id}** : Menghapus matakuliah

## Struktur Proyek

```
...pertemuan6/              # Root project
├── setup.py                # Konfigurasi package & entry point
├── requirements.txt        # Dependencies
├── development.ini         # Konfigurasi Pyramid & database
├── courses.db              # SQLite database (auto-generated)
└── course_api/             # Python package aplikasi
    ├── __init__.py         # App factory & konfigurasi DB
    ├── models.py           # Definisi model Matakuliah
    ├── routes.py           # Definisi route & view bindings
    └── views.py            # Implementasi endpoint CRUD
```

## Instruksi Instalasi

1. Clone repository:

   ```bash
   git clone https://github.com/MFZ2840/pemrograman_web_itera_122140199.git
   cd pemrograman_web_itera_122140199/Muhammad Faza_122140199_pertemuan6
   ```
2. Buat dan aktifkan virtual environment:

   ```bash
   python -m venv venv
   # Windows PowerShell:
   & .\venv\Scripts\Activate.ps1
   # Windows CMD:
   venv\Scripts\activate.bat
   # macOS/Linux:
   source venv/bin/activate
   ```
3. Install dependencies:

   ```bash
   python -m pip install -r requirements.txt
   ```
4. Install aplikasi secara editable:

   ```bash
   python -m pip install -e .
   ```

## Menjalankan Server

Jalankan Pyramid dengan:

```bash
pserve development.ini --reload
```

Server akan berjalan di `http://localhost:6543/`.

## Testing API

### Menggunakan curl (PowerShell)

1. **GET semua matakuliah**

   ```powershell
   Invoke-RestMethod http://localhost:6543/matakuliah
   ```
2. **POST** tambah data:

   ```powershell
   Invoke-RestMethod -Method POST -Uri http://localhost:6543/matakuliah \
     -Headers @{ 'Content-Type' = 'application/json' } \
     -Body '{ "kode_mk":"MK101", "nama_mk":"Algoritma", "sks":3, "semester":1 }'
   ```
3. **PUT** update data:

   ```powershell
   Invoke-RestMethod -Method PUT -Uri http://localhost:6543/matakuliah/1 \
     -Headers @{ 'Content-Type' = 'application/json' } \
     -Body '{ "nama_mk":"Struktur Data", "sks":4 }'
   ```
4. **DELETE** data:

   ```powershell
   Invoke-RestMethod -Method DELETE http://localhost:6543/matakuliah/1
   ```

### Menggunakan Postman / Insomnia

* Buat request sesuai URL di atas
* Pilih method
* Tambahkan header `Content-Type: application/json`
* Isi Body (raw JSON)
* Klik **Send**

## Dokumentasi & Screenshot

*(Tambahkan screenshot terminal dengan output curl atau Postman di sini)*

## Fitur

* Menggunakan Pyramid sebagai framework
* SQLAlchemy untuk ORM dan SQLite sebagai database lokal
* Endpoint RESTful lengkap dengan method HTTP sesuai standar
* Struktur kode modular: models, routes, views
* File konfigurasi terpisah (`development.ini`) untuk URL database dan server