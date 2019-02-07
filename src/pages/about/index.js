import React, {Component, Fragment} from 'react'
import TextTemplate from "../templates/text";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import AnchorLink from 'react-anchor-link-smooth-scroll'


class About extends Component {
    componentDidMount () {
        this.props.actions.sidebarVisibility(false)
        this.props.actions.buttonSidebarVisibility(false)
    }

    render () {
        return (
            <TextTemplate sidebarActive={this.props.sidebar}>
                <div className="row">
                    <div className="col-12">
                        <h1 className='underline-title'> Sobre el portal</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3 sideNav">
                        <div className="card white fixed">
                            <ul>
                                <li><AnchorLink href="#sibcol" offset='100'>SiB Colombia</AnchorLink></li>
                                <li><AnchorLink href="#biocifras" offset='100'>Biodiversidad en cifras</AnchorLink></li>
                                <li><AnchorLink href="#consolida" offset='100'>¿Cómo se consolidan las cifras?</AnchorLink></li>
                                <li><AnchorLink href="#aclaraciones" offset='100'>Aclaraciones</AnchorLink></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="card white" id="sibcol">
                            <h3 className='underline-title'>El SiB Colombia</h3>
                            <p>
                                <b>El SiB Colombia es la red nacional de datos abiertos sobre biodiversidad.</b> Es una iniciativa de país que nace con el Decreto 1603 de 1994 como parte del proceso de creación del Sistema Nacional Ambiental (SINA), establecido en la Ley 99 de 1993 y es el nodo oficial del país en la infraestructura mundial de información en biodiversidad -GBIF-. Su principal propósito es brindar acceso abierto a información sobre la diversidad biológica del país para la construcción de una sociedad sostenible. Además, facilita la publicación en línea de datos e información sobre biodiversidad, y promueve su uso por parte de una amplia variedad de audiencias, apoyando de forma oportuna y eficiente la gestión integral de la biodiversidad.
                                Es una realidad gracias a la participación de cientos de organizaciones y personas que comparten datos e información bajo los principios de libre acceso, transparencia, cooperación, reconocimiento y responsabilidad compartida. Promueve la participación activa del gobierno, la academia, el sector productivo y la sociedad civil para lograr la consolidación de información confiable y oportuna que apoye la toma de decisiones a nivel nacional e internacional.
                                Encuentra más información en https://www.sibcolombia.net · http://www.biodiversidad.co
                            </p>
                        </div>

                        <div className="card white" id="biocifras">
                            <h3 className='underline-title'>Biodiversidad en Cifras · Santander</h3>
                            <p>
                                <strong>Es la ventana a la biodiversidad de Santander y el primer paso en la regionalización del SiB Colombia en el país.</strong> Es una herramienta para la toma de decisiones que sintetiza el estado del conocimiento de la diversidad biológica departamental. Está diseñada para responder preguntas fundamentales sobre el estado de la biodiversidad en la región de manera eficaz, sencilla y oportuna.
                                Permite la exploración de cifras consolidadas de especies y registros biológicos en tres ejes principales de síntesis: (a) cifras por grupos biológicos, (b) cifras por áreas geográficas, y (c) temáticas de conservación y manejo, siendo este último un eje transversal a los dos anteriores.
                                Es también una instancia de atribución y reconocimiento para quienes hacen posible la consolidación y actualización de estas cifras al compartir datos abiertos sobre biodiversidad del departamento.
                            </p>
                        </div>

                        <div className="card white" id="consolida">
                            <h3 className='underline-title'>¿Cómo se consolidan las cifras?</h3>
                            <p>
                                Las cifras se consolidan a partir de los datos abiertos disponibles a través del SiB Colombia tras un proceso de depuración y validación que tiene tres etapas: (1) Consulta de datos disponibles a través del SiB Colombia, (2) Validación y limpieza de datos, y (3) Síntesis de cifras a partir de datos validados. Si quieres conocer el proceso en detalle,  consulta la ficha metodológica haciendo clic <a href="#">aquí.</a>
                            </p>
                                <h4>Consulta de datos abiertos</h4>
                                    <p>
                                        Los datos abiertos sobre biodiversidad, disponibles a través del SiB Colombia, son la materia prima para la síntesis de cifras; siendo los registros biológicos y las listas de referencia las fuentes principales. Estos datos primarios son complementados con listas de referencia externas, de interés para la conservación y uso sostenible de la biodiversidad; así como con fuentes bibliográficas que proveen cifras estimadas para el país.
                                        Fuentes de información:
                                    </p>

                                    <h5>A. Registros Biológicos en Colombia:</h5>
                                        <p>Consulta general a la base de datos del SiB Colombia y dos sub consultas geográficas: la primera, sobre el elemento ‘stateProvince’ y la segunda, a partir de la capa geográfica del departamento. Estas consultas son unificadas y procesadas durante la validación y limpieza de datos. Consulta los datos que hacen posible esta síntesis haciendo clic aquí.</p>
                                    <h5>B. Listas de especies de referencia en el país:</h5>
                                        <p>
                                            <ul>
                                                <li>Lista de especies de peces de agua dulce de Colombia (Publicador: Asociación Colombiana de Ictiólogos)</li>
                                                <li>Lista de mamíferos de Colombia (Publicador: Sociedad Colombiana de Mastozoología)</li>
                                                <li>Lista de referencia de especies de aves de Colombia (Publicador: Asociación Colombiana de Ornitología)</li>
                                                <li>Lista de especies amenazadas de Colombia (Publicador: Ministerio de Ambiente y Desarrollo Sostenible )</li>
                                            </ul>
                                        </p>
                                    <h5>C. Registros Biológicos en Colombia:</h5>
                                        <p>
                                            <ul>
                                                <li>Catálogo de plantas y líquenes de Colombia:
                                                    Este catálogo constituye la recopilación más completa de especies de plantas y líquenes para el país con 28.683 especies identificadas hasta la fecha (2018-09) en Colombia. El catálogo cuenta con información taxonómica, geográfica y de endemismo sobre  las especies de plantas y líquenes que habitan el país.
                                                </li>
                                                <li>Especies objeto de Comercio:
                                                    Lista de especies objeto de comercio según la Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres (CITES). El acuerdo internacional CITES, tiene por finalidad velar por que el comercio internacional de especímenes de animales y plantas silvestres no constituya una amenaza para su supervivencia y establece tres apéndices a partir de los cuales se regula su uso y comercio.
                                                </li>
                                                <li>Lista Roja de Especies Amenazadas de la IUCN:
                                                    La Lista Roja de la Unión Internacional para la Conservación de la Naturaleza (IUCN) constituye el inventario mundial de las especies en estado de amenaza. Esta lista es un indicador crítico de la salud de la biodiversidad del mundo, que sirve como una herramienta para informar y catalizar acciones para la conservación de la biodiversidad.
                                                </li>
                                            </ul>
                                        </p>
                                    <h5>D. Fuentes auxiliares</h5>
                                        <p>Se realizó una  búsqueda exhaustiva de las especies estimadas para el país en diversas fuentes bibliográficas oficiales y científicas, con el fin de incluir un comparativo entre las especies estimadas y las especies con evidencia a través del SiB Colombia. Este comparativo refleja el estado actual del conocimiento de la biodiversidad y los vacíos de información existentes a nivel Nacional. Conoce las fuentes consultadas haciendo clic aquí. </p>


                                <h4>Validación y limpieza</h4>
                                    <p>
                                        Para lograr una síntesis de información adecuada e incidente, los datos de todas las fuentes de información son evaluados de acuerdo a los principios de calidad de datos en informática de la biodiversidad. El proceso de  validación y limpieza de los datos se enfoca en la información taxonómica y geográfica con el fin de maximizar el uso de los datos y excluir registros ambiguos. A continuación se resumen los pasos que conforman el proceso:
                                    </p>
                                    <h5>A. Elementos priorizados:</h5>
                                        <p>Con el fin de optimizar el procesamiento de datos y reducir su volumen, se priorizaron 27 elementos del estándar Darwin Core, más diez elementos de registro del SiB Colombia y GBIF. Estos elementos constituyen la información mínima necesaria para consolidar las cifras. </p>
                                    <h5>B. Estructuración:</h5>
                                        <p>Las listas externas son revisadas y sus elementos mapeados al estándar Darwin Core, esto permite identificar los elementos que serán utilizados en la síntesis de cifras de acuerdo a los elementos priorizados. Luego se procede a estructurar los elementos priorizados de las listas externas en el estándar Darwin Core. Este proceso asegura que la base de datos para la consolidación de las cifras pueda construirse de forma automatizada.</p>
                                    <h5>C. Validación y limpieza:</h5>
                                        <p>Es un proceso de revisión y ajuste de los datos para que cumplan con criterios de calidad que  faciliten el procesamiento de los datos y conduzcan a cifras confiables. En la validación, se evalúan criterios de calidad como el formato, completitud, coherencia y exactitud de los datos; por ejemplo, que el nombre científico y la jerarquía taxonómica sean consistentes; y que los topónimos geográficos y las  coordenadas coincidan -la validación de coordenadas se realiza únicamente sobre las sub-consultas regionales. A partir de la validación, se identifican aquellos datos que requieren algún tipo corrección, y se procede a limpiarlos. La limpieza se enfoca en correcciones de formato y ajustes menores de consistencia, y se realiza de manera que no se altere la integridad de la información.
                                            Aquellos registros biológicos que presenten inconsistencias irreconciliables son excluidos de la base de datos utilizada para la síntesis de cifras. La validación y limpieza se realizan en un proceso semi-automatizado con los programas de software libre: OpenRefine y QGIS.</p>
                                    <h5>D. Base de datos para la síntesis de cifras:</h5>
                                        <p>Una vez todas las fuentes de datos han sido validadas, limpiadas y se han descartado datos ambiguos,  inconsistentes o duplicados entre consultas, se consolida una única base de datos con la información de todas las fuentes, excepto las fuentes bibliográficas. Este proceso se realiza a partir de cruces de información entre los registros biológicos -fuente  de datos principal- y las listas de referencia  a partir del nombre científico (sin autoría). Con cada lista de referencia que se cruza, se genera una nueva columna o elemento en la base de datos que relaciona los registros biológicos con las temáticas y/o  categorías de las listas; las nuevas columnas son creadas de acuerdo a la tabla de elementos priorizados (Tabla 1. Taxon Description Extension, Species Distribution Extension). Este proceso se realiza automáticamente en OpenRefine para asegurar la trazabilidad de los datos.
                                            La base de datos para la síntesis de cifras difiere a la base de datos original en la calidad y la cantidad de datos, ya que solo incluye datos que cumplen con un criterio mínimo de calidad y cuenta con una capa de información adicional, obtenida de las listas de referencia.
                                        </p>

                                <h4>Síntesis de cifras</h4>
                                    <p>
                                        La síntesis de cifras consiste en la generación de conteos de registros biológicos y especies únicas de acuerdo a los siguientes ejes: (A) grupos biológicos, (B) geografía y (C) temáticas de conservación, siendo este último un eje transversal a los dos anteriores. Dado el volumen de los datos el proceso de síntesis a sido optimizado y automatizando por medio del lenguaje de programación Python y la librería de código abierto pandas. Los resultados obtenidos son corroborados con consultas manuales y aleatorias sobre los datos para asegurar la exactitud y precisión de las cifras.
                                    </p>
                                    <h5>A. Grupos biológicos:</h5>
                                    <p>
                                        La configuración de los grupos biológicos se realiza de acuerdo con documentos nacionales que facilitan la gestión y uso sostenible de la biodiversidad (estrategias, planes y programas de conservación, manejo y uso de la biodiversidad, y las resoluciones asociadas a la declaración y regulación de especies exóticas y amenazadas, entre otros). Posteriormente es refinada con criterios taxonómicos, para obtener cifras que respondan a las necesidades de información sobre biodiversidad de múltiples sectores académicos y políticos del país.
                                        A partir de la base de datos consolidada se generan las cifras de número de registros biológicos y número de especies con evidencia en el SiB Colombia para cada grupo biológico establecido. Para conocer en detalle los grupos biológicos consulta la ficha metodológica.
                                    </p>
                                    <h5>B. Geografía:</h5>
                                    <p>
                                        En este eje, se consolida el número de registros biológicos y especies publicados a través del SiB Colombia para el país (se incluyen datos con y sin coordenadas), y para Santander, las cifras (número de registros biológicos y especies) se generan a partir de los elementos DwC ‘StateProvince’ y ‘county’ previamente validados y curados; teniendo en cuenta solamente  aquellos registros biológicos que cuentan por lo menos con un elemento geográfico (departamento o coordenadas), documentado y validado.
                                    </p>
                                    <h5>C. Temáticas de conservación:</h5>
                                    <p>
                                        Biodiversidad en Cifras incorpora tres (3) temáticas transversales al eje de grupos biológicos y geografía. Estas permiten entender el estado actual de conservación de la biodiversidad a nivel nacional y regional. De esta manera se consolidan el número de registros biológicos y especies por grupo biológico, departamento y municipio según las siguientes temáticas:
                                    </p>


                        </div>

                        <div className="card white" id="aclaraciones">
                            <h3 className='underline-title'>Aclaraciones</h3>
                            <p>
                                Los datos abiertos disponibles a través del SiB Colombia, utilizados para la consolidación de las cifras, son dinámicos; es decir que cambian constantemente de acuerdo a la tasa de publicación, actualización y mejora en la calidad de los datos. El carácter dinámico de los datos implica que estos no solo incrementan en el tiempo, si no que también disminuyen; esto resulta de procesos de calidad de datos que mejoran la precisión y exactitud de las determinaciones taxonómicas y procesos de georeferenciación. Ya que las cifras son un reflejo de los datos, éstas también pueden aumentar o disminuir en el tiempo.
                            </p>
                        </div>

                    </div>
                </div>
            </TextTemplate>
        )
    }
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)

    }
)

export default connect(null, mapDispatchToProps)(About)
