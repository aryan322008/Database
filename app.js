const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/communityDB")

//fruit colletion
const fruitSchema = mongoose.Schema({
    fruit_id:Number,
    name:String,
})

const fruit  = mongoose.model("fruit",fruitSchema);

const fruitUnit1 =  new fruit({
    fruit_id:1,
    name:"DragonFruit"
});


const communitySchema = mongoose.Schema({
    id:Number,
    first_name : String,
    last_name : {
        type: String,
        required: true
    },
    age:Number,
    favouriteFruit:fruitSchema
})

const communityCollection = mongoose.model("communityCollection",communitySchema);

const communityDoc1 =  new communityCollection({
    id:1,
    first_name:"Aryan",
    last_name:"Gavale",
    age:15,
    favouriteFruit:fruitUnit1
});
const communityDoc2 =  new communityCollection({
    id:2,
    first_name:"Rani",
    last_name:"Lidbe",
    age:24
});
const communityDoc3 =  new communityCollection({
    id:3,
    first_name:"palash",
    last_name:"Udan",
    age:17
});
const communityFruit =  new communityCollection({
    id:4,
    last_name:"Jobs",
    age:70
});

// -----Different syntaxes

// communityFruit.save()

// create 
communityCollection.insertMany([communityDoc1,communityDoc2,communityDoc3], err =>{
    if(!err){console.log("successfully done")}
})

//communityCollection.find,findOne,FindMany

// -----Different syntaxes


//read
communityCollection.find((err, docs) => {
    
    docs.forEach(element => {
        console.log(element.first_name,element.last_name)
    });

    // mongoose.connection.close() //it is an async func which means it will execute all code below it and then closes the connection

});

//update
communityCollection.updateOne({_id: "637dec586e3ca5517953c22c"},{first_name:"Pixar"},(err)=>{
    if(err){
        console.log("hello" + err)
    }else{
        console.log("succefully done")
    }
})

//delete
// communityCollection.deleteMany({})

// fruitUnit.save(