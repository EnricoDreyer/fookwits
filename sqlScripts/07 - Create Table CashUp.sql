if not exists (select * from sysobjects where name='CashUp' and xtype='U')
BEGIN

 CREATE TABLE [dbo].[CashUp](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Total] [Float] NOT NULL,
	[CCTotal] [Float] NOT NULL,
	[CashTotal] [Float] NOT NULL,
	[Tips] [Float] NOT NULL,

CONSTRAINT [PK_CashUp] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

END