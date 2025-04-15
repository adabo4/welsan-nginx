import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";
import './Bubbles2.css';
export default function Bubbles2() {

    return (
        <>
            <div className="container-bubbles-2">
                <div className="item">
                    <div className="courses-2">
                        <div className="courses-text">
                            <hr className="first-line" />
                            <hr className="second-line" />
                            <h2>Kurzy a doučovanie</h2>
                            <hr className="bubble-dotted" />
                            <p className="courses-p-text">Detská angličtina</p>
                            <p>Tvorivá dieľňa</p>
                            <p>Dospelí a študenti</p>
                            <p>Firemné kurzy</p>
                            <p>Pon - Pia od 7:30 do 18:30</p>
                        </div>
                    </div>
                </div>

                <div className="item sign-up-2">
                    <div className="sign-up-text">
                        <h2>Speak</h2>
                        <hr style={{ width: 200, borderBottomWidth: 2 }} className="first-line" />
                        <hr style={{ width: 200, marginTop: 5, opacity: 0.7 }} className="second-line" />
                        <hr style={{ width: 200, marginTop: 5, opacity: 0.5 }} className="bubble-dotted" />
                        <p>Prihlás sa a spíkuj</p>
                        <hr style={{ width: 230, marginTop: 5, opacity: 0.7 }} className="second-line" />
                        <Link to="tel:+421948592508"><p>0948 592 508</p></Link>
                        <Link to="mailto:infowelsan@gmail.com"><p>infowelsan@gmail.com  </p></Link>
                    </div>

                </div>

                <div className="item kontakt-2">
                    <p className='contact-us'><HashLink to="/kde-nas-najdete#contact"><u className="lll">Kontaktuj nás</u></HashLink>
                    </p>

                </div>

                <div className="item hidden"></div>
                <div className="item find-us-2"> <p><HashLink to="/kde-nas-najdete#map" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>Kde sídlime</HashLink></p></div>
                <div className="item hidden">

                </div>

            </div>
        </>
    )
}