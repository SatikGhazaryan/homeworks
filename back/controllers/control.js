//const contacts = require("./contacts.js");
//const User = require("../schemas/contacts");
const contacts =require("../schemas/contacts")
async function getContactsController(req, res){
    const contact = await contacts.find()
    res.send([
        {
            data:contact
        }
    ])
}
async function postContactsController(req,res){
    console.log(contacts)
    const contactBody=req.body;
    console.log(contactBody)
   await contacts.create(contactBody)
}

async function deleteContactsController(req,res){
    const contact = await contacts.find()
    contact.forEach((elem)=>{if(elem.age===37){elem.delete()}})
    
}

async function putContactsController(req, res){
    const contact = await contacts.find()
    contact.forEach((elem)=>{if(elem.age===37){elem.age=38}; console.log(contact);})
    await contacts.create(contact)
}
module.exports = {
    getContactsController,
    postContactsController,
    deleteContactsController,
    putContactsController
  };