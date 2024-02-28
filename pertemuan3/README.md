# Ikmal Faris Musyaffa
# 2141720123 / 06 / TI-3C
# Laporan Parktikum 3

## Praktikum 1
### Terdapat error karena tidak menulis host config pada next.config.mjs, solve error dengan menambahkan domain pada config.next.mjs
### Hasil dari praktikum 1
![gambar1](img/1.png)

### Kode Program
![gambar2](img/2.png)
![gambar3](img/3.png)
![gambar4](img/4.png)

## Praktikum 2
### Terdapat perbedaan dengan export dan export default, karena itu import nya juga berbeda
```bash
import Profile from "./components/profile";
import { Gallery } from "./components/gallery";
```
### Hasil dari praktikum 2
![gambar21](img/21.png)
![gambar22](img/22.png)
![gambar23](img/23.png)

## Praktikum 3
### Sebelum
![gambar31](img/31.png)
### Sesudah diperbaiki
![gambar32](img/32.png)
### Pada jsx ternyata harus ada sebuah div atau <></> yang membungkus semua kode program di dalamnya. Pada kasus ini saya namai dengan container. Lalu kita tidak bisa menggunakan class="" tetapi menggunakan className="" dan yang terakhir terdapat penambahan penutupan tag yang hilan dan salah tempat.

## Soal no 5
![gambar33](img/33.png)
### Tidak ada perbedaan dari tampilan

## Soal no 6
![gambar34](img/34.png)
![gambar35](img/35.png)
![gambar36](img/36.png)
### Tidak lupa menambahkan garis miring atau / agar gambar bia muncul

# Praktikum 4
## Soal 7
![gambar41](img/41.png)
### Terdapat fungsi getImageUrl yang mempunyai props berupa id gambar untuk mendapatkan gambar hanya dengan menginputkan id gambar pada fungsi getImageUrl tersebut.

## Soal 8
### Hasil
![gambar42](img/42.png)
### Kode program
![gambar43](img/43.png)
### destructuring pada jsx dan tsx sedikit berbeda karena di tsx menggunakan interface. Meskipun tidak menyebabkan error saat dirender tetapi pada tsx terdapat notifikasi error

## Soal 9
### Hasil
![gambar44](img/44.png)
### Kode Program
![gambar45](img/45.png)
### Bisa kita lihat bahwa card ini membungkus MyProfileV2 yang di mana card saya beri background biru. Pada tsx juga disarankan untuk mengimport ReactNode, jika tidak terdapat notifikasi error meskipun masih bisa dirender. Intinya tsx ini lebih aman dan lebih komunikatif dari segi efektivitas dan efisiensi.