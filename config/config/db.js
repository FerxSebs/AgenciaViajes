import  Sequelize from "sequelize";

const db = new Sequelize('AgenciaViajes','AgenciaViajes_packagesky','77712077bb44d1da465d543686759f2e67fa5b75',{
    host: '2ijrk.h.filess.io0',
    port: '3307',
    dialect: 'mysql',
    define: {
        timestamps: false,
    },
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;
