import React, {Component} from 'react'
import "../../../_styles/components/map.scss"
import MapSvg from "./map-svg";
import GeoMap from "./geo-map";

class Map extends Component {
    componentDidMount () {

    }

    render () {
        return (
            <div>
                <MapSvg/>
            </div>
        )
    }
}
export default Map