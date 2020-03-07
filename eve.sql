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
  KEY `alliance_created` (`created`),
  KEY `alliance_updated` (`updated`),
  KEY `alliance_factionId` (`factionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `alliance` WRITE;
/*!40000 ALTER TABLE `alliance` DISABLE KEYS */;
/*!40000 ALTER TABLE `alliance` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `category_created` (`created`),
  KEY `category_updated` (`updated`),
  KEY `category_published` (`published`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `constellation_created` (`created`),
  KEY `constellation_updated` (`updated`),
  KEY `constellation_regionId` (`regionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `constellation` WRITE;
/*!40000 ALTER TABLE `constellation` DISABLE KEYS */;
/*!40000 ALTER TABLE `constellation` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `corporation_created` (`created`),
  KEY `corporation_updated` (`updated`),
  KEY `corporation_factionId` (`factionId`),
  KEY `corporation_allianceId` (`allianceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `corporation` WRITE;
/*!40000 ALTER TABLE `corporation` DISABLE KEYS */;
/*!40000 ALTER TABLE `corporation` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `dogmaAttribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dogmaAttribute` (
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
  KEY `dogmaAttribute_created` (`created`),
  KEY `dogmaAttribute_updated` (`updated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `dogmaAttribute` WRITE;
/*!40000 ALTER TABLE `dogmaAttribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `dogmaAttribute` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `faction_created` (`created`),
  KEY `faction_updated` (`updated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `faction` WRITE;
/*!40000 ALTER TABLE `faction` DISABLE KEYS */;
/*!40000 ALTER TABLE `faction` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `factionWarSystem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `factionWarSystem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemId` int(11) DEFAULT NULL,
  `ownerFactionId` int(11) DEFAULT NULL,
  `occupierFactionId` int(11) DEFAULT NULL,
  `contested` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `victoryPoints` int(11) NOT NULL DEFAULT '0',
  `victoryPointsThreshold` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `factionWarSystem_systemId` (`systemId`),
  KEY `factionWarSystem_ownerFactionId` (`ownerFactionId`),
  KEY `factionWarSystem_occupierFactionId` (`occupierFactionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `factionWarSystem` WRITE;
/*!40000 ALTER TABLE `factionWarSystem` DISABLE KEYS */;
/*!40000 ALTER TABLE `factionWarSystem` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `group_created` (`created`),
  KEY `group_updated` (`updated`),
  KEY `group_published` (`published`),
  KEY `group_categoryId` (`categoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `planet_created` (`created`),
  KEY `planet_updated` (`updated`),
  KEY `planet_systemId` (`systemId`),
  KEY `planet_typeId` (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `planet` WRITE;
/*!40000 ALTER TABLE `planet` DISABLE KEYS */;
/*!40000 ALTER TABLE `planet` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `race_created` (`created`),
  KEY `race_updated` (`updated`),
  KEY `race_factionId` (`factionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `race` WRITE;
/*!40000 ALTER TABLE `race` DISABLE KEYS */;
/*!40000 ALTER TABLE `race` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `region_created` (`created`),
  KEY `region_updated` (`updated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `sovereigntyMap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sovereigntyMap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemId` int(11) DEFAULT NULL,
  `factionId` int(11) DEFAULT NULL,
  `allianceId` int(11) DEFAULT NULL,
  `corporationId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sovereigntyMap_systemId` (`systemId`),
  KEY `sovereigntyMap_factionId` (`factionId`),
  KEY `sovereigntyMap_allianceId` (`allianceId`),
  KEY `sovereigntyMap_corporationId` (`corporationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `sovereigntyMap` WRITE;
/*!40000 ALTER TABLE `sovereigntyMap` DISABLE KEYS */;
/*!40000 ALTER TABLE `sovereigntyMap` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `star_created` (`created`),
  KEY `star_updated` (`updated`),
  KEY `star_typeId` (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `star` WRITE;
/*!40000 ALTER TABLE `star` DISABLE KEYS */;
/*!40000 ALTER TABLE `star` ENABLE KEYS */;
UNLOCK TABLES;


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
  UNIQUE KEY `stargate_systemId__destinationSystemId` (`systemId`,`destinationSystemId`),
  KEY `stargate_created` (`created`),
  KEY `stargate_updated` (`updated`),
  KEY `stargate_systemId` (`systemId`),
  KEY `stargate_typeId` (`typeId`),
  KEY `stargate_destinationSystemId` (`destinationSystemId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `stargate` WRITE;
/*!40000 ALTER TABLE `stargate` DISABLE KEYS */;
/*!40000 ALTER TABLE `stargate` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `station_created` (`created`),
  KEY `station_updated` (`updated`),
  KEY `station_systemId` (`systemId`),
  KEY `station_typeId` (`typeId`),
  KEY `station_corporationId` (`corporationId`),
  KEY `station_raceId` (`raceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `station` WRITE;
/*!40000 ALTER TABLE `station` DISABLE KEYS */;
/*!40000 ALTER TABLE `station` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `structure_created` (`created`),
  KEY `structure_updated` (`updated`),
  KEY `structure_systemId` (`systemId`),
  KEY `structure_typeId` (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `structure` WRITE;
/*!40000 ALTER TABLE `structure` DISABLE KEYS */;
/*!40000 ALTER TABLE `structure` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `system_created` (`created`),
  KEY `system_updated` (`updated`),
  KEY `system_constellationId` (`constellationId`),
  KEY `system_starId` (`starId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `system` WRITE;
/*!40000 ALTER TABLE `system` DISABLE KEYS */;
/*!40000 ALTER TABLE `system` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `systemNeighbour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `systemNeighbour` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `regionId` int(11) DEFAULT NULL,
  `constellationId` int(11) DEFAULT NULL,
  `systemId` int(11) DEFAULT NULL,
  `systemName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `jumpNodes` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `trueSec` decimal(18,6) NOT NULL DEFAULT '0.000000',
  PRIMARY KEY (`id`),
  UNIQUE KEY `systemNeighbour_systemId` (`systemId`),
  KEY `systemNeighbour_regionId` (`regionId`),
  KEY `systemNeighbour_constellationId` (`constellationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `systemNeighbour` WRITE;
/*!40000 ALTER TABLE `systemNeighbour` DISABLE KEYS */;
/*!40000 ALTER TABLE `systemNeighbour` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `systemStatic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `systemStatic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `systemStatic_systemId__typeId` (`systemId`,`typeId`),
  KEY `systemStatic_systemId` (`systemId`),
  KEY `systemStatic_typeId` (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `systemStatic` WRITE;
/*!40000 ALTER TABLE `systemStatic` DISABLE KEYS */;
/*!40000 ALTER TABLE `systemStatic` ENABLE KEYS */;
UNLOCK TABLES;


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
  KEY `type_created` (`created`),
  KEY `type_updated` (`updated`),
  KEY `type_published` (`published`),
  KEY `type_groupId` (`groupId`),
  KEY `type_marketGroupId` (`marketGroupId`),
  KEY `type_graphicId` (`graphicId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `typeAttribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `typeAttribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeId` int(11) DEFAULT NULL,
  `attributeId` int(11) DEFAULT NULL,
  `value` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `typeAttribute_typeId__attributeId` (`typeId`,`attributeId`),
  KEY `typeAttribute_typeId` (`typeId`),
  KEY `typeAttribute_attributeId` (`attributeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `typeAttribute` WRITE;
/*!40000 ALTER TABLE `typeAttribute` DISABLE KEYS */;
/*!40000 ALTER TABLE `typeAttribute` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;


ALTER TABLE `typeAttribute` ADD CONSTRAINT `fk_typeAttribute_typeId_type_id` FOREIGN KEY (typeId) REFERENCES `type` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `typeAttribute` ADD CONSTRAINT `fk_typeAttribute_attributeId_dogmaAttribute_id` FOREIGN KEY (attributeId) REFERENCES `dogmaAttribute` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `type` ADD CONSTRAINT `fk_type_groupId_group_id` FOREIGN KEY (groupId) REFERENCES `group` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `group` ADD CONSTRAINT `fk_group_categoryId_category_id` FOREIGN KEY (categoryId) REFERENCES `category` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `alliance` ADD CONSTRAINT `fk_alliance_factionId_faction_id` FOREIGN KEY (factionId) REFERENCES `faction` (id) ON DELETE SET NULL ON UPDATE RESTRICT;
ALTER TABLE `corporation` ADD CONSTRAINT `fk_corporation_factionId_faction_id` FOREIGN KEY (factionId) REFERENCES `faction` (id) ON DELETE SET NULL ON UPDATE RESTRICT;
ALTER TABLE `corporation` ADD CONSTRAINT `fk_corporation_allianceId_alliance_id` FOREIGN KEY (allianceId) REFERENCES `alliance` (id) ON DELETE SET NULL ON UPDATE RESTRICT;
ALTER TABLE `race` ADD CONSTRAINT `fk_race_factionId_faction_id` FOREIGN KEY (factionId) REFERENCES `faction` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `station` ADD CONSTRAINT `fk_station_systemId_system_id` FOREIGN KEY (systemId) REFERENCES `system` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `station` ADD CONSTRAINT `fk_station_typeId_type_id` FOREIGN KEY (typeId) REFERENCES `type` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `station` ADD CONSTRAINT `fk_station_corporationId_corporation_id` FOREIGN KEY (corporationId) REFERENCES `corporation` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `station` ADD CONSTRAINT `fk_station_raceId_race_id` FOREIGN KEY (raceId) REFERENCES `race` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `structure` ADD CONSTRAINT `fk_structure_systemId_system_id` FOREIGN KEY (systemId) REFERENCES `system` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `structure` ADD CONSTRAINT `fk_structure_typeId_type_id` FOREIGN KEY (typeId) REFERENCES `type` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `stargate` ADD CONSTRAINT `fk_stargate_systemId_system_id` FOREIGN KEY (systemId) REFERENCES `system` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `stargate` ADD CONSTRAINT `fk_stargate_typeId_type_id` FOREIGN KEY (typeId) REFERENCES `type` (id) ON DELETE SET NULL ON UPDATE RESTRICT;
ALTER TABLE `stargate` ADD CONSTRAINT `fk_stargate_destinationSystemId_system_id` FOREIGN KEY (destinationSystemId) REFERENCES `system` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `star` ADD CONSTRAINT `fk_star_typeId_type_id` FOREIGN KEY (typeId) REFERENCES `type` (id) ON DELETE SET NULL ON UPDATE RESTRICT;
ALTER TABLE `planet` ADD CONSTRAINT `fk_planet_systemId_system_id` FOREIGN KEY (systemId) REFERENCES `system` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `planet` ADD CONSTRAINT `fk_planet_typeId_type_id` FOREIGN KEY (typeId) REFERENCES `type` (id) ON DELETE SET NULL ON UPDATE RESTRICT;
ALTER TABLE `system` ADD CONSTRAINT `fk_system_constellationId_constellation_id` FOREIGN KEY (constellationId) REFERENCES `constellation` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `system` ADD CONSTRAINT `fk_system_starId_star_id` FOREIGN KEY (starId) REFERENCES `star` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `constellation` ADD CONSTRAINT `fk_constellation_regionId_region_id` FOREIGN KEY (regionId) REFERENCES `region` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `systemNeighbour` ADD CONSTRAINT `fk_systemNeighbour_regionId_region_id` FOREIGN KEY (regionId) REFERENCES `region` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `systemNeighbour` ADD CONSTRAINT `fk_systemNeighbour_constellationId_constellation_id` FOREIGN KEY (constellationId) REFERENCES `constellation` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `systemNeighbour` ADD CONSTRAINT `fk_systemNeighbour_systemId_system_id` FOREIGN KEY (systemId) REFERENCES `system` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `systemStatic` ADD CONSTRAINT `fk_systemStatic_systemId_system_id` FOREIGN KEY (systemId) REFERENCES `system` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `systemStatic` ADD CONSTRAINT `fk_systemStatic_typeId_type_id` FOREIGN KEY (typeId) REFERENCES `type` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `sovereigntyMap` ADD CONSTRAINT `fk_sovereigntyMap_systemId_system_id` FOREIGN KEY (systemId) REFERENCES `system` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `sovereigntyMap` ADD CONSTRAINT `fk_sovereigntyMap_factionId_faction_id` FOREIGN KEY (factionId) REFERENCES `faction` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `sovereigntyMap` ADD CONSTRAINT `fk_sovereigntyMap_allianceId_alliance_id` FOREIGN KEY (allianceId) REFERENCES `alliance` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `sovereigntyMap` ADD CONSTRAINT `fk_sovereigntyMap_corporationId_corporation_id` FOREIGN KEY (corporationId) REFERENCES `corporation` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `factionWarSystem` ADD CONSTRAINT `fk_factionWarSystem_systemId_system_id` FOREIGN KEY (systemId) REFERENCES `system` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `factionWarSystem` ADD CONSTRAINT `fk_factionWarSystem_ownerFactionId_faction_id` FOREIGN KEY (ownerFactionId) REFERENCES `faction` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
ALTER TABLE `factionWarSystem` ADD CONSTRAINT `fk_factionWarSystem_occupierFactionId_faction_id` FOREIGN KEY (occupierFactionId) REFERENCES `faction` (id) ON DELETE CASCADE ON UPDATE RESTRICT;
