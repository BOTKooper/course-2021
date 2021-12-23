import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      typePaths: ['./**/*.gql'],
      context: ({ req }) => ({ req }),
    }),
  ],
})
export class AppModule {}
