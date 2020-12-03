axios({
        url: 'http://localhost:3000/states',
        method: "GET"
    })
    .then(response => console.log(response))
    .catch(err => console.log('err', err))