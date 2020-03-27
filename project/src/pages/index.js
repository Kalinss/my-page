import React from "react"

import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout";
import Header from '../components/header'


const IndexPage = ({data}) => {

    return (
        <Layout>
            <main className="main section">
                {/*<Img className='main__img' fluid={data.image.childImageSharp.fluid} alt=""/>*/}
                {/*<article className='main__text'>*/}
                {/*    <p>*/}
                {/*        Привет как дела твои */}
                {/*    </p>*/}
                {/*    <p>*/}
                {/*        I've been working several years as a Software Engineer to build multiple applications, web and mobile, as well as a frontender and a backender, as a team leader, a company creator and community organizer, but also as a consultant and full time employee, helping and enabling companies deliver high-quality products.*/}

                {/*        With a background in Engineering, and after having completed a Machine Learning course in Technical University of Denmark (DTU) and worked as a Data Scientist trainee, I'm now shifting towards Data Science.*/}
                {/*    </p>*/}
                {/*</article>*/}
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
