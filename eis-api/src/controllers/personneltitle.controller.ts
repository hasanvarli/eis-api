import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Personeltitle} from '../models';
import {PersoneltitleRepository} from '../repositories';

export class PersonneltitleController {
  constructor(
    @repository(PersoneltitleRepository)
    public personeltitleRepository : PersoneltitleRepository,
  ) {}

  @post('/personeltitles', {
    responses: {
      '200': {
        description: 'Personeltitle model instance',
        content: {'application/json': {schema: getModelSchemaRef(Personeltitle)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personeltitle, {
            title: 'NewPersoneltitle',
            
          }),
        },
      },
    })
    personeltitle: Personeltitle,
  ): Promise<Personeltitle> {
    return this.personeltitleRepository.create(personeltitle);
  }

  @get('/personeltitles/count', {
    responses: {
      '200': {
        description: 'Personeltitle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Personeltitle) where?: Where<Personeltitle>,
  ): Promise<Count> {
    return this.personeltitleRepository.count(where);
  }

  @get('/personeltitles', {
    responses: {
      '200': {
        description: 'Array of Personeltitle model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Personeltitle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Personeltitle) filter?: Filter<Personeltitle>,
  ): Promise<Personeltitle[]> {
    return this.personeltitleRepository.find(filter);
  }

  @patch('/personeltitles', {
    responses: {
      '200': {
        description: 'Personeltitle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personeltitle, {partial: true}),
        },
      },
    })
    personeltitle: Personeltitle,
    @param.where(Personeltitle) where?: Where<Personeltitle>,
  ): Promise<Count> {
    return this.personeltitleRepository.updateAll(personeltitle, where);
  }

  @get('/personeltitles/{id}', {
    responses: {
      '200': {
        description: 'Personeltitle model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Personeltitle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Personeltitle, {exclude: 'where'}) filter?: FilterExcludingWhere<Personeltitle>
  ): Promise<Personeltitle> {
    return this.personeltitleRepository.findById(id, filter);
  }

  @patch('/personeltitles/{id}', {
    responses: {
      '204': {
        description: 'Personeltitle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personeltitle, {partial: true}),
        },
      },
    })
    personeltitle: Personeltitle,
  ): Promise<void> {
    await this.personeltitleRepository.updateById(id, personeltitle);
  }

  @put('/personeltitles/{id}', {
    responses: {
      '204': {
        description: 'Personeltitle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personeltitle: Personeltitle,
  ): Promise<void> {
    await this.personeltitleRepository.replaceById(id, personeltitle);
  }

  @del('/personeltitles/{id}', {
    responses: {
      '204': {
        description: 'Personeltitle DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personeltitleRepository.deleteById(id);
  }
}
