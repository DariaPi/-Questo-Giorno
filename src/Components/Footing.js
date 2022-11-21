const Footing = () => {
    return (
        <div>
            <div className="footingBox">
                <div className="footTxt">
                    <p><a href="tel:+71234567890" className="tel">+7 (123) 456-78-90</a></p>
                    <p><a href="mailto:QGiornoSupper@mail.ru" className="tel">QGiornoSupper@gmail.com</a></p>
                    <hr/>
                    <h3>Questo giorno</h3>
                    <p>2019-2022</p>
                </div>
                <ul className="footTxt footList">
                    <li>Monday 09:00–00:00</li>
                    <li>Tuesday 09:00–00:00</li>
                    <li>Wednesday 09:00–00:00</li>
                    <li>Thursday 09:00–00:00</li>
                    <li>Friday 09:00–00:00</li>
                    <li>Saturday 11:00–00:00</li>
                    <li>Sunday 11:00–00:00</li>
                </ul>
            
            </div>
        </div>
    )
}

export default Footing;