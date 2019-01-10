import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UsePipes } from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { IdeaDto } from './idea.dto';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('ideas')
export class IdeasController {

  private logger = new Logger('IdeasController');

  constructor(
    private ideasService: IdeasService,
  ) {}

  @Get()
  showAll() {
    return this.ideasService.showAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() data: IdeaDto) {
    this.logger.log(JSON.stringify(data));
    return this.ideasService.create(data);
  }

  @Get(':id')
  read(@Param('id') id: string) {
    return this.ideasService.read(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() data: Partial<IdeaDto>) {
    this.logger.log(JSON.stringify(data));
    return this.ideasService.update(id, data);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.ideasService.destroy(id);
  }
}
