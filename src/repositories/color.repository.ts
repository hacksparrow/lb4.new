import {DefaultCrudRepository} from '@loopback/repository';
import {Color, ColorRelations} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ColorRepository extends DefaultCrudRepository<
  Color,
  typeof Color.prototype.id,
  ColorRelations
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Color, dataSource);
  }
}
