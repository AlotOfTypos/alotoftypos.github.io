import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from '../PortfolioSlides';
// import Loader from 'react-loaders'
import { useState, useEffect } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'Y', 'o', 'y', 'o']

    useEffect(() => {
        let timeoutId = setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />
                    <span className={letterClass}> I'</span>
                    <span className={`${letterClass} _12`}>m</span>
                    <AnimatedLetters 
                        //TODO: Make name orange and turns brown when hovered
                        letterClass={letterClass} 
                        strArray={nameArray}
                        idx={15} 
                    />
                </h1>
                <h2>
                    Final Year Computer Science/Mathematics Student 
                    <br />
                    at The University of Auckland
                </h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
            {/* <Logo /> */}
        </div>
    )
}

export default Home