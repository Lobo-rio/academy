import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateTableWorkoutExercise1692710265259 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "workouts_exercises",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "training_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "exercise_id",
                        type: "uuid",
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
                        name: "fk_workoutsexercises_training",
                        columnNames: ["training_id"],
                        referencedTableName: "trainings",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_workoutsexercises_exercise",
                        columnNames: ["exercise_id"],
                        referencedTableName: "exercises",
                        referencedColumnNames: ["id"]
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
