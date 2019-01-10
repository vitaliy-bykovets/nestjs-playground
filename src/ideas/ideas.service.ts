import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { IdeaEntity } from './idea.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaDto } from './idea.dto';

@Injectable()
export class IdeasService {
  constructor(
    @InjectRepository(IdeaEntity) private ideasRepository: Repository<IdeaEntity>,
  ) {
  }

  async showAll() {
    return await this.ideasRepository.find();
  }

  async create(data: IdeaDto) {
    const idea = await this.ideasRepository.create(data);
    await this.ideasRepository.save(idea);
    return idea;
  }

  async read(id: string) {
    const idea = await this.ideasRepository.findOne({ id });

    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return idea;
  }

  async update(id: string, data: Partial<IdeaDto>) {
    let idea = await this.ideasRepository.findOne({ id });

    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    await this.ideasRepository.update({ id }, data);
    idea = await this.ideasRepository.findOne({ id });
    return idea;
  }

  async destroy(id: string) {
    const idea = await this.ideasRepository.findOne({ id });

    if (!idea) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    await this.ideasRepository.delete({ id });
    return idea;
  }
}
