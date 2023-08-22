import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutsExercisesService } from './workouts-exercises.service';

describe('WorkoutsExercisesService', () => {
  let service: WorkoutsExercisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutsExercisesService],
    }).compile();

    service = module.get<WorkoutsExercisesService>(WorkoutsExercisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
