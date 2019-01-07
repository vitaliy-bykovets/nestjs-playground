import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeasModule } from './ideas/ideas.module';

@Module({
  imports: [TypeOrmModule.forRoot(), IdeasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
