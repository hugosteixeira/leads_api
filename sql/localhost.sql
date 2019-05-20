-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 20-Maio-2019 às 04:58
-- Versão do servidor: 8.0.13-4
-- versão do PHP: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wprZWtom2m`
--
CREATE DATABASE IF NOT EXISTS `wprZWtom2m` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `wprZWtom2m`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Leads`
--

CREATE TABLE `Leads` (
  `id` int(11) NOT NULL,
  `primeiroNome` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `ultimoNome` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `genero` enum('masculino','feminino','desconhecido') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'desconhecido',
  `nascimento` date DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cpf` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cnpj` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `origem` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `horario` datetime NOT NULL,
  `mensagem` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idProduto` int(11) DEFAULT NULL,
  `pontuacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Leads`
--

INSERT INTO `Leads` (`id`, `primeiroNome`, `ultimoNome`, `genero`, `nascimento`, `email`, `cpf`, `cnpj`, `origem`, `telefone`, `horario`, `mensagem`, `createdAt`, `updatedAt`, `idProduto`, `pontuacao`) VALUES
(1, 'Hugo', '', 'desconhecido', '1996-04-12', 'hugosteixeira@hotmail.com', NULL, NULL, 'Google', '8134436015', '2019-05-17 15:20:35', 'Estou tentando fazer uma compra mas não consigo, ajuda pfv.', '2019-05-20 02:56:15', '2019-05-20 02:56:15', NULL, 60);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Produtos`
--

CREATE TABLE `Produtos` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Produtos`
--

INSERT INTO `Produtos` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Fusca azul', 'On hit enabled', '2019-05-20 02:55:50', '2019-05-20 02:55:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Leads`
--
ALTER TABLE `Leads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProduto` (`idProduto`);

--
-- Indexes for table `Produtos`
--
ALTER TABLE `Produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Leads`
--
ALTER TABLE `Leads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Produtos`
--
ALTER TABLE `Produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `Leads`
--
ALTER TABLE `Leads`
  ADD CONSTRAINT `Leads_ibfk_1` FOREIGN KEY (`idProduto`) REFERENCES `Produtos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
