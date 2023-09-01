import { Link } from 'react-router-dom';
function Bubbles() {

    return (
        <>

            <div className="container-bubbles">
                <div className="courses">
                    <div className="courses-text">
                        <hr className="first-line" />
                        <hr className="second-line" />
                        <h2>Kurzy a doučovanie</h2>
                        <hr style={{ marginTop: 10, marginBottom: 10 }} className="bubble-dotted" />
                        <p className="courses-p-text">Detská angličtina</p>
                        <p>Tvorivá dieľňa</p>
                        <p>Dospelí a študenti</p>
                        <p>Firemné kurzy</p>
                        <p>Pon - Pia od 7:30 do 18:30</p>
                    </div>
                </div>
                <div className="sign-up">
                    <div className="sign-up-text">
                        <h2 style={{ fontSize: 60 }}>Speak</h2>
                        <hr style={{ width: 200, borderBottomWidth: 2 }} className="first-line" />
                        <hr style={{ width: 200, marginTop: 5, opacity: 0.7 }} className="second-line" />
                        <hr style={{ width: 200, marginTop: 5, opacity: 0.5 }} className="bubble-dotted" />
                        <p>Prihlás sa a spíkuj</p>
                        <hr style={{ width: 230, marginTop: 5, opacity: 0.7 }} className="second-line" />
                        <p>0948 592 508</p>
                        <p>infowelsan@gmail.com</p>
                    </div>


                </div>
                <div className="find-us">
                    <p><Link to="/kde">Kde sídlime</Link></p>
                </div>
                <div className="kontakt">
                
                    <p className='contact-us'>Kontaktuj nás
                    <hr /></p>
                    
                </div>
               
            </div>

        </>
    )
}

export default Bubbles;