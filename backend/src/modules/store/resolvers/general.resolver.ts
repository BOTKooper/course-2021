import {
  Resolver, Query, Args, Mutation,
} from '@nestjs/graphql';
import { Nullable } from '../../../common/nullable.type';
import { IStore } from '../../../data/database/model/store.model';
import { CreateStoreInput, StoreService } from '../store.service';

@Resolver()
export class StoreResolver {
  public constructor(
    private readonly storeService: StoreService,
  ) {}

  @Query()
  public getAllStores(): Promise<IStore[]> {
    return this.storeService.getAllStores();
  }

  @Query()
  public getStoreById(@Args('id') id: number): Promise<Nullable<IStore>> {
    return this.storeService.getById(id);
  }

  @Mutation()
  public async deleteStore(@Args('id') id: string): Promise<boolean> {
    await this.storeService.deleteById(+id);
    return true;
  }

  @Mutation()
  public createStore(@Args('input') input: CreateStoreInput): Promise<IStore> {
    return this.storeService.create(input);
  }

  @Mutation()
  public editStore(@Args('id') id: string, @Args('input') input: Partial<CreateStoreInput>): Promise<IStore> {
    return this.storeService.update(+id, input);
  }
}
