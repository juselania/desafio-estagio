module.exports = (sequelize, DataType) => {

	sequelize.define('Core', {}, {})

 	const Core = sequelize.define('Core', 
		{
			codigo : {
				type: DataType.INTERGER,
				allowNull: true,
				primaryKey: true,
				autoIncremment: true,
				validate: {
					notEmpty: false
				}
			},
			descricao: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			}
		},
		{
			tableName: 'cores'
		}
	)

 	return Core;
 }