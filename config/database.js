module.exports = [
  {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'admin',
    password: 'estacao',
    database: 'api',
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
];