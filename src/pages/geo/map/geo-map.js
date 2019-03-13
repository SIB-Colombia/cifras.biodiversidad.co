import React, {Component, Fragment} from 'react'
import "../../../_styles/components/map.scss"
import MapSvg from "./map-svg";
import d3 from 'd3'
import topoJson from "./santander-topo"

class GeoMap extends Component {
    componentDidMount () {

    }
    drawMap () {
        const projection = d3
            .geoMercator()
            .scale(16000)
            .center( [-73.390, 6.718] )

        const path = d3.geoPath().projection(projection);

        const map = d3.select("#map")
            .append("svg")
            .attr("width", 450)
            .attr("height", 450)

        d3.json(topoJson, this.drawMap)

        map.selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("d", path)  //パスジェネレーターを使ってd属性の値を生成している
            .attr("fill", "green")
            .attr("fill-opacity", 0.5)
            .attr("stroke", "#222");
    }

    render () {
        return (
            <Fragment>
                <div id="map">

                </div>
            </Fragment>
        )
    }
}
export default GeoMap