let express = require("express");
const mongoose = require('mongoose')
const app =express(); 

const port = 8000;
const json =express.json();
app.use(json)

app.listen(port, ()=> console.log(`server is listening port ${port}`));

(async () => {
  await mongoose.connect('mongodb://localhost:27017/userproject')
}
)()

const staticFiles = express.static('./front')
app.use(staticFiles)

const {
    getContactsController,
    postContactsController,
    deleteContactsController,
    putContactsController
  } = require("./controllers/control.js");


app.get('/contacts', getContactsController);
app.post('/contacts', postContactsController);
app.delete('/contacts',deleteContactsController);
app.put('/contacts', putContactsController);