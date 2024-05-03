import React from "react";

class Specialties extends React.Component {
    render() {

        const listStyle = {
            listStyleType: "none", // Убираем стандартный маркер списка
            paddingLeft: "0" // Убираем отступ слева
        };

        const listItemStyle = {
            position: "relative", // Устанавливаем позицию элемента
            paddingLeft: "20px" // Добавляем отступ слева для контента
        };

        const triangleStyle = {
            position: "absolute", // Абсолютное позиционирование относительно элемента-родителя
            left: "0", // Выравниваем треугольник слева
            top: "50%", // Выравниваем треугольник по вертикали по центру
            transform: "translateY(-50%) rotate(180deg)", // Поворачиваем на 90 градусов
            width: "0", // Ширина треугольника
            height: "0", // Высота треугольника
            borderTop: "10px solid transparent", // Верхний бордюр (пустой, чтобы создать треугольник)
            borderBottom: "10px solid transparent", // Нижний бордюр (пустой, чтобы создать треугольник)
            borderRight: "10px solid red" // Правый бордюр (закрашенный, чтобы создать треугольник)
        };

        const items = [
            "Машинне навчання та аналіз даних: Pandas, Scikit-learn, Keras, TensorFlow, PyTorch, постійне вивчання і використання Python впродовж 4-х курсів",
            "Інтелектуальна обробка мультимедіа: участь у практичних проектах кафедри, яка має потужну наукову школу",
            "Full-stack Web-програмування: Front-end (HTML/CSS/React), Back-end (Flask/Django, Spring/Micronaut), бази даних (PostgreSQL, MySQL, MongoDB, Redis)",
            "DevOps (адміністрування UNIX/Linux, CI/CD)"
        ];

        const items2 = [
            "Мережева інженерія (повний спектр курсів академії Cisco): компютерні мережі, інтернет речей, кібербезпека, системне, адміністрування",
            "Бездротові технології (SDR, IoT, мобільні системи 5G)",
            "Програмування на Python, Java/Kotlin, JavaScript, C/C++",
            "Інфокомунікаційні системи (Full-Stack Web-програмування: Front-end і Back-end, розробка Android-додатків)"
        ];

        const items3 = [
            "Мережева інженерія (повний спектр курсів академії Cisco): компютерні мережі, інтернет речей, кібербезпека, системне, адміністрування",
            "Бездротові технології (SDR, IoT, мобільні системи 5G)",
            "Програмування на Python, Java/Kotlin, JavaScript, C/C++",
            "Інфокомунікаційні системи (Full-Stack Web-програмування: Front-end і Back-end, розробка Android-додатків)"
        ];

        const containerStyle = {
            display: "flex", // Устанавливаем flex-контейнер
            justifyContent: "center", // Выравнивание по горизонтали по центру
            alignItems: "center", // Выравнивание по вертикали по центру
        };

        const iframeStyle = {
            border: "0",
            width: "600px", // Ширина iframe
            height: "400px" // Высота iframe
        };

        return (
            <div id="specialties">
                <div className="text-center p-6">
                    <p className="text-6xl font-bold"> Спеціальності</p>
                </div>

                <div className="mr-28 ml-28 text-2xl">
                    <p className="m-6">Кафедра інформаційно-комунікаційних технологій імені О. О. Зеленського спеціалізується на підготовці фахівців в області мережевих, програмних та інформаційних технологій за двома напрямками 172 - Електронні комунікації та радіотехніка і 126 - Інформаційні системи та технології.</p>
                    <p className="m-6">Навчання студентів здійснюється в рамках наступних освітніх програм:</p>
                </div>

                <div>
                    <div className="text-center text-red-600 text-3xl m-9">
                        ШТУЧНИЙ ІНТЕЛЕКТ ТА ІНФОРМАЦІЙНІ СИСТЕМИ
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">(В рамках спеціальності 126 «Інформаційні системи і технології»)</p>
                        <p className="m-6">Являє собою симбіоз напрямку розробки мобільних і Web інформаційних систем та використання машинного навчання і елементів штучного інтелекту при обробці даних. Основні технології і напрями навчання:</p>
                        <ul className="ml-2" style={listStyle}>
                            {items.map((item, index) => (
                                <li className="m-5" key={index} style={listItemStyle}>
                                    <span style={triangleStyle}></span> {/* Маркер */}
                                    {item} {/* Содержимое элемента списка */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="text-center text-red-600 text-3xl m-9">
                        ІНЖИНІРИНГ І ПРОГРАМУВАННЯ ІНФОКОМУНІКАЦІЙНИХ СИСТЕМ
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">(В рамках спеціальності 172 «Електронні комунікації та радіотехніка»)</p>
                        <p className="m-6">Орієнтована на проектування телекомунікаційних та інформаційно-комунікаційних систем і на програмування мережевих додатків для створення інформаційних систем та сервісів. Основні технології і напрями навчання:</p>
                        <ul className="ml-2" style={listStyle}>
                            {items2.map((item, index) => (
                                <li className="m-5" key={index} style={listItemStyle}>
                                    <span style={triangleStyle}></span> {/* Маркер */}
                                    {item} {/* Содержимое элемента списка */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="text-center text-red-600 text-3xl m-9">
                        КОМП'ЮТЕРНИЙ ЗІР: НЕЙМОВІРНІ МОЖЛИВОСТІ!
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">Завжди цікаво, що ж ховається за дивовижними словами "комп'ютерний зір"? Зараз ви зможете побачити це на власні очі!</p>
                        <p className="m-6">У цьому відео ви побачите як алгоритми комп'ютерного зору можуть:</p>
                        <ul className="ml-2" style={listStyle}>
                            {items3.map((item, index) => (
                                <li className="m-5" key={index} style={listItemStyle}>
                                    <span style={triangleStyle}></span> {/* Маркер */}
                                    {item} {/* Содержимое элемента списка */}
                                </li>
                            ))}
                        </ul>
                        <p className="m-6">І це лише один із прикладів того, що можна зробити за допомогою комп'ютерного зору!</p>
                        <p className="m-6">Ми запрошуємо вас долучитися до світу новітніх технологій та стати частиною команди, яка розробляє такі вражаючі алгоритми.</p>
                    </div>
                </div>

                <div style={containerStyle}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/LC4SXnnPSWw?si=SaORPV1Eu_0a_W7m"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={iframeStyle}
                    />
                </div>

            </div>
        );
    }
}

export default Specialties;
