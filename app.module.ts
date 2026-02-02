import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.modules';
import { OrdersModule } from './orders/orders.modules';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite', // ✅ easiest for assignment
            database: 'db.sqlite',
            autoLoadEntities: true,
            synchronize: true, // ❗only for demo
        }),
        AuthModule,
        UsersModule,
        RestaurantsModule,
        OrdersModule,
    ],
})
export class AppModule { }
