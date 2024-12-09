import React from 'react'
import Title from './Title'
import "./gdpr.css"
import MobileNavbar from '../Navbar/MobileNavbar'
import Lines from '../Lines/Lines'
import Footer from '../Footer/Footer'

export default function Gdpr() {
    return (
        <>
            <MobileNavbar />
            <div className="gdpr-container" id='gdpr'>
                <div className="headline-box">
                    <div className='option-headline'>
                        Podmienky ochrany osobných údajov
                    </div>
                    <Lines ></Lines>
                </div>

                <Title title="Základné ustanovenia" />

                <div className='gdpr-text'>
                    <ol className='gdpr-list'>
                        <li>
                            Správcom osobných údajov podľa článku 4 ods. 7 nariadenia Európskeho parlamentu a Rady (EÚ)
                            2016/679 o ochrane fyzických osôb pri spracovaní osobných údajov a voľnom pohybe týchto údajov
                            (ďalej len „GDPR”) je WELSAN s.r.o., IČO: 51842769, so sídlom Maxima Gorkého 4, 917 02, Trnava (ďalej len: „správca“).

                        </li>
                        <li>
                            Kontaktné údaje správcu sú:
                            <ul className='unordered-list'>
                                <li>
                                    adresa: Malženická cesta 3, 917 01 Trnava
                                </li>
                                <li>
                                    e-mail: infowelsan@gmail.com
                                </li>
                                <li>
                                    tel.: +421948592508
                                </li>
                            </ul>
                        </li>
                        <li>
                            Osobnými údajmi sa rozumejú všetky informácie o identifikovanej alebo identifikovateľnej fyzickej osobe; identifikovateľnou fyzickou osobou je fyzická osoba, ktorú možno priamo alebo nepriamo identifikovať, najmä odkazom na určitý identifikátor, napríklad meno, identifikačné číslo, lokačné údaje, sieťový identifikátor alebo na jeden alebo viac zvláštnych prvkov fyzické, fyziologické, genetické, psychické, ekonomické, kultúrne alebo spoločenské identity tejto fyzickej osoby.
                        </li>
                        <li>
                            Správca nemenoval poverencov na ochranu osobných údajov.
                        </li>
                    </ol>
                </div>

                <Title title="II. Zdroje a kategórie spracovávaných osobných údajov" />

                <div className='gdpr-text'>
                    <ol className='gdpr-list' >
                        <li>
                            Správca spracováva osobné údaje, ktoré ste mu poskytol/a alebo osobné údaje, ktoré správca získal na základe odoslania formuláru.
                        </li>
                        <li>
                            Správca spracováva Vaše identifikačné a kontaktné údaje a údaje nevyhnutné pre plnenie zmluvy.
                        </li>
                    </ol>
                </div>
                <Title title="III. Zákonný dôvod a účel spracovania osobných údajov" />

                <div className='gdpr-text'>
                    <ol className='gdpr-list'>
                        <li>
                            Zákonným dôvodom spracovania osobných údajov je

                            plnenie zmluvy medzi Vami a správcom podľa článku 6 ods. 1 písm. b) GDPR,
                            oprávnený záujem správcu na poskytovaní priameho marketingu (najmä na zasielanie obchodných oznámení a newsletterov) podľa článku 6 ods. 1 písm. f) GDPR,
                            Váš súhlas so spracovaním na účely poskytovania priameho marketingu (najmä na zasielanie obchodných oznámení a newsletterov) podľa článku 6 ods. 1 písm. a) GDPR v spojení s § 7 ods. 2 zákona č. 480/2004 Zb. o niektorých službách informačnej spoločnosti v prípade, že nedošlo k objednávke tovaru alebo služby.
                        </li>
                        <li>
                            Zo strany správcu dochádza k automatickému individuálnemu rozhodovaniu v zmysle čl. 22 GDPR. S takýmto spracovaním ste poskytli svoj výslovný súhlas.
                        </li>
                    </ol>
                </div>
                <Title title="IV. Doba uchovávania údajov" />
                <div className='gdpr-text'>
                    <ol className='gdpr-list'>
                        <li>
                            Správca uchováva osobné údaje po dobu nevyhnutnú na výkon práv a povinností
                            vyplývajúcich zo zmluvného vzťahu medzi Vami a správcom a uplatňovanie nárokov
                            z týchto zmluvných vzťahov (po dobu 15 rokov od ukončenia zmluvného vzťahu).
                            po dobu, než je odvolaný súhlas so spracovaním osobných údajov na účely marketingu,
                            najdlhšie 15 rokov, ak sú osobné údaje spracovávané na základe súhlasu.
                        </li>
                        <li>
                            Po uplynutí doby uchovávania osobných údajov správca osobné údaje vymaže.
                        </li>
                    </ol>
                </div>
                <Title title="V. Príjemcovia osobných údajov (subdodávatelia správcu)" />

                <div className='gdpr-text'>
                    <ol className='gdpr-list'>
                        <li>
                            Príjemcami osobných údajov sú osoby
                            zaisťujúce marketingové služby a správca.
                            2. Správca má v úmysle odovzdať osobné údaje do tretej krajiny (do krajiny mimo EÚ) alebo medzinárodnej organizácii. Príjemcami osobných údajov v tretích krajinách sú poskytovatelia mailingových služieb/cloudových služieb.
                        </li>
                    </ol>
                </div>
                <Title title="VI. Vaše práva" />
                <div className='gdpr-text'>
                    <ol className='gdpr-list'>
                        <li>
                            Za podmienok stanovených v GDPR máte

                            právo na prístup k svojim osobným údajom podľa čl. 15 GDPR,
                            právo opravu osobných údajov podľa čl. 16 GDPR, prípadne obmedzenie spracovania podľa čl. 18 GDPR.
                            právo na výmaz osobných údajov podľa čl. 17 GDPR.
                            právo vzniesť námietku proti spracovaniu podľa čl. 21 GDPR a
                            právo na prenositeľnosť údajov podľa čl. 20 GDPR.
                            právo odvolať súhlas so spracovaním písomne alebo elektronicky na adresu alebo email správcu uvedený v čl. III týchto podmienok.
                        </li>
                        <li>

                            Ďalej máte právo podať sťažnosť na Úrade pre ochranu osobných údajov v prípade, že sa domnievate, že bolo porušené Vaše právo na ochranu osobných údajov.
                        </li>
                    </ol>
                </div>
                <Title title="VII. Podmienky zabezpečenia osobných údajov" />
                <div className='gdpr-text'>
                    <ol className='gdpr-list'>
                        <li>
                            Správca vyhlasuje, že prijal všetky vhodné technické a organizačné opatrenia na zabezpečenie osobných údajov.
                        </li>
                        <li>
                            Správca prijal technické opatrenia na zabezpečenie dátových úložísk a úložísk osobných údajov v listinnej podobe, najmä heslá, zabezpečený operačný systém - šifrovanie a aktualizovaný antivírusový program.
                        </li>
                        <li>
                            Správca vyhlasuje, že k osobným údajom majú prístup iba ním poverené osoby.
                        </li>
                    </ol>
                </div>
                <Title title="VIII. Záverečné ustanovenia" />
                <div className='gdpr-text'>
                    <ol className='gdpr-list'>
                        <li>
                            S týmito podmienkami súhlasíte zaškrtnutím súhlasu prostredníctvom internetového formulára. Zaškrtnutím súhlasu potvrdzujete, že ste oboznámený/á s podmienkami ochrany osobných údajov a že ich v celom rozsahu prijímate.
                        </li>
                        <li>
                            Správca je oprávnený tieto podmienky zmeniť. Novú verziu podmienok ochrany osobných údajov zverejní na svojich internetových stránkach a zároveň Vám zašle novú verziu týchto podmienok Vašu e-mailovú adresu, ktorú ste správcovi poskytol/a.
                        </li>
                    </ol>
                </div>
            </div>
            <Footer />
        </>
    )
}
