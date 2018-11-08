import React, { PureComponent } from 'react'

class NotFound extends PureComponent {
    handleBackClick = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
                <h1>404</h1>
                <h2>No se encontró la página que buscas</h2>
                <button
                    className="Button"
                    onClick={this.handleBackClick}
                >
                    Volver
                </button>
            </div>
            )
    }

}
export default NotFound