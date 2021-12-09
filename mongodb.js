// CRUD
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log("Unable to connect to data base")

    }
    console.log("connected successfully")

    const db = client.db(databaseName)

    // CREATE

    // db.collection('users').insertOne({
    //     name : 'Praveen Kumar',
    //     age : 30
    // }),(error,result) => {
    //     if(error){
    //         return console.log("Unable to insert User")
    //     }
    //     console.log(result)
    // }

    // db.collection('users').insertMany([
    //     {
    //         name: 'Praveen Kumar',
    //         age: 30
    //     }, {
    //         name: 'Praveen',
    //         age: 32
    //     }]), (error, result) => {
    //         if (error) {
    //             return console.log("Unable to insert User")
    //         }
    //         console.log(result)
    //     }


    // READ

    // db.collection('users').findOne({ name: 'Praveen' }), (error, user) => {
    //     if (error) {
    //         return console.log("Unable to insert User")
    //     }
    //     console.log(user)
    // }
    // db.collection('users').find({ name: 'Praveen' }).toArray((error, user) => {
    //     console.log(user)
    // })
    // db.collection('users').find({ name: 'Praveen' }).count((error, count) => {
    //     console.log(count)
    // })

    // UPDATE
    // const updatePromise = db.collection('users').updateOne({
    //     _id : new ObjectId('61b203667821476c3d0e7ae0')
    // },{
    //     $set :{
    //         name : 'Bhanu'
    //     }
    // })

    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('users').updateOne({
        _id : new ObjectId('61b203667821476c3d0e7ae0')
    },{
        $set :{
            name : 'Bhanu'
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })


    // DELETE

    db.collection('users').deleteMany({
        name : 'Praveen'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})