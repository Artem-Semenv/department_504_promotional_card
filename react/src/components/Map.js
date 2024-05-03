import React from "react";

class Map extends React.Component {
    render() {
        const iframeStyle = {
            border: "0",
            width: "100%" // Распределение на всю ширину
        };

        return (
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1281.1674150226768!2d36.28245232108354!3d50.04255867132535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a71d9fca861d%3A0xa501bb6d97670b53!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INCw0LXRgNC-0LrQvtGB0LzRltGH0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIg0ZbQvC4g0Jwu0IQuINCW0YPQutC-0LLRgdGM0LrQvtCz0L4gItCl0LDRgNC60ZbQstGB0YzQutC40Lkg0LDQstGW0LDRhtGW0LnQvdC40Lkg0ZbQvdGB0YLQuNGC0YPRgiI!5e0!3m2!1sru!2sua!4v1714492379959!5m2!1sru!2sua"
                    width="600" height="450" style={iframeStyle} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title="Карта"/>
            </div>

        )
    }
}

export default Map;
