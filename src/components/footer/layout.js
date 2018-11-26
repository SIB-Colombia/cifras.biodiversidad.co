import React from "react"
import "../../_styles/components/footer.scss"

const FooterLayout = props => (
    <footer className={props.sidebarActive ? `FooterLayout sidebarActive` : `FooterLayout`}>
            <div className="Footer__logos">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src="" alt="Logo Portal"/>
                        </div>
                        <div className="col-3">
                            <img src="" alt="Logo Catálogo"/>
                        </div>
                        <div className="col-3">
                            <img src="" alt="Logo Colecciones"/>
                        </div>
                        <div className="col-3">
                            <img src="" alt="Logo Listas"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer__bar">
                <div className="container">
                    barra inferior
                </div>
            </div>
    </footer>
)

export default FooterLayout