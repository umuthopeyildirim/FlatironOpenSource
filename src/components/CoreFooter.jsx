import { Footer } from "react-daisyui";

function CoreFooter(){
    return (
        <Footer className="p-10">
            <div>
                <img src="/img/logo.webp" alt="FSOS" className="w-10"/>
                <p>
                    Flatiron Open Source
                    <br />
                    Flatiron School lessons for graduated students.
                </p>
            </div>
            <div>
                <Footer.Title>Lessons</Footer.Title>
                <a href="/courses/software-engineering" className="link link-hover">Software Engineering</a>
                <a href="/courses/data-science" className="link link-hover">Data Science</a>
                <a href="/courses/product-design" className="link link-hover">Product Design</a>
                <a href="/courses/data-structures-and-algorithms" className="link link-hover">Data Structures and Algorithms</a>
            </div>
        </Footer>
    );
}

export default CoreFooter;