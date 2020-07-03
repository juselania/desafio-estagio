module.exports = (sequelize, DataType) => {


 	const ClientApp = sequelize.define('ClientApp', 
		{
			codigo : {
				type: DataType.INTERGER,
				allowNull: true,
				primaryKey: true,
				autoIncrement: true,
				validate: {
					notEmpty: false
				}
			},
			codigo_cidade : {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			codigo_empresa : {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},	
			codigo_status : {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			cod_gcm : {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			data_cadastramento : {
				type: DataType.DATE,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			email: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			imei: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},
			
			nome: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			senha: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			status: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			telefone: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			token: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

		},
		{
			tableName: 'cliente_app'
		}
	)

 	return ClientApp;
 }