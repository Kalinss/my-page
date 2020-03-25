import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRss} from "@fortawesome/free-solid-svg-icons";
import {faMedium, faGithub,faVk,faCodepen} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'gatsby';

const Header = (props)=>{
    return(
        <header className='header'>
            <h1>Kalinin Sergey</h1>
            <nav>
                <ul className="left">
                    <li className='active'> <Link to="/">home</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                    <li><a href="">hire me</a></li>
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