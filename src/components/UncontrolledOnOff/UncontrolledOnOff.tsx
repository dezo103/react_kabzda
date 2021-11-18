import React, {useState} from 'react';
type PropsType = {
    //on: boolean
}


function OnOff(props: PropsType) {

   let [ on, setOn] = useState(false) //hook with init values

    const onStyle = {
        cursor: "pointer",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        cursor: "pointer",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={ ()=> { setOn(true) } }>On</div>
            <div style={offStyle} onClick={ ()=> { setOn(false) } }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff

