import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb://localhost/cqrsdb?retryWrites=true&w=majority',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  logging: true,
};
