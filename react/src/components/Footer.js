import React from "react";

class Footer extends React.Component{
    render() {
        return (<footer className={`${this.props.color["background"]} h-[180px] flex justify-around bottom-0 left-0 w-[100%] text-[#8E8E8E]`}>

            <div className="footer-left-side w-[350px] pt-[64px] jus">
                <p>{this.props.t("street")}</p>
                <p>{this.props.t("university")}</p>
                <p>{this.props.t("department")}</p>
            </div>
            <div className="footer-center-side flex-col items-center w-[250px] text-center">
                <img className="department-img h-[30px] m-auto mt-[29px]" src={this.props.color["dict"]} alt=""/>
                <p className="mt-[22px] mb-[22px]">© DICT. All rights reserved. </p>
                <div className="flex justify-around">
                    <button className="telegram">
                        <div className="border-[#8E8E8E] border-2 p-2 rounded-full">
                            <img className="w-[30px] " src={this.props.color["telegram"]} alt=""/>
                        </div>
                    </button>
                    <button className="instagram">
                        <div className="border-[#8E8E8E] border-2 p-2 rounded-full">
                            <img className="w-[30px]" src={this.props.color["instagram"]} alt=""/>
                        </div>

                    </button>
                    <button className="facebook">
                        <div className="border-[#8E8E8E] border-2 p-2 rounded-full">
                            <img className="w-[30px]" src={this.props.color["facebook"]} alt=""/>
                        </div>
                    </button>
                </div>
            </div>
            <div className="footer-right-side w-[350px] flex justify-end ">
                <div className="contacts my-auto">
                    <div className="phone flex mb-[39px]">
                        <img src={this.props.color["phone"]} className="w-[30px] h-[30px] mr-3 m-auto" alt=""/>
                        <div>
                            <p>(000)-000-00-00</p>
                            <p>(000)-000-00-00</p>
                        </div>
                    </div>
                    <div className="mail flex ">
                        <img src={this.props.color["mail"]} className="w-[32px] h-[24px] mr-3 " alt=""/>
                        <p>dict@khai.edu</p>
                    </div>
                </div>

            </div>
        </footer>)
    }
}

export default Footer
