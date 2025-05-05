from library import Library
from book import Book
from magazine import Magazine

def main():
    lib = Library()
    while True:
        print("\n=== Perpustakaan Sederhana ===")
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Tampilkan Semua Item")
        print("4. Cari Item berdasarkan Judul")
        print("5. Cari Item berdasarkan ID")
        print("6. Keluar")
        pilihan = input("Pilih menu (1-6): ")

        if pilihan == '1':
            title = input("Masukkan judul buku: ")
            author = input("Masukkan penulis buku: ")
            lib.add_item(Book(title, author))
            print("Buku berhasil ditambahkan.")

        elif pilihan == '2':
            title = input("Masukkan judul majalah: ")
            issue = input("Masukkan nomor edisi majalah: ")
            lib.add_item(Magazine(title, issue))
            print("Majalah berhasil ditambahkan.")

        elif pilihan == '3':
            print("\nDaftar Item di Perpustakaan:")
            for desc in lib.list_items():
                print(desc)

        elif pilihan == '4':
            keyword = input("Masukkan judul untuk pencarian: ")
            results = lib.find_by_title(keyword)
            if results:
                print("\nItem ditemukan:")
                for item in results:
                    print(item.describe())
            else:
                print("Item tidak ditemukan.")

        elif pilihan == '5':
            try:
                id_search = int(input("Masukkan ID item: "))
            except ValueError:
                print("ID harus berupa angka.")
                continue
            item = lib.find_by_id(id_search)
            if item:
                print(item.describe())
            else:
                print("Item tidak ditemukan.")

        elif pilihan == '6':
            print("Terima kasih! Sampai jumpa.")
            break

        else:
            print("Pilihan tidak valid. Silakan pilih 1-6.")

if __name__ == '__main__':
    main()