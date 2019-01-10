import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { IdeaDto } from './idea.dto';

@Controller('ideas')
export class IdeasController {

  constructor(
    private ideasService: IdeasService,
  ) {}

  @Get()
  showAll() {
    return this.ideasService.showAll();
  }

  @Post()
  create(@Body() data: IdeaDto) {
    return this.ideasService.create(data);
  }

  @Get(':id')
  read(@Param('id') id: string) {
    return this.ideasService.read(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<IdeaDto>) {
    return this.ideasService.update(id, data);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.ideasService.destroy(id);
  }
}
