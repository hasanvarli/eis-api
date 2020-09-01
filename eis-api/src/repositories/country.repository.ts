import {DefaultCrudRepository} from '@loopback/repository';
import {Country, CountryRelations} from '../models';
import {DataSourcePgDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountryRepository extends DefaultCrudRepository<
  Country,
  typeof Country.prototype.id,
  CountryRelations
> {
  constructor(
    @inject('datasources.dataSourcePg') dataSource: DataSourcePgDataSource,
  ) {
    super(Country, dataSource);
  }
}
