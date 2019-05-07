import React, {Component} from 'react'
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';
import "../../../_styles/components/map.scss"
import santanderGEOJSON from '../../../actions/services/Santander_Municipios_v1'
import {bindActionCreators} from "redux";
import * as actions from "../../../actions";
import connect from "react-redux/es/connect/connect";

class Map extends Component {
    state = {
        map: [],
        active: [],
    }

    componentDidMount() {
        console.log(this.props.activeIdToRender)
    }

    componentDidUpdate() {
        console.log(this.props.activeIdToRender)
    }

    handleClick = (e, feature, layer) => {
        this.props.handleMapClick(feature, layer)
    }
''
    onEachFeature = (feature, layer) => {
        if (layer.feature.properties.id === parseFloat(this.props.activeId.id)) {
            layer.setStyle({
                fillColor: '#00A8B4'
            });
            layer.on('mouseout', () => {
                layer.setStyle({
                    fillColor: '#00A8B4'
                })
            })
        } else if (layer.feature.properties.id !== parseFloat(this.props.activeId.id)) {
            layer.setStyle({
                fillColor: '#C6DBDB'
            });
            layer.on('mouseout', () => {
                layer.setStyle({
                    fillColor: '#C6DBDB'
                })
            })
        }
        layer.on('mouseover', () => {
            layer.bindTooltip(feature.properties.county).openTooltip();
            layer.setStyle({
                fillColor: '#4bc5cf'
            });
        })

        layer.on('click', e => {
            this.handleClick(e, feature, layer)
            layer.setStyle({
                fillColor: '#00A8B4'
            });

        })
        // console.log(layer.options.fillColor == '#00A8B4')
    }

    render () {
        return (
            <LeafletMap
                key={this.props.activeIdToRender}
                center={[6.9809,-73.4683]}
                zoom={7.5}
                maxZoom={14}
                minZoom={7}
                zoomControl={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                dragging={false}
                animate={true}
                style={{"backgroundColor": "#fff"}}
                attributionControl={false}
            >
                <GeoJSON
                    data={santanderGEOJSON}
                    onEachFeature={this.onEachFeature}
                    ref="geojson"
                    fillColor={"#C6DBDB"}
                    fillOpacity={1}
                    opacity={1}
                    weight={0.8}
                    color={"#ffffff"}
                />
                <TileLayer
                    opacity={0}
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

const mapStateToProps = ( state, props ) => (
    {
        activeIdToRender: state.getIn(['data', 'geo', 'active', 'item', 'id']),
    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps)(Map)
