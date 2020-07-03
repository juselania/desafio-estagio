module.exports = (sequelize, DataType) => {

 	const CityRate = sequelize.define('CityRate', 
		{
			codigo_cidade : {
				type: DataType.INTERGER,
				allowNull: true,
				primaryKey: true,
				validate: {
					notEmpty: false
				}
			},
			codigo_servico : {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			valor_bandeirada : {
				type: DataType.DOUBLE,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},
			valor_bandeirada2 : {
				type: DataType.DOUBLE,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			valor_fixo : {
				type: DataType.DOUBLE,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			valor_por_km : {
				type: DataType.DOUBLE,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},
		},
		{
			tableName: 'cidade_tarifas'
		}
	)

 	return CityRate;
 }
