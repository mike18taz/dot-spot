import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mdb',
  connector: 'mongodb',
  url: 'mongodb+srv://mike:regis123@cluster0.hvb6j.gcp.mongodb.net/dotspot?retryWrites=true&w=majority',
  host: 'cluster0.hvb6j.gcp.mongodb.net',
  port: 27017,
  user: 'mike',
  password: 'regis123',
  database: 'dotspot',
  protocol: 'mongodb+srv',
  useNewUrlParser: true,
  useUnifiedTopology: true 
};

//mongodb+srv://mike:<password>@cluster0.hvb6j.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority
//url: 'mongodb://localhost:27017/dotspot',

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
