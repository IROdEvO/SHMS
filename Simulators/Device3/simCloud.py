# Python code to illustrate 
# inserting data in MongoDB 
import pymongo
from datetime import datetime
import threading
import random

client = pymongo.MongoClient("mongodb+srv://shms:LwiRHVe1Ht6V7Otf@cluster0-xivfn.mongodb.net/test?retryWrites=true&w=majority")

# database 
db = client.SHMS 

# Created or Switched to collection names: my_gfg_collection 
collection = db.vitalrecords

WAIT_SECONDS = 10

def values():
	values.temp = random.randint(0,100)
	values.pulse = random.randint(0,150)
	if values.temp > 100 or values.pulse > 100 :
		values.condition = "WARNING"
	elif values.temp > 100 and values.pulse > 100:
		values.condition = "CRITICAL"
	elif values.temp < 10 or values.pulse <30:
		values.condition = "WARNING"
	elif values.temp < 10 and values.pulse <30:
		values.condition = "CRITICAL"
	else : values.condition = "OK"

	threading.Timer(WAIT_SECONDS,values).start()
values()


def senddata():

    vitalrecord = {
            	"Temperature" : values.temp,
           	"Pulse" : values.pulse,
            	"EmergencyButtonPressed" : "No",
            	"DeviceID" : "d3",
		"Condition" : values.condition,
            	"Timestamp" : datetime.now()
            	} 

    # Insert Data
    rec_id = collection.insert_one(vitalrecord)  

    print("Data inserted with record ids",rec_id)

    threading.Timer(WAIT_SECONDS,senddata).start()

senddata()
