import React from "react";
import axios from 'axios';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import '../SpecialtiesForm.css'; // Для кастомных стилей анимации

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ukr: '',
            eng: '',
            math: '',
            field6: '',
            field7: '',
            remainingFieldsDisabled: false,
            formError: '',
            specialties: [],
            showSpecialties: false,
            showSpecialtiesContainer: false,
            showSpecialtiesText: false,
            showAllInfoSpec: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateFieldState = this.updateFieldState.bind(this);
        this.validateField = this.validateField.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value}, this.updateFieldState);

        this.setState({formError: "", showAllInfoSpec: false})
    }

    updateFieldState() {
        const {ukr, eng, math, field6, field7} = this.state;
        const filledFieldsCount = [ukr, eng, math, field6, field7].filter(field => field !== '').length;

        this.setState({
            remainingFieldsDisabled: (filledFieldsCount >= 2 && (!ukr || !math)) || filledFieldsCount >= 3,
        });
    }

    validateField(name, value) {
        const regex = /^(100|1[0-9]{2}|200)$/;
        if (!regex.test(value)) {
            this.setState(prevState => ({
                fieldErrors: {
                    ...prevState.fieldErrors,
                    [name]: 'Value must be between 100 and 200'
                }
            }));
            return false;
        } else {
            this.setState(prevState => ({
                fieldErrors: {
                    ...prevState.fieldErrors,
                    [name]: ''
                }
            }));
            return true;
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        const {ukr, math, eng, field6, field7} = this.state;

        const isUkrValid = this.validateField('ukr', ukr);
        const isEngValid = this.validateField('eng', eng);
        const isMathValid = this.validateField('math', math);
        const isField6Valid = this.validateField('field6', field6);
        const isField7Valid = this.validateField('field7', field7);

        if ((!isUkrValid && ukr.length !== 0) || (!isEngValid && eng.length !== 0) || (!isMathValid && math.length !== 0) || (!isField6Valid && field6.length !== 0) || (!isField7Valid && field7.length !== 0)) {
            this.setState({ formError: 'All fields must be valid and contain values between 100 and 200' });
            return;
        }

        const filledFieldsCount = [ukr, eng, math, field6, field7].filter(field => field !== '').length;
        if (filledFieldsCount !== 3) {
            this.setState({ formError: 'Потрібно заповнити рівно 3 поля' });
            return;
        }

        if (!ukr || !math) {
            this.setState({ formError: 'Українська мова та математика обов\'язкові до заповнення.' });
            return;
        }

        this.setState({formError: ''});

        const form = document.getElementById('calculate');
        const formData = new FormData(form);

        const params = new URLSearchParams();
        formData.forEach((value, key) => {
            params.append(key, value);
        });

        axios.get(`http://127.0.0.1:8000/api/speciality?${params.toString()}`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
                const data = response.data;
                console.log(data);
                this.setState({
                    specialties: data,
                    showAllInfoSpec: true,
                    showSpecialtiesContainer: true,
                });
                this.setState({showSpecialtiesText: true});
            })
            .catch(error => {
                console.error('There was a problem with your Axios operation:', error);
            });
    }




    render() {
        const { ukr, eng, math, field6, field7, remainingFieldsDisabled, formError, specialties, showSpecialtiesContainer, showSpecialtiesText } = this.state;

        return (<main>
            <div>
                <div className="text-center m-8">
                    <p className="text-4xl md:text-6xl font-bold"> {this.props.t("chances")}</p>
                </div>

                <div className="mr-18 ml-18 md:mr-28 md:ml-28 text-2xl">
                    <p className="m-6">{this.props.t("first_chances_info_1")}</p>
                </div>

            </div>
            <form id="calculate" onSubmit={this.handleSubmit} className="flex flex-col items-center">
                <p className="text-2xl md:text-3xl font-bold mb-10">{this.props.t("scores")}</p>
                {formError && <p className="text-red-500 mb-3">{formError}</p>}
                <div className="md:flex ">
                    <div className="md:mr-28 sm:m-auto w-[250px] md:w-[300px]">
                        <div className="mb-5 ">
                            <input type="text" id="ukrainian" name="ukr" value={ukr} onChange={this.handleChange}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("ukrainian")}  />
                        </div>
                        <div className="mb-5">
                            <input type="text" id="foreignLanguage" name="eng" value={eng} onChange={this.handleChange} disabled={remainingFieldsDisabled && eng === ''}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("foreign")} />
                        </div>
                    </div>
                    <div className=" w-[250px] md:w-[300px]">
                        <div className="mb-5">
                            <input type="text" id="mathematics" name="math" value={math} onChange={this.handleChange}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("math")}  />
                        </div>
                        <div className="mb-5">
                            <input type="text" id="physics" name="field6" value={field6} onChange={this.handleChange} disabled={remainingFieldsDisabled && field6 === ''}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("physics")} />
                        </div>
                        <div className="mb-5">
                            <input type="text" id="ukrainianHistory" name="field7" value={field7} onChange={this.handleChange} disabled={remainingFieldsDisabled && field7 === ''}
                                   className="h-[50px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder={this.props.t("history")} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <button type="submit"
                            className="text-white bg-[#FF3A3A] hover:bg-white hover:text-[#FF3A3A] font-medium text-[18px] w-[200px] h-[50px] px-5 py-2.5 text-center">
                        {this.props.t("calculate")}
                    </button>
                </div>
            </form>
            <CSSTransition
                in={showSpecialtiesContainer}
                timeout={99999999}
                classNames="expand"
                unmountOnExit={false}
            >
                <div className="specialties-container overflow-hidden transition-all duration-300 ease-out mb-5">
                    <CSSTransition
                        in={showSpecialtiesText}
                        timeout={3000}
                        classNames="slide"
                        unmountOnExit={false}
                    >
                        <div className="xl:flex xl:justify-around">
                            { this.state.showAllInfoSpec === true ? (
                                specialties.length > 0 ? (
                                    specialties.map((specialty, index) => (
                                            this.props.language === "EN" ? (
                                                <div key={index} className="bg-[#FF3A3A] text-white rounded-lg specialty p-2 m-4 w-[600px] sm:mx-auto">
                                                    <h3 className="text-xl font-bold text-center mb-3 mt-3">{specialty.name.ukr}</h3>
                                                    <div className="ml-3 mr-3">
                                                        <p>{specialty.description.ukr}</p>
                                                        <p><strong>{this.props.t("program")}</strong> {specialty.study_program.ukr}</p>
                                                        <p><strong>{this.props.t("long")}</strong> {specialty.learning_time.ukr}</p>
                                                        <p><strong>{this.props.t("score")}</strong> {specialty.pass_score}</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div key={index} className="bg-[#FF3A3A] text-white rounded-lg specialty p-2 m-4 w-[600px] sm:mx-auto">
                                                    <h3 className="text-xl font-bold text-center mb-3 mt-3">{specialty.name.eng}</h3>
                                                    <div className="ml-3 mr-3">
                                                        <p>{specialty.description.eng}</p>
                                                        <p><strong>{this.props.t("program")}</strong> {specialty.study_program.eng}</p>
                                                        <p><strong>{this.props.t("long")}</strong> {specialty.learning_time.eng}</p>
                                                        <p><strong>{this.props.t("score")}</strong> {specialty.pass_score}</p>
                                                    </div>
                                                </div>
                                            )
                                    ))
                                ) : (
                                    <p className="mt-4">No specialties available</p>
                                )):""}

                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>

        </main>)
    }
}

export default Calculator
