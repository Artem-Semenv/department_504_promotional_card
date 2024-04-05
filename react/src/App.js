import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";

import lupa_white from './img/lupa_white.png';
import lupa_black from './img/lupa_black.png';
import exit_white from './img/exit_white.png';
import exit_black from './img/exit_black.png';
import switch_to_white_version from './img/switch_to_white_version.png';
import switch_to_dark_version from './img/switch_to_dark_version.png';
import telegram from './img/telegram.png';
import dict_white from './img/dict_white.png';
import dict_black from './img/dict_black.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import phone from './img/phone.png';
import mail from './img/mail.png';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "Help text!",
            result_connection: "",
            color: {
                "theme": "dark",
                "background": "#1D1D1D",
                "menu_background": "bg-white",
                "search": "#8E8E8E",
                "default_text_color_in_search": "gray-700",
                "language_text_color": "white",
                "lupa": lupa_white,
                "exit": exit_white,
                "switch":switch_to_white_version,
                "telegram":telegram,
                "dict":dict_white,
                "instagram":instagram,
                "facebook":facebook,
                "phone":phone,
                "mail":mail
            },
            userData: ""
        }

        this.inputClick = this.inputClick.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.connect = this.connect.bind(this)
    }

    render() {
        return (<div>
            <Header changeColor={this.changeColor} color={this.state.color}/>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <button onClick={this.connect}>Click for testing backend connection: {this.state.result_connection}</button>
            <Footer color={this.state.color}/>
        </div>)
    }

    connect(){
        axios.get('http://127.0.0.1:8000/api/test').then((res) => {
            this.setState({
                result_connection: res.data.result
            })

        })
    }

    inputClick() {
        this.setState({
            helpText: "Change"
        })
        console.log("Clicked")
    }

    mouseOver() {
        console.log("Mouse Over")
    }

    changeColor() {
        console.log("awff")
        if (this.state.color["theme"] === "dark"){
            this.setState({
                color: {
                    "theme": "white",
                    "background": "white",
                    "menu_background": "bg-black",
                    "search": "#7C7C7C",
                    "default_text_color_in_search": "[#1D1D1D]",
                    "language_text_color": "black",
                    "lupa": lupa_black,
                    "exit": exit_black,
                    "switch":switch_to_dark_version,
                    "telegram":telegram,
                    "dict":dict_black,
                    "instagram":instagram,
                    "facebook":facebook,
                    "phone":phone,
                    "mail":mail
                }
            })
        }else {
            this.setState({
                color: {
                    "theme": "dark",
                    "background": "#1D1D1D",
                    "menu_background": "bg-white",
                    "search": "#8E8E8E",
                    "default_text_color_in_search": "gray-700",
                    "language_text_color": "white",
                    "lupa": lupa_white,
                    "exit": exit_white,
                    "switch":switch_to_white_version,
                    "telegram":telegram,
                    "dict":dict_white,
                    "instagram":instagram,
                    "facebook":facebook,
                    "phone":phone,
                    "mail":mail
                }
            })
        }

    }
}

export default App
