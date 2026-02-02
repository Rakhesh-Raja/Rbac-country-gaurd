import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Country } from '../common/enums/country.enum';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private repo: Repository<Order>,
    ) { }

    findAll(user: any) {
        if (!user) return [];
        if (user.role === 'ADMIN') {
            return this.repo.find({ relations: ['user'] });
        }

        return this.repo.find({
            where: { country: user.country },
            relations: ['user'],
        });
    }

    findByCountry(country: Country) {
        return this.repo.find({
            where: { country },
            relations: ['user'],
        });
    }

    create(order: Partial<Order>) {
        return this.repo.save(order);
    }

    pay(id: string) {
        return this.repo.update(id, { status: 'PAID' });
    }

    cancel(id: string) {
        return this.repo.update(id, { status: 'CANCELLED' });
    }
}
