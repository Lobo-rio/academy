import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableTraining1692709591044 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "trainings",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "70",
                        generationStrategy: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "member-id",
                        type: "varchar",
                        length: "70",
                        isNullable: false,
                    },
                    {
                        name: "realization-date",
                        type: "date",
                        isNullable: false,
                    },
                    {
                        name: "created-at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "deleted-at",
                        type: "timestamp",
                        isNullable: true,
                    },
                ],
            }),
            true,
        )

        await queryRunner.createIndex(
            "trainings",
            new TableIndex({
                name: "IDX_TRAINING_ID",
                columnNames: ["id"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("trainings", "IDX_TRAINING_ID")
        await queryRunner.dropTable("trainings");
    }

}
