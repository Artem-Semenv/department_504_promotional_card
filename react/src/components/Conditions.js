import React from "react";

class Conditions extends React.Component {
    render() {

        const listStyle = {
            listStyleType: "none",
            paddingLeft: "0"
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
            this.props.t("first_conditions_info_2"),
            this.props.t("first_conditions_info_3"),
            this.props.t("first_conditions_info_4")
        ];

        const items2 = [
            this.props.t("second_conditions_info_2"),
            this.props.t("second_conditions_info_3"),
            this.props.t("second_conditions_info_4")
            ];

        return (
            <div id="conditions">
                <div className="text-center m-6">
                    <p className="text-6xl font-bold"> {this.props.t("conditions")}</p>
                </div>

                <div>
                    <div className="text-center text-red-600 text-3xl m-9">
                        {this.props.t("first_type_conditions")}
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">{this.props.t("first_conditions_info_1")}</p>
                        <ul className="ml-2" style={listStyle}>
                            {items.map((item, index) => (
                                <li className="m-5" key={index} style={listItemStyle}>
                                    <span style={triangleStyle}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="m-6">{this.props.t("first_conditions_info_5")}</p>
                        <p className="m-6">{this.props.t("first_conditions_info_6")}</p>
                    </div>
                </div>

                <div>
                    <div className="text-center text-red-600 text-3xl m-9">
                        {this.props.t("second_type_conditions")}
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">{this.props.t("second_conditions_info_1")}</p>
                        <ul className="ml-2" style={listStyle}>
                            {items2.map((item, index) => (
                                <li className="m-5" key={index} style={listItemStyle}>
                                    <span style={triangleStyle}></span>
                                    {item}
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
