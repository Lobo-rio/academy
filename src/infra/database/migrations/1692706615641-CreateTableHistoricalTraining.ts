import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableHistoricalTraining1692706615641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "historical_training",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "member_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "training_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "realization_date",
                        type: "date",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp",
                        isNullable: true,
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_historicalTraining_member",
                        columnNames: ["member_id"],
                        referencedTableName: "members",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_historicalTraining_training",
                        columnNames: ["training_id"],
                        referencedTableName: "trainings",
                        referencedColumnNames: ["id"]
                    }
                ]
            }),
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
