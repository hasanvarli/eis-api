import {DefaultCrudRepository} from '@loopback/repository';
import {Title, TitleRelations} from '../models';
import {DataSourcePgDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TitleRepository extends DefaultCrudRepository<
  Title,
  typeof Title.prototype.id,
  TitleRelations
> {
  constructor(
    @inject('datasources.dataSourcePg') dataSource: DataSourcePgDataSource,
  ) {
    super(Title, dataSource);
  }
}
