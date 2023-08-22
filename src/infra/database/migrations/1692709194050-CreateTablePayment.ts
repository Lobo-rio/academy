import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTablePayment1692709194050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "payments",
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
            }),
            true,
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
