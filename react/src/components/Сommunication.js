import React from "react";

class Chance extends React.Component {
    render() {

        return (
            <div id="communication">
                <div className="text-center m-6">
                    <p className="text-6xl font-bold">{this.props.t("contact")} </p>
                </div>

                <div className="mr-28 ml-28 mt-12 mb-12 text-2xl">
                    <p className="m-6">{this.props.t("contact_info")}</p>
                </div>

            </div>
        );
    }
}

export default Chance;
