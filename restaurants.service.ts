import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { Country } from '../common/enums/country.enum';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private repo: Repository<Restaurant>,
  ) { }

  findAll(user: any) {
    if (!user) return [];
    if (user.role === 'ADMIN') {
      return this.repo.find();
    }

    return this.repo.find({
      where: { country: user.country },
    });
  }

  create(name: string, country: Country) {
    const restaurant = this.repo.create({ name, country });
    return this.repo.save(restaurant);
  }
}
