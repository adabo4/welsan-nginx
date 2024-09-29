import Lines from "../Lines/Lines";
import "./dielna.css";
import Footer from "../Footer/Footer"
import MobileNavbar from "../Navbar/MobileNavbar";

export default function Dielna() {
    return (
        <>
            <section className="english-dielna">

                <MobileNavbar />

                <div className="tvoriva-dielna-container">

                    <div className="headline-box">
                        <div className='ponuka-headline'>
                            Tvorivá dielňa
                        </div>
                        <Lines ></Lines>
                    </div>

                    <div className="dielna-bubbles-container">
                        <div className="dielna-bubbles-box">
                            <div className="pink-bubble">

                                <hr style={{ borderBottomWidth: 2 }} className="first-line" />
                                <hr style={{ opacity: 0.7 }} className="second-line" />
                                <hr style={{ opacity: 0.5 }} className="bubble-dotted" />
                                <h2>Anglická <span>tvorivá dielňa</span></h2>
                                <hr style={{ opacity: 0.7 }} className="bubble-dotted" />
                                <p>Pre mamičky s deťmi a pre tých najmenších sme si pre Vás pripravili sezónne aktivity, kde sa spája tvorivosť s jazykom. </p>
                                <hr style={{ opacity: 0.7 }} className="bubble-dotted" />
                            </div>

                        </div>

                        <div className="video-bubble">
                            <video src="./img/kids.mp4" autoPlay loop muted></video>

                        </div>

                    </div>

                    <div className="about-dielna">
                        <h2>Čo je Anglická tvorivá dielňa?</h2>
                        <p>Ide o skupinovú aktivitu s tými najmenšími, kde sa prostredníctvom hry a umeleckej tvorby budeme venovať angličtine. Pripravených máme desiatky sezónnych špecialít. Ideálne je, keď sa v skupinke stretnú deti, ktoré sa poznajú zo škôlky, kamaráti zo sídliska alebo súrodenci. Vznikne tak dynamické prostredie pre rozvoj ich zručností a jazyka. Detičky, ktoré sa v dielni stretnú prvýkrát sa však nemajú čoho obávať. Postaráme sa o to, aby do kolektívu rýchlo zapadli. Minimálne dva dni pred Dielňou sa rodičia dozvedia, čo budeme robiť a zabezpečia tak deťom potreby nad rámec základných pomôcok (papiere, farby, spreje, atď.), ktoré zabezpečujeme my. </p>
                        <p><span>Cena:</span> 15 EUR / 90 minút.</p>
                        <p><span>Pre koho: </span>deti v predškolskom veku a prvostupniarov. </p>
                        <p><span>Kedy:</span> pondelky od 16:00 do 17:30. </p>

                    </div>

                    <div className="malovanie">
                        <div className="separate">
                            <div className="malovanie-figurok">
                                <img src="./img/malovanie1.png" alt="Malovanie Figurok" />
                            </div>

                            <div className="malovanie-figurok">
                                <div className="malovanie-text">
                                    <h3 className="pink">Maľovanie figúrok</h3>
                                    <p>Maľovanie drevených alebo polystyrénových zvieratiek, kde  získame s deťmi slovnú zásobu z lesa a prírody. Výtvor si samozrejme odnesiete domov :) </p>
                                </div>

                            </div>
                        </div>

                        <div className="separate">
                            <div className="malovanie-figurok">
                                <img src="./img/malovanie.png" alt="" className="this-img" />
                            </div>
                            <div className="malovanie-figurok">
                                <div className="malovanie-text">
                                    <h3 className="green">Tričko na mieru</h3>
                                    <p>Spoznáme všetky farby dúhy na tričku, ktoré si po skončení dielne odnesiete domov. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}