let suggestions = d3.select('header')
    .append('button')
    .attr('class', 'nav')
    .style("font-size", "3vh")
    .style('display', 'none')
    .html('Suggestions')
    .on('click', function () {
        window.location.href = '/suggestions'
    })

let login = d3.select('header')
    .append('button')
    .attr('class', 'nav')
    .style("font-size", "3vh")

if (document.cookie) {
    login.on('click', function () {
        window.location.href = '/'
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=localhost;";
    }).html('Logout')

    suggestions.style('display', 'inline')
} else {
    login.on('click', function () {
        window.location.href = 'http://github.com/login/oauth/authorize?client_id=b823783bcb81ca97c4b9'
    }).html('Login')
}