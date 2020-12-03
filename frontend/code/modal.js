let modal = d3.select('body')
    .append('section')
    .style('background-color', 'rgba(255, 255, 255, .75)')
    .style('display', 'none')

let form = modal.append('div')
    .style('height', '50%')
    .style('width', '50%')
    .style('background-color', 'white')
    .style('border', '3px solid black')

let title = form.append('p').style('text-align', 'center').style('font-size', '5vh').html('title')

let regionSelectGroup = form.append('div').style('display', 'flex').style('justify-content', 'center').style('align-items', 'center')

regionSelectGroup.append('label').html('New Region')

let regionSelect = regionSelectGroup.append('select')

regionSelect.selectAll('option').data(regions).enter().append('option').attr('value', d => d).html(d => d)

regionSelectGroup.selectAll('*').style('font-size', '3vh').style('margin', '5px')

let userInputGroup = form.append('div').style('display', 'flex').style('justify-content', 'center').style('align-items', 'center')

userInputGroup.append('label').html('Username')

let userInput = userInputGroup.append('input')

userInputGroup.selectAll('*').style('font-size', '3vh').style('margin', '5px')

let buttons = form.append('div').style('display', 'flex').style('justify-content', 'center')

let close = buttons
    .append('button')
    .html('close')
    .on('click', function () {
        modal.style('display', 'none')
    })

let send = buttons
    .append('button')
    .html('send')

buttons.selectAll('button')
    .style('font-size', '3vh')
    .style('margin', '5px')

function openModal(state) {
    modal.style('display', 'flex')
    title.html(state.name)
    regionSelect.property('value', state.region)
}

statePaths.on('click', function (d) {
    openModal(d3.select(this).data()[0].properties)
})