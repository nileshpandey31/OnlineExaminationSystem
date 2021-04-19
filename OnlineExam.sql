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
SLevel int,
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
			select  from student
			select * from ReportCard
			

			select * from TestSubject

--------------------------------------

create or alter proc fetchSubject
as
begin
select * from TestSubject
end


create table LevelTable
(
Lid int primary key identity,
SubjectId int FOREIGN KEY REFERENCES TestSubject(SubjectId),
StudentId  int Foreign key references Student(StudentId),
Level int
)

select * from level

create or alter proc fetchLevel
as
begin
select * from leveltable		
end


--------store procedure to update level

create or alter proc sp_UpdateLevel(@Lid int,@Level int)
	as
	begin 
	update LevelTable set Level=@Level where  Lid=@Lid
	
	end

	insert into leveltable
	values(1002,1,0)
	insert into leveltable
	values(1002,2,0)
		
	select * from leveltable
	truncate table leveltable
	select * from question
	select * from student


	-------------------------------
	create or alter proc fectchStudent
	as
	begin
	select * from student
	end


	select * from leveltable
	select * from question
	truncate table question

	ALTER TABLE Question
ALTER COLUMN Level int;

select * from testsubject
delete from testsubject
where SubjectId=1005

select * from testsubject

update testsubject
set TStatus='enable'
where SubjectId=1002



select * from student



select * from ReportCard
select * from testsubject
select * from leveltable

create or alter view
select * from student INNER JOIN ReportCard on student.studentid=reportcard.studentid where reportcard.rstatus='pass'
select * from student INNER JOIN ReportCard on student.studentid=reportcard.studentid inner join testsubject on testsubject.subjectid=reportcard.subjectid where reportcard.rstatus='pass'


-----------------------store procedure for report on user page

create or alter proc myReport(@sid int)
as
begin
select TestSubject.Subject,ReportCard.SLevel,ReportCard.Marks from ReportCard inner join TestSubject on TestSubject.SubjectId=ReportCard.SubjectID where ReportCard.RStatus='Pass' and ReportCard.StudentId=@sid
end

-----------------------
truncate table leveltable
truncate table ReportCard

select * from reportcard
select * from leveltable

select * from testsubject
select * from student

select testsubject.Subject,ReportCard.slevel,ReportCard.Marks from student INNER JOIN ReportCard on student.studentid=reportcard.studentid inner join testsubject on testsubject.subjectid=reportcard.subjectid where reportcard.rstatus='pass' and reportcard.StudentId=5

select * from testsubject
select * from ReportCard

select TestSubject.Subject,ReportCard.SLevel,ReportCard.Marks from ReportCard inner join TestSubject on TestSubject.SubjectId=ReportCard.SubjectID where ReportCard.RStatus='Pass' and ReportCard.StudentId=1

select * from leveltable


------sp for my level
create or alter proc MyLevel(@sid int)
as
begin
select TestSubject.Subject,LevelTable.Level from  TestSubject inner join LevelTable on TestSubject.SubjectId=LevelTable.SubjectId where LevelTable.StudentId=@sid
end
-----------------


------------sp for all report

create or alter proc allreport
as
begin
select s.studentid,s.name,t.subject,r.slevel,r.marks from student s inner join reportcard r on s.studentid=r.StudentId
inner join TestSubject t  on r.subjectid=t.subjectid where r.RStatus='Pass' 
end
-------------





-----------sp for all level

create or alter proc allevel
as
begin
select s.studentid,s.name,t.subject,l.level from student s inner join leveltable l on  s.studentid=l.studentid
inner join testsubject t on l.subjectid=l.subjectid where l.SubjectId=t.SubjectId;
end

---------


select * from leveltable
select * from reportcard

truncate table student
delete from student 
where studentid='6'


--------------------sp for fetching unique file name

create or alter proc unique_file_sp
as 
begin
select distinct(FileName),SubjectId from Question 
end


------------sp for updating subject
create or alter proc sp_UpdateSubject(@SubjectId int,@Subject varchar(20),@TotalMark int,@PassingMark int,@ExamDuration int,@TStatus varchar(20))
	as
	begin 
	update TestSubject set Subject=@Subject,TotalMark=@TotalMark, PassingMark=@PassingMark,ExamDuration=@ExamDuration,TStatus =@TStatus where SubjectId = @SubjectId
	end
	-----------

	select * from TestSubject