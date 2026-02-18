const mongo =require('mongodb');
const MongoClient=mongo.MongoClient;
const MongoURL=""

const mongoConnect= (callback)=>{
    MongoClient.connect(MongoURL).catch(err =>{
        console.log('Error while connecting:',err);
    })
}

module.exports=mongoConnect;
ini
