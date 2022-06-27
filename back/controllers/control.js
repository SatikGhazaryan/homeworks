//const contacts = require("./contacts.js");
const contacts =require("../schemas/contacts")
function getContactsController(req, res){
    res.send([
        {
            data:contacts
        }
    ])
}
function postContactsController(req,res){
    console.log(contacts)
    const contactBody=req.body;
    console.log(contactBody)
   
}

function deleteContactsController(req,res){
    contacts.shift()
}

function putContactsController(req, res){
    contacts=contacts.forEach(element => {
        if(element.id===3){
            element.id=4
        }
    });
}
module.exports = {
    getContactsController,
    postContactsController,
    deleteContactsController,
    putContactsController
  };