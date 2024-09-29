import butterfly from '../Kurzy/flower.webp';
import flower from "../Kurzy/flower.webp";
import kurzyInfo from './kurzyInfo';
import './kurzy.css'
import { buildQueries } from '@testing-library/react';
import Lines from '../Lines/Lines';
import { NavLink, unstable_useBlocker, useNavigate } from "react-router-dom"
import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// import './kurzyheadline.css'


function Kurzy() {
    // const rozpravkovo = useRef(null);
    // const handleClick = (elementRef) => {
    //     elementRef.current?.scrollIntoView({ behavior: 'smooth' , block: 'start'});
    //   };

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -50;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }


    // scroll={el => scrollWithOffset(el)}





    return (
        <>
            <div className="kurzy-container">
                <h3>Deti a študenti</h3>
                <Lines></Lines>
                <div className="course-types">


                    {kurzyInfo.map(kurz => {
                        return (
                            <>

                                {/* <div className="courses-box">
                                    <div className="course-text-box">
                                    <h4 style={{ color: kurz.color }}>{kurz.nazovKurzu}</h4>
                                    <p><b>Pre:</b> {kurz.pre}</p>
                                    <p><b>Trvanie:</b> {kurz.trvanie}</p>
                                    <p><b>Priebeh kurzu:</b> {kurz.priebeh}</p>
                                    </div>
                                    <div className='type-button'><button className='btn-info-2' >Viac info...</button></div>
                                                                
                                </div> */}

                            </>
                        )
                    })}


                    <div className="adults-box">

                        <div className="courses-box">
                            <div className="course-text-box">

                                <h4 className='pink'> Detské kurzy Rozprávkovo</h4>
                                <Lines></Lines>
                                <p><strong>Pre:</strong> predškolákov a prváčikov</p>
                                <p><strong>Trvanie:</strong> 10 x 50 min.</p>
                                <p><strong>Priebeh kurzu:</strong> 2x týždenne</p>
                            </div>
                            <div className='type-button'>
                                <HashLink to="/ang-deti#rozpravkovo" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} >
                                    <button className='btn-info-2' >  Viac info... </button>

                                </HashLink>

                            </div>
                        </div>

                        <div className="courses-box">
                            <div className="course-text-box">
                                <h4 className='green'>Písomkový rýchlokurz</h4>
                                <Lines></Lines>
                                <p><strong>Pre:</strong> študenti ZŠ / SŠ</p>
                                <p><strong>Trvanie:</strong> individuálne</p>
                                <p><strong>Priebeh kurzu:</strong> podľa potreby študenta, po dohode</p>
                            </div>
                            <div className='type-button'><HashLink to="/ang-deti/#pisomkovy" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}><button className='btn-info-2' >Viac info...</button></HashLink></div>
                        </div>

                        <div className="courses-box">
                            <div className="course-text-box">
                                <h4 className='pink'>Príprava na maturitu</h4>
                                <Lines></Lines>
                                <p><strong>Pre:</strong> maturant, študent SŠ</p>
                                <p><strong>Trvanie:</strong> 10 x 50min.</p>
                                <p><strong>Priebeh kurzu:</strong> min. 1x týždenne</p>
                            </div>
                            <div className='type-button'><HashLink to='/ang-deti/#maturita' scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}><button className='btn-info-2' >Viac info...</button></HashLink></div>
                        </div>

                        <div className="courses-box">
                            <div className="course-text-box">
                                <h4 className='green'>Príprava na štátnice</h4>
                                <Lines></Lines>
                                <p><strong>Pre:</strong> študent VŠ</p>
                                <p><strong>Trvanie:</strong> 10 x 50min.</p>
                                <p><strong>Priebeh kurzu:</strong> individuálne, podľa dohody</p>
                            </div>
                            <div className='type-button'><HashLink to='/ang-deti/#statnice' scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}><button className='btn-info-2' >Viac info...</button></HashLink></div>
                        </div>
                    </div>

                </div>

                <h3>Dospelí</h3>
                <Lines></Lines>

                <div className="course-types">



                    <div className="children-box">

                        <div className="courses-box">
                            <div className="course-text-box">
                                <h4 className='pink'>Polointenzívny kurz</h4>
                                <Lines></Lines>
                                <p><b>Pre:</b> dospelých všetkých úrovní ovládania jazyka, t.j. úplný začiatočník - plynule hovoriaci</p>
                                <p><b>Trvanie:</b> 10 x 50min.</p>
                                <p><b>Priebeh kurzu:</b> 1 - 2x týždenne</p>
                            </div>
                            <div className='type-button'><HashLink to='/ang-dospeli#dospeli' scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}><button className='btn-info-2' >Viac info...</button></HashLink></div>
                        </div>


                        <div className="courses-box">
                            <div className="course-text-box">
                                <h4 className='green'>Intenzívny kurz</h4>
                                <Lines></Lines>
                                <p><strong>Pre:</strong> dospelých všetkých úrovní ovládania jazyka, t.j. úplný začiatočník - plynule hovoriaci</p>
                                <p><strong>Trvanie:</strong> 10 x 50min.</p>
                                <p><strong>Priebeh kurzu:</strong> 3x týždenne</p>
                            </div>
                            <div className='type-button'><HashLink to='/ang-dospeli#dospeli' scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}><button className='btn-info-2' >Viac info...</button></HashLink></div>
                        </div>

                    </div>



















                </div>
            </div>

            {/* {kurzyInfo.map((cours => {
                            return (
                                <Kurz key={cours.id}
                                    name={cours.nazovKurzu}
                                    for={cours.pre}
                                    length={cours.priebeh}
                                    time={cours.trvanie}

                                    

                                />)

                        }))} */}




        </>




    )
}

export default Kurzy;