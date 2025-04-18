import Lines from "../Lines/Lines";
import Footer from "../Footer/Footer";
import "./translation.css"
import MobileNavbar from "../Navbar/MobileNavbar";

export default function Translation() {
    return (
        <>
            <div className="translation-container">
                <MobileNavbar />
                <div className="translation-container-druhy">
                    <div className="headline-box">
                        <div className='option-headline'>
                            Tlmočenie a Preklady
                        </div>
                        <Lines ></Lines>
                    </div>

                    <div className="translation-content">
                        <div className="translation-left">

                            <h2>Profesionálne preklady</h2>
                            <div className="small-circle-translation"></div>
                            <h2>Expresné vyhotovenie</h2>
                            <h2>Tlmočenie na Slovensku i v zahraničí</h2>
                            <p>Ponúkam Vám svoje služby profesionálnej tlmočníčky. Úspešne som tlmočila obchodné rokovania za okrúhlym stolom i priamo vo výrobe, na Slovensku i v zahraničí.
                                Do každého tlmočenia vnesiem kus svojej osobnosti, aby sme preklenuli kultúrne i jazykové bariéry.
                                Šarm, úsmev, rýchle reakcie a precízna terminológia - práve na tom stojí úspešné tlmočenie a dobre uzavretý obchod.
                                Vo svojej päť ročnej praxi som sa stretla s desiatkami ľudí z oblasti ťažkého priemyslu, techniky a medicíny,
                                ktorí využili moje tlmočnícke služby k svojej spokojnosti. Pridajte sa k nim aj Vy. </p>
                        </div>

                        <div className="translation-right">
                            <div className="translation-bubble">
                                <div className="translation-bubble-text">
                                    <h2>Preklady</h2>
                                    <hr style={{ width: 200, borderBottomWidth: 2 }} className="first-line" />
                                    <hr style={{ width: 200, marginTop: 5, opacity: 0.7 }} className="second-line" />
                                    <hr style={{ width: 200, marginTop: 5, opacity: 0.5 }} className="bubble-dotted" />
                                    <p>Všeobecné i odborné preklady</p>
                                    <p>Expresné vyhotovenie</p>
                                    <hr style={{ width: 230, marginTop: 5, opacity: 0.7 }} className="second-line" />
                                    <p>0948 592 508</p>
                                    <p>infowelsan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}