axios({
        url: 'http://localhost:3000/states',
        method: "GET"
    })
    .then(response => {
        mergeData(response)
    })
    .catch(err => console.log('err', err))