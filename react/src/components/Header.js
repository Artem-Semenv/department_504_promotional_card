import React from "react";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            isMenuOpen: false
        };
        // Создаем ссылку на элемент input
        this.searchInputRef = React.createRef();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
    }
    toggleMenu() {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }
    handleClickOutside(event) {
        const menu = document.getElementById('menu');
        if (menu && !menu.contains(event.target)) {
            this.setState({ isMenuOpen: false });
        }
    }

    scrollToSection(sectionId)  {
        const section = document.getElementById(sectionId);
        const offset = 60;
        const newPosition = section.offsetTop - offset;
        window.scrollTo({
            top: newPosition,
            behavior: "smooth"
        })
    };

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    render() {

        const menuClasses = this.state.isMenuOpen ? 'block' : 'hidden';

        return (
            <header className={`z-10 fixed w-full ${this.props.color["background"]} h-[70px] flex align-middle`}>
                <div id="menu" className="relative flex-none right-side m-auto pl-24">
                    <button onClick={this.toggleMenu} >
                        <div className={`${this.props.color["menu_background"]} h-[1px] w-[20px] mb-2 rounded-lg`}></div>
                        <div className={`${this.props.color["menu_background"]} h-[1px] w-[20px] mb-2 rounded-lg`}></div>
                        <div className={`${this.props.color["menu_background"]} h-[1px] w-[20px] rounded-lg`}></div>
                    </button>
                    <div className={`absolute top-0 left-0 mt-6 ml-20 w-48 bg-white border border-gray-300 rounded-lg shadow-lg ${menuClasses}`}>
                        <ul>
                            <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => this.scrollToSection('specialties')}>{this.props.t("nav_specialties")}</li>
                            <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => this.scrollToSection('conditions')}>{this.props.t("nav_conditions")}</li>
                            <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => this.scrollToSection('communication')}>{this.props.t("nav_contact")}</li>
                        </ul>
                    </div>
                </div>

                <div className="grow"></div>
                <div className="flex-none left-side m-auto mr-10 flex align-middle">
                    <button onClick={this.props.changeColor} className="light-or-dark m-auto w-[35px] h-[35px] ml-[60px]">
                        <img className="h-[20px]" src={this.props.color["switch"]} alt=''/>
                    </button>
                    <button onClick={() => this.props.changeLanguage(this.props.language.toLowerCase())} className={`language ml-[60px] text-${this.props.color["language_text_color"]}`} src="" alt="">{this.props.language}</button>
                </div>
            </header>
        )
    }
}


export default Header
