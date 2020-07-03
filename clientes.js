module.exports = (sequelize, DataType) => {

 	const Client = sequelize.define('Client', 
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
			codigo_cidade: {
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

			complemento : {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			cpf : {
				type: DataType.INTERGER,
				allowNull: true,
				unique:true,
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

			endereco : {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			nome : {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			ponto_referencia : {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			telefone1 : {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			telefone2 : {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

		},
		{
			tableName: 'clientes'
		}
	)

 	return Client;
 }