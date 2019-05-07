import React, {Component, Fragment} from 'react'
import TextTemplate from "../templates/text";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import connect from "react-redux/es/connect/connect";
import AnchorLink from 'react-anchor-link-smooth-scroll'


class About extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);

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
                    {
                        window.innerWidth > 800 &&

                        <div className="col-4 sideNav">
                            <div className="card white fixed">
                                <ul>
                                    <li><AnchorLink href="#sibcol" offset='100'>SiB Colombia</AnchorLink></li>
                                    <li><AnchorLink href="#biocifras" offset='100'>Biodiversidad en cifras</AnchorLink></li>
                                    <li><AnchorLink href="#consolida" offset='100'>¿Cómo se consolidan las cifras?</AnchorLink></li>
                                    <li><AnchorLink href="#aclaraciones" offset='100'>Aclaraciones</AnchorLink></li>
                                    <li><AnchorLink href="#santander" offset='100'>Santander BIO</AnchorLink></li>
                                </ul>
                            </div>
                        </div>
                    }
                    <div className={window.innerWidth <= 800 ? "col-12" : "col-8"}>
                        <div className="card white" id="sibcol">
                            <h3 className='underline-title'>El SiB Colombia</h3>
                            <p>
                                <b>El SiB Colombia es la red nacional de datos abiertos sobre biodiversidad.</b> Esta iniciativa de país nace con el Decreto 1603 de 1994 como parte del proceso de creación del Sistema Nacional Ambiental (Sina), establecido en la Ley 99 de 1993. Es el nodo oficial del país en la Infraestructura Mundial de Información en Biodiversidad (GBIF) y es el sistema de Información Biogeográfica del Océano (OBIS), a través del SiB Marino. Su principal propósito es brindar acceso abierto a información sobre la diversidad biológica del país para la construcción de una sociedad sostenible. Además, facilita la publicación en línea de datos e información sobre biodiversidad, y promueve su uso por parte de una amplia variedad de audiencias, apoyando de forma oportuna y eficiente la gestión integral de la biodiversidad.
                                Es una realidad gracias a la participación de cientos de organizaciones y personas que comparten datos e información bajo los principios de libre acceso, transparencia, cooperación, reconocimiento y responsabilidad compartida. Promueve la participación activa del gobierno, la academia, el sector productivo y la sociedad civil para lograr la consolidación de información confiable y oportuna que apoye la toma de decisiones a nivel nacional e internacional.


                            </p>
                        </div>

                        <div className="card white" id="biocifras">
                            <h3 className='underline-title'>Biodiversidad en Cifras · Santander</h3>
                            <p>
                                Biodiversidad en Cifras · Santander es el primer paso en la regionalización del SiB Colombia y un reflejo de la gestión del conocimiento sobre la biodiversidad en el departamento desde los datos abiertos. Esta ventana regional, que se actualiza periódicamente según la actividad de publicación a través del SiB Colombia, responde preguntas fundamentales sobre la diversidad biológica de la región para apoyar de forma oportuna la construcción de políticas ambientales y la toma de decisiones a nivel regional y nacional. Esto es posible gracias a la participación de cientos de organizaciones y personas que le apuestan a la construcción colectiva de conocimiento a través de un modelo abierto y participativo, garantizando el acceso libre y responsable a la información sobre la diversidad biológica en nuestro país.

                                Permite la exploración de cifras consolidadas de especies y registros biológicos en tres ejes principales de síntesis: (a) cifras por <b>grupos biológicos</b>, (b) cifras por <b>áreas geográficas</b>, y (c) <b>temáticas de conservación, uso y manejo</b>, siendo este último un eje transversal a los dos anteriores.

                            </p>
                        </div>

                        <div className="card white" id="consolida">
                            <h3 className='underline-title'>¿Cómo se consolidan las cifras?</h3>
                            <p>
                                Las cifras se consolidan a partir de los datos abiertos disponibles a través del SiB Colombia tras un proceso de depuración y validación que tiene tres etapas: (1) Consulta de datos disponibles a través del SiB Colombia y listas externas, (2) Validación y limpieza de datos, y (3) Síntesis de cifras a partir de datos validados
                            </p>
                                <h4>Consulta de datos abiertos</h4>
                                    <p>
                                        Los datos abiertos sobre biodiversidad, disponibles a través del SiB Colombia, son la materia prima para la síntesis de cifras; siendo los registros biológicos y las listas de referencia las fuentes principales. Estos datos primarios son complementados con listas de referencia externas, de interés para la conservación y uso sostenible de la biodiversidad; así como con fuentes bibliográficas que proveen cifras estimadas para el país.
                                        Estas son las fuentes de información:

                                    </p>

                                    <h5>A. Registros Biológicos en Colombia:</h5>
                                        <p>
                                            Consulta general a la base de datos del SiB Colombia y dos sub consultas geográficas: la primera, sobre el elemento ‘stateProvince’ y la segunda, a partir de la capa geográfica del departamento. Estas consultas son unificadas y procesadas durante la validación y limpieza de datos
                                        </p>
                                    <h5>B. Listas de especies de referencia en el país:</h5>

                                            <ul>
                                                <li><p>Lista de especies de peces de agua dulce de Colombia (Publicador: Asociación Colombiana de Ictiólogos)</p></li>
                                                <li><p>Lista de mamíferos de Colombia (Publicador: Sociedad Colombiana de Mastozoología)</p></li>
                                                <li><p>Lista de referencia de especies de aves de Colombia (Publicador: Asociación Colombiana de Ornitología)</p></li>
                                                <li><p>Lista de especies amenazadas de Colombia (Publicador: Ministerio de Ambiente y Desarrollo Sostenible )</p></li>
                                            </ul>

                                    <h5>C. Listas externas </h5>
                                        <ul>
                                                <li><p>Catálogo de plantas y líquenes de Colombia:
                                                    Este catálogo constituye la recopilación más completa de especies de plantas y líquenes para el país con 28.683 especies identificadas hasta la fecha (2018-09) en Colombia. El catálogo cuenta con información taxonómica, geográfica y de endemismo sobre  las especies de plantas y líquenes que habitan el país.
                                                </p></li>
                                                <li><p>Especies objeto de Comercio:
                                                    Lista de especies objeto de comercio según la Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres (CITES). El acuerdo internacional CITES, tiene por finalidad velar por que el comercio internacional de especímenes de animales y plantas silvestres no constituya una amenaza para su supervivencia y establece tres apéndices a partir de los cuales se regula su uso y comercio.                                                 </p></li>
                                                <li><p>Lista Roja de Especies Amenazadas de la IUCN:
                                                    La Lista Roja de la Unión Internacional para la Conservación de la Naturaleza (IUCN) constituye el inventario mundial de las especies en estado de amenaza. Esta lista es un indicador crítico de la salud de la biodiversidad del mundo, que sirve como una herramienta para informar y catalizar acciones para la conservación de la biodiversidad.
                                                </p></li>
                                                <li><p>Lista de Especies Exóticas de Colombia:
                                                    La lista comprende aquellas especies que se encuentran fuera de su rango de distribución natural por intervención humana. La presencia de estas especies en Colombia puede causar impactos en los ecosistemas y sus servicios ecosistémicos. Esta lista es una herramienta crucial para gestionar y evitar efectos negativos que puedan generar estas especies en los ecosistemas Colombianos.
                                                </p></li>
                                            </ul>
                                    <h5>D. Fuentes auxiliares</h5>
                                        <p>
                                            Las fuentes auxiliares, son fuentes bibliográficas obtenidas a través de una búsqueda sistemática de información sobre el número de especies estimadas que habitan en el país para cada grupo biológico.
                                            Las fuentes auxiliares también comprenden documentos internos del SiB Colombia que permiten dar el crédito adecuado a quienes publican datos abiertos sobre biodiversidad.

                                        </p>


                                <h4>Validación y limpieza</h4>
                                    <p>
                                        Para lograr una síntesis de información adecuada e incidente, los datos de todas las fuentes de información son evaluados de acuerdo a los principios de calidad de datos en informática de la biodiversidad. El proceso de  validación y limpieza de los datos se enfoca en la información taxonómica y geográfica con el fin de maximizar el uso de los datos y excluir registros ambiguos. A continuación se resumen los pasos que conforman el proceso:                                    </p>
                                        <h5>A. Elementos priorizados:</h5>
                            <p>Con el fin de optimizar el procesamiento de datos y reducir su volumen, se priorizaron 23 elementos del estándar Darwin Core, más 13 elementos de registro del SiB Colombia y GBIF. Estos elementos constituyen la información mínima necesaria para consolidar las cifras.
                            </p>
                                        <h5>B. Estructuración:</h5>
                            <p>Las listas externas son revisadas y sus elementos mapeados al estándar Darwin Core, esto permite identificar los elementos que serán utilizados en la síntesis de cifras de acuerdo a los elementos priorizados. Luego se procede a estructurar los elementos priorizados de las listas externas en el estándar Darwin Core. Este proceso asegura que la base de datos para la consolidación de las cifras pueda construirse de forma automatizada.
                            </p>
                                        <h5>C. Validación y limpieza:</h5>
                            <p>Es un proceso de revisión y ajuste de los datos para que cumplan con criterios de calidad que  faciliten el procesamiento de los datos y conduzcan a cifras confiables. En la validación, se evalúan criterios de calidad como el formato, completitud, coherencia y exactitud de los datos; por ejemplo, que el nombre científico y la jerarquía taxonómica sean consistentes; y que los topónimos geográficos y las coordenadas coincidan (la validación de coordenadas se realiza únicamente sobre las sub-consultas regionales). A partir de la validación, se identifican aquellos datos que requieren algún tipo corrección, y se procede a limpiarlos. La limpieza se enfoca en correcciones de formato y ajustes menores de consistencia, y se realiza de manera que no se altere la integridad de la información.
                            </p>
                            <p>Aquellos registros biológicos que presenten inconsistencias irreconciliables son excluidos de la base de datos utilizada para la síntesis de cifras. La validación y limpieza se realizan en un proceso semi-automatizado con el programa de software libre OpenRefine, el lenguaje de programación Python y la librería de código abierto pandas.
                            </p>
                                        <h5>D. Base de datos para la síntesis de cifras:</h5>
                            <p>Una vez todas las fuentes de datos han sido validadas, limpiadas y se han descartado datos ambiguos, inconsistentes o duplicados entre consultas, se consolida una única base de datos con la información de todas las fuentes, excepto las fuentes bibliográficas. Este proceso se realiza a partir de cruces de información entre los registros biológicos (fuente  de datos principal) y las listas de referencia  a partir del nombre científico (sin autoría). Con cada lista de referencia que se cruza, se genera una nueva columna o elemento en la base de datos que relaciona los registros biológicos con las temáticas y/o categorías de las listas; las nuevas columnas son creadas de acuerdo a la tabla de elementos priorizados. Este proceso se realiza automáticamente por medio del lenguaje de programación Python y la librería de código abierto pandas.</p>
                            <p>La base de datos para la síntesis de cifras difiere a la base de datos original en la calidad y la cantidad de datos, ya que solo incluye datos que cumplen con un criterio mínimo de calidad y cuenta con una capa de información adicional, obtenida de las listas de referencia.
                            </p>

                                <h4>Síntesis de cifras</h4>
                                    <p>
                                        La síntesis de cifras consiste en la generación de conteos de registros biológicos y especies únicas de acuerdo a los siguientes ejes: (A) grupos biológicos, (B) geografía y (C) temáticas de conservación, siendo este último un eje transversal a los dos anteriores. Dado el volumen de los datos el proceso de síntesis a sido optimizado y automatizando por medio del lenguaje de programación Python y la librería de código abierto pandas. Los resultados obtenidos son corroborados con consultas manuales y aleatorias sobre los datos para asegurar la exactitud y precisión de las cifras.
                                    </p>
                                    <h5>A. Grupos biológicos:</h5>
                                    <p>
                                        La configuración de los grupos biológicos se realiza de acuerdo con documentos nacionales que facilitan la gestión y uso sostenible de la biodiversidad (estrategias, planes y programas de conservación, manejo y uso de la biodiversidad, y las resoluciones asociadas a la declaración y regulación de especies exóticas y amenazadas, entre otros). Posteriormente es refinada con criterios taxonómicos, para obtener cifras que respondan a las necesidades de información sobre biodiversidad de múltiples sectores académicos y políticos del país.
                                        A partir de la base de datos consolidada se generan las cifras de número de registros biológicos y número de especies con evidencia en el SiB Colombia para cada grupo biológico establecido.
                                    </p>
                                    <h5>B. Geografía:</h5>
                                    <p>
                                        En este eje, se consolida el número de registros biológicos y especies publicados a través del SiB Colombia para el país (se incluyen datos con y sin coordenadas), y para Santander, las cifras (número de registros biológicos y especies) se generan a partir de los elementos DwC ‘StateProvince’ y ‘county’ previamente validados y curados; teniendo en cuenta solamente  aquellos registros biológicos que cuentan por lo menos con un elemento geográfico (departamento o coordenadas), documentado y validado.
                                    </p>
                                    <h5>C. Temáticas de conservación:</h5>
                                    <p>
                                        Biodiversidad en Cifras incorpora tres (3) temáticas transversales al eje de grupos biológicos y geografía. Estas permiten entender el estado actual de conservación de la biodiversidad a nivel nacional y regional. De esta manera se consolidan el número de registros biológicos y especies por grupo biológico, departamento y municipio según las siguientes temáticas:
                                    </p>
                                        <ul>
                                            <li>
                                                <p>Especies amenazadas:
                                                De acuerdo a la lista de especies amenazadas de Colombia, de la Resolución 1912 de 2017, expedida por el Ministerio de Ambiente y Desarrollo Sostenible; y la Lista Roja de especies de la Unión Internacional para la Conservación de la Naturaleza (IUCN) se establecen tres categorías de amenaza:
                                            </p>
                                                <ul>
                                                    <li><p>
                                                En peligro crítico (CR): especies con riesgo extremadamente alto de extinción en la naturaleza.
                                                    </p></li>
                                                    <li><p>
                                                En peligro (EN): especies con riesgo  alto de extinción en la naturaleza.
                                                    </p></li>
                                                    <li><p>
                                                Vulnerables (VU): especies con riesgo  de extinción en la naturaleza.
                                                    </p></li>
                                                </ul>
                                            </li>

                                            <li><p>Especies objeto de comercio:
                                                De acuerdo a la lista de especies objeto de comercio establecida por la Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres (CITES), las especies se categorizan en tres apéndices a partir de los cuales se regula su uso y comercio:
                                                </p><ul>
                                                    <li><p>
                                                    Apéndice I: especies en peligro de extinción, el comercio de estas se autoriza solamente bajo circunstancias excepcionales.
                                                    </p></li>
                                                    <li><p>
                                                        Apéndice II: especies que no se encuentran necesariamente en peligro de extinción, pero cuyo comercio debe controlarse para evitar una utilización incompatible con su supervivencia.
                                                    </p></li>
                                                    <li><p>
                                                        Apéndice III: especies que están protegidas en al menos en un país, el cual ha solicitado la asistencia de otras Partes en la CITES para controlar su comercio.

                                                    </p></li>
                                                </ul>

                                           </li>
                                            <li><p>
                                                Distribución: especies endémicas, migratorias y exóticas:
                                                Según la distribución original y actual de las especies dentro del país, estas se clasifican en endémicas, migratorias y exóticas. Las cifras de estas categorías se establece a partir de las listas de referencia y fuentes externas consultadas.
                                            </p>
                                                <ul>
                                                    <li><p>Especies endémicas: son especies cuya distribución está limitada a un área geográfica específica; en este contexto corresponde a especies que habitan únicamente en Colombia.
                                                        (!) A partir de las listas se obtiene información sobre el endemismo de aves, peces dulceacuícolas, mamíferos y plantas; otros grupos serán añadidos a medida que se publiquen nuevas listas de referencia para el país.
                                                    </p></li>
                                                    <li><p>Especies migratorias: son especies cuyas poblaciones se mueven masivamente entre áreas geográficas distantes, cíclicamente y de manera previsible; en este contexto corresponde a especies que pasan por Colombia dentro de su ruta migratoria.
                                                        (!) Aplica para especies migratorias de aves únicamente, otros grupos serán añadidos a medida que se publiquen nuevas listas de referencia para el país.
                                                    </p></li>
                                                    <li><p>Especies exóticas: son especies que se encuentran fuera de su distribución natural; en este contexto, corresponde a especies nativas de otras regiones distintas a Colombia pero que se encuentran distribuidas en el país.
                                                        (!) La lista oficial de especies exóticas para el país incluye únicamente información curada para animales, en futuras actualizaciones de la lista y de la Biodiversidad en cifras se incluirá las especies de plantas exóticas.
                                                    </p></li>
                                                </ul>

                                            </li>
                                        </ul>



                        </div>

                        <div className="card white" id="aclaraciones">
                            <h3 className='underline-title'>Recomendaciones para la interpretación de las Cifras
                            </h3>
                            <p>
                                El acceso abierto ha puesto a disposición millones de datos sobre biodiversidad, aquí utilizados para la consolidación de Biodiversidad en Cifras; sin embargo este gran volúmen de datos y proveedores de contenidos también supone retos para la síntesis de la información. Para generar cifras nacionales y regionales de manera rápida, oportuna y precisa, la metodología aquí descrita busca minimizar los sesgos provenientes de la calidad de los datos. Para usar e interpretar adecuadamente Biodiversidad en Cifras, se recomienda tener en cuenta los siguientes puntos:
                            </p>
                                <ul>
                                    <li><p>Las Cifras son dinámicas, pueden aumentar o disminuir en el tiempo.
                                        Los datos abiertos son dinámicos, es decir que están cambiando constantemente de acuerdo a la tasa de publicación y actualización de los datos. Los procesos de calidad que mejoran la precisión y exactitud de las determinaciones taxonómicas, y los procesos de georeferenciación también generan fluctuaciones en el número de registros biológicos y especies reportados para determinada región. Esto implica que los datos no solo incrementan en el tiempo, si no que también disminuyen;  así mismo las cifras sintetizadas en Biodiversidad en Cifras también cambian.</p></li>
                                    <li><p>El  árbol taxonómico de GBIF se utiliza como referente taxonómico
                                        Debido a que existen diferentes autoridades taxonómicas, una misma especie puede contar con un nombre y taxonomía superior distintos. Estas diferencias entre conjuntos de datos dificultan la integración y análisis de los datos, lo que puede llevar a una sobreestimación de las cifras. Para evitar ambigüedades y obtener cifras reproducibles y precisas, durante el proceso de validación y limpieza, todas las fuentes de información se homologan con el árbol taxonómico de GBIF. Esto implica que las cifras por grupos biológicos pueden diferir ligeramente de otras fuentes que utilicen una clasificación taxonómica distinta a la de GBIF. También es posible que algunas especies endémicas, que aún no hagan parte de este árbol taxonómico, hayan sido excluidas durante la generación de cifras.
                                    </p></li>
                                    <li><p>Las cifras regionales tienen mayor precisión
                                        Las cifras departamentales se obtienen a partir de la ubicación de las coordenadas geográficas, esto evita los problemas asociados a la heterogeneidad en la documentación de los nombres  departamentales y agiliza el proceso de síntesis de cifras. Sin embargo para los departamentos con cifras regionales como Santander y Boyacá, se realiza un proceso de limpieza en los nombres departamentales y municipales, lo que permite corregir y/o descartar datos con inconsistentes, e incluir en las cifras una mayor cantidad de datos.. A medida que el proceso de regionalización de Biodiversidad en Cifras avance y más departamentos cuenten con cifras regionales, se irá mejorando la precisión de las cifras para todos los departamentos.
                                    </p></li>
                                    <li><p>La comunidad académica es crucial para continuar mejorando la síntesis de cifras.
                                        A partir de el procedimiento descrito en la presente ficha metodológica es posible contar con nombres científicos estandarizados y con una taxonomía superior  consistente. Sin embargo, para validar si una especie realmente pertenece a la región reportada, es necesario contar con expertos para cada grupo biológico. Por ello se invita a la comunidad académica a continuar trabajando para generar listas de referencia nacionales, ya que son un insumo que permitirá ahondar en la calidad de los datos y generar datos más precisos e incidentes para el conocimiento y la conservación de nuestra biodiversidad.
                                    </p></li>
                                </ul>

                        </div>


                        <div className="card white" id="santander">
                            <h3 className='underline-title'>Santander BIO
                            </h3>
                            <p>
                                Este proyecto fue financiado con recursos del fondo ciencia y tecnología a través del Convenio Interadministrativo 00002243 entre la Gobernación de Santander, la Universidad Industrial de Santander y el Instituto de Recursos Biológicos Alexander von Humboldt.
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
