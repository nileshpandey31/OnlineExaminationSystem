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
YearOfCompletion int,
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

