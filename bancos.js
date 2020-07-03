module.exports = (sequelize, DataType) => {

 	const Bank = sequelize.define('Bank', 
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
			}
		},
		{
			tableName: 'bancos'
		}
	)

 	return Bank;
 }