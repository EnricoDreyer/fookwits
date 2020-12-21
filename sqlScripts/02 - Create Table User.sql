if not exists (select * from sysobjects where name='User' and xtype='U')
BEGIN

 CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [int] NOT NULL,	
	[ClockNum] [int] NOT NULL,
	[Name] [varchar](64) NOT NULL,
	[Surname] [varchar](64) NOT NULL,
	[Email] [varchar](64) NULL,
	[CellNumber] [varchar](64) NULL,
)

END