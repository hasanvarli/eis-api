import {DefaultCrudRepository} from '@loopback/repository';
import {Office, OfficeRelations} from '../models';
import {DataSourcePgDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OfficeRepository extends DefaultCrudRepository<
  Office,
  typeof Office.prototype.id,
  OfficeRelations
> {
  constructor(
    @inject('datasources.dataSourcePg') dataSource: DataSourcePgDataSource,
  ) {
    super(Office, dataSource);
  }
}
