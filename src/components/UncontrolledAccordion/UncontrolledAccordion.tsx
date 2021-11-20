import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

// const collapsed = true
// eslint-disable-next-line react-hooks/rules-of-hooks



function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)
    function changeValue(collapsed:boolean) {
        return !collapsed;
    }

        return (
            <div>
                <AccordionTitle
                    title = { props.titleValue }
                    clicking = { () => {setCollapsed(changeValue)} }/>
                {collapsed && <AccordionBody />}
            </div>
        )

}

type AccordionTitlePropsType = {
    title: string
    clicking: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={ props.clicking }>{ props.title }</h3>

}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;
