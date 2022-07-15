// import configs from '../knexfile';
// import knex from 'knex';

// TODO(jim):
// No internet connection at the moment.
// Need to test config.
// const envConfig = configs['production'];
const NAME = `backfill.js`;

// console.log(`write: database`, envConfig);

// NOTE(jim):
// supports working around SSL issues.
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// const db = knex(envConfig);

const work = async () => {
  // TODO(jim):
  // No internet connection at the moment.
  // + Query all
  //    + Textile
  //    + FilRep
  //    + Estuary
  // + Write to db: storageproviders
};

console.log(`RUNNING: ${NAME} NODE_ENV=${process.env.NODE_ENV}`);

// Add an await to finish the DB operations before reporting finished
// Note: This may not be necessary if there is no succeeding operation
// Wrap around in an async function to avoid errors for using await
// outside of the async function
// (IIFE - immediately invoked function exp)
(async function() {
  await work();
})();

console.log(`FINISHED: ${NAME} NODE_ENV=${process.env.NODE_ENV}`);
