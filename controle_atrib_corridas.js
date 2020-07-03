module.exports = (sequelize, DataType) => {

 	const ControlAtribRunning = sequelize.define('ControlAtribRunning', 
		{
			codigo_corrida : {
				type: DataType.INTERGER,
				allowNull: true,
				primaryKey: true,
				autoIncremment: true,
				validate: {
					notEmpty: false,
				}
			},
			codigo_taxista: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			},

			datahora: {
				type: DataType.DATETIME,
				allowNull: true,
				validate: {
					notEmpty: false,
				}
			}
		},
		{
			tableName: 'controle_atrib_corridas'
		}
	)

 	return ControlAtribRunning;
 }