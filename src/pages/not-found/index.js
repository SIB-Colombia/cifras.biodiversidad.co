import React, { PureComponent } from 'react'

class NotFound extends PureComponent {
    handleBackClick = () => {
        this.props.history.goBack()
    }
    render() {
        return (

            <div className="container">
                <div className="Panel">

                    <h1 className="underline-title">No se encontró la página que buscas</h1>
                    <button
                        className="Button"
                        onClick={this.handleBackClick}
                    >
                        Volver
                    </button>
                </div>
            </div>
            )
    }

}
export default NotFound