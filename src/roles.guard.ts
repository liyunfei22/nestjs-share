import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  private logger: Logger;
  constructor(private reflector: Reflector) {
    this.logger = new Logger();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler());
    this.logger.error('sss');
    this.logger;
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => user.roles.some((role) => roles.includes(role));
    if (!user || !user.roles || !hasRole()) {
      return false;
    }
    return true;
  }
}
