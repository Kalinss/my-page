import React from "react"

import {graphql} from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout";



const IndexPage = ({data}) => {

    return (
        <Layout>
            <main className="main section">
                <Img className='main__img' fluid={data.image.childImageSharp.fluid} alt=""/>
                <article className='main__text'>
                    <p>
                        Hello, my name is Sergey.
                    </p>
                    <p>
                        I like beautiful designs, but even more I love frontend developing.
                    </p>
                    <ul>
                       <li>My prefered technologies:</li>
                        <li>
                             JavaScript / ECMAScript 5 / ECMAScript 6+
                        </li>
                        <li>
                             HTML / HTML5 and HTML5 api / Pug (Jade) / Twig
                        </li>
                        <li>
                             CSS / CSS3 / SASS (SCSS)
                        </li>
                        <li>
                             React / Redux / jQuery / Lodash
                        </li>
                        <li>
                             Webpack 2+ / Gulp / Babel
                        </li>
                        <li>
                             Handlebars / Mustache
                        </li>
                        <li>
                             Bootstrap / Semantic UI / Foundation
                        </li>
                        <li>
                             NodeJS (beginner level) / Express / MongoDB
                        </li>
                        <li>
                             Git / BEM
                        </li>
                        <li>
                             Adobe Illustrator / Adobe Photoshop
                        </li>
                    </ul>
                    <p>
                        I also really like JAM stack and functional programming ideas.
                    </p>
                </article>
            </main>

        </Layout>
    )
};

export const query = graphql`
    {
        image: file(relativePath:{eq:"logo-primary.jpg"}){
            childImageSharp{
                fluid(maxWidth:600){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default IndexPage
