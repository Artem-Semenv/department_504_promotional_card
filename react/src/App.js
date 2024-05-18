import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import i18n from './i18n';
import { withTranslation } from 'react-i18next';
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
import Information from "./components/Information";
import Map from "./components/Map";
import Specialties from "./components/Specialties";
import Conditions from "./components/Conditions";
import Communication from "./components/Сommunication";
import TimeLine from "./components/TimeLine";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language: "EN",
            result_connection: "",
            color: {
                "theme": "dark",
                "background": "bg-[#1D1D1D]",
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
            userData: "",

        }
        this.scrollToRefConditions = React.createRef();
        this.changeColor = this.changeColor.bind(this)
        this.connect = this.connect.bind(this)
        this.sendDataForCalculate = this.sendDataForCalculate.bind(this)
        this.onInputChange = this.onInputChange.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    scrollToConditions = () => {
        this.scrollToRefConditions.current.scrollIntoView({ behavior: "smooth" });
    };



    onInputChange(name, value) {
        console.log(`Поле ${name} было изменено. Новое значение: ${value}`);
    }

    sendDataForCalculate(data) {
        // В этом методе вы можете отправить данные на сервер
        // Например, используя axios.post
        // axios.post('/calculate', data)
        //     .then(response => {
        //         // Обработка успешного ответа
        //     })
        //     .catch(error => {
        //         // Обработка ошибки
        //     });
        console.log('Отправляем данные:', data);
    }

    render() {
        const { t} = this.props;

        return (<div  className={`${this.state.color["background"]} w-full text-[#8E8E8E]`}>
            <Header changeColor={this.changeColor} color={this.state.color}  scrollToConditions={this.scrollToConditions}
                    changeLanguage={this.changeLanguage} language={this.state.language} />
            <div className={`${this.state.color["background"]} h-[50px]`}></div>
            <main >
                <Specialties t={t}/>
                <Conditions scrollToRefConditions={this.scrollToRefConditions} t={t}/>
                <TimeLine t={t}/>
                <Calculator t={t} sendDataForCalculate={this.sendDataForCalculate} onInputChange={this.onInputChange}/>
                <Communication t={t}/>
                <Information t={t}/>
                <Map/>
            </main>
            <Footer t={t} color={this.state.color}/>
        </div>)
    }

    changeLanguage(language) {
        const { i18n } = this.props;
        i18n.changeLanguage(language);

        const languages = {"UK": "EN", "EN": "UK"}

        this.setState({
            language: languages[this.state.language]
        })
    }

    connect(){
        axios.get('http://127.0.0.1:8000/api/test').then((res) => {
            this.setState({
                result_connection: res.data.result
            })

        })
    }

    changeColor() {
        if (this.state.color["theme"] === "dark"){
            this.setState({
                color: {
                    "theme": "white",
                    "background": "bg-[#ffffff]",
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
                    "background": "bg-[#1D1D1D]",
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

export default withTranslation()(App)
