if not exists (select * from sysobjects where name='Item' and xtype='U')
BEGIN

 CREATE TABLE [dbo].[Item](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](100) NOT NULL,
	[Price] [Float] NOT NULL,
	[Tumbnail] 	varbinary(MAX) NULL,
	[Image] varbinary(MAX) NULL,

CONSTRAINT [PK_Item] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

END