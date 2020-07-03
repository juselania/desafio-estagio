module.exports = (sequelize, DataType) => {

 	const Running = sequelize.define('Running', 
		{ 
			avaliacao_realizada : {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},
			codigo: {
				type: DataType.INTERGER,
				allowNull: true,
				primaryKey: true,
				autoIncrement: true,
				validate: {
					notEmpty: false
				}
			},

			codigo_area: {
				type: DataType.INTERGER,
				allowNull: true,
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

			codigo_empresa_servico: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			codigo_forma_solicitacao: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			codigo_multiponto: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			codigo_pedido_associado: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			codigo_tipo_servico: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			codigo_usuario: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			complemeto_destino: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			complemeto_origem: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			data_solicitacao: {
				type: DataType.DATE,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			descricao_passageiro: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			distancia_trajeto: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			endereco_destino: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			endereco_origem: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			hora_prevista_atendimento: {
				type: DataType.TIME,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			latitude_destino: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			latitude_origem: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			longitude_destino: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			longitude_origem: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			nome_passageiro: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			ponto_referencia: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			pos_devolvida: {
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

			status_pagamento: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			tipo_atendimento: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			tipo_bau_solicitado: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			tipo_pagamento: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			tipo_veiculo: {
				type: DataType.INTERGER,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			transacao_paypal_id: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			valor: {
				type: DataType.DOUBLE,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},

			valor_desconto: {
				type: DataType.DOUBLE,
				allowNull: true,
				validate: {
					notEmpty: false
				}
			},
		},
		{
			tableName: 'corridas'
		}
	)

 	return Running;
 }