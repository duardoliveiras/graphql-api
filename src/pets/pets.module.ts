import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { OwnersModule } from 'src/owners/owners.module';
import { Pet } from './entities/pet.entity';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      graphiql: true, // Nova interface grafica
      playground: false, // Interface antiga (descontinuada)
    }),
    TypeOrmModule.forFeature([Pet]),
    OwnersModule,
  ],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
