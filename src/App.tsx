import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [SwitchOn, setSwitchOn] = useState(false)

    return (
        <div className="App">
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            <Accordion titleValue={"Menu1"}
                       collapsed = {accordionCollapsed}
                       onChange = { () => {setAccordionCollapsed(!accordionCollapsed)}} />
            {/*Article 2*/}
            <UncontrolledOnOff onChange = {setSwitchOn}/> {SwitchOn.toString()}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={SwitchOn}
                   onChange={setSwitchOn}/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <div>{props.title}</div>
}

export default App;

