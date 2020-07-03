module.exports = (sequelize, DataType) => {

 	const ClientAppRunning = sequelize.define('ClientAppRunning', 
		{
			codigo_cliente : {
				type: DataType.INTERGER,
				allowNull: true,
				primaryKey: true,
				autoIncremment: true,
				validate: {
					notEmpty: false,
				}
			},
			codigo_corrida: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			},

			data_pagto: {
				type: DataType.DATE,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			},

			status: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			},

			tipo_forma_pagto: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			},

			valor: {
				type: DataType.DOUBLE,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			}
		},
		{
			tableName: 'clientes_app_corridas'
		}
	)

 	return ClientAppRunning;
 }