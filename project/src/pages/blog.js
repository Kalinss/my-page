import React from "react";
import Layout from "../components/layout";
const Blog = (props)=>{
    return(
        <Layout>
            <main className="blog section">
                <ul className="articles">
                    <li className="article">
                        <h2>
                            <a href="https://medium.com/@kalinss/%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D1%8E-react-ui-%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D1%83-ae8859e1a0c7">
                                Как создать свою React UI библиотеку
                            </a>
                            <span>➞</span>
                        </h2>
                        <p>Иногда возникает необходимость создания единого стилевого вида
                            для нескольких проектов. Для решения этой задачи можно использовать
                            готовые UI библиотеки веб-компонентов. Но что, если попробовать создать
                            свою?</p>
                        <div className="addInfo">
                            <span className='date'>29.04.2020</span>
                            <span> - </span>
                            <span className="read">2 min read</span>
                            <span> - </span>
                            <span className="type">development</span>
                        </div>
                    </li>
                </ul>
            </main>
        </Layout>

    )
};

export default Blog;