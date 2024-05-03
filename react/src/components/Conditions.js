import React from "react";

class Conditions extends React.Component {
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
            "Українська мова або Українська мова і література",
            "Математика",
            "Іноземна мова або Фізика або Біологія або География або Історія України або Хімія"
        ];

        const items2 = [
            "Українська мова або Українська мова і література",
            "Математика",
            "Будь-який третій предмет"
            ];

        return (
            <div id="conditions">
                <div className="text-center m-6">
                    <p className="text-6xl font-bold"> Умови вступу</p>
                </div>

                <div>
                    <div className="text-center text-red-600 text-3xl m-9">
                        УМОВИ ВСТУПУ ДЛЯ ВИПУСКНИКІВ ШКІЛ (ПІСЛЯ 11 КЛАСУ)
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">Для подачі заяви на бюджетну або контрактну форму навчання на наші освітні програми потрібен сертифікат ЗНО про здачу наступних предметів:</p>
                        <ul className="ml-2" style={listStyle}>
                            {items.map((item, index) => (
                                <li className="m-5" key={index} style={listItemStyle}>
                                    <span style={triangleStyle}></span> {/* Маркер */}
                                    {item} {/* Содержимое элемента списка */}
                                </li>
                            ))}
                        </ul>
                        <p className="m-6">Прохідні бали на “Штучний інтелект та інформаційні системи”: 2019 р. - 171.146, 2020 р. - 162.792, 2021 р. - 170.799, 2022 р. - 165.208</p>
                        <p className="m-6">Прохідні бали на “Інжиніринг і програмування інфокомунікаційних систем”: 2019 р. - 143.718, 2020 р. - 141.6, 2021 р. - 156.728, 2022 р. - 156.327</p>
                    </div>
                </div>

                <div>
                    <div className="text-center text-red-600 text-3xl m-9">
                        УМОВИ ВСТУПУ ДЛЯ ВИПУСКНИКІВ ТЕХНІКУМІВ/КОЛЕДЖІВ
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">Для подачі заяви усі форми навчання на наші освітні програми потрібен сертифікат ЗНО про здачу наступних предметів:</p>
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

            </div>
        );
    }
}

export default Conditions;
