import React, {useState} from 'react';
type PropsType = {
    onChange: (on: boolean) => void
    //on: boolean
}


function UncontrolledOnOff(props: PropsType) {

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

    const onClicked = () => {setOn(true)
        props.onChange(true)}
    const offClicked = () => {setOn(false)
        props.onChange(false)}



    return (
        <div>
            <div style={onStyle} onClick={ onClicked }>On</div>
            <div style={offStyle} onClick={ offClicked }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff

