# ReactCRUDSample
#CRUD operations using Reactjs and Asp Net Core.

Step 1 :
Create Database 'User'.Now,Run the bellow query to create Table 'User'.
----------------------------------------------------------------------------------------
USE [ApplicationDB]
GO
/****** Object:  Table [dbo].[User]    Script Date: 11/12/2019 12:35:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Address] [nvarchar](50) NULL,
	[PhoneNo] [nvarchar](50) NULL,
	[Country] [nvarchar](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
----------------------------------------------------------------------------------------

Step 2 :
Create dotnet core  application using reactjs template.

Step 3 :
To connect with database(Get/Post of Data) run the bellow command 
Go to Visual Studio ->Tool->Nuget Package Managerment->Package Manager Console

-Install-Package Microsoft.EntityFrameworkCore.SqlServer -Version 2.1.11
-Install-Package Microsoft.EntityFrameworkCore.Design -Version 2.1.11
-Install-Package Microsoft.EntityFrameworkCore.Tools -Version 2.1.11
-Scaffold-DbContext "Data Source=QUEEN-MACHINE\SQLEXPRESS01;Initial Catalog=ApplicationDB;Integrated Security=True" Microsoft.
 EntityFrameworkCore.SqlServer -OutputDir Models-Tables User

Step 4 :
To perform Get/Post/Edit/Delete action in database layer,
Create a Data Access Layer in the Models folder in Solution Explorer & then add a new class 'UserDAL.cs'.

Step 5 :
To make interaction between UserDAL and ReactJs, create a WebAPLController name as UserController.cs in Controller folder.

Step 6:
Create 2 reactjs(named as AddNewUser.tsx and UserLsit.tsx) Components under Solution Explorer->Project->ClientApp->src->components.

Step 7:
To set the Route,Go to App.js and add the newly created compents to perform the actions.

Step 8:
Add the Navigation Menu under NavMenu.js









