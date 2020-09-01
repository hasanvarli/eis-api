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
import {Personnel} from '../models';
import {PersonnelRepository} from '../repositories';

export class PersonnelController {
  constructor(
    @repository(PersonnelRepository)
    public personnelRepository : PersonnelRepository,
  ) {}

  @post('/personnel', {
    responses: {
      '200': {
        description: 'Personnel model instance',
        content: {'application/json': {schema: getModelSchemaRef(Personnel)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personnel, {
            title: 'NewPersonnel',
            
          }),
        },
      },
    })
    personnel: Personnel,
  ): Promise<Personnel> {
    return this.personnelRepository.create(personnel);
  }

  @get('/personnel/count', {
    responses: {
      '200': {
        description: 'Personnel model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Personnel) where?: Where<Personnel>,
  ): Promise<Count> {
    return this.personnelRepository.count(where);
  }

  @get('/personnel', {
    responses: {
      '200': {
        description: 'Array of Personnel model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Personnel, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Personnel) filter?: Filter<Personnel>,
  ): Promise<Personnel[]> {
    return this.personnelRepository.find(filter);
  }

  @patch('/personnel', {
    responses: {
      '200': {
        description: 'Personnel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personnel, {partial: true}),
        },
      },
    })
    personnel: Personnel,
    @param.where(Personnel) where?: Where<Personnel>,
  ): Promise<Count> {
    return this.personnelRepository.updateAll(personnel, where);
  }

  @get('/personnel/{id}', {
    responses: {
      '200': {
        description: 'Personnel model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Personnel, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Personnel, {exclude: 'where'}) filter?: FilterExcludingWhere<Personnel>
  ): Promise<Personnel> {
    return this.personnelRepository.findById(id, filter);
  }

  @patch('/personnel/{id}', {
    responses: {
      '204': {
        description: 'Personnel PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personnel, {partial: true}),
        },
      },
    })
    personnel: Personnel,
  ): Promise<void> {
    await this.personnelRepository.updateById(id, personnel);
  }

  @put('/personnel/{id}', {
    responses: {
      '204': {
        description: 'Personnel PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personnel: Personnel,
  ): Promise<void> {
    await this.personnelRepository.replaceById(id, personnel);
  }

  @del('/personnel/{id}', {
    responses: {
      '204': {
        description: 'Personnel DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personnelRepository.deleteById(id);
  }
}
