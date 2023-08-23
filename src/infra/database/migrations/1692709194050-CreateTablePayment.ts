import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTablePayment1692709194050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "payments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "member-id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "valor",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "data-pagamento",
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
                foreignKeys: [
                    {
                        name: "fk_payment_member",
                        columnNames: ["member-id"],
                        referencedTableName: "members",
                        referencedColumnNames: ["id"]
                    }
                ],
            }),
        )

        await queryRunner.createIndex(
            "payments",
            new TableIndex({
                name: "IDX_PAYMENT_ID",
                columnNames: ["id"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("payments", "IDX_PAYMENT_ID")
        await queryRunner.dropTable("payments");
    }

}
