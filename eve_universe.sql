-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: eve_universe
-- ------------------------------------------------------
-- Server version	5.7.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alliance`
--

DROP TABLE IF EXISTS `alliance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alliance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ticker` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `dateFounded` datetime DEFAULT NULL,
  `factionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `alliance___created` (`created`),
  KEY `alliance___updated` (`updated`),
  KEY `alliance___factionId` (`factionId`),
  CONSTRAINT `fk_alliance___factionId___faction___id` FOREIGN KEY (`factionId`) REFERENCES `faction` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alliance`
--

LOCK TABLES `alliance` WRITE;
/*!40000 ALTER TABLE `alliance` DISABLE KEYS */;
/*!40000 ALTER TABLE `alliance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `published` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `category___created` (`created`),
  KEY `category___updated` (`updated`),
  KEY `category___published` (`published`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `constellation`
--

DROP TABLE IF EXISTS `constellation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `constellation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `regionId` int(11) DEFAULT NULL,
  `x` bigint(20) NOT NULL DEFAULT '0',
  `y` bigint(20) NOT NULL DEFAULT '0',
  `z` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `constellation___created` (`created`),
  KEY `constellation___updated` (`updated`),
  KEY `constellation___regionId` (`regionId`),
  CONSTRAINT `fk_constellation___regionId___region___id` FOREIGN KEY (`regionId`) REFERENCES `region` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `constellation`
--

LOCK TABLES `constellation` WRITE;
/*!40000 ALTER TABLE `constellation` DISABLE KEYS */;
/*!40000 ALTER TABLE `constellation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corporation`
--

DROP TABLE IF EXISTS `corporation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `corporation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ticker` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `dateFounded` datetime DEFAULT NULL,
  `memberCount` int(11) NOT NULL DEFAULT '0',
  `isNPC` tinyint(1) NOT NULL DEFAULT '0',
  `factionId` int(11) DEFAULT NULL,
  `allianceId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `corporation___created` (`created`),
  KEY `corporation___updated` (`updated`),
  KEY `corporation___factionId` (`factionId`),
  KEY `corporation___allianceId` (`allianceId`),
  CONSTRAINT `fk_corporation___allianceId___alliance___id` FOREIGN KEY (`allianceId`) REFERENCES `alliance` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_corporation___factionId___faction___id` FOREIGN KEY (`factionId`) REFERENCES `faction` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corporation`
--

LOCK TABLES `corporation` WRITE;
/*!40000 ALTER TABLE `corporation` DISABLE KEYS */;
/*!40000 ALTER TABLE `corporation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dogma_attribute`
--

DROP TABLE IF EXISTS `dogma_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dogma_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `displayName` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `published` tinyint(1) DEFAULT NULL,
  `stackable` tinyint(1) DEFAULT NULL,
  `highIsGood` tinyint(1) DEFAULT NULL,
  `defaultValue` float NOT NULL DEFAULT '0',
  `iconId` int(11) DEFAULT NULL,
  `unitId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dogma_attribute___created` (`created`),
  KEY `dogma_attribute___updated` (`updated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dogma_attribute`
--

LOCK TABLES `dogma_attribute` WRITE;
/*!40000 ALTER TABLE `dogma_attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `dogma_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faction`
--

DROP TABLE IF EXISTS `faction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci,
  `sizeFactor` int(11) NOT NULL DEFAULT '0',
  `stationCount` int(11) NOT NULL DEFAULT '0',
  `stationSystemCount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `faction___created` (`created`),
  KEY `faction___updated` (`updated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faction`
--

LOCK TABLES `faction` WRITE;
/*!40000 ALTER TABLE `faction` DISABLE KEYS */;
/*!40000 ALTER TABLE `faction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faction_war_system`
--

DROP TABLE IF EXISTS `faction_war_system`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faction_war_system` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemId` int(11) DEFAULT NULL,
  `ownerFactionId` int(11) DEFAULT NULL,
  `occupierFactionId` int(11) DEFAULT NULL,
  `contested` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `victoryPoints` int(11) NOT NULL DEFAULT '0',
  `victoryPointsThreshold` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `faction_war_system___systemId` (`systemId`),
  KEY `faction_war_system___ownerFactionId` (`ownerFactionId`),
  KEY `faction_war_system___occupierFactionId` (`occupierFactionId`),
  CONSTRAINT `fk_faction_war_system___occupierFactionId___faction___id` FOREIGN KEY (`occupierFactionId`) REFERENCES `faction` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_faction_war_system___ownerFactionId___faction___id` FOREIGN KEY (`ownerFactionId`) REFERENCES `faction` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_faction_war_system___systemId___system___id` FOREIGN KEY (`systemId`) REFERENCES `system` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faction_war_system`
--

LOCK TABLES `faction_war_system` WRITE;
/*!40000 ALTER TABLE `faction_war_system` DISABLE KEYS */;
/*!40000 ALTER TABLE `faction_war_system` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `published` tinyint(1) NOT NULL DEFAULT '1',
  `categoryId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `group___created` (`created`),
  KEY `group___updated` (`updated`),
  KEY `group___published` (`published`),
  KEY `group___categoryId` (`categoryId`),
  CONSTRAINT `fk_group___categoryId___category___id` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planet`
--

DROP TABLE IF EXISTS `planet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `planet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `systemId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `x` bigint(20) NOT NULL DEFAULT '0',
  `y` bigint(20) NOT NULL DEFAULT '0',
  `z` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `planet___created` (`created`),
  KEY `planet___updated` (`updated`),
  KEY `planet___systemId` (`systemId`),
  KEY `planet___typeId` (`typeId`),
  CONSTRAINT `fk_planet___systemId___system___id` FOREIGN KEY (`systemId`) REFERENCES `system` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_planet___typeId___type___id` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planet`
--

LOCK TABLES `planet` WRITE;
/*!40000 ALTER TABLE `planet` DISABLE KEYS */;
/*!40000 ALTER TABLE `planet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `race`
--

DROP TABLE IF EXISTS `race`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `race` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci,
  `factionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `race___created` (`created`),
  KEY `race___updated` (`updated`),
  KEY `race___factionId` (`factionId`),
  CONSTRAINT `fk_race___factionId___faction___id` FOREIGN KEY (`factionId`) REFERENCES `faction` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `race`
--

LOCK TABLES `race` WRITE;
/*!40000 ALTER TABLE `race` DISABLE KEYS */;
/*!40000 ALTER TABLE `race` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `region___created` (`created`),
  KEY `region___updated` (`updated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sovereignty_map`
--

DROP TABLE IF EXISTS `sovereignty_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sovereignty_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemId` int(11) DEFAULT NULL,
  `factionId` int(11) DEFAULT NULL,
  `allianceId` int(11) DEFAULT NULL,
  `corporationId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sovereignty_map___systemId` (`systemId`),
  KEY `sovereignty_map___factionId` (`factionId`),
  KEY `sovereignty_map___allianceId` (`allianceId`),
  KEY `sovereignty_map___corporationId` (`corporationId`),
  CONSTRAINT `fk_sovereignty_map___allianceId___alliance___id` FOREIGN KEY (`allianceId`) REFERENCES `alliance` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_sovereignty_map___corporationId___corporation___id` FOREIGN KEY (`corporationId`) REFERENCES `corporation` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_sovereignty_map___factionId___faction___id` FOREIGN KEY (`factionId`) REFERENCES `faction` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_sovereignty_map___systemId___system___id` FOREIGN KEY (`systemId`) REFERENCES `system` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sovereignty_map`
--

LOCK TABLES `sovereignty_map` WRITE;
/*!40000 ALTER TABLE `sovereignty_map` DISABLE KEYS */;
/*!40000 ALTER TABLE `sovereignty_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `star`
--

DROP TABLE IF EXISTS `star`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `star` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `typeId` int(11) DEFAULT NULL,
  `age` bigint(20) DEFAULT NULL,
  `radius` bigint(20) DEFAULT NULL,
  `temperature` int(11) DEFAULT NULL,
  `luminosity` float DEFAULT NULL,
  `spectralClass` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `star___created` (`created`),
  KEY `star___updated` (`updated`),
  KEY `star___typeId` (`typeId`),
  CONSTRAINT `fk_star___typeId___type___id` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `star`
--

LOCK TABLES `star` WRITE;
/*!40000 ALTER TABLE `star` DISABLE KEYS */;
/*!40000 ALTER TABLE `star` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stargate`
--

DROP TABLE IF EXISTS `stargate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stargate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `systemId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `destinationSystemId` int(11) DEFAULT NULL,
  `x` bigint(20) NOT NULL DEFAULT '0',
  `y` bigint(20) NOT NULL DEFAULT '0',
  `z` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `stargate___systemId__destinationSystemId` (`systemId`,`destinationSystemId`),
  KEY `stargate___created` (`created`),
  KEY `stargate___updated` (`updated`),
  KEY `stargate___systemId` (`systemId`),
  KEY `stargate___typeId` (`typeId`),
  KEY `stargate___destinationSystemId` (`destinationSystemId`),
  CONSTRAINT `fk_stargate___destinationSystemId___system___id` FOREIGN KEY (`destinationSystemId`) REFERENCES `system` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_stargate___systemId___system___id` FOREIGN KEY (`systemId`) REFERENCES `system` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_stargate___typeId___type___id` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stargate`
--

LOCK TABLES `stargate` WRITE;
/*!40000 ALTER TABLE `stargate` DISABLE KEYS */;
/*!40000 ALTER TABLE `stargate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `station`
--

DROP TABLE IF EXISTS `station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `station` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `systemId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `corporationId` int(11) DEFAULT NULL,
  `raceId` int(11) DEFAULT NULL,
  `services` text COLLATE utf8mb4_unicode_ci,
  `x` bigint(20) NOT NULL DEFAULT '0',
  `y` bigint(20) NOT NULL DEFAULT '0',
  `z` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `station___created` (`created`),
  KEY `station___updated` (`updated`),
  KEY `station___systemId` (`systemId`),
  KEY `station___typeId` (`typeId`),
  KEY `station___corporationId` (`corporationId`),
  KEY `station___raceId` (`raceId`),
  CONSTRAINT `fk_station___corporationId___corporation___id` FOREIGN KEY (`corporationId`) REFERENCES `corporation` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_station___raceId___race___id` FOREIGN KEY (`raceId`) REFERENCES `race` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_station___systemId___system___id` FOREIGN KEY (`systemId`) REFERENCES `system` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_station___typeId___type___id` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `station`
--

LOCK TABLES `station` WRITE;
/*!40000 ALTER TABLE `station` DISABLE KEYS */;
/*!40000 ALTER TABLE `station` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `structure`
--

DROP TABLE IF EXISTS `structure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `structure` (
  `id` bigint(20) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `systemId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `structure___created` (`created`),
  KEY `structure___updated` (`updated`),
  KEY `structure___systemId` (`systemId`),
  KEY `structure___typeId` (`typeId`),
  CONSTRAINT `fk_structure___systemId___system___id` FOREIGN KEY (`systemId`) REFERENCES `system` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_structure___typeId___type___id` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `structure`
--

LOCK TABLES `structure` WRITE;
/*!40000 ALTER TABLE `structure` DISABLE KEYS */;
/*!40000 ALTER TABLE `structure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system`
--

DROP TABLE IF EXISTS `system`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `constellationId` int(11) DEFAULT NULL,
  `starId` int(11) DEFAULT NULL,
  `security` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trueSec` float NOT NULL DEFAULT '1',
  `securityStatus` decimal(18,6) NOT NULL DEFAULT '1.000000',
  `securityClass` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `effect` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `x` bigint(20) NOT NULL DEFAULT '0',
  `y` bigint(20) NOT NULL DEFAULT '0',
  `z` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `system___created` (`created`),
  KEY `system___updated` (`updated`),
  KEY `system___constellationId` (`constellationId`),
  KEY `system___starId` (`starId`),
  CONSTRAINT `fk_system___constellationId___constellation___id` FOREIGN KEY (`constellationId`) REFERENCES `constellation` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system___starId___star___id` FOREIGN KEY (`starId`) REFERENCES `star` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system`
--

LOCK TABLES `system` WRITE;
/*!40000 ALTER TABLE `system` DISABLE KEYS */;
/*!40000 ALTER TABLE `system` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_neighbour`
--

DROP TABLE IF EXISTS `system_neighbour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_neighbour` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `regionId` int(11) DEFAULT NULL,
  `constellationId` int(11) DEFAULT NULL,
  `systemId` int(11) DEFAULT NULL,
  `systemName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `jumpNodes` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `trueSec` decimal(18,6) NOT NULL DEFAULT '0.000000',
  PRIMARY KEY (`id`),
  UNIQUE KEY `system_neighbour___systemId` (`systemId`),
  KEY `system_neighbour___regionId` (`regionId`),
  KEY `system_neighbour___constellationId` (`constellationId`),
  CONSTRAINT `fk_system_neighbour___constellationId___constellation___id` FOREIGN KEY (`constellationId`) REFERENCES `constellation` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system_neighbour___regionId___region___id` FOREIGN KEY (`regionId`) REFERENCES `region` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system_neighbour___systemId___system___id` FOREIGN KEY (`systemId`) REFERENCES `system` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_neighbour`
--

LOCK TABLES `system_neighbour` WRITE;
/*!40000 ALTER TABLE `system_neighbour` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_neighbour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_static`
--

DROP TABLE IF EXISTS `system_static`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_static` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `system_static___systemId__typeId` (`systemId`,`typeId`),
  KEY `system_static___systemId` (`systemId`),
  KEY `system_static___typeId` (`typeId`),
  CONSTRAINT `fk_system_static___systemId___system___id` FOREIGN KEY (`systemId`) REFERENCES `system` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system_static___typeId___type___id` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_static`
--

LOCK TABLES `system_static` WRITE;
/*!40000 ALTER TABLE `system_static` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_static` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci,
  `published` tinyint(1) NOT NULL DEFAULT '1',
  `radius` float NOT NULL DEFAULT '0',
  `volume` float NOT NULL DEFAULT '0',
  `capacity` float NOT NULL DEFAULT '0',
  `mass` float NOT NULL DEFAULT '0',
  `groupId` int(11) DEFAULT NULL,
  `marketGroupId` int(11) NOT NULL DEFAULT '0',
  `packagedVolume` float NOT NULL DEFAULT '0',
  `portionSize` int(11) NOT NULL DEFAULT '0',
  `graphicId` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `type___created` (`created`),
  KEY `type___updated` (`updated`),
  KEY `type___published` (`published`),
  KEY `type___groupId` (`groupId`),
  KEY `type___marketGroupId` (`marketGroupId`),
  KEY `type___graphicId` (`graphicId`),
  CONSTRAINT `fk_type___groupId___group___id` FOREIGN KEY (`groupId`) REFERENCES `group` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_attribute`
--

DROP TABLE IF EXISTS `type_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeId` int(11) DEFAULT NULL,
  `attributeId` int(11) DEFAULT NULL,
  `value` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `type_attribute___typeId__attributeId` (`typeId`,`attributeId`),
  KEY `type_attribute___typeId` (`typeId`),
  KEY `type_attribute___attributeId` (`attributeId`),
  CONSTRAINT `fk_type_attribute___attributeId___dogma_attribute___id` FOREIGN KEY (`attributeId`) REFERENCES `dogma_attribute` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_type_attribute___typeId___type___id` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_attribute`
--

LOCK TABLES `type_attribute` WRITE;
/*!40000 ALTER TABLE `type_attribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `type_attribute` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-08 13:20:34
