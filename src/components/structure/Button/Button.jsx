import React from "react";
import {Button as ButtonReact} from "reactstrap";

function Button(props) {
    return (
        <ButtonReact type={props.type} className="btn" color="primary">
            {props.title}
        </ButtonReact>
    );
}

export default Button;
