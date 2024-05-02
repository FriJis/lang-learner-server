import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class PasswordGuard implements CanActivate {
  constructor(@Inject(ConfigService) private configService: ConfigService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const serverPassword = this.configService.getOrThrow('APP_PASSWORD');

    if (!serverPassword) return true;

    const req = context.switchToHttp().getRequest() as Request;
    const clientPassword = req.headers.authorization as string | undefined;

    if (!clientPassword) return false;

    const pass = clientPassword.replace('Basic ', '');

    if (pass !== serverPassword) return null;

    return true;
  }
}
