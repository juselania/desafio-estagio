module.exports = (sequelize, DataType) => {


 	const City = sequelize.define('City', 
		{
			codigo : {
				type: DataType.INTERGER,
				allowNull: true,
				primaryKey: true,
				validate: {
					notEmpty: false
				}
			},
		
			descricao : {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},
		},
		{
			tableName: 'cidade'
		}
	)

 	return City;
 }