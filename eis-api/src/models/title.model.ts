import {Entity, model, property} from '@loopback/repository';

@model()
export class Title extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<Title>) {
    super(data);
  }
}

export interface TitleRelations {
  // describe navigational properties here
}

export type TitleWithRelations = Title & TitleRelations;
