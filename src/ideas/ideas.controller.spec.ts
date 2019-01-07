import { Test, TestingModule } from '@nestjs/testing';
import { IdeasController } from './ideas.controller';

describe('Ideas Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [IdeasController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: IdeasController = module.get<IdeasController>(IdeasController);
    expect(controller).toBeDefined();
  });
});
