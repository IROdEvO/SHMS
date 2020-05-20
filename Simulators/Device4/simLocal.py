# Python code to illustrate 
# inserting data in MongoDB 
import pymongo
from datetime import datetime
import threading
import random


client = pymongo.MongoClient()
# database 
db = client.shms 

# Created or Switched to collection names: my_gfg_collection 
collection = db.vitalrecords

WAIT_SECONDS = 10

def senddata():

    vitalrecord = { 
            "Temperature" : random.randint(20, 100),
            "Pulse" : random.randint(50, 150),
            "EmergencyButtonPressed" : "No",
            "DeviceID" : "d4",
            "Timestamp" : datetime.now()
            } 

    # Insert Data 
    rec_id1 = collection.insert_one(vitalrecord)  

    print("Data inserted with record ids",rec_id1) 

    # Printing the data inserted 
   # cursor = collection.find() 
    #for record in cursor: 
     #   print(record) 

    threading.Timer(WAIT_SECONDS,senddata).start()

senddata()