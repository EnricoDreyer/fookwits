if not exists (select * from sysobjects where name='Order' and xtype='U')
BEGIN

 CREATE TABLE [dbo].[Order](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OrderItems] [varchar](255) NOT NULL,
	[UserId] [int] NOT NULL,	
	[TableNumber] [int] NOT NULL,

CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

END