import React from 'react';
import {render} from "react-dom";
import Ranger from "../../src";

const App = () => {
    return (
        <Ranger
            startInputProps={{error: false}}
            endInputProps={{error: false}}
            errorMessage="This is an error"
            startPlaceholder="Start"
            endPlaceholder="End"
            separatorValueVariant="subtitle1"
            separatorValue="-"
            onStartChanged={(ev) => {
                console.log('start changed'); console.log(ev)}
            }
            onEndChanged={(ev) => {
                console.log('end changed'); console.log(ev)}
            }
            numbersOnly={true}
        />
    )
}

render(<App />, document.getElementById('main'));