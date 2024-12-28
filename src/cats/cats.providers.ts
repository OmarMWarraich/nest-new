import { Connection } from 'mongoose';
import { CatSchema } from '../schemas/cat.schema';
import { DATABASE_CONNECTION } from 'src/constants/app.constants';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),
    inject: [DATABASE_CONNECTION],
  },
];
