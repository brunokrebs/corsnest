import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { TestController } from './controllers/test/test.controller';
import { CorsMiddleware } from './middlewares/cors/cors.middleware';

@Module({
  controllers: [
    TestController
  ]
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(CorsMiddleware).forRoutes(
          { path: '*', method: RequestMethod.ALL }
      );
  }
}