/**
 * data.js — Data jadwal pelajaran & fakta sekolah.
 * Dipisah dari logika aplikasi (app.js) agar lebih rapi dan mudah dirawat.
 * SMP Negeri 2 Bitung
 */

const scheduleData = {
    "7": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Prakarya" },
                { time: "08.40 - 09.20", subject: "Prakarya" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "3": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "4": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Bahasa Indonesia" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "5": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPS" },
                { time: "08.40 - 09.20", subject: "IPS" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "6": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "Bahasa Inggris" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "7": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPS" },
                { time: "08.40 - 09.20", subject: "IPS" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "8": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Prakarya" },
                { time: "10.00 - 10.40", subject: "Prakarya" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "9": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "10": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "11": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 10.50", subject: "TIK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PKn" },
                { time: "08.40 - 09.20", subject: "PKn" },
                { time: "09.20 - 10.00", subject: "Matematika" },
                { time: "10.00 - 10.40", subject: "Matematika" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "12": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Inggris" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        }
    },
    "8": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Prakarya" },
                { time: "10.00 - 10.40", subject: "Prakarya" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "IPS" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "3": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "TIK" },
                { time: "08.40 - 09.20", subject: "TIK" },
                { time: "09.20 - 10.00", subject: "Mulok" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "4": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "5": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PKn" },
                { time: "08.40 - 09.20", subject: "PKn" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "IPS" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "6": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "Matematika" },
                { time: "10.00 - 10.40", subject: "Matematika" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "7": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 10.50", subject: "Prakarya" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "8": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Bahasa Indonesia" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "9": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "10": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "IPS" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "11": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Prakarya" },
                { time: "08.40 - 09.20", subject: "Prakarya" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "12": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 10.50", subject: "Prakarya" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "13": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "IPS" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "IPS" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "14": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 10.50", subject: "TIK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "Prakarya" },
                { time: "10.00 - 10.40", subject: "Prakarya" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        }
    },
    "9": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "Matematika" },
                { time: "10.00 - 10.40", subject: "Matematika" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Bahasa Indonesia" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "3": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "4": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "Agama" },
                { time: "10.00 - 10.40", subject: "Agama" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "5": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 10.50", subject: "Prakarya" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PKn" },
                { time: "08.40 - 09.20", subject: "PKn" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "6": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "IPS" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "7": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "8": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPS" },
                { time: "08.40 - 09.20", subject: "IPS" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "9": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "TIK" },
                { time: "08.40 - 09.20", subject: "TIK" },
                { time: "09.20 - 10.00", subject: "Prakarya" },
                { time: "10.00 - 10.40", subject: "Prakarya" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "10": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Inggris" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "11": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 10.50", subject: "Prakarya" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPS" },
                { time: "08.40 - 09.20", subject: "IPS" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "12": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Prakarya" },
                { time: "08.40 - 09.20", subject: "Prakarya" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "13": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 10.50", subject: "TIK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Bahasa Indonesia" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        },
        "14": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "IPS" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Projek" },
                { time: "13.40 - 14.20", subject: "Projek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "Matematika" },
                { time: "10.00 - 10.40", subject: "Matematika" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Projek" },
                { time: "11.50 - 12.30", subject: "Projek" }
            ]
        }
    }
};

const funFactsData = [
    {
        title: "Jumlah Guru Per Mata Pelajaran",
        items: [
            "Agama: 8 guru (3 Kristen, 3 Islam, 2 Katolik)",
            "PKn: 5 guru",
            "Bahasa Indonesia: 12 guru",
            "Matematika: 8 guru",
            "Bahasa Inggris: 7 guru",
            "IPA: 7 guru",
            "IPS: 6 guru",
            "PJOK: 7 guru",
            "Prakarya/Seni Budaya: 5 guru",
            "TIK: 4 guru",
            "BK: 4 Guru."
        ]
    },
    {
        title: "Perbandingan Gender",
        items: [
            "Guru Perempuan: Sekitar 85% (~55 dari 65)",
            "Guru Laki-laki: Sekitar 15% (~10 dari 65)",
            "Mayoritas guru adalah perempuan"
        ]
    },
    {
        title: "Guru Dengan Mapel Ganda",
        items: [
            "Sartika Ambat, S.Pd: Agama Kristen & PKn",
            "Rahmi Astuti, S.Pd: B. Inggris & B. Indonesia",
            "Rizki Wahyuni: B. Inggris & B. Indonesia",
            "Venly Pande, S.Pd: PJOK & TIK",
            "Debi Bawiling, S.Pd: B. Indonesia & B. Inggris"
        ]
    },
    {
        title: "Guru dengan Gelar Akademik Tinggi",
        items: [
            "John Wuisan, M. Th (Magister Teologi)",
            "Sicilia Ledy S Sambur, M. Pd (Magister Pendidikan)",
            "Hesty M. Lontoh, S. Pd & M. Pd (Sarjana Pendidikan & Magister Pendidikan)",
            "Marjeine Dalonto, M. Pd (Magister Pendidikan)"
        ]
    },
    {
        title: "Guru Dengan Jam Mengajar Terbanyak",
        items: [
            "JP = Jam Pelajaran",
            "Nita A. Modali, S.Kom (TIK): 42 JP",
            "Christi Tumangkeng, S.Pd (TIK): 42 JP",
            "Abdul Wahid, S. Pd. I (Agama Islam): 36 JP",
            "Yohanes Andrew Kapahese, S.Pd (TIK): 36 JP",
            "Venly Pande, S.Pd (PJOK & TIK): 36 JP",
            "Sartika Ambat, S.Pd (gama Kristen & PKn): 36 JP",
            "Debi Bawiling, S.Pd (B. Indonesia & B. Inggris): 36 JP",
            "Guru TIK memiliki beban jam tertinggi"
        ]
    }
];
