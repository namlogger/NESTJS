import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthModule, PostModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    }],
})
export class AppModule { }
