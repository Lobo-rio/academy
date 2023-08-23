import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableMember1692706551372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "members",
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
                        name: "date-of-birth",
                        type: "date",
                        isNullable: false,
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "12",
                        isNullable: false,
                        default: false,
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
            "members",
            new TableIndex({
                name: "IDX_MEMBER_ID",
                columnNames: ["id"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("members", "IDX_MEMBER_ID")
        await queryRunner.dropTable("members");
    }

}
