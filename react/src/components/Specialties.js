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
            this.props.t("first_type_info_3"),
            this.props.t("first_type_info_4"),
            this.props.t("first_type_info_5"),
            this.props.t("first_type_info_6")
        ];

        const items2 = [
            this.props.t("second_type_info_3"),
            this.props.t("second_type_info_4"),
            this.props.t("second_type_info_5"),
            this.props.t("second_type_info_6")
        ];

        const items3 = [
            this.props.t("third_type_info_3"),
            this.props.t("third_type_info_4"),
            this.props.t("third_type_info_5"),
            this.props.t("third_type_info_6")
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
                    <p className="text-6xl font-bold"> {this.props.t("specialties")} </p>
                </div>

                <div className="mr-28 ml-28 text-2xl">
                    <p className="m-6">{this.props.t("specialties_info_1")}</p>
                    <p className="m-6">{this.props.t("specialties_info_2")}</p>
                </div>

                <div>
                    <div className="text-center text-red-600 text-3xl m-9">
                        {this.props.t("first_type_specialties")}
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">{this.props.t("first_type_info_1")}</p>
                        <p className="m-6">{this.props.t("first_type_info_2")}</p>
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
                        {this.props.t("second_type_specialties")}
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">{this.props.t("second_type_info_1")}</p>
                        <p className="m-6">{this.props.t("second_type_info_2")}</p>
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
                        {this.props.t("third_type_specialties")}
                    </div>
                    <div className="mr-28 ml-28 text-2xl">
                        <p className="m-6">{this.props.t("third_type_info_1")}</p>
                        <p className="m-6">{this.props.t("third_type_info_2")}</p>
                        <ul className="ml-2" style={listStyle}>
                            {items3.map((item, index) => (
                                <li className="m-5" key={index} style={listItemStyle}>
                                    <span style={triangleStyle}></span> {/* Маркер */}
                                    {item} {/* Содержимое элемента списка */}
                                </li>
                            ))}
                        </ul>
                        <p className="m-6">{this.props.t("third_type_info_7")}</p>
                        <p className="m-6">{this.props.t("third_type_info_8")}</p>
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
