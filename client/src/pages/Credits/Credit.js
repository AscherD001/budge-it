import React, { Component } from "react";
import Navpills from "../../components/Navpills";
import "./Credit.css";


// import API from "../../utils/API";


class Credit extends Component {
    render() {
        return (
            <div>
                <Navpills /> 

            <div id="wrapper">
                <div className="ascher">
                    <img src="https://avatars0.githubusercontent.com/u/28353831?s=400&v=4" alt="Daniel Ascher" height="200" width="200" class="ashcer"/>
                    <a href="https://github.com/Wicked001"> Daniel Ascher </a>
                    <span className="ascher"> Daniel loves working with others and hopes to work in a magical land field with gummy bears, English, and has a strong foundation with Javascript. </span>
                </div>

                <div className="mcgeough">
                    <img src="https://avatars1.githubusercontent.com/u/26332545?s=400&v=4" alt="Daniel McGeough" height="200" width="200" id="mcgeough"/>
                    <a href="https://github.com/Dmcgeough"> Daniel McGeough Jr. </a>
                    <span className="mcgeough"> Daniel has lived in Europe for 4 years and likes to work with VanillaJS, SQLite, Bootstrap Framework. His passions include video games and writing code.</span>
                </div>

                <div className="nguyen">
                    <img src="https://avatars3.githubusercontent.com/u/26380040?s=400&v=4" alt="Long Nguyen" height="200" width="200" id="nguyen"/>
                    <a href="https://github.com/Gamec0ck4l"> Long Nguyen </a>
                    <span className="nguyen"> Long currently works at LPL Financial and likes to code in HTML, CSS, Javascript. His favorite hobbies include trading and being with his family. </span>
                </div>

                <div className="hopkins">
                    <img src={require(`./hopkins.png`)} alt="Stephen Hopkins" height="200" width="200" id="hopkins"/>
                    <a href="https://github.com/RaidoFive"> Stephen Hopkins </a>
                    <span className="hopkins"> Stephen's favorite programming languages include Javascript and Jquery. He loves to read, especially works from Jim Butcher. </span>
                </div>

                <div className="bui">
                    <img src="https://avatars2.githubusercontent.com/u/18633557?s=460&v=4" alt="Kevin Bui" height="200" width="200" id="bui"/>
                    <a href="https://github.com/buikevin96"> Kevin Bui </a>
                    <span className="bui"> Kevin is a computer science major and likes to work with every language. His favorite hobbies include coding, working out, and reading. </span>
                </div>
            </div>
        </div>
        );
    }
}


  

   

export default Credit;

