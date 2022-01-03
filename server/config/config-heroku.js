const configHeroku = {
    database: 'd1t8q3l8m0eog9',
    username: 'eivdhxbqgggcfy',
    password: 'eeb9f09985dd711473f9bd2491fb0472df57fb7f1fd55fafec0aa09479fdd9c7',
    host: 'ec2-52-70-109-8.compute-1.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
  
  export default configHeroku;