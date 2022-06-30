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
            let td=document.createElement('td')
            let text=document.createTextNode(key+' : '+elem[key])
            td.appendChild(text)
            tr.append(td)
        }
        table.append(tr)
        })
        
       
    });
    let tbody=document.querySelector('.table')
    tbody.append(table)
})()