import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className={`${this.props.color["background"]} flex flex-col md:flex-row justify-around items-center bottom-0 left-0 w-full text-[#8E8E8E]`}>
                <div className="footer-left-side md:w-[350px] text-center md:text-left mb-10 md:mb-0 pt-[64px] order-1 md:order-1">
                    <p>{this.props.t("street")}</p>
                    <p>{this.props.t("university")}</p>
                    <p>{this.props.t("department")}</p>
                </div>
                <div className="footer-center-side flex-col items-center w-[250px] my-auto text-center order-3 md:order-2">
                    <img className="department-img h-[30px] m-auto mt-[29px]" src={this.props.color["dict"]} alt=""/>
                    <p className="mt-[22px] mb-[22px]">© DICT. All rights reserved.</p>
                    <div className="flex justify-around">
                        <a href="https://t.me/aerospaceuniversity" target="_blank" rel="noopener noreferrer" className="telegram">
                            <div className="border-[#8E8E8E] border-2 p-2 rounded-full">
                                <img className="w-[30px]" src={this.props.color["telegram"]} alt="Telegram"/>
                            </div>
                        </a>
                        <a href="https://instagram.com/aerospaceuniversity" target="_blank" rel="noopener noreferrer" className="instagram">
                            <div className="border-[#8E8E8E] border-2 p-2 rounded-full">
                                <img className="w-[30px]" src={this.props.color["instagram"]} alt="Instagram"/>
                            </div>
                        </a>
                        <a href="https://facebook.com/aerospaceuniversity" target="_blank" rel="noopener noreferrer" className="facebook">
                            <div className="border-[#8E8E8E] border-2 p-2 rounded-full">
                                <img className="w-[30px]" src={this.props.color["facebook"]} alt="Facebook"/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="footer-right-side md:w-[350px] my-auto flex md:justify-end order-2 md:order-3">
                    <div className="contacts items-center">
                        <div className="phone flex mb-[39px]">
                            <img src={this.props.color["phone"]} className="w-[30px] h-[30px] mr-3 m-auto" alt=""/>
                            <div>
                                <p>(057)-788-45-04</p>
                                <p>(000)-000-00-00</p>
                            </div>
                        </div>
                        <div className="mail flex">
                            <img src={this.props.color["mail"]} className="w-[32px] h-[24px] mr-3" alt=""/>
                            <p>dict@khai.edu</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
