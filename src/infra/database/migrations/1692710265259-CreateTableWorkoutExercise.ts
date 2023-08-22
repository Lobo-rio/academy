import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableWorkoutExercise1692710265259 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "workouts_exercises",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "70",
                        generationStrategy: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "training-id",
                        type: "varchar",
                        length: "70",
                        isNullable: false,
                    },
                    {
                        name: "exercise-id",
                        type: "varchar",
                        length: "70",
                        isNullable: false,
                    },
                    {
                        name: "series",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "repetitions",
                        type: "int",
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
            "workouts_exercises",
            new TableIndex({
                name: "IDX_WORKOUTEXERCISE_ID",
                columnNames: ["id"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("workouts_exercises", "IDX_WORKOUTEXERCISE_ID")
        await queryRunner.dropTable("workouts_exercises");
    }

}
