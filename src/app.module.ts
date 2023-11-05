import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { Events } from './events/entities/event.entity';
import { StaysModule } from './stays/stays.module';
import { Stays } from './stays/entities/stay.entity';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.USER,
      host: process.env.HOST,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [User, Events, Stays],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      playground: false,
    }),
    UsersModule,
    EventsModule,
    StaysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
