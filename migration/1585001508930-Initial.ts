import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1585001508930 implements MigrationInterface {
    name = 'Initial1585001508930'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `connection` (`id` int NOT NULL AUTO_INCREMENT, `source` int NOT NULL, `target` int NOT NULL, `mapId` int NOT NULL, `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_d62c0beefe34001ef94c400c30` (`source`, `target`, `mapId`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `system` CHANGE `alias` `alias` varchar(255) NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `connection` ADD CONSTRAINT `FK_49655e3c554b1740d4ff8f4976d` FOREIGN KEY (`mapId`) REFERENCES `map`(`mapId`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `connection` ADD CONSTRAINT `FK_844ac1285a8c5036b410c24330b` FOREIGN KEY (`source`) REFERENCES `system`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `connection` ADD CONSTRAINT `FK_dcc517ce9ca05afd5f337918273` FOREIGN KEY (`target`) REFERENCES `system`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `connection` DROP FOREIGN KEY `FK_dcc517ce9ca05afd5f337918273`", undefined);
        await queryRunner.query("ALTER TABLE `connection` DROP FOREIGN KEY `FK_844ac1285a8c5036b410c24330b`", undefined);
        await queryRunner.query("ALTER TABLE `connection` DROP FOREIGN KEY `FK_49655e3c554b1740d4ff8f4976d`", undefined);
        await queryRunner.query("ALTER TABLE `system` CHANGE `alias` `alias` varchar(255) NULL", undefined);
        await queryRunner.query("DROP INDEX `IDX_d62c0beefe34001ef94c400c30` ON `connection`", undefined);
        await queryRunner.query("DROP TABLE `connection`", undefined);
    }

}
