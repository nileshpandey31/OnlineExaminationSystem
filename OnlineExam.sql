Create database OnlineExam

USE OnlineExam

create table Student
(
StudentId int primary key identity,
Name varchar(30),
Mobile varchar(20),
Email varchar(40),
DOB date,
College varchar(20),
City varchar(20),
State varchar(20),
Qualifacton varchar(20),
YearOfCompletion varchar(20) DEFAULT NULL,
Password varchar(20),
LastLogin Datetime
)


create table TestSubject
(
SubjectId int primary key identity,
Subject varchar(20),
TotalMark int,
PassingMark int,
ExamDuration int,
TStatus varchar(20)
)

create table ReportCard
(
ReportId int primary key identity,
StudentId int FOREIGN KEY REFERENCES Student(StudentId),
SubjectID int FOREIGN KEY REFERENCES TestSubject(SubjectID),
PresentLevel int,
Marks int,
RStatus varchar(20),
ExamDate datetime
)

create table TestFile
(
FileId int primary key identity,
Path varchar(30),
Level int,
SubjectId int FOREIGN KEY REFERENCES TestSubject(SubjectId),
)


create table Admin
(
AdminId int primary key identity,
Email varchar(30),
Password varchar(30)
)

select * from Student
select * from ReportCard
select * from TestSubject
select * from TestFile
select * from Admin


--------------Insert in student table--------------

insert into student
values('nilesh','4865983','n@p.com','10/21/1998','TVM','boisar','maharashtra','BE','2020','123456789','2/4/2020')

insert into student
values('pandey','4865983','a@b.com','12/10/1998','mhss','mumbai','maharashtra','BE','2010','123456789','2/5/2020')

----------------Insert into subject table-----------------

insert into TestSubject
values('pyhton','100','35','120','enable')

insert into TestSubject
values('java','100','35','120','disable')

---------------Insert into TestFile---------------------

insert into TestFile
values('c\file\file1.xls',1,1)

insert into TestFile
values('c\file\file2.xls',2,1)


--this will throw foreign key exception
insert into TestFile
values('c\file\file1.xls',1,3)


-----------insert into ReportCard--------------

insert into ReportCard
values(1,2,1,25,'fail','10/04/2020')

insert into ReportCard
values(2,2,1,55,'pass','09/04/2020')


-----------below queries will throw exception--------------
insert into ReportCard
values(3,2,1,25,'fail','10/04/2020')

insert into ReportCard
values(1,3,1,25,'fail','10/04/2020')











