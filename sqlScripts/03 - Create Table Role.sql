if not exists (select * from sysobjects where name='Roles' and xtype='U')
BEGIN

 CREATE TABLE [dbo].[Roles](
	[Id] [int] NOT NULL,
	[Role] [varchar](64) NOT NULL,

CONSTRAINT [PK_MentorSessionStatus] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]

) ON [PRIMARY]

END