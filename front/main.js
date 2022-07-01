//console.log("ok")
(async()=>{
    const response = await fetch('http://127.0.0.1:8000/contacts', {
        method :'GET',
    })
    const body = await response.json();
    console.log(body);
    let table=document.createElement('table')
    body.forEach(element => {
        
        element.data.forEach(elem =>{ 
         let tr= document.createElement('tr')
           for (const key in elem) {
            if(key=='_id'|| key=='__v'){continue}
            else{
            let td=document.createElement('td')
            let text=document.createTextNode(key+' : '+elem[key])
            td.appendChild(text)
            tr.append(td)}
        }
        table.append(tr)
        })
        
       
    });
    let tbody=document.querySelector('.table')
    tbody.append(table)
})()

const saveContactBtn = document.getElementById('sub')
saveContactBtn.addEventListener('click', async () =>{
    const nameValue=document.getElementById('inpName').value
    const ageValue=document.getElementById('inpAge').value
    const requestBody={
        name:{nameValue},
        age:{ageValue}
    }
    console.log(requestBody);

const response = await fetch('http://127.0.0.1:8000/contacts', {
    method :'POST',
    body:JSON.stringify(requestBody),
    // heders:{
    //     'Content-Type': 'application/json',
    // }
})
});