import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PhrasesModule } from './phrases/phrases.module';
import { FilesModule } from './files/files.module';
import { PhraseBankModule } from './phrase-bank/phrase-bank.module';
import { CategoryModule } from './category/category.module';
import { ExercisesModule } from './exercises/exercises.module';
import { ExerciseCategoryModule } from './exercise-category/exercise-category.module';
import { SpeechTherapistModule } from './speech-therapist/speech-therapist.module';
import { ExerciseSubCategoriesModule } from './exercise-sub-categories/exercise-sub-categories.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    PhrasesModule,
    FilesModule,
    PhraseBankModule,
    CategoryModule,
    ExercisesModule,
    ExerciseCategoryModule,
    SpeechTherapistModule,
    ExerciseSubCategoriesModule,
    FavoriteModule,
  ],
})
export class AppModule {}
