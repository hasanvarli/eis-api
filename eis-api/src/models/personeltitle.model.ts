import {Entity, model, property} from '@loopback/repository';

@model()
export class Personeltitle extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  personnelid: number;

  @property({
    type: 'number',
    required: true,
  })
  titleid: number;

  @property({
    type: 'date',
    required: true,
  })
  startdate: string;

  @property({
    type: 'date',
  })
  enddate?: string;


  constructor(data?: Partial<Personeltitle>) {
    super(data);
  }
}

export interface PersoneltitleRelations {
  // describe navigational properties here
}

export type PersoneltitleWithRelations = Personeltitle & PersoneltitleRelations;
