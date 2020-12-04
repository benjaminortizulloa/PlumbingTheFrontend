axios({
        url: 'https://helloworld-yrm72n47jq-ue.a.run.app/states',
        method: "GET"
    })
    .then(response => {
        mergeData(response)
    })
    .catch(err => console.log('err', err))