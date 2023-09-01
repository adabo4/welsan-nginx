import Navbar from "../Navbar/Navbar";
import Lines from "../Lines/Lines";
import "./kdenasnajdete.css"
import Footer from "../Footer/Footer";
import { SlArrowDown } from "react-icons/sl";
import { HashLink } from "react-router-hash-link";


export default function KdeNasNajdete() {

    const divstyle1 = {
        maxWidth: "100%",
        listStyle: "none",
        transition: "none",
        overflow: "hidden",
        width: "500px",
        height: "500px",



    }

    const embedstyle = {
        width: "100%",
        height: "100%",
        maxWidth: "100%",
    }

    const iframestyle = {
        height: "100%",
        width: "100%",
        border: 0,
    }
    return (
        <>
            <div className="kde-nas-najdete" id="kde-nas-najdete">
                <Navbar />
                <div className="najdete-nas-container">

                    <div className="headline-box">
                        <div className='ponuka-headline'>
                            Kde sme?
                        </div>
                        <Lines ></Lines>
                    </div>

                    <div className="kde-sme-content">
                        <div className="kde-sme-left">
                            <div className="kde-sme-bubble">
                                <div className="kde-sme-bubble-text">
                                    <hr className="first-line" />
                                    <hr className="first-line" />
                                    <hr className="second-line" />
                                    <h2>Začni už dnes</h2>
                                    <hr className="bubble-dotted" />
                                    <span><HashLink to="/o-kurzoch#ponuka" smooth scroll={(el) =>el.scrollIntoView({behavior: 'smooth', block: 'start'})}><SlArrowDown></SlArrowDown></HashLink></span>

                                </div>
                            </div>

                            <div className="reasons-to-learn">
                                <div className="reasons-left" >
                                    <div className="circle-and-header-reasons" >
                                        <div className="small-circle">1</div>
                                        <h3>Prístup MHD</h3>
                                    </div>
                                    <div className="text-and-line">
                                        <hr className="left-side-line" />
                                        <p>1 minútu chôdze od našej učebne sídlia zastávky viacerých autobusov, preto je cesta k nám bezproblémová i pre deti a študentov zo škôl. Dostanete sa k nám Linkami </p>
                                        <img src="./img/1.webp" alt="Bus Line 1" className="bus" />
                                        <img src="./img/3.webp" alt="Bus Line 1" className="bus" />
                                        <img src="./img/12.webp" alt="Bus Line 1" className="bus" />
                                    </div>
                                </div>

                                <div className="reasons-left">
                                    <div className="circle-and-header-reasons">
                                        <div className="small-circle">2</div>
                                        <h3>Zabezpečené materiály a pitný režim</h3>
                                    </div>
                                    <div className="text-and-line">
                                        <hr className="left-side-line" />
                                        <p>Na hodinách spojíme príjemné s užitočným a posedíme si pri kávičke alebo horúcom čaji. Väčšinu materiálov Vám zabezpečím pred hodinou zadarmo. </p>
                                    </div>
                                </div>



                                <div className="reasons-left">
                                    <div className="circle-and-header-reasons">
                                        <div className="small-circle">3</div>
                                        <h3>Empatický, ľudský prístup</h3>
                                    </div>
                                    <div className="text-and-line">
                                        <hr className="left-side-line" />
                                        <p>U mňa nemá miesto tréma, strach z chybného rozprávania, pocit neistoty či výčitky z nespravenej úlohy. V prvom rade sme ľudia a Vy alebo Vaše deti u mňa prežijete príjemné chvíle plné radosti. </p>
                                    </div>
                                </div>
                                <div className="reasons-left">
                                    <div className="circle-and-header-reasons">
                                        <div className="small-circle">4</div>
                                        <h3>Jedna lektorka počas celého kurzu</h3>
                                    </div>
                                    <div className="text-and-line">
                                        <hr className="left-side-line" />
                                        <p>Venovať sa Vám bude majiteľka jazykovky, a preto si Vy ani Vaše deti nemusia zvykať na iné štýly výučby a prístupu. Mne samej záleží na špičkovej kvalite, dobrom mene a Vašej spokojnosti. Tá je totiž pre mňa základom našej spolupráce. </p>
                                    </div>
                                </div>



                            </div>


                        </div>

                        <div className="kde-sme-right">
                            <div className="headline-box">
                                <div className='ponuka-headline'>
                                    <div className="small-circle-kde"></div>
                                    <h2> Učebňa Trnava
                                    </h2>
                                </div>
                                <Lines ></Lines>
                            </div>

                            <div className="kde-sme-text">
                                <p>Nájdete nás na adrese Malženická cesta 3  v Trnave. Jazyková učebňa sa nachádza na okraji mesta, vedľa tichej štvrte Kopánka s vlastným parkovaním zadarmo. Bez problémov sa k nám dostanete i z okolia cez trnavský obchvat.</p>
                            </div>

                            <div className="google-map-box" id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.3811573631044!2d17.607900439557604!3d48.403507498394134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b5f06891d484f%3A0xcd14ec5ebbe04ce1!2sWELSAN%20s.r.o.%20-%20English%20language%20school!5e0!3m2!1ssk!2ssk!4v1689007898042!5m2!1ssk!2ssk"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="welsan"
                                >


                                </iframe>




                            </div>

                            <div className="headline-box objednanie">
                                <div className='ponuka-headline'>
                                    <div className="small-circle-kde green-kde"></div>
                                    <h2>Ako sa objednať? </h2>
                                </div>
                                <Lines ></Lines>
                            </div>


                            <div className="objednanie-bubbles-container">

                                <h3>Telefonicky, mailom, online dotazník</h3>

                                <div className="bubbles-box">
                                    <div className="green-bubble">

                                        <p>Zavolajte</p>
                                        <p>na</p>
                                        <p>0948 592 508</p>
                                        <p>infowelsan@gmail.com</p>


                                    </div>


                                    <div className="bubble-img">
                                        <img src="./img/girl.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="objednaj-sa-text">
                                <p>Z dôvodu zvýšeného záujmu študentov je dobré si rezervovať miesto v <span className="green-span">10. hodinových kurzoch</span> čím skôr. Získate tak istotu, že Vami vybraný termín ešte nebude obsadený. Po potvrdení termínu ho máte záväzne rezervovaný. </p>
                                <p>V <span className="pink-span">Písomkovom</span> rýchlokurze je miesto otvorené podľa potreby, ideálne však je zavolať aspoň 2 dni vopred, aby sme sa Vy, ja a Vaše dieťa zladili a pripravili na boj s opravovaním známok :) </p>
                                <p><strong>Firemné kurzy </strong>sa objednávajú individuálne a sú zostavené na mieru podľa požiadaviek zamestnávateľa. </p>
                            </div>




                            {/* <div style="max-width:100%;list-style:none; transition: none;overflow:hidden;width:500px;height:500px;"><div id="embed-map-canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/streetview?location=48.4033,17.6089&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="our-googlemap-code" href="https://www.bootstrapskins.com/themes" id="grab-map-info">premium bootstrap themes</a><style>#embed-map-canvas img{max-height:none;max-width:none!important;background:none!important;}</style></div> */}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}