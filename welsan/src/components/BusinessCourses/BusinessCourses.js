import Lines from "../Lines/Lines"
import "./businesscourses.css"
import Footer from "../Footer/Footer"
import Slickslide from "../Slickslide/Slickslide"
import MobileNavbar from "../Navbar/MobileNavbar"

export default function BusinessCourses() {

    return (
        <>
            <div className="business-courses">
                <MobileNavbar />
                <div className="business-courses-container">

                    <div className="headline-box">
                        <div className='option-headline'>
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
                                    <Slickslide />
                                </div>
                                <div className="course-levels">
                                    <div className="level">
                                        <div className="level-text">
                                            <Lines></Lines>
                                            <h4 className="green">Od začiatočníkov k pokročilým</h4>
                                        </div>
                                        <div className="level-line-p">
                                            <hr />
                                            <p>Zabezpečíme kurzy pre zamestnancov akejkoľvek úrovne. Minimálny počet v skupinke neexistuje -
                                                ak potrebujete zaškoliť tím desiatich ľudí alebo dvoch asistentov, kurz Vám ušijeme priamo na mieru. </p>
                                        </div>
                                    </div>
                                    <div className="level">
                                        <div className="level-text">
                                            <Lines></Lines>
                                            <h4 className="pink">V pohodlí Vašej firmy</h4>
                                        </div>
                                        <div className="level-line-p">
                                            <hr />
                                            <p>Lektorka príde priamo k Vám do firmy. Výhoda domáceho prostredia pomôže študentom zbaviť sa trémy a lepšie sa
                                                adaptovať na novú látku. Ponúkame tiež kurzy priamo u nás v učebni. </p>
                                        </div>
                                    </div>
                                    <div className="level">
                                        <Lines></Lines>
                                        <h4 className="pink">Bez stresu</h4>
                                        <div className="level-line-p">
                                            <hr />
                                            <p>Naše firemné kurzy zvládne každý. Zakladáme si na empatickom prístupe a pomoci obom stranám -
                                                zamestnávateľovi i personálu. Bez omáčok, bez písomiek, náplňou hodín bude len to, čo zamestnanec prakticky využije v  práci, plus niečo navyše :) </p>
                                        </div>
                                    </div>
                                    <div className="level">
                                        <Lines></Lines>
                                        <h4 className="green">Kombinované kurzy</h4>
                                        <div className="level-line-p">
                                            <hr />
                                            <p>V prípade záujmu je možné skombinovať kurzy obchodnej a všeobecnej angličtiny.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="na-mieru-right">
                                <h3>Priamo u nás alebo vo Vašej firme</h3>

                                <div className="right-textbox" >
                                    <div className="circle-and-header" >
                                        <div className="small-circle">1</div>
                                        <h3>Business English </h3>
                                    </div>
                                    <div className="text-and-line">
                                        <hr className="left-side-line" />
                                        <p>Zamestnanci perfektne zvládnu Anglickú korešpondenciu, odosielanie a vystavovanie faktúr, zadávanie objednávok, základnú terminológiu a telefonáty so zahraničnými klientmi v angličtine. Budete sa môcť spoľahnúť na to, že telefonát zo zahraničia prebehne bez trémy. </p>
                                    </div>
                                </div>

                                <div className="right-textbox">
                                    <div className="circle-and-header">
                                        <div className="small-circle">2</div>
                                        <h3>Všeobecné firemné kurzy</h3>
                                    </div>
                                    <div className="text-and-line">
                                        <hr className="left-side-line" />
                                        <p>Dovzdelávanie v oblasti všeobecnej angličtiny vo všetkých úrovniach. Zábavné, zo života, bez ťažkej gramatiky... Vaši zamestnanci porozumejú princípom jazyka, ktorí uplatnia v bežnom živote i v práci.</p>
                                    </div>
                                </div>

                                <div className="right-textbox">
                                    <div className="circle-and-header">
                                        <div className="small-circle">2</div>
                                        <h3>Teambuildingy a semináre</h3>
                                    </div>
                                    <div className="text-and-line">
                                        <hr className="left-side-line" />
                                        <p>Ak potrebujete lektora na firemný teambuilding po anglicky, sme tu pre Vás. Aktivity a motivačné cvičenia v rámci Vašej firemnej politiky i pre zahraničných zamestnancov, ktorí vyžadujú vysokú úroveň komunikácie.</p>
                                    </div>
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

