const mongo =require('mongodb');
const MongoClient=mongo.MongoClient;
const MongoURL="mongodb+srv://ad:root@airbnb.rvnpegk.mongodb.net/?appName=airbnb"

const mongoConnect= (callback)=>{
    MongoClient.connect(MongoURL).catch(err =>{
        console.log('Error while connecting:',err);
    })
}

module.exports=mongoConnect;
ini