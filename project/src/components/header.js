import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRss} from "@fortawesome/free-solid-svg-icons";
import {faMedium, faGithub,faVk,faCodepen} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'gatsby';

const getActiveLink = (name) => window.location.pathname === name ? 'active':'';

const Header = (props)=>{
    console.log(window.location.pathname);
    return(
        <header className='header'>
            <h1>Kalinss</h1>
            <nav>
                <ul className="left">
                    <li className={getActiveLink('/')}> <Link to="/">home</Link></li>
                    <li className={getActiveLink('/blog/')}><Link to="blog/">blog</Link></li>
                </ul>
                <ul className="right">
                    <li>
                        <FontAwesomeIcon className='icon'  icon={faMedium}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon'   icon={faGithub}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon'   icon={faVk}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon'   icon={faCodepen}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon'   icon={faRss}/>
                    </li>

                </ul>
            </nav>
        </header>
    )
};

export default Header;