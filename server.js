const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

/* ======================
   MYSQL CONNECTION
====================== */

const db = mysql.createConnection({

host:"localhost",
user:"root",
password:"Sinchu@123",
database:"crm_db"

})

db.connect((err)=>{

if(err){
console.log("Database connection failed",err)
}
else{
console.log("MySQL Connected")
}

})

/* ======================
   LEADS APIs
====================== */

// GET all leads
app.get("/leads",(req,res)=>{

db.query("SELECT * FROM leads",(err,result)=>{

if(err) res.json(err)
else res.json(result)

})

})

// ADD new lead
app.post("/leads",(req,res)=>{

const {name,phone,status} = req.body

db.query(

"INSERT INTO leads (name,phone,status) VALUES (?,?,?)",

[name,phone,status],

(err,result)=>{

if(err) res.json(err)
else res.json(result)

}

)

})

// DELETE lead
app.delete("/leads/:id",(req,res)=>{

db.query(

"DELETE FROM leads WHERE id=?",

[req.params.id],

(err,result)=>{

if(err) res.json(err)
else res.json(result)

}

)

})

// UPDATE lead status (for Pipeline)
app.put("/leads/:id",(req,res)=>{

const {status} = req.body

db.query(

"UPDATE leads SET status=? WHERE id=?",

[status,req.params.id],

(err,result)=>{

if(err) res.json(err)
else res.json(result)

}

)

})

/* ======================
   OWNERS APIs
====================== */

app.get("/owners",(req,res)=>{

db.query("SELECT * FROM owners",(err,result)=>{

if(err) res.json(err)
else res.json(result)

})

})

app.post("/owners",(req,res)=>{

const {name,phone} = req.body

db.query(

"INSERT INTO owners (name,phone) VALUES (?,?)",

[name,phone],

(err,result)=>{

if(err) res.json(err)
else res.json(result)

}

)

})

/* ======================
   INVENTORY APIs
====================== */

app.get("/inventory",(req,res)=>{

db.query("SELECT * FROM inventory",(err,result)=>{

if(err) res.json(err)
else res.json(result)

})

})

app.post("/inventory",(req,res)=>{

const {property_name,location,price,owner_id} = req.body

db.query(

"INSERT INTO inventory (property_name,location,price,owner_id) VALUES (?,?,?,?)",

[property_name,location,price,owner_id],

(err,result)=>{

if(err) res.json(err)
else res.json(result)

}

)

})

/* ======================
   MESSAGES APIs
====================== */

app.get("/messages",(req,res)=>{

db.query("SELECT * FROM messages",(err,result)=>{

if(err) res.json(err)
else res.json(result)

})

})

app.post("/messages",(req,res)=>{

const {lead_id,message} = req.body

db.query(

"INSERT INTO messages (lead_id,message) VALUES (?,?)",

[lead_id,message],

(err,result)=>{

if(err) res.json(err)
else res.json(result)

}

)

})

/* ======================
   HISTORICAL APIs
====================== */

app.get("/historical",(req,res)=>{

db.query("SELECT * FROM historical",(err,result)=>{

if(err) res.json(err)
else res.json(result)

})

})

/* ======================
   SERVER
====================== */

app.listen(5000,()=>{

console.log("Server running on port 5000")

})