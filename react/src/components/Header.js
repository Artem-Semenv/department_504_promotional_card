import React from "react";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "", // Состояние для хранения текущего поискового запроса
            isMenuOpen: false // Изначально меню скрыто
        };
        // Создаем ссылку на элемент input
        this.searchInputRef = React.createRef();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
    }



    // Обработчик изменения поля поиска
    handleSearchChange = (event) => {
        const searchQuery = event.target.value;
        this.setState({ searchQuery });

        // Функция поиска и прокрутки к результатам
        this.searchAndScrollToResults(searchQuery);
    };

    toggleMenu() {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }



    handleClickOutside(event) {
        const menu = document.getElementById('menu'); // Получаем ссылку на меню
        if (menu && !menu.contains(event.target)) { // Проверяем, что клик был сделан не внутри меню
            this.setState({ isMenuOpen: false }); // Если клик был вне меню, скрываем его
        }
    }

    // Функция поиска и прокрутки к результатам
    searchAndScrollToResults = (searchQuery) => {
        // Преобразуем поисковой запрос в нижний регистр для регистронезависимого сравнения
        const query = searchQuery.toLowerCase();

        // Получаем все элементы на странице
        const allElements = document.getElementsByTagName("*");
        // Создаем пустой массив для хранения совпадающих элементов
        const matchingElements = [];
        // Проходим по каждому элементу и проверяем его текстовое содержимое на соответствие запросу
        for (let i = 0; i < allElements.length; i++) {
            const element = allElements[i];
            // Проверяем, является ли текстовое содержимое элемента соответствующим запросу
            if (element.textContent.toLowerCase().includes(query)) {
                matchingElements.push(element);
            }
        }

        // Перемещаем прокрутку к первому найденному элементу, если он есть
        if (matchingElements.length > 0) {
            const firstElement = matchingElements[0];
            firstElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    };

    // Обработчик комбинации клавиш Ctrl + F
    handleCtrlF = (event) => {
        if (event.ctrlKey && event.key === "f") {
            // Активируем поле поиска
            this.searchInputRef.current.focus();
        }
    };

    scrollToSection(sectionId)  {
        const section = document.getElementById(sectionId);
        alert(section)
        section.scrollIntoView({ behavior: 'smooth' });
    };

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside); // Добавляем обработчик события клика на весь документ
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside); // Удаляем обработчик события клика перед удалением компонента
    }

    // componentDidMount() {
    //     // Добавляем обработчик комбинации клавиш Ctrl + F при монтировании компонента
    //     document.addEventListener("keydown", this.handleCtrlF);
    //     document.addEventListener('click', this.handleClickOutside);
    // }
    //
    // componentWillUnmount() {
    //     // Удаляем обработчик комбинации клавиш Ctrl + F при размонтировании компонента
    //     document.removeEventListener("keydown", this.handleCtrlF);
    //     document.removeEventListener('click', this.handleClickOutside);
    // }

    render() {
        const { searchQuery } = this.state;

        // Определяем классы для меню в зависимости от состояния

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
                            <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => this.scrollToSection('specialties')}>Спеціальності</li>
                            <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => this.scrollToSection('conditions')}>Умови вступу</li>
                            <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => this.scrollToSection('communication')}>Як зв'язатися</li>
                        </ul>
                    </div>
                </div>

                <div className="grow"></div>
                <div className="flex-none left-side m-auto mr-10 flex align-middle">
                    <form className="w-full max-w-sm">
                        <div className={`flex items-center border-b border-[${this.props.color["search"]}] py-2`}>
                            <input
                                className={`appearance-none bg-transparent border-none w-full text-${this.props.color["default_text_color_in_search"]} mr-3 py-1 px-2 leading-tight focus:outline-none`}
                                type="text" placeholder="Jane Doe" aria-label="Full name"
                                ref={this.searchInputRef} // Привязываем input к ref для фокуса
                                value={searchQuery}
                                onChange={this.handleSearchChange}
                            />
                            <button className="w-[20px] h-[20px]" type="button">
                                <img src={this.props.color["lupa"]} alt=''/>
                            </button>
                        </div>
                    </form>
                    <button onClick={() => this.props.changeColor()} className="light-or-dark m-auto w-[35px] h-[35px] ml-[60px]">
                        <img src={this.props.color["switch"]} alt=''/>
                    </button>
                    <button className={`language ml-[60px] text-${this.props.color["language_text_color"]}`} src="" alt="">RU</button>
                    <button className="w-[35px] h-[35px] m-auto ml-[60px]" src="" alt="">
                        <img src={this.props.color["exit"]} alt=''/>
                    </button>

                </div>
            </header>
        )
    }
}


export default Header
