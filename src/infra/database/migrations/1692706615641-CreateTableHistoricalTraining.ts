import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableHistoricalTraining1692706615641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "historical_training",
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
                        name: "training-id",
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
            "historical_training",
            new TableIndex({
                name: "IDX_HISTORICALTRAINING_ID",
                columnNames: ["id"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("historical_training", "IDX_HISTORICALTRAINING_ID")
        await queryRunner.dropTable("historical_training");
    }

}
