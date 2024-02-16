const notas = [
	{
		NomePagador: "Vivian Gibson",
		NumIdNota: "101",
		DataEmissaoNota: "2023-2-17",
		DataCobranca: null,
		DataPagamento: "2023-3-11",
		DataVencimento: "2023-3-17",
		ValorNota: 7281.54,
		DocumentoNotaFiscal: 613243,
		DocumentoBoletoBancario: 764051,
		StatusNota: "Pagamento realizado"
	},
	{
		NomePagador: "Ana Silva",
		NumIdNota: "102",
		DataEmissaoNota: "2023-6-10",
		DataCobranca: null,
		DataPagamento: "2023-6-15",
		DataVencimento: "2023-6-20",
		ValorNota: 2500.00,
		DocumentoNotaFiscal: 882134,
		DocumentoBoletoBancario: 654321,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Lucas Oliveira",
		NumIdNota: "103",
		DataEmissaoNota: "2023-7-5",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-7-10",
		ValorNota: 2000.50,
		DocumentoNotaFiscal: 715924,
		DocumentoBoletoBancario: 54675467,
		StatusNota: "Emitida"
	},
	
	{
		NomePagador: "Mariana Costa",
		NumIdNota: "104",
		DataEmissaoNota: "2023-8-20",
		DataCobranca: null,
		DataPagamento: "2023-8-25",
		DataVencimento: "2023-8-30",
		ValorNota: 3000.00,
		DocumentoNotaFiscal: 632541,
		DocumentoBoletoBancario: 159753,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Gabriel Santos",
		NumIdNota: "105",
		DataEmissaoNota: "2023-9-12",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-9-18",
		ValorNota: 1800.75,
		DocumentoNotaFiscal: 857410,
		DocumentoBoletoBancario: 86574,
		StatusNota: "Emitida"
	},
	
	{
		NomePagador: "Laura Vieira",
		NumIdNota: "106",
		DataEmissaoNota: "2023-10-8",
		DataCobranca: "2023-10-12",
		DataPagamento: null,
		DataVencimento: "2023-10-15",
		ValorNota: 2200.25,
		DocumentoNotaFiscal: 741258,
		DocumentoBoletoBancario: 369852,
		StatusNota: "Cobrança realizada"
	},
	
	{
		NomePagador: "Pedro Almeida",
		NumIdNota: "107",
		DataEmissaoNota: "2023-11-15",
		DataCobranca: "2023-11-20",
		DataPagamento: null,
		DataVencimento: "2023-11-25",
		ValorNota: 2700.00,
		DocumentoNotaFiscal: 369852,
		DocumentoBoletoBancario: 456789,
		StatusNota: "Cobrança realizada"
	},
	
	{
		NomePagador: "Bruna Lima",
		NumIdNota: "108",
		DataEmissaoNota: "2023-12-2",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-12-5",
		ValorNota: 1900.60,
		DocumentoNotaFiscal: 582741,
		DocumentoBoletoBancario: 213432465,
		StatusNota: "Emitida"
	},
	
	{
		NomePagador: "Rafaela Oliveira",
		NumIdNota: "109",
		DataEmissaoNota: "2023-12-20",
		DataCobranca: null,
		DataPagamento: "2023-12-25",
		DataVencimento: "2023-12-30",
		ValorNota: 3100.00,
		DocumentoNotaFiscal: 951753,
		DocumentoBoletoBancario: 753951,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Carlos Mendes",
		NumIdNota: "110",
		DataEmissaoNota: "2023-11-1",
		DataCobranca: "2023-11-5",
		DataPagamento: "2023-11-10",
		DataVencimento: "2023-11-5",
		ValorNota: 2200.00,
		DocumentoNotaFiscal: 369852,
		DocumentoBoletoBancario: 951753,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Juliana Silva",
		NumIdNota: "111",
		DataEmissaoNota: "2023-10-15",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-10-20",
		ValorNota: 2400.75,
		DocumentoNotaFiscal: 123456,
		DocumentoBoletoBancario: 65473,
		StatusNota: "Emitida"
	},
	
	{
		NomePagador: "Matheus Alves",
		NumIdNota: "112",
		DataEmissaoNota: "2023-9-8",
		DataCobranca: null,
		DataPagamento: "2023-9-15",
		DataVencimento: "2023-9-20",
		ValorNota: 1800.00,
		DocumentoNotaFiscal: 789123,
		DocumentoBoletoBancario: 45368,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Camila Costa",
		NumIdNota: "113",
		DataEmissaoNota: "2023-8-3",
		DataCobranca: "2023-8-8",
		DataPagamento: null,
		DataVencimento: "2023-8-10",
		ValorNota: 2000.50,
		DocumentoNotaFiscal: 456789,
		DocumentoBoletoBancario: 357951,
		StatusNota: "Cobrança realizada"
	},
	
	{
		NomePagador: "Fernando Oliveira",
		NumIdNota: "114",
		DataEmissaoNota: "2023-7-20",
		DataCobranca: null,
		DataPagamento: "2023-7-25",
		DataVencimento: "2023-7-30",
		ValorNota: 2600.00,
		DocumentoNotaFiscal: 159753,
		DocumentoBoletoBancario: 456456,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Tatiane Costa",
		NumIdNota: "115",
		DataEmissaoNota: "2023-6-15",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-6-20",
		ValorNota: 2000.00,
		DocumentoNotaFiscal: 357951,
		DocumentoBoletoBancario: 977745,
		StatusNota: "Emitida"
	},
	
	{
		NomePagador: "Gustavo Silva",
		NumIdNota: "116",
		DataEmissaoNota: "2023-5-10",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-5-15",
		ValorNota: 2100.00,
		DocumentoNotaFiscal: 789456,
		DocumentoBoletoBancario: 786123,
		StatusNota: "Emitida"
	},
	
	{
		NomePagador: "Vanessa Lima",
		NumIdNota: "117",
		DataEmissaoNota: "2023-4-5",
		DataCobranca: null,
		DataPagamento: "2023-4-12",
		DataVencimento: "2023-4-20",
		ValorNota: 2300.00,
		DocumentoNotaFiscal: 951753,
		DocumentoBoletoBancario: 7941263,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Ricardo Almeida",
		NumIdNota: "118",
		DataEmissaoNota: "2023-3-18",
		DataCobranca: "2023-3-22",
		DataPagamento: null,
		DataVencimento: "2023-3-25",
		ValorNota: 1900.00,
		DocumentoNotaFiscal: 357951,
		DocumentoBoletoBancario: 654321,
		StatusNota: "Cobrança realizada"
	},
	
	{
		NomePagador: "Carolina Santos",
		NumIdNota: "119",
		DataEmissaoNota: "2023-2-10",
		DataCobranca: "2023-2-15",
		DataPagamento: "2023-2-20",
		DataVencimento: "2023-2-25",
		ValorNota: 1500.00,
		DocumentoNotaFiscal: 852369,
		DocumentoBoletoBancario: 741258,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Paulo Oliveira",
		NumIdNota: "120",
		DataEmissaoNota: "2023-1-5",
		DataCobranca: "2023-1-10",
		DataPagamento: null,
		DataVencimento: "2023-1-15",
		ValorNota: 1700.00,
		DocumentoNotaFiscal: 369852,
		DocumentoBoletoBancario: 852369,
		StatusNota: "Cobrança realizada"
	},

	{
		NomePagador: "Rodrigo Silva",
		NumIdNota: "121",
		DataEmissaoNota: "2023-6-20",
		DataCobranca: "2023-6-25",
		DataPagamento: "2023-7-1",
		DataVencimento: "2023-6-30",
		ValorNota: 2200.00,
		DocumentoNotaFiscal: 123789,
		DocumentoBoletoBancario: 456123,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Fernanda Alves",
		NumIdNota: "122",
		DataEmissaoNota: "2023-5-15",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-5-20",
		ValorNota: 2300.50,
		DocumentoNotaFiscal: 789654,
		DocumentoBoletoBancario: 321456,
		StatusNota: "Emitida"
	},
	
	{
		NomePagador: "Eduardo Costa",
		NumIdNota: "123",
		DataEmissaoNota: "2023-4-10",
		DataCobranca: "2023-4-15",
		DataPagamento: null,
		DataVencimento: "2023-4-20",
		ValorNota: 2100.00,
		DocumentoNotaFiscal: 456987,
		DocumentoBoletoBancario: 987654,
		StatusNota: "Cobrança realizada"
	},
	
	{
		NomePagador: "Juliana Oliveira",
		NumIdNota: "124",
		DataEmissaoNota: "2023-3-5",
		DataCobranca: null,
		DataPagamento: "2023-3-12",
		DataVencimento: "2023-3-15",
		ValorNota: 1800.00,
		DocumentoNotaFiscal: 654321,
		DocumentoBoletoBancario: 147258,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Vinicius Almeida",
		NumIdNota: "125",
		DataEmissaoNota: "2023-2-20",
		DataCobranca: "2023-2-25",
		DataPagamento: "2023-3-1",
		DataVencimento: "2023-2-28",
		ValorNota: 2000.00,
		DocumentoNotaFiscal: 789123,
		DocumentoBoletoBancario: 852147,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Mariana Lima",
		NumIdNota: "126",
		DataEmissaoNota: "2023-1-15",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-1-20",
		ValorNota: 1700.50,
		DocumentoNotaFiscal: 159753,
		DocumentoBoletoBancario: 369258,
		StatusNota: "Emitida"
	},
	
	{
		NomePagador: "Roberto Costa",
		NumIdNota: "127",
		DataEmissaoNota: "2023-12-10",
		DataCobranca: null,
		DataPagamento: "2023-12-15",
		DataVencimento: "2023-12-20",
		ValorNota: 1900.00,
		DocumentoNotaFiscal: 258369,
		DocumentoBoletoBancario: 147852,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Daniela Oliveira",
		NumIdNota: "128",
		DataEmissaoNota: "2023-11-5",
		DataCobranca: "2023-11-10",
		DataPagamento: null,
		DataVencimento: "2023-11-15",
		ValorNota: 2600.00,
		DocumentoNotaFiscal: 369852,
		DocumentoBoletoBancario: 123456,
		StatusNota: "Cobrança realizada"
	},
	
	{
		NomePagador: "Lucas Costa",
		NumIdNota: "129",
		DataEmissaoNota: "2023-10-1",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-10-5",
		ValorNota: 2400.00,
		DocumentoNotaFiscal: 789456,
		DocumentoBoletoBancario: 456789,
		StatusNota: "Emitida"
	},
	
	{
		NomePagador: "Carla Almeida",
		NumIdNota: "130",
		DataEmissaoNota: "2023-9-15",
		DataCobranca: null,
		DataPagamento: "2023-9-20",
		DataVencimento: "2023-9-25",
		ValorNota: 2500.00,
		DocumentoNotaFiscal: 987654,
		DocumentoBoletoBancario: 321654,
		StatusNota: "Pagamento realizado"
	},

	{
		NomePagador: "José Silva",
		NumIdNota: "131",
		DataEmissaoNota: "2023-8-10",
		DataCobranca: "2023-8-15",
		DataPagamento: null,
		DataVencimento: "2023-8-20",
		ValorNota: 2800.00,
		DocumentoNotaFiscal: 147258,
		DocumentoBoletoBancario: 369147,
		StatusNota: "Cobrança realizada"
	},
	
	{
		NomePagador: "Patrícia Oliveira",
		NumIdNota: "132",
		DataEmissaoNota: "2023-7-5",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-7-10",
		ValorNota: 2000.00,
		DocumentoNotaFiscal: 369147,
		DocumentoBoletoBancario: 258369,
		StatusNota: "Pagamento em atraso"
	},
	
	{
		NomePagador: "Amanda Costa",
		NumIdNota: "133",
		DataEmissaoNota: "2023-6-1",
		DataCobranca: null,
		DataPagamento: "2023-6-5",
		DataVencimento: "2023-6-10",
		ValorNota: 2100.00,
		DocumentoNotaFiscal: 987654,
		DocumentoBoletoBancario: 147258,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Felipe Oliveira",
		NumIdNota: "134",
		DataEmissaoNota: "2023-5-20",
		DataCobranca: "2023-5-25",
		DataPagamento: "2023-6-1",
		DataVencimento: "2023-5-30",
		ValorNota: 2300.00,
		DocumentoNotaFiscal: 654321,
		DocumentoBoletoBancario: 369852,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Vanessa Almeida",
		NumIdNota: "135",
		DataEmissaoNota: "2023-4-15",
		DataCobranca: "2023-4-20",
		DataPagamento: null,
		DataVencimento: "2023-4-25",
		ValorNota: 1800.00,
		DocumentoNotaFiscal: 789456,
		DocumentoBoletoBancario: 987654,
		StatusNota: "Cobrança realizada"
	},
	
	{
		NomePagador: "Marcos Lima",
		NumIdNota: "136",
		DataEmissaoNota: "2023-3-10",
		DataCobranca: null,
		DataPagamento: "2023-3-15",
		DataVencimento: "2023-3-20",
		ValorNota: 1900.00,
		DocumentoNotaFiscal: 321456,
		DocumentoBoletoBancario: 852963,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Luciana Costa",
		NumIdNota: "137",
		DataEmissaoNota: "2023-2-5",
		DataCobranca: "2023-2-10",
		DataPagamento: null,
		DataVencimento: "2023-2-15",
		ValorNota: 2200.00,
		DocumentoNotaFiscal: 456789,
		DocumentoBoletoBancario: 369147,
		StatusNota: "Cobrança realizada"
	},
	
	{
		NomePagador: "Ricardo Oliveira",
		NumIdNota: "138",
		DataEmissaoNota: "2023-1-1",
		DataCobranca: null,
		DataPagamento: "2023-1-4",
		DataVencimento: "2023-1-5",
		ValorNota: 2400.00,
		DocumentoNotaFiscal: 963852,
		DocumentoBoletoBancario: 741258,
		StatusNota: "Pagamento em atraso"
	},
	
	{
		NomePagador: "Carolina Alves",
		NumIdNota: "139",
		DataEmissaoNota: "2024-1-2",
		DataCobranca: null,
		DataPagamento: "2024-1-15",
		DataVencimento: "2024-1-25",
		ValorNota: 2600.00,
		DocumentoNotaFiscal: 852963,
		DocumentoBoletoBancario: 369852,
		StatusNota: "Pagamento realizado"
	},
	
	{
		NomePagador: "Thiago Silva",
		NumIdNota: "140",
		DataEmissaoNota: "2024-02-01",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2024-02-16",
		ValorNota: 2700.00,
		DocumentoNotaFiscal: 741258,
		DocumentoBoletoBancario: 159753,
		StatusNota: "Emitida"
	},
	{
		NomePagador: "Marina Silva",
		NumIdNota: "141",
		DataEmissaoNota: "2023-05-10",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-05-15",
		ValorNota: 4200.50,
		DocumentoNotaFiscal: 772518,
		DocumentoBoletoBancario: 133815,
		StatusNota: "Pagamento em atraso"
	},
	{
		NomePagador: "Lucas Oliveira",
		NumIdNota: "142",
		DataEmissaoNota: "2023-06-05",
		DataCobranca: "2023-06-10",
		DataPagamento: null,
		DataVencimento: "2023-06-15",
		ValorNota: 3200.25,
		DocumentoNotaFiscal: 772519,
		DocumentoBoletoBancario: 133816,
		StatusNota: "Cobrança realizada"
	},
	{
		NomePagador: "Ana Costa",
		NumIdNota: "143",
		DataEmissaoNota: "2023-06-20",
		DataCobranca: null,
		DataPagamento: "2023-07-05",
		DataVencimento: "2023-06-25",
		ValorNota: 2900.80,
		DocumentoNotaFiscal: 772520,
		DocumentoBoletoBancario: 133817,
		StatusNota: "Pagamento realizado"
	},
	{
		NomePagador: "Rafael Santos",
		NumIdNota: "144",
		DataEmissaoNota: "2023-07-01",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-07-10",
		ValorNota: 4500.00,
		DocumentoNotaFiscal: 772521,
		DocumentoBoletoBancario: 133818,
		StatusNota: "Pagamento em atraso"
	},
	{
		NomePagador: "Juliana Lima",
		NumIdNota: "145",
		DataEmissaoNota: "2023-07-15",
		DataCobranca: "2023-07-20",
		DataPagamento: null,
		DataVencimento: "2023-07-25",
		ValorNota: 3700.50,
		DocumentoNotaFiscal: 772522,
		DocumentoBoletoBancario: 133819,
		StatusNota: "Cobrança realizada"
	},
	{
		NomePagador: "Mateus Oliveira",
		NumIdNota: "146",
		DataEmissaoNota: "2023-08-05",
		DataCobranca: null,
		DataPagamento: "2023-08-15",
		DataVencimento: "2023-08-10",
		ValorNota: 2800.25,
		DocumentoNotaFiscal: 772523,
		DocumentoBoletoBancario: 133820,
		StatusNota: "Pagamento realizado"
	},
	{
		NomePagador: "Carla Silva",
		NumIdNota: "147",
		DataEmissaoNota: "2023-08-20",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-08-25",
		ValorNota: 3200.75,
		DocumentoNotaFiscal: 772524,
		DocumentoBoletoBancario: 133821,
		StatusNota: "Pagamento em atraso"
	},
	{
		NomePagador: "Pedro Costa",
		NumIdNota: "148",
		DataEmissaoNota: "2023-09-10",
		DataCobranca: "2023-09-20",
		DataPagamento: null,
		DataVencimento: "2023-09-15",
		ValorNota: 4100.50,
		DocumentoNotaFiscal: 772525,
		DocumentoBoletoBancario: 133822,
		StatusNota: "Cobrança realizada"
	},
	{
		NomePagador: "Juliana Oliveira",
		NumIdNota: "149",
		DataEmissaoNota: "2023-09-25",
		DataCobranca: null,
		DataPagamento: "2023-10-05",
		DataVencimento: "2023-09-30",
		ValorNota: 3800.00,
		DocumentoNotaFiscal: 772526,
		DocumentoBoletoBancario: 133823,
		StatusNota: "Pagamento realizado"
	},
	{
		NomePagador: "Fernando Costa",
		NumIdNota: "150",
		DataEmissaoNota: "2023-10-05",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-10-15",
		ValorNota: 4500.25,
		DocumentoNotaFiscal: 772527,
		DocumentoBoletoBancario: 133824,
		StatusNota: "Pagamento em atraso"
	},
	{
		NomePagador: "Laura Santos",
		NumIdNota: "151",
		DataEmissaoNota: "2023-10-20",
		DataCobranca: "2023-10-25",
		DataPagamento: null,
		DataVencimento: "2023-10-30",
		ValorNota: 3100.80,
		DocumentoNotaFiscal: 772528,
		DocumentoBoletoBancario: 133825,
		StatusNota: "Cobrança realizada"
	},
	{
		NomePagador: "Lucas Lima",
		NumIdNota: "152",
		DataEmissaoNota: "2023-11-05",
		DataCobranca: null,
		DataPagamento: "2023-11-10",
		DataVencimento: "2023-11-15",
		ValorNota: 4200.00,
		DocumentoNotaFiscal: 772529,
		DocumentoBoletoBancario: 133826,
		StatusNota: "Pagamento realizado"
	},
	{
		NomePagador: "Marcela Oliveira",
		NumIdNota: "153",
		DataEmissaoNota: "2023-11-20",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2023-11-25",
		ValorNota: 3300.50,
		DocumentoNotaFiscal: 772530,
		DocumentoBoletoBancario: 133827,
		StatusNota: "Pagamento em atraso"
	},
	{
		NomePagador: "Ana Santos",
		NumIdNota: "154",
		DataEmissaoNota: "2023-12-05",
		DataCobranca: "2023-12-10",
		DataPagamento: null,
		DataVencimento: "2023-12-15",
		ValorNota: 3600.25,
		DocumentoNotaFiscal: 772531,
		DocumentoBoletoBancario: 133828,
		StatusNota: "Cobrança realizada"
	},
	{
		NomePagador: "Lucas Oliveira",
		NumIdNota: "155",
		DataEmissaoNota: "2023-12-20",
		DataCobranca: null,
		DataPagamento: "2023-12-25",
		DataVencimento: "2023-12-30",
		ValorNota: 4800.00,
		DocumentoNotaFiscal: 772532,
		DocumentoBoletoBancario: 133829,
		StatusNota: "Pagamento realizado"
	},
	{
		NomePagador: "Pedro Lima",
		NumIdNota: "156",
		DataEmissaoNota: "2024-01-05",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2024-01-10",
		ValorNota: 3900.75,
		DocumentoNotaFiscal: 772533,
		DocumentoBoletoBancario: 133830,
		StatusNota: "Pagamento em atraso"
	},
	{
		NomePagador: "Carla Santos",
		NumIdNota: "157",
		DataEmissaoNota: "2024-01-20",
		DataCobranca: "2024-01-25",
		DataPagamento: null,
		DataVencimento: "2024-01-30",
		ValorNota: 3500.50,
		DocumentoNotaFiscal: 772534,
		DocumentoBoletoBancario: 133831,
		StatusNota: "Cobrança realizada"
	},
	{
		NomePagador: "Ana Oliveira",
		NumIdNota: "158",
		DataEmissaoNota: "2024-02-05",
		DataCobranca: null,
		DataPagamento: "2024-02-10",
		DataVencimento: "2024-02-15",
		ValorNota: 3700.00,
		DocumentoNotaFiscal: 772535,
		DocumentoBoletoBancario: 133832,
		StatusNota: "Pagamento realizado"
	},
	{
		NomePagador: "Marina Lima",
		NumIdNota: "159",
		DataEmissaoNota: "2024-02-16",
		DataCobranca: null,
		DataPagamento: null,
		DataVencimento: "2024-02-20",
		ValorNota: 4400.25,
		DocumentoNotaFiscal: 772536,
		DocumentoBoletoBancario: 133833,
		StatusNota: "Pagamento em atraso"
	}
];


const formatarData = function(data)
{
	if(data == null) return '';

    data = new Date(data);

    const [dia, mes, ano] = [
        data.getDate(),
        data.getMonth(),
        data.getFullYear(),
    ];

    return dia+'/'+(mes + 1)+'/'+ano;
}

const formatarDinheiro = function(valor)
{
	if(valor == null) return '';
	
    let real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    return real.format(valor);
}

const calcularDiferencaEntreDatas = function(data1, data2){
	data1 = new Date(data1);
	data2 = new Date(data2);
	const diferencaEmTempo = Math.abs(data1 - data2);
	const diferencaEmDias = Math.ceil(diferencaEmTempo / (1000 * 60 * 60 * 24)); 

	return diferencaEmDias;
}

const pegarNomeMes = function(mesNumero, short = false)
{
	const data = new Date();
	data.setMonth(mesNumero - 1);
	  
	return data.toLocaleString('default', { month: (short ? 'short' : 'long') });
}