import React, { Component } from 'react'
import "../../../../_styles/components/counter.scss";


class Counter extends Component {

    componentDidMount () {
        this.reverseCounter ()
    }

    render () {
        return (
            <div id="counter" className="Counter container">
                <div className="row">
                    <h3 className="counterTitle">PRÓXIMAMENTE</h3>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-4">
                                <span id="counterDays" className="Counter__number">...</span>
                                <div className="Counter__label">Días</div>
                            </div>
                            <div className="col-4">
                                <span id="counterHours" className="Counter__number">...</span>
                                <div className="Counter__label">Horas</div>
                            </div>
                            <div className="col-4">
                                <span id="counterMinutes" className="Counter__number">...</span>
                                <div className="Counter__label">Minutos</div>
                            </div>
                            <div className="col-4">
                                <span id="counterSeconds" className="Counter__number">...</span>
                                <div className="Counter__label">Segundos</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>

            </div>
        )
    }

    reverseCounter () {
        const countDownDate = new Date("Feb 8, 2019 10:00:00").getTime();

        setInterval(function() {

            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("counterDays").innerHTML = days;
            document.getElementById("counterHours").innerHTML = hours;
            document.getElementById("counterMinutes").innerHTML = minutes;
            document.getElementById("counterSeconds").innerHTML = seconds;

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);

    }
}

export default Counter
