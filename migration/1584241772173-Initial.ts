import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1584241772173 implements MigrationInterface {
    name = 'Initial1584241772173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `node` (`id` int NOT NULL AUTO_INCREMENT, `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `systemId` int NOT NULL, `linkedSystemId` int NOT NULL, `connectionName` varchar(255) NOT NULL, `mapMapId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `map` (`mapId` int NOT NULL AUTO_INCREMENT, `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`mapId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `corporation` CHANGE `isNPC` `isNPC` tinyint(1) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `published` `published` tinyint(1) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `group` CHANGE `published` `published` tinyint(1) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `typeAttribute` CHANGE `valueFloat` `valueFloat` float NULL", undefined);
        await queryRunner.query("ALTER TABLE `star` CHANGE `age` `age` bigint(20) NULL", undefined);
        await queryRunner.query("ALTER TABLE `star` CHANGE `radius` `radius` bigint(20) NULL", undefined);
        await queryRunner.query("ALTER TABLE `star` CHANGE `luminosity` `luminosity` float NULL", undefined);
        await queryRunner.query("ALTER TABLE `system` CHANGE `trueSec` `trueSec` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `node` ADD CONSTRAINT `FK_5030080f05f02ed4e4ee8cd51ca` FOREIGN KEY (`systemId`) REFERENCES `system`(`systemId`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `node` ADD CONSTRAINT `FK_940101a049eae94a052ad61de38` FOREIGN KEY (`linkedSystemId`) REFERENCES `system`(`systemId`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `node` ADD CONSTRAINT `FK_cd3f1c88c9030ac8dcba7546f3c` FOREIGN KEY (`mapMapId`) REFERENCES `map`(`mapId`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `node` DROP FOREIGN KEY `FK_cd3f1c88c9030ac8dcba7546f3c`", undefined);
        await queryRunner.query("ALTER TABLE `node` DROP FOREIGN KEY `FK_940101a049eae94a052ad61de38`", undefined);
        await queryRunner.query("ALTER TABLE `node` DROP FOREIGN KEY `FK_5030080f05f02ed4e4ee8cd51ca`", undefined);
        await queryRunner.query("ALTER TABLE `system` CHANGE `trueSec` `trueSec` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `star` CHANGE `luminosity` `luminosity` float(12) NULL", undefined);
        await queryRunner.query("ALTER TABLE `star` CHANGE `radius` `radius` bigint NULL", undefined);
        await queryRunner.query("ALTER TABLE `star` CHANGE `age` `age` bigint NULL", undefined);
        await queryRunner.query("ALTER TABLE `typeAttribute` CHANGE `valueFloat` `valueFloat` float(12) NULL", undefined);
        await queryRunner.query("ALTER TABLE `group` CHANGE `published` `published` tinyint(1) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `published` `published` tinyint(1) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `corporation` CHANGE `isNPC` `isNPC` tinyint(1) NOT NULL", undefined);
        await queryRunner.query("DROP TABLE `map`", undefined);
        await queryRunner.query("DROP TABLE `node`", undefined);
    }

}
