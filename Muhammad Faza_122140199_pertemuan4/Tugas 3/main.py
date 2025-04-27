# main.py
# Cara pertama: import seluruh modul
import math_operations
# Cara kedua: import fungsi tertentu saja
from math_operations import luas_lingkaran, keliling_lingkaran, celsius_ke_fahrenheit, celsius_ke_kelvin

# Input dari user untuk Persegi
sisi = float(input("Masukkan panjang sisi persegi: "))
print(f"Luas Persegi: {math_operations.luas_persegi(sisi)}")
print(f"Keliling Persegi: {math_operations.keliling_persegi(sisi)}\n")

# Input dari user untuk Persegi Panjang
panjang = float(input("Masukkan panjang persegi panjang: "))
lebar = float(input("Masukkan lebar persegi panjang: "))
print(f"Luas Persegi Panjang: {math_operations.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling Persegi Panjang: {math_operations.keliling_persegi_panjang(panjang, lebar)}\n")

# Input dari user untuk Lingkaran
jari_jari = float(input("Masukkan jari-jari lingkaran: "))
print(f"Luas Lingkaran: {luas_lingkaran(jari_jari)}")
print(f"Keliling Lingkaran: {keliling_lingkaran(jari_jari)}\n")

# Input dari user untuk konversi suhu
celsius = float(input("Masukkan suhu dalam Celsius: "))
print(f"{celsius}°C = {celsius_ke_fahrenheit(celsius)}°F")
print(f"{celsius}°C = {celsius_ke_kelvin(celsius)}K")