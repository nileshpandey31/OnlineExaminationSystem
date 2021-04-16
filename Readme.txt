on 13 april by nilesh

in addqusn component integrated excel to db part
integrated subject
fetched subject using service in drop down
in examomponent fetch n displayed subject grid on basis of subject stored in db



creted separte qusn info service.
created separate qusninfo module n add-sub module

------------------------------------------------------------------------------------

on 14 april

pull n jst add this store procedure query

create or alter proc fetchqusn
as
begin
select * from question
end


-------------------------------------------
16 april

create store procedure:

create or alter proc sp_UpdateLevel(@Lid int,@Level int)
	as
	begin 
	update LevelTable set Level=@Level where  Lid=@Lid
	
	end

---------
create or alter proc fectchStudent
	as
	begin
	select * from student
	end

---------
create or alter proc fetchLevel
as
begin
select * from leveltable		
end
---------
alter datatype of level in quesn table

	ALTER TABLE Question
ALTER COLUMN Level int;

-------
create leveltable table

create table LevelTable
(
Lid int primary key identity,
SubjectId int FOREIGN KEY REFERENCES TestSubject(SubjectId),
StudentId  int Foreign key references Student(StudentId),
Level int
)

----------------
create report table
create table ReportCard
(
ReportId int primary key identity,
StudentId int FOREIGN KEY REFERENCES Student(StudentId),
SubjectID int FOREIGN KEY REFERENCES TestSubject(SubjectID),
Marks int,
RStatus varchar(20),
ExamDate datetime
)

n runnnnnnnnnnnnnnnnnnnnnnn


