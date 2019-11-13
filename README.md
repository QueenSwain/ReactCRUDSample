# ReactCRUDSample

## CRUD operations using Reactjs and Asp Net Core.


**Note:**
Before proceeding with the application development.

Install Visual Studio 2017/2019 include .Net Core 2.0

Install Node.js and npm

**Step 1 :**
Create Database 'UserDB'.Now,Run the bellow query to create Table 'User'.
```
USE [UserDB]
GO
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
```

**Step 2 :**
Create dotnet core  application using react.js template.
Open Visual Studio->Create New Project->ASp.Net Core Web Application->Give name of your Solution and project->Choose Version and Project Template as React.js

**Step 3 :**
To connect with database(Get/Post of Data) run the bellow command 
Go to Visual Studio ->Tool->Nuget Package Managerment->Package Manager Console
```
Install-Package Microsoft.EntityFrameworkCore.SqlServer -Version 2.1.11
```
```
Install-Package Microsoft.EntityFrameworkCore.Design -Version 2.1.11
```
```
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 2.1.11
```
```
Scaffold-DbContext "Data Source=ServerName;Initial Catalog=UserDB;Integrated Security=True" Microsoft.
 EntityFrameworkCore.SqlServer -OutputDir Models-Tables User
```

**Step 4 :**
To perform Get/Post/Edit/Delete action in database layer,
Create a Data Access Layer in the Models->Add->Class named as 'UserDAL.cs'.

**Step 5 :**
To make interaction between UserDAL and ReactJs, create a WebAPIController name as UserController.cs under Controller->Add->New Item->API Controller Class

**Step 6:**
Create 2 reactjs(named as AddNewUser.tsx and UserList.tsx) Components under Solution Explorer->Project->ClientApp->src->components->Add->New Item->Type Script JSX file.

**Step 7:**
To set the Route,Go to App.js and add the created components(AddNewUser and UserList) to perform the actions.

**Step 8:**
Add the Navigation Menu(Register User and UserList) under NavMenu.js

**Step 9:**
Now run the application to see the output.

After run,bellow are the output of the Application-

1.User Registration

![enter image description here](https://lh3.googleusercontent.com/D9iuaWGOL0ahJ_AJsbgRlAdSs88J-Otgnq408YBsfj5vZEUFrS-59m1SovyGeW7kNxEW3TmXDBXtcQ "UserRegistration")

2.User List

![enter image description here](https://lh3.googleusercontent.com/9ovmm4U2kBLf2CFhH0Z8jXym_ZB1r8Im3h5o8BdBEvEb6Ym823s_-xcJryvaFVrNTE23UnWlJD2d7w "UserList")

3.Edit User

![enter image description here](https://lh3.googleusercontent.com/rhdXfyyYi6lIMEhLgOQjaazb0wMOjPJW1BvxtZAAV7s3XsT6ZKJIgWTPVf9YVMeQidVbG-DYexPsFQ "Delete User")


4.Delete User

![enter image description here](https://lh3.googleusercontent.com/rhdXfyyYi6lIMEhLgOQjaazb0wMOjPJW1BvxtZAAV7s3XsT6ZKJIgWTPVf9YVMeQidVbG-DYexPsFQ "DeleteUser")

