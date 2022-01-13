import React from 'react';
import {render} from "react-dom";
import Ranger from "../../src";

const App = () => {
    let styles = {
        controlsContainer: {
            padding: 20
        },
        start: {
            container: {
                float: 'left'
            },
            input: {}
        },
        to: {
            container: {
                float: 'left',
                marginTop: 15,
                paddingLeft: 10,
                paddingRight: 10
            },
            typography: {
                color: 'red'
            }
        },
        end: {
            container: {

            },
            input: {

            }
        }

    }
    return (
        <Ranger
            styles={styles}
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