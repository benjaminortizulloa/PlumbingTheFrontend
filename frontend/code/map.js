// LEARN MORE: https://observablehq.com/@d3/u-s-map

const projection = d3.geoAlbersUsa().scale(1300).translate([487.5, 305])
let path = d3.geoPath().projection(projection)

let svg = d3.select('body')
    .append('section')
    .append('svg')
    .style('height', '100%')
    .attr('viewBox', '0 0 975 610')

let g = svg
    .append('g')
    .attr('fill', 'transparent')
    .attr('stroke', '#000')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', "round")

let statePaths = g.selectAll("path")
    .data(states.features)
    .enter().append("path")
    .attr('d', path)
    .on('mouseover', function (d) {
        d3.select(this).attr('stroke', 'blue').attr('stroke-width', '3').raise()
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('stroke', 'black').attr('stroke-width', '1')
    })

let colors = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928']

function createPalette(items) {
    let iter = Math.round(colors.length / items.length)
    let pal = {}
    items.map((d, i) => pal[d] = colors[i * iter])

    return pal
}

let regions = ['South', 'West', 'Northeast', 'North Central']
let regionPal = createPalette(regions)

let division = ['East South Central', 'Pacific', 'Mountain', 'West South Central', 'New England', 'South Atlantic', 'East North Central', 'West North Central', 'Middle Atlantic']
let divisionPal = createPalette(division)


function mergeData(data) {
    states.features = states.features.map(state => {
        let newProperty = data.data.filter(d => d.name == state.properties.name)
        if (newProperty.length) {
            state.properties = newProperty[0];
        }
        return (state)
    })



    statePaths.attr('fill', d => regionPal[d.properties.region])
}