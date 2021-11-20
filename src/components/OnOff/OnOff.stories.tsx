import React, {useState} from 'react';
import {OnOff, OnOffPropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: OnOff,
}

const callback = action("onn or off clicked")

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}/>
}


