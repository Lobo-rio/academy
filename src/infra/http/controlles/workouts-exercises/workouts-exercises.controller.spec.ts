import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutsExercisesController } from './workouts-exercises.controller';
import { WorkoutsExercisesService } from '../../../../domain/workouts-exercises/service/workouts-exercises.service';

describe('WorkoutsExercisesController', () => {
  let controller: WorkoutsExercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutsExercisesController],
      providers: [WorkoutsExercisesService],
    }).compile();

    controller = module.get<WorkoutsExercisesController>(
      WorkoutsExercisesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
