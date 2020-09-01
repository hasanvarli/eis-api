import {DefaultCrudRepository} from '@loopback/repository';
import {City, CityRelations} from '../models';
import {DataSourcePgDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {
  constructor(
    @inject('datasources.dataSourcePg') dataSource: DataSourcePgDataSource,
  ) {
    super(City, dataSource);
  }
}
