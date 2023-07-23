import React from "react";

const TitlesAndSubs = ({ title, subtitle }) => {
    return (

        <div>
            <div className="custom-div title"> {title}</div>
            <div className="custom-div subtitle">{subtitle}</div>
        </div>
    );

}
export default TitlesAndSubs;