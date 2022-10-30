import React from "react";
import styled from "styled-components";

const Text = styled.p`
    font-size: 12px;
    color: ${props => props.error ? "red" : "black"};
`;

function Paragraph(props) {
    return (
        <Text error={props.error}>
            {props.text}
        </Text>
    );
}

export default Paragraph;
