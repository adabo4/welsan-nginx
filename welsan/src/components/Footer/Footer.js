import Subscribe from "../../Subscribe";
import "./footer.css"
function Footer() {

    const style = {
        color: "#dd3782",
        textTransform: 'uppercase',
        fontSize: "18px",
        fontWeight: "600",

    }

    return (
        <>
            <div className="footer-container">
                <div className="footer-container-small">
                    <div className="footer-box">
                        <div className="footer-box-text">
                            <h4>Kurzy denne od 7:30 do 19:00</h4>
                            <hr />
                            </div>
                            <div className="footer-p">
                            <p>Flexibilné časy pre ranné vtáča i nočnú sovu. Nenechajte prácu na smeny, škôlku či poobedňajšie hobby obmedziť Vašu angličtinu. </p>
                            </div>
                    </div>


                    <div className="footer-box">
                        <div className="footer-box-text">
                            <h4>Adresa</h4>
                            <hr />
                        </div>
                        <div className="footer-p">
                        <p>Malženická cesta 3 </p><p>
                            91701,</p> <p>Trnava</p>
                        <p>infowelsan@gmail.com</p>
                        </div>
                        


                    </div>

                    <div className="footer-box">
                        <div className="footer-box-text">
                            <h4>Odoberajte novinky</h4>
                            <hr />
                        </div>
                        <div className="footer-p">
                        {/* <p>Subscribe for Updates </p>
                        <input type="text" alt="email" name="email" value="Email" />
                        <button className="btn-subscribe">Subscribe Now</button> */}
                        <Subscribe />
                         </div>
                    </div>
                    <div className="footer-box">
                        <div className="footer-box-text">
                            <h4>Sme tu pre Vás</h4>
                            <hr />
                        </div>
                        <div className="footer-p">
                        <p style={style}>Pondelok - Piatok </p>
                        <p style={style}>07:30 AM - 19:30 PM</p>

                       </div>
                    </div>

                    <div className="footer-box">
                        <div className="footer-box-text">
                            <hr />
                            <p style={style}>Tvorivá dielňa</p>
                            <p style={style}>Pondelky 15:00 - 16:30</p>
                        </div>
                    </div>
                    <div className="footer-box">
                        <div className="footer-box-text">
                            <hr />
                            <p style={style}>Telefón</p>
                            <p style={style}>0948 592 508</p>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Footer;