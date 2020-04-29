import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faRss} from "@fortawesome/free-solid-svg-icons";
import {faMedium, faGithub,faVk} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'gatsby';

const getActiveLink = (name) => window.location.pathname === name ? 'active':'';

const Header = (props)=>{
    return(
        <header className='header'>
            <h1>Kalinin Sergey</h1>
            <nav>
                <ul className="left">
                    <li className={getActiveLink('/')}> <Link to="/">home</Link></li>
                    <li className={getActiveLink('/blog/')}><Link to="blog/">blog</Link></li>
                </ul>
                <ul className="right">
                    <li>
                        <a href="https://medium.com/@kalinss">
                            <FontAwesomeIcon className='icon'  icon={faMedium}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Kalinss">
                            <FontAwesomeIcon className='icon'   icon={faGithub}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://vk.com/hidashko">
                            <FontAwesomeIcon className='icon'   icon={faVk}/>
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*    <FontAwesomeIcon className='icon'   icon={faCodepen}/>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <FontAwesomeIcon className='icon'   icon={faRss}/>*/}
                    {/*</li>*/}

                </ul>
            </nav>
        </header>
    )
};

export default Header;