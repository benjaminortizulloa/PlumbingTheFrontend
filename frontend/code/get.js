axios({
        url: 'https://hungry-hamilton-4871a5.netlify.app/states',
        method: "GET"
    })
    .then(response => {
        mergeData(response)
    })
    .catch(err => console.log('err', err))