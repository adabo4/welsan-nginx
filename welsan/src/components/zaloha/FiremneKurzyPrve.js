import Lines from "../Lines/Lines"
import "../"
import Navbar from "../Navbar/Navbar"

export default function FiremneKurzyPrve() {

    return (

        <>

            <div className="business-courses">
                <Navbar />
                <div className="business-courses-container">

                    <div className="headline-box">
                        <div className="h1" id='option-headline'>
                            Pre Váš biznis
                        </div>
                        <Lines ></Lines>
                    </div>

                    <div className="business-courses-bubbles-box">
                        <div className="black-bubble">
                            <div className="black-bubble-box">
                                <hr className="first-line" />
                                <hr className="first-line" />
                                <hr className="second-line" />
                                <h2>Firemné kurzy</h2>
                                <hr className="bubble-dotted" />
                            </div>

                        </div>

                        <div className="light-bulb-box">
                            <img src="./img/light-bulb-img.png" alt="" />
                        </div>


                    </div>

                    <div className="business-courses-text">
                        <p>​Komunikácia v angličtine sa v dobe globalizácie stáva nevyhnutnosťou i pre nižší manažment.
                            Zabezpečte plynulý chod Vašej firmy a ponúknite zamestnanecké benefity vo forme kurzov anglického jazyka vo WELSANe. </p>
                        <p>Dokážeme vyjsť v ústrety zamestnávateľom s akýmikoľvek požiadavkami.
                            Pomôžeme Vám odborne zaškoliť personál v oblasti Business English.
                            Náš <strong>10. hodinový Firemný kurz</strong> je štruktúrovaný na mieru Vaším zamestnancom.
                            Na rozdiel od iných kurzov sa budeme zameriavať len na to, čo je dôležité pre Váš biznis.
                            Faktúry, dodacie listy, telefonáty alebo vyhľadávanie potencionálnych dodávateľov - to všetko sa Vaši zamestnanci naučia bez stresu, v pohodlí Vašej firmy alebo priestoroch našej jazykovky. </p>
                    </div>


                    <div className="kurz-na-mieru">
                        <h2>Firemné kurzy na mieru</h2>

                        <div className="na-mieru-container">
                            <div className="na-mieru-left">
                                <div className="small-slider">
                                    <img src="./img/slider-small.png" alt="" />

                                </div>
                                <div className="course-levels">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>


                            </div>
                            <div className="na-mieru-right">
                                <h3>Priamo u nás alebo vo Vašej firme</h3>
                                <div className="left-text">
                                    <div className="small-circle">1</div>
                                    <div style={{ display: "inline-block" }}>
                                        <hr className="left-side-line" />
                                        <h3>Business English </h3>
                                        <p>Zamestnanci perfektne zvládnu Anglickú korešpondenciu, odosielanie a vystavovanie faktúr, zadávanie objednávok, základnú terminológiu a telefonáty so zahraničnými klientmi v angličtine. Budete sa môcť spoľahnúť na to, že telefonát zo zahraničia prebehne bez trémy. </p>
                                    </div>
                                </div>
                                <div className="left-text">
                                    <div className="small-circle">2</div>
                                    <div style={{ display: "inline-block" }}>
                                        <hr />
                                        <h3>Všeobecné firemné kurzy</h3>
                                        <p>Dovzdelávanie v oblasti všeobecnej angličtiny vo všetkých úrovniach. Zábavné, zo života, bez ťažkej gramatiky... Vaši zamestnanci porozumejú princípom jazyka, ktorí uplatnia v bežnom živote i v práci.</p>
                                    </div>
                                </div>
                                <div className="left-text">
                                    <div className="small-circle">3</div>
                                    <div>
                                        <hr />
                                        <h3>Teambuildingy a semináre</h3>
                                        <p>Ak potrebujete lektora na firemný teambuilding po anglicky, sme tu pre Vás. Aktivity a motivačné cvičenia v rámci Vašej firemnej politiky i pre zahraničných zamestnancov, ktorí vyžadujú vysokú úroveň komunikácie. </p>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>



            </div>

        </>
    )
}

