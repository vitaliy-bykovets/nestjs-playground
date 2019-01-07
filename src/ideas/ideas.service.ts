import { Injectable } from '@nestjs/common';
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
    return await this.ideasRepository.findOne({ id });
  }

  async update(id: string, data: Partial<IdeaDto>) {
    await this.ideasRepository.update({ id }, data);
    return await this.read(id);
  }

  async destroy(id: string) {
    await this.ideasRepository.delete({ id });
    return { deleted: true };
  }
}
