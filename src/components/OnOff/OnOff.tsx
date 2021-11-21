import React, {useState} from 'react';
export type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        cursor: "pointer",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
    }
    const offStyle = {
        cursor: "pointer",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !props.on ? "red" : "white",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red",
    }

    return (
        <div>
            <div style={onStyle} onClick={ ()=> { props.onChange(true) } }>On</div>
            <div style={offStyle} onClick={ ()=> { props.onChange(false) } }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff

