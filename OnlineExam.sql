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
Password varchar(100),
LastLogin Datetime,
OTP nvarchar(20) default NULL,
ActivetionCode uniqueidentifier default NULL
)
alter table Student drop column EmailVerification,OTP,ActivetionCode

drop table student
select * from student
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

drop table TestFile

create table Admin
(
AdminId int primary key identity,
Email varchar(30),
Password varchar(30)
)

select * from student
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

select * from reportcard

-----------------------------------------------------

create table Question
(
QID int primary key identity,
Qsn varchar(200),
Opt1 varchar(200),
Opt2 varchar(200),
Opt3 varchar(200),
Opt4 varchar(200),
Answer varchar(200),
Level varchar(5),
FileName varchar(30),
SubjectId int FOREIGN KEY REFERENCES TestSubject(SubjectID)

)

drop table Question
select * from Question
select * from testsubject
truncate table question

	
select QID from Question
select * from testsubject
truncate table testSubject

select * from student


delete from testSubject 
where subjectid=2


	

create or alter proc fetchqusn
as
begin
select * from question
end

select * from student


-------------sp for updating password-------
create proc sp_UpdatePassword(@otp varchar(20),@Password varchar(50))
	as
	begin 
	update Student set Password=@Password where OTP=@otp
	update Student set OTP=NUll where OTP=@otp
	end


	-------------------------
	
			select * from ReportCard
			drop table reportcard
			select * from TestSubject


--------------------------------------

create or alter proc fetchSubject
as
begin
select * from TestSubject
end