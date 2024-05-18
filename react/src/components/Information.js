import React from "react";

class Inforamtion extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        fetch('http://127.0.0.1:8000/api/user-data-form', {
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

    render() {
        return (
            <article className='flex justify-evenly m-12'>
                <div className='font-bold flex flex-col bg-[#FF3A3A]  rounded-2xl text-white justify-center md:h-[350px] md:w-[350px] lg:h-[350px] lg:w-[450px] xl:h-[450px] xl:w-[550px]'>
                    <p className="text-3xl ml-12 mb-2 md:text-[18px] lg:text-2xl xl:text-3xl">{this.props.t("touch")}</p>
                    <p className="ml-12 mb-8 mt-8 mr-12 tracking-wider md:text-[14px] lg:text-[16px] xl:text-[18px]">{this.props.t("touch_info")}</p>
                    <a className="ml-12 text-[17px]" href="https://khai.edu/ua/abiturientu/konsultacijnij-centr-hai/">{this.props.t("consulting")}</a>
                    <img alt=""/>
                </div>
                <div className='flex flex-col justify-center'>
                    <form onSubmit={this.handleSubmit} className=" md:w-[250px] lg:w-[300px] md:text-[13px] xl:w-[400px] xl:text-[16px]">
                        <div className="relative z-0 w-full mb-14 group">
                            <input type="text" name="full_name" id="full_name"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-[#ff6020] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="full_name"
                                   className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#ff6020] peer-focus:dark:text-[#ff6020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{this.props.t("form_data_1")}
                               </label>
                        </div>
                        <div className="relative z-0 w-full mb-14 group">
                            <input type="text" name="phone" id="phone"
                                   className="placeholder-[#94a3aa] block py-2.5 px-0 w-full placeholder-opacity-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff6020] focus:placeholder-opacity-100 focus:outline-none focus:ring-0  focus:border-blue-600 peer"
                                   placeholder="+380... " required/>
                            <label htmlFor="phone"
                                   className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#ff6020] peer-focus:dark:text-[#ff6020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{this.props.t("form_data_2")}</label>
                        </div>
                        <div className="relative z-0 w-full mb-14 group">
                            <input type="email" name="email" id="email"
                                   className="placeholder-[#94a3aa] placeholder-opacity-0  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff6020] focus:placeholder-opacity-100 focus:outline-none  focus:ring-0 focus:border-blue-600 peer"
                                   placeholder="my@email.com" required/>
                            <label htmlFor="email"
                                   className=" absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#ff6020] peer-focus:dark:text-[#ff6020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{this.props.t("form_data_3")}
                                </label>
                        </div>

                        <button type="submit"
                                className="text-white font-medium text-[18px] w-full  px-9 py-5 text-center bg-[#FF3A3A] hover:bg-white hover:text-[#FF3A3A]">{this.props.t("form_data_4")}
                        </button>

                    </form>

                </div>
            </article>
        )
    }
}


export default Inforamtion
