import { Link } from "react-router-dom";
import Lines from "../Lines/Lines";
import london from './london copy.png';
import './about.css';
import { HashLink } from "react-router-hash-link";


function About(props) {

    return (
        <>
            <div className="center">

                <div className="left-side">

                    <div className="left-text">
                        <div className="small-circle">1</div>
                        <div style={{ display: "inline-block" }}>
                            <hr className="left-side-line" />
                            <h3>Praktické situácie </h3>
                            <p>Metóda TPR Vás naučí prestať sa učiť a začať myslieť. Logický prístup s cieľom pomôcť Vám konečne sa dorozumieť na dovolenke, na letisku, v reštaurácii či v práci.  </p>
                        </div>
                    </div>
                    <div className="left-text">
                        <div className="small-circle">2</div>
                        <div style={{ display: "inline-block" }}>
                            <hr />
                            <h3>Hovoríte 80% <br></br>lekcie</h3>
                            <p>80% každej hodiny je venovanej komunikácii. U nás nie je miesto pre veľké skupiny, kde čakáte na to, kým sa dostanete k slovu. 1 lektor, 1 študent a 100% nasadenie Vám dajú maximum. </p>
                        </div>
                    </div>
                    <div className="left-text">
                        <div className="small-circle">3</div>
                        <div>
                            <hr />
                            <h3>Tempo udávate <br></br>Vy </h3>
                            <p>Žiadny stres z nanútenej domácej úlohy, alebo vymeškania hodiny. Odteraz Vám rodinná oslava, rodičovské združenie alebo chrípka angličtinu nepokazí. Hodinu presunieme a Vy neprídete ani o minútu zaplateného času. </p>
                        </div>
                    </div>


                </div>



                <div className="right-side">

                    <div className="right-text">
                        <hr className="line" />
                        <hr className="thin" />
                        <hr className="line-dotted" />
                        <div className="small-circle"></div>
                        {/* <div>tuto bol div style inline-block</div> */}
                        <h3>O mne</h3>
                        <hr className="line-dotted" />
                        <hr className="thin" />
                        <hr className="line" />



                        <div className="about-text">
                            <p>Ahojte, volám sa Silvia, som 32-ročná, zanietená lektorka s dlhoročnými skúsenosťami v oblasti tlmočenia,
                                prekladov a výučby anglického jazyka. Na jazyk sa pozerám z pohľadu študenta a nie kníh,
                                slovníkov či machra, ktorý už roky plynulo spíkuje.</p>
                            <p>Som tu pre ...</p>
                            <p>... tých, ktorí sa potrebujú naučiť na polročnú písomku a nemá im kto pomôcť. </p>
                            <p>... vysokoškolákov, ktorí potrebujú zvládnuť skúšku v angličtine a nie sú si celkom istí, že to dajú.</p>
                            <p>...prváčikov, ktorých rodičom ide o ich budúcnosť a vidia, že angličtiny v škole je málo.</p>
                            <p>... dospelých, ktorí jazyk nikdy nemali a konečne zatli zuby a odhodlali sa začať.</p>
                            <p>... večných začiatočníkov, ktorí sa hanbia priznať, koľkokrát už knihy odložili a prestali sa učiť.</p>
                            <p>... pokročilých C1-károv, ktorí hľadajú bilingválneho lektora na bezchybný a dravý pokec.</p>
                            <p>Pripravím Ťa na maturitu tak, že ťahanie otázky bude už len formalita.  Moje hodiny sú dynamické, hravé a na jazyk ideme spolu logicky, jednoducho. Tréma u mňa nemá miesto. </p>
                        </div>

                        <div className="list-pros">
                            <ul>
                                <li>Hodiny šité na mieru</li>
                                <li>Časy a dni si vyberáte Vy</li>
                                <li>Logický a jednoduchý prístup</li>
                                <li>Dospelí, deti, firmy</li>
                                <li>Detské kurzy</li>
                                <li>Tvorivá dieľňa pre najmenších</li>
                            </ul>

                        </div>

                        <HashLink to="/o-kurzoch#ponuka" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}><button className="btn-info">Viac info...</button></HashLink>

                        <img src={london} className="london-img"></img>


                    </div>



                </div>


            </div>


        </>
    )
}

export default About;