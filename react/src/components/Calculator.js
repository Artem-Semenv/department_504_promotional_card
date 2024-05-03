import React from "react";
import Chance from "./Chance";

class Calculator extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            field1: '',
            field2: '',
            field3: '',
            field4: '',
            field5: '',
            field6: '',
            field7: '',
            filledFields: 0
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // ваш код
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        fetch('http://127.0.0.1:8000/api/calculate-form', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Form data submitted successfully:', data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }


    handleBlur(event) {
        const { name, value } = event.target;

        if (!value.trim()) {
            this.setState(prevState => ({ filledFields: prevState.filledFields - 1 }));
        } else if (this.state[name] !== value) {
            this.setState(prevState => ({ filledFields: prevState.filledFields + 1 }));
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const currentValue = this.state[name];

        if (value.trim() !== currentValue.trim()) {
            this.setState({ [name]: value });
        }
    }

    render() {
        const { filledFields } = this.state;
        const remainingFieldsDisabled = filledFields >= 3;


        return (<main>
            <p>This: {remainingFieldsDisabled}</p>
            <p>filledFields: {filledFields}</p>
            <Chance/>
            <form onSubmit={this.handleSubmit} className="h-[400px] flex flex-col items-center">
                <p className="text-3xl font-bold mb-10">Ваші бали НМТ 100..200</p>
                <div className="flex">
                    <div className="mr-28">
                        <div className="mb-5 w-[250px]">
                            <input type="text" id="ukrainian" name="field1" value={this.state.field1} onChange={this.handleChange} onBlur={this.handleBlur} disabled={remainingFieldsDisabled}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Українська мова" required/>
                        </div>
                        <div className="mb-5 w-[250px]">
                            <input type="text" id="foreignLanguage" name="field2" value={this.state.field2} onChange={this.handleChange} onBlur={this.handleBlur} disabled={remainingFieldsDisabled}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Іноземна мова" required/>
                        </div>
                        <div className="mb-5 w-[250px]">
                            <input type="text" id="biology" name="field3"  value={this.state.field3} onChange={this.handleChange} onBlur={this.handleBlur} disabled={remainingFieldsDisabled}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Біологія" required/>
                        </div>
                        <div className="mb-5 w-[250px]">
                            <input type="text" id="chemistry" name="field4" value={this.state.field4} onChange={this.handleChange} onBlur={this.handleBlur} disabled={remainingFieldsDisabled}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Хімія" required/>
                        </div>
                    </div>
                    <div>
                        <div className="mb-5 w-[250px]">
                            <input type="text" id="mathematics" name="field5" value={this.state.field5} onChange={this.handleChange} onBlur={this.handleBlur} disabled={remainingFieldsDisabled}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Математика" required/>
                        </div>
                        <div className="mb-5 w-[250px]">
                            <input type="text" id="physics" name="field6" value={this.state.field6} onChange={this.handleChange} onBlur={this.handleBlur} disabled={remainingFieldsDisabled}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Фізика" required/>
                        </div>
                        <div className="mb-5 w-[250px]">
                            <input type="text" id="ukrainianHistory" name="field7" value={this.state.field7} onChange={this.handleChange} onBlur={this.handleBlur} disabled={remainingFieldsDisabled}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Історія України" required/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <button type="submit"
                            className="text-white bg-[#FF3A3A] hover:bg-blue-800 font-medium text-sm w-full px-5 py-2.5 text-center">Розрахувати
                    </button>
                </div>

            </form>


        </main>)
    }
}

export default Calculator
