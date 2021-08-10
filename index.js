// Add your code here

function submitData(name, email) {
    const data = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({name, email})
    }

    return fetch("http://localhost:3000/users", data)
    .then(response => response.json())
    .then( (obj) =>  {
        document.body.innerHTML = obj[ "id" ];
        // const div = document.createElement('div');
        // div.appendChild(obj);
        // documennt.querySelect("body").append(div);
    })
    .catch(function(err) {
        document.body.innerHTML= err.message;
    })
}