import React, {Component} from 'react'
import {CRS} from 'leaflet';

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
       console.log('ACTIVE ID')
       console.log(this.props.activeId.id)

    }

    componentDidUpdate() {
        /*console.log('UPDATE')
        console.log(this.state.active.properties)*/

    }

    handleClick = (e, feature, layer) => {
        console.log(':::::Event:::::')
        console.log(e)
        console.log(':::::Feature:::::')
        console.log(feature.properties)
        console.log(':::::Layer:::::')
        console.log(layer.options)
        this.props.handleMapClick(feature)

    }
''
    onEachFeature = (feature, layer) => {
        if (layer.feature.properties.id === parseFloat(this.props.activeId.id)) {
            layer.setStyle({
                fillColor: '#00A8B4'
            });
            layer.on('mouseout', () => {
                layer.setStyle({
                    fillColor: '#00A8B4',
                });
            })
        }
        layer.on('mouseover', () => {
            layer.bindTooltip(feature.properties.county).openTooltip();
            layer.setStyle({
                fillColor: '#00A8B4',
            });
        })

        layer.on('mouseout', () => {
            layer.bindTooltip(feature.properties.county).closeTooltip();
            layer.setStyle({
                fillColor: '#C6DBDB',
            });
        })


        layer.on('click', e => {
            this.handleClick(e, feature, layer)
            layer.setStyle({
                fillColor: '#00A8B4'
            });
        })

            console.log(layer.feature.properties.id === parseFloat(this.props.activeId.id))

    }

    render () {
        return (
            <LeafletMap
                center={[6.9809,-73.4683]}
                zoom={7.5}
                maxZoom={14}
                minZoom={7}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                style={{"backgroundColor": "#fff"}}>
            >
                <GeoJSON
                    key={1}
                    data={santanderGEOJSON}
                    onEachFeature={this.onEachFeature}
                    ref="geojson"
                    fillColor={"#C6DBDB"}
                    fillOpacity={1}
                    opacity={1}
                    weight={1}
                    color={"#ffffff"}
                />
                <TileLayer
                    opacity={0.5}
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