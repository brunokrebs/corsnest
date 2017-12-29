import {Middleware, NestMiddleware} from '@nestjs/common';

@Middleware()
export class CorsMiddleware implements NestMiddleware {
  resolve(): (req, res, next) => void {
    return (req, res, next) => {
      res.header('Access-Control-Allow-Headers', 'Authorization');
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', '*');
      next();
    }
  }
}
