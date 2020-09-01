import {DefaultCrudRepository} from '@loopback/repository';
import {Personnel, PersonnelRelations} from '../models';
import {DataSourcePgDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonnelRepository extends DefaultCrudRepository<
  Personnel,
  typeof Personnel.prototype.id,
  PersonnelRelations
> {
  constructor(
    @inject('datasources.dataSourcePg') dataSource: DataSourcePgDataSource,
  ) {
    super(Personnel, dataSource);
  }
}
