import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateTableUsers1692641554814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "60",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "120",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "70",
                        isNullable: false,
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        isNullable: false,
                    },
                    {
                        name: "is_admin",
                        type: "boolean",
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
            }),
            true,
        )

        await queryRunner.createIndex(
            "users",
            new TableIndex({
                name: "IDX_USER_ID",
                columnNames: ["id"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("users", "IDX_USER_ID")
        await queryRunner.dropTable("users");
    }

}
