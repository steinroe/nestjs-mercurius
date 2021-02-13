import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      typePaths: [join(__dirname, '**', '*.graphql')],
      sortSchema: true,
    }),
  ],
})
export class SortSchemaModule {}
