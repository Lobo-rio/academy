import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableTraining1692706615640 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "trainings",
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
                        name: "fk_training_member",
                        columnNames: ["member_id"],
                        referencedTableName: "members",
                        referencedColumnNames: ["id"]
                    }
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
