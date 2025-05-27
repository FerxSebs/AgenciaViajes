import  Sequelize from "sequelize";

const db = new Sequelize('bo3lm2dvobskzxgathq7','uumbhcrtmwy7wt6k','wrS8oQ0MdyqFEaesH2t9',{
    host: 'bo3lm2dvobskzxgathq7-mysql.services.clever-cloud.com',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false,
    },
    pool:{
        max:10,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;
