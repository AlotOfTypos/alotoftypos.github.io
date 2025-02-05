import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Photo from '../../assets/images/websitePhoto.jpg';

const Personal = () => {
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
        <>
            <div className="container personal-page">
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
                    <img src={Photo} alt="yoyo" />
                    <p>
                        I am intrigued and passionate about learning all things about tech, 
                        and is opened to opportunities that will encourage my learning to become 
                        a well-rounded developer!
                    </p>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                {/* <Logo /> */}
            </div>
            {/* <Loader type="ball-scale-multiple" /> */}
        </>
    )
}

export default Personal