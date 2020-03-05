create table userdetails(
UserID int,
First_Name varchar(25),
Last_Name varchar(25),
DOB date,
NIC varchar(12) unique,
Address_Line_One varchar(50),
Address_Line_Two varchar(50),
User_Type varchar(7),
constraint pk_userid primary key(UserID)
);

create table login_credentials(
User_Name varchar(25),
Password varchar(25),
Account_Type varchar(7),
UserID int unique not null,
NIC varchar(12) unique not null,
constraint pk_User_Name primary key(User_Name),
constraint fk_UserID foreign key(UserID) references userdetails(UserID),
constraint fk_NIC foreign key(NIC) references userdetails(NIC)
);

create table DoctorSpecific(
DoctorID int,
UserID int unique,
Area_Of_Expertise varchar(50),
Qualifications varchar(500),
Ward_No varchar(5),
constraint pk_DoctorSpecific primary key(DoctorID),
constraint fk_UserID_DoctorSpecific foreign key(UserID) references userdetails(UserID)
);

create table PatientSpecific(
PatientID int,
UserID int unique,
Patient_Type varchar(8),
Device_Id int,
Ward_No varchar(5),
constraint pk_PatientSpecific primary key(PatientID),
constraint fk_UserID_PatientSpecific foreign key(UserID) references userdetails(UserID)
);

create table Medical_Condition(
Condition_ID int,
Medical_Condition varchar(100),
Diagnosed_Date date,
Recovery_Status varchar(50),
Recovered_Date date,
PatientID int,
DoctorID int,
constraint pk_Medical_Condition primary key(Condition_ID),
constraint fk_PatientID foreign key(PatientID) references PatientSpecific(PatientID),
constraint fk_DoctorID foreign key(DoctorID) references DoctorSpecific(DoctorID)
);


