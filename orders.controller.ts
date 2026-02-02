import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    UseGuards,
    Req,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { CountryGuard } from '../common/guards/country.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { Country } from '../common/enums/country.enum';

@Controller('orders')
@UseGuards(JwtAuthGuard, RolesGuard, CountryGuard)
export class OrdersController {
    constructor(private ordersService: OrdersService) { }

    @Get()
    findAll(@Req() req) {
        return this.ordersService.findAll(req.user);
    }

    @Get(':country')
    findByCountry(@Param('country') country: Country) {
        return this.ordersService.findByCountry(country);
    }

    @Post()
    create(@Body() body: any) {
        return this.ordersService.create(body);
    }

    @Patch(':id/pay')
    @Roles(Role.ADMIN, Role.MANAGER)
    pay(@Param('id') id: string) {
        return this.ordersService.pay(id);
    }

    @Patch(':id/cancel')
    @Roles(Role.ADMIN, Role.MANAGER)
    cancel(@Param('id') id: string) {
        return this.ordersService.cancel(id);
    }

    @Delete(':id')
    @Roles(Role.ADMIN)
    remove(@Param('id') id: string) {
        return this.ordersService.cancel(id);
    }
}

