module.exports = (sequelize, DataType) => {

 	const ClientEvaluat = sequelize.define('ClientEvaluat', 
		{
			codigo : {
				type: DataType.INTERGER,
				allowNull: true,
				primaryKey: true,
				validate: {
					notEmpty: false,
				}
			},
			codigo_corrida : {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			},
			codigo_prestador : {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			},
			codigo_usuario: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},
			data: {
				type : DataType.DATE,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			},
			num_estrelas: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			},
			observacao: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			}
		},
		{
			tableName: 'avaliacao_clientes'
		}
	)


	return ClientEvaluatr;
};