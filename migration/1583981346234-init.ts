import {MigrationInterface, QueryRunner} from "typeorm";

export class init1583981346234 implements MigrationInterface {
    name = 'init1583981346234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `corporation` CHANGE `isNPC` `isNPC` tinyint(1) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `corporation` ADD CONSTRAINT `FK_948427e37767eadd1edb8cf0573` FOREIGN KEY (`allianceId`) REFERENCES `alliance`(`allianceId`) ON DELETE SET NULL ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `corporation` DROP FOREIGN KEY `FK_948427e37767eadd1edb8cf0573`", undefined);
        await queryRunner.query("ALTER TABLE `corporation` CHANGE `isNPC` `isNPC` tinyint(1) NOT NULL", undefined);
    }

}
