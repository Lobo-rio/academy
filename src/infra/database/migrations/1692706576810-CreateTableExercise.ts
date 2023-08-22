import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableExercise1692706576810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "exercises",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "70",
                        generationStrategy: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "80",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "200",
                        isNullable: false,
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        isNullable: false,
                        default: true,
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
            "exercises",
            new TableIndex({
                name: "IDX_EXERCISE_ID",
                columnNames: ["id"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("exercises", "IDX_EXERCISE_ID")
        await queryRunner.dropTable("exercises");
    }

}
