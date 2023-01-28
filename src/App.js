import React from "react";
import axios from 'axios'; //use this to make a get req to certain api

import './App.css';


class App extends React.Component {
    state = {
        adviceGlobal : ''
    };

    componentDidMount() {
       this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=> {
            const {advice } = response.data.slip;
            this.setState({adviceGlobal: advice});
            console.log(advice);

        })
        .catch((error)=>{
            console.log(error);

        });
    }

    render() {
        const {adviceGlobal} = this.state;
        return (
            <div className="app">
                <div className="card">
                <h1 className="heading">{adviceGlobal}</h1>
                <button className="button" onClick={this.fetchAdvice} >
                    <span>Give Me Advice!</span>
                </button>
                </div>
            </div>
        );
    }
}

export default App;