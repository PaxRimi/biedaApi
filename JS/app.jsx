import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    class PolandInfo extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                sportInformation: [],
                businessInformation: [],
                entertainmentInformation: [],
                loading: false,
            };
        }

        componentDidMount(){
            console.log("DidMount");

            fetch('https://newsapi.org/v2/top-headlines?country=pl&category=sports&apiKey=1cd024acfb594949abacb7cd2425550e', {
                method: 'GET',
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    let array;

                    array = data.articles.filter(articles => articles.description !== null);

                    this.setState({
                        sportInformation: array,
                        loading: true,
                    })
                });

            fetch('https://newsapi.org/v2/top-headlines?country=pl&category=business&apiKey=1cd024acfb594949abacb7cd2425550e', {
                method: 'GET',
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    let array;

                    array = data.articles.filter(articles => articles.description !== null);

                    this.setState({
                        businessInformation: array,
                        loading: true,
                    })
                });

            fetch('https://newsapi.org/v2/top-headlines?country=pl&category=entertainment&apiKey=1cd024acfb594949abacb7cd2425550e', {
                method: 'GET',
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    let array;

                    array = data.articles.filter(articles => articles.description !== null);

                    this.setState({
                        entertainmentInformation: array,
                        loading: true,
                    })
                });
        }

        topFunction = () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        render(){
            if(this.state.loading === false) {
                return <h1 style={{color:"white"}}>Loading...</h1>
            }

            const sports = this.state.sportInformation.map((element,index) => <div key={index} className="infoBox">
                <h2>{element.title}</h2>
                <p className="data">{element.publishedAt}</p>
                {element.urlToImage !== null ? <img className="newsPhoto" src={element.urlToImage} alt={"image Error"}/> : null}
                <p className="text">{element.description}</p> <a className="arrow" href={element.url} target="_blank">Przejdź do artykułu</a>
            </div>)



            const business = this.state.businessInformation.map((element,index) => <div key={index} className="infoBox">
                <h2>{element.title}</h2>
                <p className="data">{element.publishedAt}</p>
                {element.urlToImage !== null ? <img className="newsPhoto" src={element.urlToImage} alt={"image Error"}/> : null}
                <p className="text">{element.description}</p> <a className="arrow" href={element.url} target="_blank">Przejdź do artykułu</a>
            </div>)

            const entertainments = this.state.entertainmentInformation.map((element,index) => <div key={index} className="infoBox">
                <h2>{element.title}</h2>
                <p className="data">{element.publishedAt}</p>
                {element.urlToImage !== null ? <img className="newsPhoto" src={element.urlToImage} alt={"image Error"}/> : null}
                <p className="text">{element.description}</p> <a className="arrow" href={element.url} target="_blank">Przejdź do artykułu</a>
            </div>)

            return <div>
                <div className="News"><h1>Informacje z<br/>Polski:</h1>
                    <p>Przejdź do działu:</p>
                    <nav>
                        <ul>
                            <li><a href="#buisness">Polityka</a></li>
                            <li><a href="#sport">Sport</a></li>
                            <li><a href="#entertainment">Rozrywka</a></li>
                        </ul>
                    </nav>
                </div>
                <h2 className="headers" id="buisness">Polityka:</h2>
                {business}
                <h2 className="headers" id="sport">Sport:</h2>
                {sports}
                <h2 className="headers" id="entertainment">Rozrywka:</h2>
                {entertainments}
                <button onClick={this.topFunction} className="myBtn" id="myBtn" title="Go to top">Góra</button>
            </div>;
        }
    }

    class GermanyInfo extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                sportInformation: [],
                businessInformation: [],
                entertainmentInformation: [],
                loading: false,
            };
        }

        componentDidMount(){
            console.log("DidMount");

            fetch('https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=1cd024acfb594949abacb7cd2425550e', {
                method: 'GET',
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    let array;

                    array = data.articles.filter(articles => articles.description !== null);

                    this.setState({
                        sportInformation: array,
                        loading: true,
                    })
                });

            fetch('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1cd024acfb594949abacb7cd2425550e', {
                method: 'GET',
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    let array;

                    array = data.articles.filter(articles => articles.description !== null);

                    this.setState({
                        businessInformation: array,
                        loading: true,
                    })
                });

            fetch('https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=1cd024acfb594949abacb7cd2425550e', {
                method: 'GET',
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    let array;

                    array = data.articles.filter(articles => articles.description !== null);

                    this.setState({
                        entertainmentInformation: array,
                        loading: true,
                    })
                });
        }

        topFunction = () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        render(){
            if(this.state.loading === false) {
                return <h1 style={{color:"white"}}>Wird geladen</h1>
            }

            const sports = this.state.sportInformation.map((element,index) => <div key={index} className="infoBox">
                <h2>{element.title}</h2>
                <p className="data">{element.publishedAt}</p>
                {element.urlToImage !== null ? <img className="newsPhoto" src={element.urlToImage} alt={"image Error"}/> : null}
                <p className="text">{element.description}</p> <a className="arrow" href={element.url} target="_blank">Klick für mehr ...</a>
            </div>)

            const business = this.state.businessInformation.map((element,index) => <div key={index} className="infoBox">
                <h2>{element.title}</h2>
                <p className="data">{element.publishedAt}</p>
                {element.urlToImage !== null ? <img className="newsPhoto" src={element.urlToImage} alt={"image Error"}/> : null}
                <p className="text">{element.description}</p> <a className="arrow" href={element.url} target="_blank">Klick für mehr ...</a>
            </div>)

            const entertainments = this.state.entertainmentInformation.map((element,index) => <div key={index} className="infoBox">
                <h2>{element.title}</h2>
                <p className="data">{element.publishedAt}</p>
                {element.urlToImage !== null ? <img className="newsPhoto" src={element.urlToImage} alt={"image Error"}/> : null}
                <p className="text">{element.description}</p> <a className="arrow" href={element.url} target="_blank">Klick für mehr ...</a>
            </div>)

            return <div>
                <div className="News"><h1>Infos aus <br/>Deutschland:</h1>
                    <p>Gehe zu:</p>
                    <nav>
                        <ul>
                            <li><a href="#buisness">Geschäftsinformationen</a></li>
                            <li><a href="#sport">Sportinformationen</a></li>
                            <li><a href="#entertainment">Unterhaltungsinformationen</a></li>
                        </ul>
                    </nav>
                </div>
                <h2 className="headers" id="buisness">Geschäftsinformationen:</h2>
                {business}
                <h2 className="headers" id="sport">Sportinformationen:</h2>
                {sports}
                <h2 className="headers" id="entertainment">Unterhaltungsinformationen:</h2>
                {entertainments}
                <button onClick={this.topFunction} className="myBtn" id="myBtn" title="Go to top">Oben</button>
            </div>;
        }
    }

    class EnglishInfo extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                sportInformation: [],
                businessInformation: [],
                entertainmentInformation: [],
                loading: false,
            };
        }

        componentDidMount(){
            console.log("DidMount");

            fetch('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=1cd024acfb594949abacb7cd2425550e', {
                method: 'GET',
                })
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    let array;

                    array = data.articles.filter(articles => articles.description !== null);

                    this.setState({
                        sportInformation: array,
                        loading: true,
                    })
                });

            fetch('https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=1cd024acfb594949abacb7cd2425550e', {
                method: 'GET',
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    let array;

                    array = data.articles.filter(articles => articles.description !== null);

                    this.setState({
                        businessInformation: array,
                        loading: true,
                    })
                });

            fetch('https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=1cd024acfb594949abacb7cd2425550e', {
                method: 'GET',
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    let array;

                    array = data.articles.filter(articles => articles.description !== null);

                    this.setState({
                        entertainmentInformation: array,
                        loading: true,
                    })
                });
        }

        topFunction = () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        render(){
            if(this.state.loading === false) {
                return <h1 style={{color:"white"}}>Loading...</h1>
            }

            const sports = this.state.sportInformation.map((element,index) => <div key={index} className="infoBox">
                                                                <h2>{element.title}</h2>
                                                                <p className="data">{element.publishedAt}</p>
                                                                {element.urlToImage !== null ? <img className="newsPhoto" src={element.urlToImage} alt={"image Error"}/> : null}
                                                                <p className="text">{element.description}</p> <a className="arrow" href={element.url} target="_blank">Click for more...</a>
                                                                </div>)

            const business = this.state.businessInformation.map((element,index) => <div key={index} className="infoBox">
                <h2>{element.title}</h2>
                <p className="data">{element.publishedAt}</p>
                {element.urlToImage !== null ? <img className="newsPhoto" src={element.urlToImage} alt={"image Error"}/> : null}
                <p className="text">{element.description}</p> <a className="arrow" href={element.url} target="_blank">Click for more...</a>
            </div>)

            const entertainments = this.state.entertainmentInformation.map((element,index) => <div key={index} className="infoBox">
                <h2>{element.title}</h2>
                <p className="data">{element.publishedAt}</p>
                {element.urlToImage !== null ? <img className="newsPhoto" src={element.urlToImage} alt={"image Error"}/> : null}
                <p className="text">{element.description}</p> <a className="arrow" href={element.url} target="_blank">Click for more...</a>
            </div>)

            return <div>
                <div className="News"><h1>Info From <br/>England:</h1>
                    <p>Jump to:</p>
                    <nav>
                        <ul>
                            <li><a href="#buisness">Business info</a></li>
                            <li><a href="#sport">Sports info</a></li>
                            <li><a href="#entertainment">Entertainment info</a></li>
                        </ul>
                    </nav>
                </div>
                <h2 className="headers" id="buisness">Business info:</h2>
                {business}
                <h2 className="headers" id="sport">Sports info:</h2>
                {sports}
                <h2 className="headers" id="entertainment">Entertainment info:</h2>
                {entertainments}
                <button onClick={this.topFunction} className="myBtn" id="myBtn" title="Go to top">Top</button>
            </div>;
        }
    }

    class ChooseLanguage extends React.Component {
        constructor(props){
            super(props);


            this.state = {
                language: "",
            }
        }

        handleChoseLang = (e) => {
            let target = e.currentTarget;
            console.log(target.getAttribute("src").indexOf("England"));

            if(target.getAttribute("src").indexOf("England") > -1){
                this.setState({
                    language: "England",
                })
            } else if (target.getAttribute("src").indexOf("Germany") > -1) {
                this.setState({
                    language: "Germany",
                })
            } else if (target.getAttribute("src").indexOf("Poland") > -1) {
                this.setState({
                    language: "Poland",
                })
            }
        }

        render(){
            if (this.state.language === ""){
                return <div className="chooseBox">
                    <div className="SelectBox">
                    <h1>
                        Wybierz język/<br/>
                        Choose Language/<br/>
                        Wähle Sprache:

                        <div className="flexRow">
                            <img className="flag" src="./Images/England.png" onClick={e => this.handleChoseLang(e)}/>
                            <img className="flag" src="./Images/Germany.png" onClick={e => this.handleChoseLang(e)}/>
                            <img className="flag" src="./Images/Poland.png"  onClick={e => this.handleChoseLang(e)}/>
                        </div>
                    </h1>
                    </div>
                </div>
            } else if (this.state.language === "England"){
                return <EnglishInfo/>
            } else if (this.state.language === "Germany") {
                return <GermanyInfo/>
            } else if (this.state.language === "Poland") {
                return <PolandInfo/>
            }
        }
    }

    class App extends React.Component {

        render() {
            return <ChooseLanguage/>
        }
    }

    {/*<div>*/}
        {/*<ChooseLanguage/>*/}
    {/*</div>*/}
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});