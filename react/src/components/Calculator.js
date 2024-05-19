import React from "react";
import Chance from "./Chance";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../SpecialtiesForm.css'; // Для кастомных стилей анимации

class Calculator extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            grades: { math: '', physics: '', chemistry: '' },
            specialties: [],
            showSpecialties: false,
            showSpecialtiesContainer: false,
            showSpecialtiesText: false,
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // ваш код
        this.handleSubmit = this.handleSubmit.bind(this);
    }


     handleSubmit(event) {
        event.preventDefault();

        const form = document.getElementById('calculate');
        const formData = new FormData(form);

        const params = new URLSearchParams();
        formData.forEach((value, key) => {
            params.append(key, value);
        });

        fetch(`http://127.0.0.1:8000/api/speciality?${params.toString()}`, {
            method: 'GET',
        })
            .then(async response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json(); // Извлечение тела ответа как JSON
                console.log(data); // Логируем ответ для отладки
                this.setState({
                    specialties: data,
                    showSpecialtiesContainer: true,
                });
                this.setState({ showSpecialtiesText: true });
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }


    handleBlur(event) {
        const { name, value } = event.target;

        if (value.trim()) {
            this.setState(prevState => ({filledFields: prevState.filledFields + 1}));
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const currentValue = this.state[name];

        // if (value.trim() !== currentValue.trim()) {
        //     this.setState({ [name]: value });
        // }
    }

    render() {
        const { filledFields } = this.state;
        const remainingFieldsDisabled = filledFields >= 3;
        const { grades, specialties, showSpecialtiesContainer, showSpecialtiesText } = this.state;


        return (<main>
            <p>This: {remainingFieldsDisabled}</p>
            <p>filledFields: {filledFields}</p>
            <p>specialties.length: {specialties.length}</p>
            <Chance/>
            <form id="calculate" onSubmit={this.handleSubmit} className="flex flex-col items-center">
                <p className="text-3xl font-bold mb-10">{this.props.t("scores")}</p>
                <div className=" md:flex ">
                    <div className="md:mr-28 sm:m-auto">
                        <div className="mb-5 w-[300px] ">
                            <input type="text" id="ukrainian" name="ukr"  onChange={this.handleChange} onBlur={this.handleBlur}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("ukrainian")} required/>
                        </div>
                        <div className="mb-5 w-[300px]">
                            <input type="text" id="foreignLanguage" name="eng" onChange={this.handleChange} onBlur={this.handleBlur}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("foreign")} required/>
                        </div>
                    </div>
                    <div>
                        <div className="mb-5 w-[300px]">
                            <input type="text" id="mathematics" name="math" onChange={this.handleChange} onBlur={this.handleBlur}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("math")} required/>
                        </div>
                        <div className="mb-5 w-[300px]">
                            <input type="text" id="physics" name="field6" value={this.state.field6} onChange={this.handleChange} onBlur={this.handleBlur} disabled={this.state.field6 !== "" && remainingFieldsDisabled}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("physics")} />
                        </div>
                        <div className="mb-5 w-[300px]">
                            <input type="text" id="ukrainianHistory" name="field7" value={this.state.field7} onChange={this.handleChange} onBlur={this.handleBlur} disabled={this.state.field7 !== "" && remainingFieldsDisabled}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("history")} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <button type="submit"
                            className="text-white bg-[#FF3A3A] hover:bg-white hover:text-[#FF3A3A] font-medium text-[18px] w-[200px] h-[50px] px-5 py-2.5 text-center">{this.props.t("calculate")}
                    </button>
                </div>

            </form>
            <CSSTransition
                in={showSpecialtiesContainer}
                timeout={99999999}
                classNames="expand"
                unmountOnExit={false}
            >
                <div className="specialties-container overflow-hidden transition-all duration-300 ease-out">
                    <CSSTransition
                        in={showSpecialtiesText}
                        timeout={3000}
                        classNames="slide"
                        unmountOnExit={false}
                    >
                        <div className="xl:flex xl:justify-around">
                            {specialties.length > 0 ? (
                                specialties.map((specialty, index) => (
                                    <div key={index} className="bg-[#FF3A3A] text-white rounded-lg specialty p-2 m-4 w-[600px] sm:mx-auto">
                                        <h3 className="text-xl font-bold text-center mb-3 mt-3">{specialty.name.ukr}</h3>
                                        <div className="ml-3 mr-3">
                                            <p >{specialty.description.ukr}</p>
                                            <p><strong>Програма навчання:</strong> {specialty.study_program.ukr}</p>
                                            <p><strong>Тривалість навчання:</strong> {specialty.learning_time.ukr}</p>
                                            <p><strong>Прохідний бал:</strong> {specialty.pass_score}</p>
                                        </div>

                                    </div>
                                ))
                            ) : (
                                <p>No specialties available</p>
                            )}
                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>

        </main>)
    }
}

export default Calculator
