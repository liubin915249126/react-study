function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}



function request(url,options){
    return fetch(url,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // credentials: 'include',
        ...options
    })
        .then(checkStatus)
        .then(parseJSON)
        .catch(e=>{
            console.log(e)
        })
};
export default request;