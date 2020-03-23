-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: pathfinder
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
-- Table structure for table `activity_log`
--

DROP TABLE IF EXISTS `activity_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activity_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `year` smallint(6) NOT NULL DEFAULT '2020',
  `week` tinyint(4) NOT NULL DEFAULT '1',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `characterId` int(11) DEFAULT NULL,
  `mapId` int(11) DEFAULT NULL,
  `mapCreate` smallint(6) NOT NULL DEFAULT '0',
  `mapUpdate` smallint(6) NOT NULL DEFAULT '0',
  `mapDelete` smallint(6) NOT NULL DEFAULT '0',
  `systemCreate` smallint(6) NOT NULL DEFAULT '0',
  `systemUpdate` smallint(6) NOT NULL DEFAULT '0',
  `systemDelete` smallint(6) NOT NULL DEFAULT '0',
  `connectionCreate` smallint(6) NOT NULL DEFAULT '0',
  `connectionUpdate` smallint(6) NOT NULL DEFAULT '0',
  `connectionDelete` smallint(6) NOT NULL DEFAULT '0',
  `signatureCreate` smallint(6) NOT NULL DEFAULT '0',
  `signatureUpdate` smallint(6) NOT NULL DEFAULT '0',
  `signatureDelete` smallint(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `activity_log___year__week__characterId__mapId` (`year`,`week`,`characterId`,`mapId`),
  KEY `activity_log___created` (`created`),
  KEY `activity_log___updated` (`updated`),
  KEY `activity_log___year` (`year`),
  KEY `activity_log___week` (`week`),
  KEY `activity_log___active` (`active`),
  KEY `activity_log___characterId` (`characterId`),
  KEY `activity_log___mapId` (`mapId`),
  KEY `activity_log___year__week__characterId` (`year`,`week`,`characterId`),
  CONSTRAINT `fk_activity_log___characterId___character___id` FOREIGN KEY (`characterId`) REFERENCES `character` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_activity_log___mapId___map___id` FOREIGN KEY (`mapId`) REFERENCES `map` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ticker` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `shared` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `alliance___created` (`created`),
  KEY `alliance___updated` (`updated`),
  KEY `alliance___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=99004014 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `alliance_map`
--

DROP TABLE IF EXISTS `alliance_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alliance_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `allianceId` int(11) DEFAULT NULL,
  `mapId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `alliance_map___allianceId__mapId` (`allianceId`,`mapId`),
  KEY `alliance_map___created` (`created`),
  KEY `alliance_map___updated` (`updated`),
  KEY `alliance_map___active` (`active`),
  KEY `alliance_map___allianceId` (`allianceId`),
  KEY `alliance_map___mapId` (`mapId`),
  CONSTRAINT `fk_alliance_map___allianceId___alliance___id` FOREIGN KEY (`allianceId`) REFERENCES `alliance` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_alliance_map___mapId___map___id` FOREIGN KEY (`mapId`) REFERENCES `map` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `character`
--

DROP TABLE IF EXISTS `character`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `character` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `lastLogin` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ownerHash` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `esiAccessToken` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `esiAccessTokenExpires` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `esiRefreshToken` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `esiScopes` text COLLATE utf8mb4_unicode_ci,
  `corporationId` int(11) DEFAULT NULL,
  `allianceId` int(11) DEFAULT NULL,
  `roleId` int(11) NOT NULL DEFAULT '1',
  `cloneLocationId` bigint(20) DEFAULT NULL,
  `cloneLocationType` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `kicked` timestamp NULL DEFAULT NULL,
  `banned` timestamp NULL DEFAULT NULL,
  `shared` tinyint(1) NOT NULL DEFAULT '0',
  `logLocation` tinyint(1) NOT NULL DEFAULT '1',
  `selectLocation` tinyint(1) NOT NULL DEFAULT '0',
  `securityStatus` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `character___created` (`created`),
  KEY `character___updated` (`updated`),
  KEY `character___lastLogin` (`lastLogin`),
  KEY `character___active` (`active`),
  KEY `character___esiAccessTokenExpires` (`esiAccessTokenExpires`),
  KEY `character___corporationId` (`corporationId`),
  KEY `character___allianceId` (`allianceId`),
  KEY `character___roleId` (`roleId`),
  KEY `character___cloneLocationId` (`cloneLocationId`),
  KEY `character___kicked` (`kicked`),
  KEY `character___banned` (`banned`),
  CONSTRAINT `fk_character___allianceId___alliance___id` FOREIGN KEY (`allianceId`) REFERENCES `alliance` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_character___corporationId___corporation___id` FOREIGN KEY (`corporationId`) REFERENCES `corporation` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_character___roleId___role___id` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=94156408 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `character_authentication`
--

DROP TABLE IF EXISTS `character_authentication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `character_authentication` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `characterId` int(11) DEFAULT NULL,
  `selector` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `token` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `expires` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `character_authentication___selector` (`selector`),
  KEY `character_authentication___created` (`created`),
  KEY `character_authentication___updated` (`updated`),
  KEY `character_authentication___active` (`active`),
  KEY `character_authentication___characterId` (`characterId`),
  KEY `character_authentication___token` (`token`),
  KEY `character_authentication___expires` (`expires`),
  CONSTRAINT `fk_character_authentication___characterId___character___id` FOREIGN KEY (`characterId`) REFERENCES `character` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `character_log`
--

DROP TABLE IF EXISTS `character_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `character_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `characterId` int(11) DEFAULT NULL,
  `systemId` int(11) DEFAULT NULL,
  `systemName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `shipTypeId` int(11) DEFAULT NULL,
  `shipTypeName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `shipId` bigint(20) DEFAULT NULL,
  `shipMass` float NOT NULL DEFAULT '0',
  `shipName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `stationId` int(11) DEFAULT NULL,
  `stationName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `structureTypeId` int(11) DEFAULT NULL,
  `structureTypeName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `structureId` bigint(20) DEFAULT NULL,
  `structureName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `character_log___characterId` (`characterId`),
  KEY `character_log___created` (`created`),
  KEY `character_log___updated` (`updated`),
  KEY `character_log___active` (`active`),
  KEY `character_log___systemId` (`systemId`),
  KEY `character_log___shipTypeId` (`shipTypeId`),
  KEY `character_log___shipId` (`shipId`),
  KEY `character_log___stationId` (`stationId`),
  KEY `character_log___structureTypeId` (`structureTypeId`),
  KEY `character_log___structureId` (`structureId`),
  CONSTRAINT `fk_character_log___characterId___character___id` FOREIGN KEY (`characterId`) REFERENCES `character` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `character_map`
--

DROP TABLE IF EXISTS `character_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `character_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `characterId` int(11) DEFAULT NULL,
  `mapId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `character_map___characterId__mapId` (`characterId`,`mapId`),
  KEY `character_map___created` (`created`),
  KEY `character_map___updated` (`updated`),
  KEY `character_map___active` (`active`),
  KEY `character_map___characterId` (`characterId`),
  KEY `character_map___mapId` (`mapId`),
  CONSTRAINT `fk_character_map___characterId___character___id` FOREIGN KEY (`characterId`) REFERENCES `character` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_character_map___mapId___map___id` FOREIGN KEY (`mapId`) REFERENCES `map` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `character_status`
--

DROP TABLE IF EXISTS `character_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `character_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `class` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `character_status___created` (`created`),
  KEY `character_status___updated` (`updated`),
  KEY `character_status___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `connection`
--

DROP TABLE IF EXISTS `connection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `connection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdCharacterId` int(11) DEFAULT NULL,
  `updatedCharacterId` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `mapId` int(11) DEFAULT NULL,
  `source` int(11) DEFAULT NULL,
  `target` int(11) DEFAULT NULL,
  `scope` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `type` text COLLATE utf8mb4_unicode_ci,
  `sourceEndpointType` text COLLATE utf8mb4_unicode_ci,
  `targetEndpointType` text COLLATE utf8mb4_unicode_ci,
  `eolUpdated` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `connection___created` (`created`),
  KEY `connection___updated` (`updated`),
  KEY `connection___createdCharacterId` (`createdCharacterId`),
  KEY `connection___updatedCharacterId` (`updatedCharacterId`),
  KEY `connection___active` (`active`),
  KEY `connection___mapId` (`mapId`),
  KEY `connection___source` (`source`),
  KEY `connection___target` (`target`),
  KEY `connection___source__target__scope` (`source`,`target`,`scope`),
  CONSTRAINT `fk_connection___createdCharacterId___character___id` FOREIGN KEY (`createdCharacterId`) REFERENCES `character` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_connection___mapId___map___id` FOREIGN KEY (`mapId`) REFERENCES `map` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_connection___source___system___id` FOREIGN KEY (`source`) REFERENCES `system` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_connection___target___system___id` FOREIGN KEY (`target`) REFERENCES `system` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_connection___updatedCharacterId___character___id` FOREIGN KEY (`updatedCharacterId`) REFERENCES `character` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `connection_log`
--

DROP TABLE IF EXISTS `connection_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `connection_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `connectionId` int(11) DEFAULT NULL,
  `record` tinyint(1) NOT NULL DEFAULT '1',
  `shipTypeId` int(11) DEFAULT NULL,
  `shipTypeName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `shipMass` float NOT NULL DEFAULT '0',
  `characterId` int(11) DEFAULT NULL,
  `characterName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `connection_log___created` (`created`),
  KEY `connection_log___updated` (`updated`),
  KEY `connection_log___active` (`active`),
  KEY `connection_log___connectionId` (`connectionId`),
  KEY `connection_log___record` (`record`),
  KEY `connection_log___shipTypeId` (`shipTypeId`),
  KEY `connection_log___characterId` (`characterId`),
  CONSTRAINT `fk_connection_log___connectionId___connection___id` FOREIGN KEY (`connectionId`) REFERENCES `connection` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `connection_scope`
--

DROP TABLE IF EXISTS `connection_scope`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `connection_scope` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `label` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `connectorDefinition` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `connection_scope___created` (`created`),
  KEY `connection_scope___updated` (`updated`),
  KEY `connection_scope___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ticker` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `memberCount` int(11) NOT NULL DEFAULT '0',
  `shared` tinyint(1) NOT NULL DEFAULT '0',
  `isNPC` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `corporation___created` (`created`),
  KEY `corporation___updated` (`updated`),
  KEY `corporation___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=98469413 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `corporation_map`
--

DROP TABLE IF EXISTS `corporation_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `corporation_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `corporationId` int(11) DEFAULT NULL,
  `mapId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `corporation_map___corporationId__mapId` (`corporationId`,`mapId`),
  KEY `corporation_map___created` (`created`),
  KEY `corporation_map___updated` (`updated`),
  KEY `corporation_map___active` (`active`),
  KEY `corporation_map___corporationId` (`corporationId`),
  KEY `corporation_map___mapId` (`mapId`),
  CONSTRAINT `fk_corporation_map___corporationId___corporation___id` FOREIGN KEY (`corporationId`) REFERENCES `corporation` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_corporation_map___mapId___map___id` FOREIGN KEY (`mapId`) REFERENCES `map` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `corporation_right`
--

DROP TABLE IF EXISTS `corporation_right`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `corporation_right` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `corporationId` int(11) DEFAULT NULL,
  `rightId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `corporation_right___corporationId__rightId` (`corporationId`,`rightId`),
  KEY `corporation_right___created` (`created`),
  KEY `corporation_right___updated` (`updated`),
  KEY `corporation_right___active` (`active`),
  KEY `corporation_right___corporationId` (`corporationId`),
  KEY `corporation_right___rightId` (`rightId`),
  KEY `corporation_right___roleId` (`roleId`),
  CONSTRAINT `fk_corporation_right___corporationId___corporation___id` FOREIGN KEY (`corporationId`) REFERENCES `corporation` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_corporation_right___rightId___right___id` FOREIGN KEY (`rightId`) REFERENCES `right` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_corporation_right___roleId___role___id` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `corporation_structure`
--

DROP TABLE IF EXISTS `corporation_structure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `corporation_structure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `corporationId` int(11) DEFAULT NULL,
  `structureId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `corporation_structure___corporationId__structureId` (`corporationId`,`structureId`),
  KEY `corporation_structure___created` (`created`),
  KEY `corporation_structure___updated` (`updated`),
  KEY `corporation_structure___active` (`active`),
  KEY `corporation_structure___corporationId` (`corporationId`),
  KEY `corporation_structure___structureId` (`structureId`),
  CONSTRAINT `fk_corporation_structure___corporationId___corporation___id` FOREIGN KEY (`corporationId`) REFERENCES `corporation` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_corporation_structure___structureId___structure___id` FOREIGN KEY (`structureId`) REFERENCES `structure` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cron`
--

DROP TABLE IF EXISTS `cron`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cron` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `handler` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `expr` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `isPaused` tinyint(1) NOT NULL DEFAULT '0',
  `lastExecStart` decimal(18,6) DEFAULT NULL,
  `lastExecEnd` decimal(18,6) DEFAULT NULL,
  `lastExecMemPeak` float DEFAULT NULL,
  `lastExecState` text COLLATE utf8mb4_unicode_ci,
  `history` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cron___name` (`name`),
  UNIQUE KEY `cron___handler` (`handler`),
  KEY `cron___created` (`created`),
  KEY `cron___updated` (`updated`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `map`
--

DROP TABLE IF EXISTS `map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdCharacterId` int(11) DEFAULT NULL,
  `updatedCharacterId` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `scopeId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `icon` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `deleteExpiredConnections` tinyint(1) NOT NULL DEFAULT '1',
  `deleteEolConnections` tinyint(1) NOT NULL DEFAULT '1',
  `persistentAliases` tinyint(1) NOT NULL DEFAULT '1',
  `persistentSignatures` tinyint(1) NOT NULL DEFAULT '1',
  `trackAbyssalJumps` tinyint(1) NOT NULL DEFAULT '1',
  `logActivity` tinyint(1) NOT NULL DEFAULT '1',
  `logHistory` tinyint(1) NOT NULL DEFAULT '0',
  `slackWebHookURL` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `slackUsername` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `slackIcon` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `slackChannelHistory` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `slackChannelRally` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `discordUsername` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `discordWebHookURLRally` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `discordWebHookURLHistory` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `map___created` (`created`),
  KEY `map___updated` (`updated`),
  KEY `map___createdCharacterId` (`createdCharacterId`),
  KEY `map___updatedCharacterId` (`updatedCharacterId`),
  KEY `map___active` (`active`),
  KEY `map___scopeId` (`scopeId`),
  KEY `map___typeId` (`typeId`),
  CONSTRAINT `fk_map___createdCharacterId___character___id` FOREIGN KEY (`createdCharacterId`) REFERENCES `character` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_map___scopeId___map_scope___id` FOREIGN KEY (`scopeId`) REFERENCES `map_scope` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_map___typeId___map_type___id` FOREIGN KEY (`typeId`) REFERENCES `map_type` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_map___updatedCharacterId___character___id` FOREIGN KEY (`updatedCharacterId`) REFERENCES `character` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `map_scope`
--

DROP TABLE IF EXISTS `map_scope`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `map_scope` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `label` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `map_scope___created` (`created`),
  KEY `map_scope___updated` (`updated`),
  KEY `map_scope___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `map_type`
--

DROP TABLE IF EXISTS `map_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `map_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `label` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `class` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `classTab` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `map_type___created` (`created`),
  KEY `map_type___updated` (`updated`),
  KEY `map_type___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `right`
--

DROP TABLE IF EXISTS `right`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `right` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `label` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `right___name` (`name`),
  KEY `right___created` (`created`),
  KEY `right___updated` (`updated`),
  KEY `right___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `label` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `level` int(11) DEFAULT NULL,
  `style` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `role___created` (`created`),
  KEY `role___updated` (`updated`),
  KEY `role___active` (`active`),
  KEY `role___level` (`level`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(255) NOT NULL,
  `data` mediumtext,
  `ip` varchar(45) DEFAULT NULL,
  `agent` varchar(300) DEFAULT NULL,
  `stamp` int(11) DEFAULT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `structure`
--

DROP TABLE IF EXISTS `structure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `structure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `structureId` int(11) DEFAULT NULL,
  `corporationId` int(11) DEFAULT NULL,
  `systemId` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `structure___created` (`created`),
  KEY `structure___updated` (`updated`),
  KEY `structure___active` (`active`),
  KEY `structure___structureId` (`structureId`),
  KEY `structure___corporationId` (`corporationId`),
  KEY `structure___systemId` (`systemId`),
  KEY `structure___statusId` (`statusId`),
  CONSTRAINT `fk_structure___corporationId___corporation___id` FOREIGN KEY (`corporationId`) REFERENCES `corporation` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_structure___statusId___structure_status___id` FOREIGN KEY (`statusId`) REFERENCES `structure_status` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `structure_status`
--

DROP TABLE IF EXISTS `structure_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `structure_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `label` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `class` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `structure_status___created` (`created`),
  KEY `structure_status___updated` (`updated`),
  KEY `structure_status___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `createdCharacterId` int(11) DEFAULT NULL,
  `updatedCharacterId` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `mapId` int(11) DEFAULT NULL,
  `systemId` int(11) DEFAULT NULL,
  `alias` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `typeId` int(11) DEFAULT NULL,
  `statusId` int(11) NOT NULL DEFAULT '1',
  `locked` tinyint(1) NOT NULL DEFAULT '0',
  `rallyUpdated` timestamp NULL DEFAULT NULL,
  `rallyPoke` tinyint(1) NOT NULL DEFAULT '0',
  `description` text COLLATE utf8mb4_unicode_ci,
  `posX` int(11) NOT NULL DEFAULT '0',
  `posY` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `system___mapId__systemId` (`mapId`,`systemId`),
  KEY `system___created` (`created`),
  KEY `system___updated` (`updated`),
  KEY `system___createdCharacterId` (`createdCharacterId`),
  KEY `system___updatedCharacterId` (`updatedCharacterId`),
  KEY `system___active` (`active`),
  KEY `system___mapId` (`mapId`),
  KEY `system___systemId` (`systemId`),
  KEY `system___typeId` (`typeId`),
  KEY `system___statusId` (`statusId`),
  CONSTRAINT `fk_system___createdCharacterId___character___id` FOREIGN KEY (`createdCharacterId`) REFERENCES `character` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system___mapId___map___id` FOREIGN KEY (`mapId`) REFERENCES `map` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system___statusId___system_status___id` FOREIGN KEY (`statusId`) REFERENCES `system_status` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system___typeId___system_type___id` FOREIGN KEY (`typeId`) REFERENCES `system_type` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system___updatedCharacterId___character___id` FOREIGN KEY (`updatedCharacterId`) REFERENCES `character` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_jumps`
--

DROP TABLE IF EXISTS `system_jumps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_jumps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `systemId` int(11) DEFAULT NULL,
  `lastUpdatedValue` int(11) NOT NULL DEFAULT '1',
  `value1` int(11) NOT NULL DEFAULT '0',
  `value2` int(11) NOT NULL DEFAULT '0',
  `value3` int(11) NOT NULL DEFAULT '0',
  `value4` int(11) NOT NULL DEFAULT '0',
  `value5` int(11) NOT NULL DEFAULT '0',
  `value6` int(11) NOT NULL DEFAULT '0',
  `value7` int(11) NOT NULL DEFAULT '0',
  `value8` int(11) NOT NULL DEFAULT '0',
  `value9` int(11) NOT NULL DEFAULT '0',
  `value10` int(11) NOT NULL DEFAULT '0',
  `value11` int(11) NOT NULL DEFAULT '0',
  `value12` int(11) NOT NULL DEFAULT '0',
  `value13` int(11) NOT NULL DEFAULT '0',
  `value14` int(11) NOT NULL DEFAULT '0',
  `value15` int(11) NOT NULL DEFAULT '0',
  `value16` int(11) NOT NULL DEFAULT '0',
  `value17` int(11) NOT NULL DEFAULT '0',
  `value18` int(11) NOT NULL DEFAULT '0',
  `value19` int(11) NOT NULL DEFAULT '0',
  `value20` int(11) NOT NULL DEFAULT '0',
  `value21` int(11) NOT NULL DEFAULT '0',
  `value22` int(11) NOT NULL DEFAULT '0',
  `value23` int(11) NOT NULL DEFAULT '0',
  `value24` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `system_jumps___systemId` (`systemId`),
  KEY `system_jumps___created` (`created`),
  KEY `system_jumps___updated` (`updated`),
  KEY `system_jumps___active` (`active`),
  KEY `system_jumps___lastUpdatedValue` (`lastUpdatedValue`)
) ENGINE=InnoDB AUTO_INCREMENT=27156 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_kills_factions`
--

DROP TABLE IF EXISTS `system_kills_factions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_kills_factions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `systemId` int(11) DEFAULT NULL,
  `lastUpdatedValue` int(11) NOT NULL DEFAULT '1',
  `value1` int(11) NOT NULL DEFAULT '0',
  `value2` int(11) NOT NULL DEFAULT '0',
  `value3` int(11) NOT NULL DEFAULT '0',
  `value4` int(11) NOT NULL DEFAULT '0',
  `value5` int(11) NOT NULL DEFAULT '0',
  `value6` int(11) NOT NULL DEFAULT '0',
  `value7` int(11) NOT NULL DEFAULT '0',
  `value8` int(11) NOT NULL DEFAULT '0',
  `value9` int(11) NOT NULL DEFAULT '0',
  `value10` int(11) NOT NULL DEFAULT '0',
  `value11` int(11) NOT NULL DEFAULT '0',
  `value12` int(11) NOT NULL DEFAULT '0',
  `value13` int(11) NOT NULL DEFAULT '0',
  `value14` int(11) NOT NULL DEFAULT '0',
  `value15` int(11) NOT NULL DEFAULT '0',
  `value16` int(11) NOT NULL DEFAULT '0',
  `value17` int(11) NOT NULL DEFAULT '0',
  `value18` int(11) NOT NULL DEFAULT '0',
  `value19` int(11) NOT NULL DEFAULT '0',
  `value20` int(11) NOT NULL DEFAULT '0',
  `value21` int(11) NOT NULL DEFAULT '0',
  `value22` int(11) NOT NULL DEFAULT '0',
  `value23` int(11) NOT NULL DEFAULT '0',
  `value24` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `system_kills_factions___systemId` (`systemId`),
  KEY `system_kills_factions___created` (`created`),
  KEY `system_kills_factions___updated` (`updated`),
  KEY `system_kills_factions___active` (`active`),
  KEY `system_kills_factions___lastUpdatedValue` (`lastUpdatedValue`)
) ENGINE=InnoDB AUTO_INCREMENT=27156 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_kills_pods`
--

DROP TABLE IF EXISTS `system_kills_pods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_kills_pods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `systemId` int(11) DEFAULT NULL,
  `lastUpdatedValue` int(11) NOT NULL DEFAULT '1',
  `value1` int(11) NOT NULL DEFAULT '0',
  `value2` int(11) NOT NULL DEFAULT '0',
  `value3` int(11) NOT NULL DEFAULT '0',
  `value4` int(11) NOT NULL DEFAULT '0',
  `value5` int(11) NOT NULL DEFAULT '0',
  `value6` int(11) NOT NULL DEFAULT '0',
  `value7` int(11) NOT NULL DEFAULT '0',
  `value8` int(11) NOT NULL DEFAULT '0',
  `value9` int(11) NOT NULL DEFAULT '0',
  `value10` int(11) NOT NULL DEFAULT '0',
  `value11` int(11) NOT NULL DEFAULT '0',
  `value12` int(11) NOT NULL DEFAULT '0',
  `value13` int(11) NOT NULL DEFAULT '0',
  `value14` int(11) NOT NULL DEFAULT '0',
  `value15` int(11) NOT NULL DEFAULT '0',
  `value16` int(11) NOT NULL DEFAULT '0',
  `value17` int(11) NOT NULL DEFAULT '0',
  `value18` int(11) NOT NULL DEFAULT '0',
  `value19` int(11) NOT NULL DEFAULT '0',
  `value20` int(11) NOT NULL DEFAULT '0',
  `value21` int(11) NOT NULL DEFAULT '0',
  `value22` int(11) NOT NULL DEFAULT '0',
  `value23` int(11) NOT NULL DEFAULT '0',
  `value24` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `system_kills_pods___systemId` (`systemId`),
  KEY `system_kills_pods___created` (`created`),
  KEY `system_kills_pods___updated` (`updated`),
  KEY `system_kills_pods___active` (`active`),
  KEY `system_kills_pods___lastUpdatedValue` (`lastUpdatedValue`)
) ENGINE=InnoDB AUTO_INCREMENT=27156 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_kills_ships`
--

DROP TABLE IF EXISTS `system_kills_ships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_kills_ships` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `systemId` int(11) DEFAULT NULL,
  `lastUpdatedValue` int(11) NOT NULL DEFAULT '1',
  `value1` int(11) NOT NULL DEFAULT '0',
  `value2` int(11) NOT NULL DEFAULT '0',
  `value3` int(11) NOT NULL DEFAULT '0',
  `value4` int(11) NOT NULL DEFAULT '0',
  `value5` int(11) NOT NULL DEFAULT '0',
  `value6` int(11) NOT NULL DEFAULT '0',
  `value7` int(11) NOT NULL DEFAULT '0',
  `value8` int(11) NOT NULL DEFAULT '0',
  `value9` int(11) NOT NULL DEFAULT '0',
  `value10` int(11) NOT NULL DEFAULT '0',
  `value11` int(11) NOT NULL DEFAULT '0',
  `value12` int(11) NOT NULL DEFAULT '0',
  `value13` int(11) NOT NULL DEFAULT '0',
  `value14` int(11) NOT NULL DEFAULT '0',
  `value15` int(11) NOT NULL DEFAULT '0',
  `value16` int(11) NOT NULL DEFAULT '0',
  `value17` int(11) NOT NULL DEFAULT '0',
  `value18` int(11) NOT NULL DEFAULT '0',
  `value19` int(11) NOT NULL DEFAULT '0',
  `value20` int(11) NOT NULL DEFAULT '0',
  `value21` int(11) NOT NULL DEFAULT '0',
  `value22` int(11) NOT NULL DEFAULT '0',
  `value23` int(11) NOT NULL DEFAULT '0',
  `value24` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `system_kills_ships___systemId` (`systemId`),
  KEY `system_kills_ships___created` (`created`),
  KEY `system_kills_ships___updated` (`updated`),
  KEY `system_kills_ships___active` (`active`),
  KEY `system_kills_ships___lastUpdatedValue` (`lastUpdatedValue`)
) ENGINE=InnoDB AUTO_INCREMENT=27156 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_signature`
--

DROP TABLE IF EXISTS `system_signature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_signature` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdCharacterId` int(11) DEFAULT NULL,
  `updatedCharacterId` int(11) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `systemId` int(11) DEFAULT NULL,
  `groupId` int(11) NOT NULL DEFAULT '0',
  `typeId` int(11) NOT NULL DEFAULT '0',
  `connectionId` int(11) DEFAULT NULL,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `system_signature___created` (`created`),
  KEY `system_signature___updated` (`updated`),
  KEY `system_signature___createdCharacterId` (`createdCharacterId`),
  KEY `system_signature___updatedCharacterId` (`updatedCharacterId`),
  KEY `system_signature___active` (`active`),
  KEY `system_signature___systemId` (`systemId`),
  KEY `system_signature___groupId` (`groupId`),
  KEY `system_signature___typeId` (`typeId`),
  KEY `system_signature___connectionId` (`connectionId`),
  KEY `system_signature___systemId__typeId__groupId` (`systemId`,`typeId`,`groupId`),
  CONSTRAINT `fk_system_signature___connectionId___connection___id` FOREIGN KEY (`connectionId`) REFERENCES `connection` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system_signature___createdCharacterId___character___id` FOREIGN KEY (`createdCharacterId`) REFERENCES `character` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system_signature___systemId___system___id` FOREIGN KEY (`systemId`) REFERENCES `system` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_system_signature___updatedCharacterId___character___id` FOREIGN KEY (`updatedCharacterId`) REFERENCES `character` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_status`
--

DROP TABLE IF EXISTS `system_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `label` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `class` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `system_status___created` (`created`),
  KEY `system_status___updated` (`updated`),
  KEY `system_status___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_type`
--

DROP TABLE IF EXISTS `system_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `system_type___created` (`created`),
  KEY `system_type___updated` (`updated`),
  KEY `system_type___active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `user___created` (`created`),
  KEY `user___updated` (`updated`),
  KEY `user___active` (`active`),
  KEY `user___name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_character`
--

DROP TABLE IF EXISTS `user_character`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_character` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `userId` int(11) DEFAULT NULL,
  `characterId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_character___characterId` (`characterId`),
  UNIQUE KEY `user_character___userId__characterId` (`userId`,`characterId`),
  KEY `user_character___created` (`created`),
  KEY `user_character___updated` (`updated`),
  KEY `user_character___active` (`active`),
  KEY `user_character___userId` (`userId`),
  CONSTRAINT `fk_user_character___characterId___character___id` FOREIGN KEY (`characterId`) REFERENCES `character` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_user_character___userId___user___id` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-22 22:53:24
