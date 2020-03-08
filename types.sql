/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type` (
  `typeID` int(11) NOT NULL,
  `groupID` int(11) DEFAULT NULL,
  `typeName` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `mass` double DEFAULT NULL,
  `volume` double DEFAULT NULL,
  `capacity` double DEFAULT NULL,
  `portionSize` int(11) DEFAULT NULL,
  `raceID` int(11) DEFAULT NULL,
  `basePrice` decimal(19,4) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `marketGroupID` int(11) DEFAULT NULL,
  `iconID` int(11) DEFAULT NULL,
  `soundID` int(11) DEFAULT NULL,
  `graphicID` int(11) DEFAULT NULL,
  PRIMARY KEY (`typeID`),
  KEY `ix_type_groupID` (`groupID`),
  CONSTRAINT `type_published` CHECK (`published` in (0,1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `typeAttribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `typeAttribute` (
  `typeID` int(11) NOT NULL,
  `attributeID` int(11) NOT NULL,
  `valueInt` int(11) DEFAULT NULL,
  `valueFloat` float DEFAULT NULL,
  PRIMARY KEY (`typeID`,`attributeID`),
  KEY `typeAttributes_attributeID` (`attributeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


DROP TABLE IF EXISTS `attributeType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attributeType` (
  `attributeID` int(11) NOT NULL,
  `attributeName` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `iconID` int(11) DEFAULT NULL,
  `defaultValue` float DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `displayName` varchar(150) DEFAULT NULL,
  `unitID` int(11) DEFAULT NULL,
  `stackable` tinyint(1) DEFAULT NULL,
  `highIsGood` tinyint(1) DEFAULT NULL,
  `categoryID` int(11) DEFAULT NULL,
  PRIMARY KEY (`attributeID`),
  CONSTRAINT `attributeTypes_pub` CHECK (`published` in (0,1)),
  CONSTRAINT `attributeTypes_stack` CHECK (`stackable` in (0,1)),
  CONSTRAINT `attributeTypes_hig` CHECK (`highIsGood` in (0,1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

-- DROP TABLE IF EXISTS `systemStatic`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `systemStatic` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `systemId` int(11) DEFAULT NULL,
--   `typeId` int(11) DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `systemStatic_systemId__typeId` (`systemId`,`typeId`),
--   KEY `systemStatic_systemId` (`systemId`),
--   KEY `systemStatic_typeId` (`typeId`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;
-- /*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `system`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE system (
  `systemId` int(11) NOT NULL AUTO_INCREMENT,
  `constellationId` int(11) DEFAULT NULL,
  `regionId` int(11) DEFAULT NULL,
  `systemName` varchar(128) NOT NULL DEFAULT '',
  `starId` int(11) DEFAULT NULL,
  `security` varchar(128) DEFAULT NULL,
  `trueSec` float NOT NULL DEFAULT '1',
  `securityStatus` decimal(18,6) NOT NULL DEFAULT '1.000000',
  `securityClass` varchar(128) DEFAULT NULL,
  `effect` varchar(128) DEFAULT NULL,
  PRIMARY KEY (systemId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
