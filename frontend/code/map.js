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

g.selectAll("path")
    .data(states.features)
    .enter().append("path")
    .attr('d', path)
    .on('mouseover', function (d) {
        d3.select(this).attr('stroke', 'blue').attr('stroke-width', '3').raise()
    })
    .on('mouseout', function (d) {
        d3.select(this).attr('stroke', 'black').attr('stroke-width', '1')
    })