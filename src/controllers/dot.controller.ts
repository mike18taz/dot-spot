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
import {Dot} from '../models';
import {DotRepository} from '../repositories';

export class DotController {
  constructor(
    @repository(DotRepository)
    public dotRepository : DotRepository,
  ) {}

  @post('/dots', {
    responses: {
      '200': {
        description: 'Dot model instance',
        content: {'application/json': {schema: getModelSchemaRef(Dot)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dot, {
            title: 'NewDot',
            exclude: ['id'],
          }),
        },
      },
    })
    dot: Omit<Dot, 'id'>,
  ): Promise<Dot> {
    return this.dotRepository.create(dot);
  }

  @get('/dots/count', {
    responses: {
      '200': {
        description: 'Dot model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Dot) where?: Where<Dot>,
  ): Promise<Count> {
    return this.dotRepository.count(where);
  }

  @get('/dots', {
    responses: {
      '200': {
        description: 'Array of Dot model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Dot, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Dot) filter?: Filter<Dot>,
  ): Promise<Dot[]> {
    return this.dotRepository.find(filter);
  }

  @patch('/dots', {
    responses: {
      '200': {
        description: 'Dot PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dot, {partial: true}),
        },
      },
    })
    dot: Dot,
    @param.where(Dot) where?: Where<Dot>,
  ): Promise<Count> {
    return this.dotRepository.updateAll(dot, where);
  }

  @get('/dots/{id}', {
    responses: {
      '200': {
        description: 'Dot model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Dot, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Dot, {exclude: 'where'}) filter?: FilterExcludingWhere<Dot>
  ): Promise<Dot> {
    return this.dotRepository.findById(id, filter);
  }

  @patch('/dots/{id}', {
    responses: {
      '204': {
        description: 'Dot PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dot, {partial: true}),
        },
      },
    })
    dot: Dot,
  ): Promise<void> {
    await this.dotRepository.updateById(id, dot);
  }

  @put('/dots/{id}', {
    responses: {
      '204': {
        description: 'Dot PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() dot: Dot,
  ): Promise<void> {
    await this.dotRepository.replaceById(id, dot);
  }

  @del('/dots/{id}', {
    responses: {
      '204': {
        description: 'Dot DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.dotRepository.deleteById(id);
  }
}
