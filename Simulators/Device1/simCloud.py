# Python code to illustrate 
# inserting data in MongoDB 
import pymongo
from datetime import datetime
import threading
import random

client = pymongo.MongoClient("mongodb+srv://shms:LwiRHVe1Ht6V7Otf@cluster0-xivfn.mongodb.net/test?retryWrites=true&w=majority")

# database 
db = client.SHMS 

# Created or Switched to collection
collection = db.vitalrecords

WAIT_SECONDS = 10

def values():
	values.temp = round(random.uniform(30.51,44.51),2)
	values.pulse = random.randint(30,150)
	values.latitude = round(random.uniform(-90,90),4)
	values.longitude = round(random.uniform(-180,180),4)
	if values.temp<35.0 :
		values.tempcondition = "Hypothermia"
		values.alertstatus1 = "Critical"
	elif values.temp>=35 and values.temp<=37.5 :
		values.tempcondition = "Normal"
		values.alertstatus1 = "Stable"
	elif values.temp>37.5 and values.temp<40 :
		values.tempcondition = "Hyperthermia"
		values.alertstatus1 = "Warning"
	elif values.temp>=40 and values.temp<42 :
		values.tempcondition = "Hyperpyrexia"
		values.alertstatus1 = "Critical"
	elif values.temp>=42 :
		values.tempcondition = "Extreme Hyperpyrexia"
		values.alertstatus1 = "Emergency"

	if values.pulse>100:
		values.alertstatus2 = "Critical" 
	elif values.pulse >=60 and values.pulse <=100 :
		values.alertstatus2 = "Stable" 
	elif values.pulse >=40 and values.pulse<60 :
		values.alertstatus2 = "Warning" 
	elif values.pulse<40:
		values.alertstatus2 = "Critical" 

	
	if values.alertstatus1 == "Stable" and values.alertstatus2 == "Stable":
		values.alertstatus  = "Stable"

	if values.alertstatus1 == "Warning" and values.alertstatus2 == "Warning":
		values.alertstatus = "Warning"

	if values.alertstatus1 == "Critical" or values.alertstatus2 == "Critical":
		values.alertstatus = "Critical"	
	
	if values.alertstatus1 == "Emergency":
		values.alertstatus = "Emergency"

	 

	threading.Timer(WAIT_SECONDS,values).start()
values()


def senddata():

    vitalrecord = {
            	"Temperature" : values.temp,
           	"Pulse" : values.pulse,
            	"EmergencyButtonPressed" : "No",
            	"DeviceID" : "d1",
		"TempCondition" : values.tempcondition,
		"Status":values.alertstatus,
		"Lat":values.latitude,
		"Lng":values.longitude,
            	"Timestamp" : datetime.now()
            	} 

    # Insert Data
    rec_id = collection.insert_one(vitalrecord)  

    print("Data inserted with record ids",rec_id)

    threading.Timer(WAIT_SECONDS,senddata).start()

senddata()
