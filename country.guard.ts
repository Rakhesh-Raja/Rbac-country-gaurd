import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Role } from '../enums/role.enum';

@Injectable()
export class CountryGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
      return false;
    }

    // Admin can access everything
    if (user.role === Role.ADMIN) {
      return true;
    }

    const resourceCountry =
      request.params.country ||
      request.body.country ||
      request.query.country;

    if (!resourceCountry) {
      // If no country involved, allow
      return true;
    }

    if (resourceCountry !== user.country) {
      throw new ForbiddenException(
        'Access restricted to your country only',
      );
    }

    return true;
  }
}
