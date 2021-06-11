const axios = require('axios');
const URL = `https://jsonplaceholder.typicode.com/users/`

async function getUser(id){
    const url  = `${URL}/${id}`
    const response = await axios.get(url);
    return response.data;
}

//TEST FUNCTION
/*getUser("")
.then(function(resultado){
    console.log(resultado)
}).catch(function(err){
    console.log("esse é o erro", err)
})*/

module.exports = {getUser}