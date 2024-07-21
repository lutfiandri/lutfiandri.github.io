---
title: Generator Cerita Jawa (Gemastik)
slug: gemastik-data-mining
desc: Penelitian generator cerita berbahasa Jawa dengan finetuning GPT-2.
external: false
tags:
  - Competition
  - AI
  - GPT-2
thumbnail: generator-example.png
---

> Proposal generator cerita jawa ini membuat tim kami masuk final Gemastik

# Contoh Hasil Cerita Jawa

Berikut hasil generator cerita jawa dengan input "ing sawijining dina".
![Hasil Cerita Jawa](/portfolio/gemastik-data-mining/generator-example.png)

# What We've Done

## Javanese Story Dataset Collection

Ada dua skema dataset yang digunakan untuk penelitian ini:

- Dataset I: Cerita berbahasa jawa yang diambil dari website dan pdf. Sebagian besar adalah cerita rakyat.
- Dataset II: Cerita berbahasa indonesia yang ditranslate ke bahasa jawa.

Kedua dataset masing-masing:

- Berjumlah 707 baris
- Telah dipisah maksimal 300 kata dalam satu baris (batasan jumlah token dari GPT-2)
- Dilakukan text preprocessing: menyeragamkan whitespace, mengganti karakter ke ASCII, menghapus URL, melakukan filter text selain cerita, dll.

## GPT-2 Finetuning

Terdapat dua model GPT-2 yang dilakukan finetuning dengan kedua skema dataset:

- GPT-2 medium berbahasa indonesia
- GPT-2 small berbahasa jawa

## Evaluation

Didapatkan hasil evaluasi sebagai berikut.
![Hasil evaluasi](/portfolio/gemastik-data-mining/evaluation-result.png)

# Meet the Team

- Me, Lutfi Andriyanto, the javanese story dataset collector from websites and PDFs.
- [Karunia Perjuangan], the main brain of this research.
- [Kayla Queenazima], the second brain and evaluator of this research.

# Links

- Kaggle: [https://www.kaggle.com/code/lutfiandri/gpt2-javanese](https://www.kaggle.com/code/lutfiandri/gpt2-javanese)

<!-- def -->

[karunia perjuangan]: https://www.linkedin.com/in/karunia-perjuangan-620420175
[kayla queenazima]: https://www.linkedin.com/in/kayla-queenazima-1545201b4
