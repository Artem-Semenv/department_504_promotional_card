import React from "react";
import axios from 'axios';

class Inforamtion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone_number: '',
            emailError: '',
            phoneError: '',
            showModal:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    validatePhone(phone) {
        const re = /^\+38\d{10}$/;
        return re.test(String(phone));
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const { email, phone_number } = this.state;

        let emailError = '';
        let phoneError = '';

        if (!this.validateEmail(email)) {
            emailError = 'Invalid email address';
        }

        if (!this.validatePhone(phone_number)) {
            phoneError = 'Invalid phone number';
        }

        if (emailError || phoneError) {
            this.setState({ emailError, phoneError });
            return;
        }

        this.setState({ emailError: '', phoneError: '' });

        axios.post('http://127.0.0.1:8000/api/contact', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log('Form data submitted successfully:', response.data);
                this.setState({ showModal: true });
            })
            .catch(error => {
                console.error('There was a problem with your Axios operation:', error);
            });
    }
    closeModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <article>
                <div id="communication" className="">
                    <div className="text-center m-6">
                        <p className="text-4xl md:text-6xl font-bold">{this.props.t("contact")} </p>
                    </div>
                    <div className=" mt-12 mb-12 text-2xl">
                        <p className="m-6">{this.props.t("contact_info")}</p>
                    </div>
                </div>
                <div className="mb-15 mt-12 md:flex md:justify-evenly md:m-12">
                    <div className='mb-8 md:mb-0  md:mx-14 pb-3 font-bold flex flex-col bg-[#FF3A3A]  rounded-2xl text-white justify-center md:h-[350px] md:w-[350px] lg:h-[350px] lg:w-[450px] xl:h-[450px] xl:w-[550px]'>
                        <p className="text-3xl text-center mb-2 mt-2">{this.props.t("touch")}</p>
                        <p className="ml-5 mr-5 mb-8 mt-8 md:ml-12 md:mr-12 tracking-wider">{this.props.t("touch_info")}</p>
                        <a className="ml-12 text-[17px]" href="https://khai.edu/ua/abiturientu/konsultacijnij-centr-hai/">{this.props.t("consulting")}</a>
                        <img alt=""/>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <form onSubmit={this.handleSubmit} className="mt-4 md:w-[250px] lg:w-[300px] md:text-[13px] xl:w-[400px] xl:text-[16px]">
                            <div className="relative z-0 w-full mb-14 group">
                                <input type="text" name="pib" id="full_name" onChange={this.handleChange}
                                       className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 border-gray-600 focus:border-[#ff6020]  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                       placeholder=" " required autoComplete="off"/>
                                <label htmlFor="full_name"
                                       className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#ff6020] peer-focus:dark:text-[#ff6020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{this.props.t("form_data_1")}
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-14 group">
                                <input type="text" name="phone_number" id="phone" onChange={this.handleChange}
                                       className="placeholder-[#94a3aa] block py-2.5 px-0 w-full placeholder-opacity-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff6020] focus:placeholder-opacity-100 focus:outline-none focus:ring-0  focus:border-blue-600 peer"
                                       placeholder="+380... " required autoComplete="off" />
                                <label htmlFor="phone"
                                       className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#ff6020] peer-focus:dark:text-[#ff6020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{this.props.t("form_data_2")}</label>
                                {this.state.phoneError && <p className="text-red-500 text-xs italic">{this.state.phoneError}</p>}
                            </div>
                            <div className="relative z-0 w-full mb-14 group">
                                <input type="text" name="email" id="email" onChange={this.handleChange} value={this.state.email}
                                       className="placeholder-[#94a3aa] placeholder-opacity-0  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff6020] focus:placeholder-opacity-100 focus:outline-none  focus:ring-0 focus:border-blue-600 peer"
                                       placeholder="my@email.com" required autoComplete="off" />
                                <label htmlFor="email"
                                       className=" absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#ff6020] peer-focus:dark:text-[#ff6020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{this.props.t("form_data_3")}
                                </label>
                                {this.state.emailError && <p className="text-red-500 text-xs italic">{this.state.emailError}</p>}
                            </div>

                            <button type="submit"
                                    className="text-white font-medium text-[18px] w-full  px-9 py-5 text-center bg-[#FF3A3A] hover:bg-white hover:text-[#FF3A3A]">{this.props.t("form_data_4")}
                            </button>
                        </form>
                        {this.state.showModal && (
                            <div className="fixed z-10 inset-0 overflow-y-auto">
                                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                    </div>

                                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                                        {this.props.t("wrote_data")}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button onClick={this.closeModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                                {this.props.t("close")}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        )
    }
}

export default Inforamtion
