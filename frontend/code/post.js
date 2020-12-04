function makeSuggstion(state, newRegion, user) {
    axios({
            url: 'https://helloworld-yrm72n47jq-ue.a.run.app/suggestion',
            method: "POST",
            data: {
                state: state,
                newRegion: newRegion,
                user: user
            }
        })
        .then(response => {
            alert("Thank you for your suggestion")
            modal.style('display', 'none')
        })
        .catch(err => console.log('err', err))
}

send.on('click', function () {
    let state = title.html()
    let newRegion = regionSelect.property('value')
    let user = userInput.property('value')
    console.log(state + newRegion + user)
    makeSuggstion(state, newRegion, user)
})