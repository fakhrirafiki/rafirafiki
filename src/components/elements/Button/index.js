import React from 'react';
import { Button } from './styles';

function ButtonComponent(props) {
    const _fnClick = (e) => {
        if (props.fnClick) props.fnClick(e);
    };
    return (
        <Button
            ref={props.refX}
            style={props.style}
            type={props.type}
            onClick={(e) => _fnClick(e)}
            secondary={props.secondary}
            left={props.left}
            right={props.right}
            center={props.center}
            margin={props.margin}
            padding={props.padding}
        >
            {props.children}
        </Button>
    );
}

export default ButtonComponent;