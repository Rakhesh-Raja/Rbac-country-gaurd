import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('restaurants')
@UseGuards(JwtAuthGuard)
export class RestaurantsController {
  constructor(private service: RestaurantsService) {}

  @Get()
  getRestaurants(@Req() req) {
    return this.service.findAll(req.user);
  }

  @Post()
  createRestaurant(@Body() body: any) {
    return this.service.create(body.name, body.country);
  }
}
