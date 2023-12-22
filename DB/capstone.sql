-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 21 Des 2023 pada 11.59
-- Versi server: 11.1.2-MariaDB
-- Versi PHP: 8.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capstone`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `item`
--

CREATE TABLE `item` (
  `id_item` int(10) NOT NULL,
  `id_kategori` int(5) NOT NULL,
  `nama_item` varchar(200) NOT NULL,
  `deksripsi_item` text NOT NULL,
  `path_images` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `item`
--

INSERT INTO `item` (`id_item`, `id_kategori`, `nama_item`, `deksripsi_item`, `path_images`, `created_at`) VALUES
(1, 1, 'Anggur', 'Anggur adalah buah yang sangat istimewa dan lezat! Buah ini memiliki bentuk bulat atau oval, dan warnanya bisa beragam, seperti ungu, hijau, atau merah. Anggur memiliki kulit yang tipis, daging yang juicy, dan biji kecil di dalamnya.\r\nWarna dan rasanya yang beragam membuat anggur menjadi buah yang menyenangkan untuk dimakan. Ada anggur ungu yang manis seperti permen, anggur hijau yang segar dan renyah, serta anggur merah yang memiliki cita rasa yang khas. Saat kita menggigit anggur, rasanya sangat nikmat dan menyegarkan di mulut!\r\nSelain enak, anggur juga mengandung banyak vitamin dan mineral yang baik untuk tubuh kita. Vitamin C dalam anggur membantu menjaga kesehatan kulit dan melindungi tubuh dari penyakit. Anggur juga mengandung serat, yang baik untuk pencernaan dan membuat perut kita senang.', 'public/image/item/anggur.png', '2023-12-21 14:59:14');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(5) NOT NULL,
  `nama_kategori` varchar(100) NOT NULL,
  `path_icon_kategori` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `nama_kategori`, `path_icon_kategori`) VALUES
(1, 'Buah-Buahan', 'public/image/kategori/buah.png'),
(2, 'Angka', 'public/image/kategori/angka.png'),
(3, 'Huruf', 'public/image/kategori/huruf.png');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id_item`),
  ADD KEY `id_kategori` (`id_kategori`);

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `item`
--
ALTER TABLE `item`
  MODIFY `id_item` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
