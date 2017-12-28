import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {TestController} from './test.controller';
import {expect} from 'chai';

describe('TestController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        TestController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: TestController;
  beforeEach(() => {
    controller = module.get(TestController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
