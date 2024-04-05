import React from "react";

class Header extends React.Component {

    render() {
        return (
            <header className={`bg-[${this.props.color["background"]}] h-[70px] flex align-middle`}>
                <div className="flex-none right-side m-auto pl-24">
                    <button>
                        <div className={`${this.props.color["menu_background"]} h-[1px] w-[20px] mb-2 rounded-lg`}></div>
                        <div className={`${this.props.color["menu_background"]} h-[1px] w-[20px] mb-2 rounded-lg`}></div>
                        <div className={`${this.props.color["menu_background"]} h-[1px] w-[20px] rounded-lg`}></div>
                    </button>
                </div>
                <div className="grow"></div>
                <div className="flex-none left-side m-auto mr-10 flex align-middle">
                    <form className="w-full max-w-sm">
                        <div className={`flex items-center border-b border-[${this.props.color["search"]}] py-2`}>
                            <input
                                className={`appearance-none bg-transparent border-none w-full text-${this.props.color["default_text_color_in_search"]} mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                type="text" placeholder="Jane Doe" aria-label="Full name"/>
                            <button className="w-[20px] h-[20px]" type="button">
                                <img src={this.props.color["lupa"]}/>
                            </button>
                        </div>
                    </form>
                    <button onClick={() => this.props.changeColor()} className="light-or-dark m-auto w-[35px] h-[35px] ml-[60px]">
                        <img src={this.props.color["switch"]}/>
                    </button>
                    <button className={`language ml-[60px] text-${this.props.color["language_text_color"]}`} src="" alt="">RU</button>
                    <button className="w-[35px] h-[35px] m-auto ml-[60px]" src="" alt="">
                        <img src={this.props.color["exit"]}/>
                    </button>

                </div>
            </header>
        )
    }
}


export default Header
