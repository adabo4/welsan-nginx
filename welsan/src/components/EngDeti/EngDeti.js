import Lines from "../Lines/Lines";
import "./engdeti.css"
import Footer from "../Footer/Footer";
import EmailJSForm from "../EmailJSForm";
import MobileNavbar from "../Navbar/MobileNavbar";

export default function EngDeti() {
    return (
        <>
            <section className="english-children">
                <MobileNavbar />
                <div className="eng-children-container">
                    <div className="headline-box">
                        <div className='ponuka-headline'>
                            Angličtina deti
                        </div>
                        <Lines ></Lines>
                    </div>

                    <h2 className="detailed-title">Detailný popis kurzov</h2>

                    <div id="rozpravkovo">
                        <div className="card-cont">
                            <div className="course-card">
                                <h3 className="card-headline pink">Kurzy Rozprávkovo</h3>
                                <p>Hračky, autíčka, kvety i tablet - to všetko využijeme pri nadobúdaní jazyka s tými najmenšími. </p>
                                <p>Cena: 200 EUR -  10 x 50 min.</p>
                            </div>
                            <div className="img-card">
                                <img src="./img/kid.png" alt="" />
                            </div>

                        </div>

                        <div className="card-text-cont">
                            <div className="card-text">
                                <p>Škôlkári sú fascinujúce bytosti plné fantázie, hravosti a chuti sa sem-tam riadne rozplakať :)
                                    Jazyk sa s nimi neučíme, ale ho <em> nadobúdame</em> zároveň s materinským jazykom. Dospelí študenti im môžu túto schopnosť
                                    často závidieť, pretože deti pristupujú k jazyku v segmentoch, namiesto snahy obsiahnuť syntax alebo zložité gramatické
                                    štruktúry. <br></br> Ich myseľ vpíja slovíčka i s chybami a priraďuje im význam bez toho, aby sa zbytočne zaťažovali inými funkciami.
                                    Pri správnom a trpezlivom prístupe nemajú škôlkári problém brať angličtinu ako prirodzenú súčasť ich komunikácie.
                                    Po čase si ani neuvedomia, že jazyk, ktorý sa učia je niečím výnimočný.
                                </p>
                            </div>
                            <div className="card-text right">
                                <p><span className="det-kurz">Detský kurz Rozprávkovo </span>je prvým krokom k bilingválnej
                                    (dvojjazyčnej) úrovni Vášho dieťaťa. V cene kurzu je i občerstvenie, prípadne Vami zvolená desiata,
                                    ktorú mu pripravím podľa Vašich inštrukcií. V špeciálnych prípadoch je možná i účasť rodiča na vybraných hodinách, ktorý tak získa predstavu o priebehu hodín a stane sa z neho part-time teacher pre svoje dieťa.
                                </p>
                            </div>
                            <div className="card-text right ">
                                <p><span>Ako to prebieha: </span>na prvom stretnutí si vypíšeme dotazník s informáciami o Vašom dieťati. Spolu si odkomunikujeme, čo od kurzu očakávame a aké sú realistické ciele v našom prípade (vývoj, logopedické schopnosti, motorické zručnosti, atď.)  Zoznámim sa s dieťatkom a po úvodnom zvyknutí si na seba sa začíname hrať, teda vlastne učiť. :)</p>
                            </div>

                            <div className="card-text">
                                <p><span>Výhody:</span> dieťaťu venujem nepretržitú pozornosť počas celej hodiny, čo mi umožňuje vybudovať si blízky vzťah a dôveru. Máte tak istotu, že je v dobrých rukách a celých 50 minút sa prispôsobujeme jeho tempu. Keďže si uvedomujeme, že niektoré dni bývajú detičky uplakané, nevyspaté, alebo skrátka len nemajú svoj deň, aktivity vieme prispôsobiť potrebám dieťatka a nemusí sa nasilu zapájať do skupinovej aktivity, ako vo veľkých škôlkach. </p>
                            </div>
                        </div>
                    </div>

                    {/* Pisomkovy ryhlokurz */}
                    <div id="pisomkovy">
                        <div className="card-cont">
                            <div className="course-card">
                                <h3 className="card-headline green">Písomkový rýchlokurz</h3>
                                <p>Keď škola nestihla naučiť, pred písomkou treba doučiť...</p>
                                <p>Cena: 20 EUR / 50 min. </p>
                            </div>

                            <div className="img-card">
                                <img src="./img/test.png" alt="" className="test-img" />

                            </div>

                        </div>

                        <div className="card-text-cont">
                            <div className="card-text">
                                <p>Stres pred písomkou pozná každý rodič i študent, zvlášť keď sa v žiackej knižke mihne i nejaká tá trojka z angličtiny... Deti často nepovažujú za potrebné doma spomenúť, že si potrebujú opraviť známku na rozhodujúcej písomke alebo ústnej odpovedi. Keď sa to po rodičovskom združení rodič dozvie, nastáva chaotické hľadanie niekoho na "doučko."
                                </p>
                            </div>
                            <div className="card-text right">
                                <p>V našej jazykovke sa Vaše hľadanie končí. Nemusíte siahať po študentoch a školákoch, ktorí inzerujú svoje doučovanie za nízke ceny v zodpovedajúcej (ne)kvalite. Študent alebo ten, kto ovláda angličtinu má často predstavu, že ju predsa môže ísť učiť, v tom horšom prípade aj dieťa, ktorému sa v predmete nedarí. Zlé známky mu berú motiváciu, tlak rodičov a učiteľov tiež neprispieva k jeho chuti sa učiť. Skúste prelomiť ľady a siahnite po našom <span className="green">Písomkovom rýchlokurze</span>, praktickom a pohodlnom riešení.
                                </p>
                            </div>
                            <div className="card-text right ">
                                <p><span>Ako to prebieha: </span>Zavoláte mi, prípadne napíšete a dohodneme si čas a dátum hodiny. Viem sa prispôsobiť a dieťa zobrať i zo dňa na deň a precvičiť s ním látku, ktorú potrebuje. Nezabudnite si priniesť materiály a školské učebnice, z ktorých bude skúšané. Viem pomôcť pri príprave na test, odpoveď alebo pri písaní slohu.</p>
                            </div>

                            <div className="card-text">
                                <p><span>Výhody:</span> istota, že i doučovanie prebieha pod odborným lingvistickým dohľadom v priestoroch jazykovej učebne, nemusíte tak chodiť domov k laikom z inzerátov alebo pustiť do bytu cudzieho človeka . Som maximálne flexibilná a mojím cieľom je vyjsť Vám časovo v ústrety, preto som vedela pomôcť i deťom deň pred písomkou, čo však nie je ideálne - je to stresujúca situácie pre deti, rodičov i lektorku. </p>
                                <br />
                                <p><em>Upozornenie: </em> I keď lektorka aj Vaše dieťa budú robiť všetko, čo je v ich silách, pri dlhodobo zanedbávanej príprave na hodiny či zhoršenom prospechu sa nedajú očakávať zázraky. Vyvinieme spolu maximálne úsilie, aby sme si známku vylepšili/opravili, avšak s odporúčaním, aby sa dieťa jazyku venovalo v našom detskom kurze aspoň 10 hodín. Vyhnete sa tým zbytočnému stresu a opravovaniu známok. </p>
                            </div>
                        </div>
                    </div>

                    {/* Príprava na maturitu */}
                    <div id="maturita">

                        <div className="card-cont">
                            <div className="course-card">
                                <h3 className="card-headline pink">Príprava na Maturitu</h3>
                                <p>Systematická pomoc pri príprave na písomnú i ústnu časť maturít. Príprava na štátnice. </p>
                                <p>Cena: 250 EUR - 10 x 50 min. </p>
                            </div>
                            <div className="img-card">
                                <img src="./img/book.png" alt="" />

                            </div>

                        </div>

                        <div className="card-text-cont">
                            <div className="card-text">
                                <p>BIfľovanie maturitných tém z ošúchaných papierov po starších ročníkoch už dávno vyšlo z módy. V posledných rokoch je maturita koncipovaná v štýle zahraničných certifikátov a diplomov. Preveruje  porozumenie, logické myslenie a detailný rozbor textu. Nedá sa ňou len tak preletieť a dúfať, že známka bude stáť na jednom šťastnom slovíčku. Percentá nepustia, témy sú náročnejšie, slohy vyžadujú rýchlu reakciu a bezchybný písomný prejav. </p>
                            </div>
                            <div className="card-text right">
                                <p>Od maturantov sa očakáva znalosť angličtiny na vysokej úrovni, dôkazom čoho je aj povinná B2 maturita na niektorých školách. Ak však máš nedostatky v gramatike alebo ústnom prejave, je ten pravý čas si v Septembri vytýčiť ciele a systematicky na nich pracovať. Maturovať sa dá bez stresu a už po absolvovaní jedného <span className="pink"> 10. hodinového kurzu </span> vo WELSANe nadobudnete sebavedomie pri ťahaní otázok. </p>
                            </div>
                            <div className="card-text right ">
                                <p><span>Ako to prebieha: </span>Na prvom stretnutí si dohodneme časy a dni kurzu. Porozprávame sa o Tvojom vzťahu k angličtine, silných stránkach i nedostatkoch a určíme si materiály, ktoré Tvoj profesor vyžaduje. Potom sa pustíme do práce. Najviac času strávime pri tom, čo Ti robí problém. Na príkladoch z Tvojho života a vecí, čo Ťa bavia si vybuduješ sebavedomie. </p>
                            </div>

                            <div className="card-text">
                                <p><span>Výhody:</span> Maturantom sa málokedy venuje individuálna pozornosť na hodinách, kde sa témy pre nedostatok času riešia "za pochodu". Ak si slabší alebo bojuješ s použitím niektorého z časov, neostáva Ti nič iné, len sa mechanicky bifľovať. STOP. Tento proces u nás odstránime a Ty prevezmeš iniciatívu. Nebudeme sa bifľovať, ale logicky a jednoducho sa naučíme orientovať v spleti požiadaviek potrebných na maturitu. </p>
                            </div>
                        </div>

                    </div>

                    {/* Príprava na štátnice */}

                    <div id="statnice">
                        <div className="card-cont">
                            <div className="course-card">
                                <h3 className="card-headline green">Príprava na štátnice</h3>
                                <p>Dosiahol si najvyššiu métu, chýba už len úspešne zložiť štátnice a titul bude Tvoj...</p>
                                <p>Cena: 250 EUR - 10 x 50 min.  </p>
                            </div>
                            <div className="img-card">
                                <img src="./img/statnice.png" alt="" />

                            </div>

                        </div>

                        <div className="card-text-cont">
                            <div className="card-text">
                                <p>Príprava na štátnice vyžaduje vysokú mieru odbornosti a citu pre detail. Ak si nie si istý gramatikou, potrebuješ zdokonaliť svoju slovnú zásobu alebo sa natrénovať pred komisiu, využi nás kurz
                                    <span className="green"> Prípravy na štátnice.</span> 10. hodín kurzu rozložíme tak, aby čo najefektívnejšie pokryl semester a okruhy, z ktorých sa bude skúšať. </p>
                            </div>
                            <div className="card-text right">
                                <p>Dravá konverzácia bude zameraná na cvičenie rýchlych reakcií. Naučíme sa urobiť si prípravu na papier v štruktúrovaných bodoch, precvičíme si čas a formu ideálnej odpovede a vyskúšame si, čo spraviť v prípade, že "zamrzneš." </p>
                            </div>
                            <div className="card-text">
                                <p>Povieme si tipy a triky na navrátenie sa k téme v prípade, že Tvoj skúšajúci položí otázku mimo témy, ktorá zaskočí. Máš už len krôčik od vysnívaného titulu, tak sa poďme spolu uistiť, že to dáš. </p>
                            </div>

                        </div>
                    </div>

                    <h2 className="detailed-title">Máte otázku? Pýtajte sa:</h2>
                    <EmailJSForm />
                </div>
                <Footer />
            </section>
        </>
    )
}