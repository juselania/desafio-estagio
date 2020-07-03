module.exports = (sequelize, DataType) => {

 	const CityService = sequelize.define('CityService', 
		{
			codigo_cidade : {
				type: DataType.INTERGER,
				allowNull: true,
				primaryKey: true,
				validate: {
					notEmpty: false
				}
			},
			codigo_servico: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			}
		},
		{
			tableName: 'cidade_servicos'
		}
	)

 	return CityService;
 }