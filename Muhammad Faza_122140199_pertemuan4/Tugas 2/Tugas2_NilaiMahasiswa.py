# Data mahasiswa
mahasiswa = [
    {"nama": "Ali", "nim": "122140001", "uts": 80, "uas": 85, "tugas": 75},
    {"nama": "Budi", "nim": "122140002", "uts": 70, "uas": 75, "tugas": 65},
    {"nama": "Citra", "nim": "122140003", "uts": 60, "uas": 55, "tugas": 70},
    {"nama": "Dina", "nim": "122140004", "uts": 50, "uas": 45, "tugas": 55},
    {"nama": "Eko", "nim": "122140005", "uts": 90, "uas": 95, "tugas": 85},
]

# Hitung nilai akhir dan grade
for i in mahasiswa:
    nilai_akhir = (0.3 * i["uts"]) + (0.4 * i["uas"]) + (0.3 * i["tugas"])
    i["nilai_akhir"] = round(nilai_akhir, 2)
    
    if nilai_akhir >= 80:
        i["grade"] = "A"
    elif nilai_akhir >= 70:
        i["grade"] = "B"
    elif nilai_akhir >= 60:
        i["grade"] = "C"
    elif nilai_akhir >= 50:
        i["grade"] = "D"
    else:
        i["grade"] = "E"

# Tampilkan data dalam format tabel
print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<12} {:<6}".format(
    "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"
))
print("-" * 70)
for i in mahasiswa:
    print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<12} {:<6}".format(
        i["nama"], i["nim"], i["uts"], i["uas"], i["tugas"], i["nilai_akhir"], i["grade"]
    ))

# Cari mahasiswa dengan nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan nilai tertinggi:", tertinggi["nama"], "-", tertinggi["nilai_akhir"])
print("Mahasiswa dengan nilai terendah:", terendah["nama"], "-", terendah["nilai_akhir"])