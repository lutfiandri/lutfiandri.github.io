---
title: Stock Master
slug: stock-master
desc: Sebuah website untuk belajar trading saham.
external: false
tags:
  - Competition
  - AI
  - Website
thumbnail: kana.png
hero:
  - kana.png
pinned: true
---

> Stock Master mendapatkan juara 1 di Web Development IFEST UNPAD 2023

# Features

## Gamification ⭐

![Gamification](/portfolio/stock-master/gamification.png 'pembelajaran gamifikasi dan leaderboard')

Tim Kana mengangkat metode pembelajaran menggunakan metode gamifikasi, yang mana pengguna akan belajar trading saham dengan cara seperti bermain yang menyenangkan. Dari beberapa penelitian, metode gamifikasi ini terbukti lebih efektif dari pada pembelajaran dengan metode text book karena pengguna lebih antusias untuk belajar.

Pada fitur gamifikasi ini, pengguna akan mendapatkan satu tantangan quiz per hari yang berisi kurang lebih 15 pertanyaan. Pengguna akan mendapatkan poin sesuai dengan jawaban benar dan waktu menjawab tiap pertanyaan. Semakin cepat dan benar, maka semakin banyak poin yang didapatkan pengguna. Poin ini diakumulasikan ke dalam leaderboard yang tersedia dalam rentang waktu harian dan mingguan.

## Pattern Classification ⭐

![Pattern Classification](/portfolio/stock-master/pattern-classification.png 'pattern classification')

Dalam gamifikasi, pengguna akan mendapatkan salah satu jenis soal untuk menggambar chart pattern sesuai dengan namanya, seperti pada bagian kiri pada gambar di atas. AI yang digunakan adalah EfficientNetV2B0 dengan akurasi 100% yang di-train menggunakan 14 kelas dataset yang kami buat sendiri. Adapun ONNX digunakan sebagai runtime dari AI ini karena terbukti lebih cepat daripada menggunakan runtime dari Tensorflow maupun PyTorch di CPU.

## Price Forecasting

![Price Forecasting](/portfolio/stock-master/price-forecasting.png 'stock price forecasting')

Fitur ini memberikan prediksi harga saham setahun ke depan berdasar harga 4 tahun ke belakang. Adapun prediksi dilakukan tiap minggu dengan cron.

# Software Architecture

![Architecture](/portfolio/stock-master/architecture.png 'arsitektur aplikasi')

Arsitektur aplikasi ini tertera seperti gambar di atas. Kami menggunakan arsitektur semi SOA (Service Oriented Architecture) dengan memisah backend untuk AI menjadi satu service terpisah.

# Meet the Team

- Me, Lutfi Andriyanto, as AI and Backend Developer.
- [Aulia Nur Fajriyah] as UI/UX Designer.
- [Jovian Reynaldo] as Frontend Developer.

# Links

- Backend Rest API: [github.com/lutfiandri/stockmaster-be](github.com/lutfiandri/stockmaster-be)
- Backend AI: [github.com/lutfiandri/stockmaster-be-ml](github.com/lutfiandri/stockmaster-be-ml)
- Frontend: [github.com/jovianjr/StockMaster-FE](github.com/jovianjr/StockMaster-FE)
- The site: [stockmaster.vercel.app](stockmaster.vercel.app)

# Tech Stack

## Backend (Me)

- Express.js: for Rest API Service
- Flask + ONNX Runtime: for AI Service
- Auth0: for "login with Google" option
- MongoDB

## AI (Me)

- Tensorflow + EfficientNetV2: for pattern classification
- SARIMA: for stock forecasting

## Frontend

- Next.js
- Tailwind CSS

## UI/UX

- Figma

<!-- def -->

[aulia nur fajriyah]: https://www.linkedin.com/in/aulianurfajriyah
[jovian reynaldo]: https://www.linkedin.com/in/jovianjr
