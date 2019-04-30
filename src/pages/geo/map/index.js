import React, {Component} from 'react'
import leafletGeoJSON from 'leaflet'
import { Map as LeafletMap, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import "../../../_styles/components/map.scss"
import santanderGEOJSON from '../../../actions/services/Santander_Municipios_v1'



class Map extends Component {
    state = {
        map: [],
        active: []
    }

    componentDidMount() {
       /* console.log('MOUNT')
        console.log(this.state.active.properties)
        console.log(this.props.history)*/

    }

    componentDidUpdate() {
        /*console.log('UPDATE')
        console.log(this.state.active.properties)*/

    }

    handleClick = (e, feature) => {
        console.log(e)
        console.log(feature.properties)
        this.props.handleMapClick(feature)
    }

    onEachFeature = (feature, layer) => {
        layer.on('click', e => {
            this.handleClick(e, feature)

        })

    };

    render () {
        return (
            <LeafletMap
                center={[6.9809,-73.4683]}
                zoom={7.5}
                maxZoom={14}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <GeoJSON
                    key={1}
                    data={santanderGEOJSON}
                    onEachFeature={this.onEachFeature}
                    ref="geojson"
                />
                <TileLayer
                    url='https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
                />

                {/*<Marker position={[6.751896464843375,-73.46832275390626]}>
                    <Popup>
                        Popup for any custom information.
                    </Popup>
                </Marker>*/}
            </LeafletMap>
        )
    }


}
export default Map