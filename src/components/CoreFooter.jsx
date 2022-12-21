import { Footer } from "react-daisyui";

function CoreFooter(){
    return (
        <Footer className="p-10">
            <div>
                <img src="./img/logo-primary.svg" alt="FSOS" className="w-10 h-10"/>
                <p>
                    Flatiron School Open Source
                    <br />
                    Flatiron School lessons for graduated students.
                </p>
            </div>
            <div>
                <Footer.Title>Lessons</Footer.Title>
                <a href="/software-engineering" className="link link-hover">Software Engineering</a>
                <a href="/data-science" className="link link-hover">Data Science</a>
            </div>
            <div>
                <Footer.Title>Company</Footer.Title>
                <a href="/#about" className="link link-hover">About</a>
                <a href="/#salaries" className="link link-hover">Salaries</a>
                <a href="/#newsletter" className="link link-hover">Newsletter</a>
            </div>
        </Footer>
    );
}

export default CoreFooter;