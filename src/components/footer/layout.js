import React from "react"
import "../../_styles/components/footer.scss"
import {Link} from "react-router-dom";

const FooterLayout = props => (
    <footer className={props.sidebarActive ? `FooterLayout sidebarActive` : `FooterLayout`}>
            <div className="Footer-logos">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <a href="http://datos.biodiversidad.co/" target="_blank">
                                <img src="https://s3.amazonaws.com/sib-resources/images/logos-canales/svg/logo-datos-b.svg" alt="Logo Portal"/>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="http://catalogo.biodiversidad.co/" target="_blank">
                                <img src="https://s3.amazonaws.com/sib-resources/images/logos-canales/svg/logo-catalogo-b.svg" alt="Logo Catálogo"/>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="http://colecciones.biodiversidad.co/" target="_blank">
                                <img src="https://s3.amazonaws.com/sib-resources/images/logos-canales/svg/logo-colecciones-b.svg" alt="Logo Colecciones"/>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="http://listas.biodiversidad.co/" target="_blank">
                                <img src="https://s3.amazonaws.com/sib-resources/images/logos-canales/svg/logo-listas-b.svg" alt="Logo Listas"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-bar">
                <div className="container">
                    <div className="row ">
                        <div className="col-9 Footer-bar__logos">
                            <div className="row">
                                <div className="col-3">
                                    <a href="https://sibcolombia.net/" target="_blank">
                                        <img src="https://s3.amazonaws.com/sib-resources/images/portal-sib-colombia/iconos/SiB-Footer-02.svg" alt="Logo SiB"/>
                                    </a>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-2">
                                    <img src="https://s3.amazonaws.com/sib-resources/images/biodiversidadco/cifras/santander/logo-sbio.svg" alt="Santander BIO"/>
                                </div>
                                <div className="col-2">
                                    <img src="https://s3.amazonaws.com/sib-resources/images/biodiversidadco/cifras/santander/logo-gov-san.svg" alt="Gobernación de Santander"/>
                                </div>
                                <div className="col-2">
                                    <img src="https://s3.amazonaws.com/sib-resources/images/biodiversidadco/cifras/santander/logo-humboldt.svg" alt="Instituto Humboldt"/>
                                </div>
                                <div className="col-2">
                                    <img src="https://s3.amazonaws.com/sib-resources/images/biodiversidadco/cifras/santander/logo-uis.svg" alt="UIS"/>
                                </div>

                            </div>
                        </div>

                        {/*<div className="col-3 Footer-bar__links">
                            <Link to="/sobre-el-portal">
                                Sobre el portal
                            </Link>

                        </div>*/}
                    </div>
                </div>
            </div>
    </footer>
)

export default FooterLayout