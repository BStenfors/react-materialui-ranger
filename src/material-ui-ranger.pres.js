import React, {useState} from 'react';
import {TextField, Typography, Grid} from '@material-ui/core';

const MaterialUIRanger = props => {
    const {styles, startInputProps, startPlaceholder, errorMessage,
        endInputProps, endPlaceholder, onStartChanged, onEndChanged, numbersOnly, separatorValue, separatorValueVariant} = props;

    let defaultStyles = {
        main: {
            container: {
                display: 'flex',
                flexDirection: 'column'
            }
        },
        controlsContainer: {
            padding: 20,
            flex: 1,
            textAlign: 'center'
        },
        errorMessage:{
            container:{
                flex: 1,
                textAlign: 'center'
            },
            text: {
                color: 'red'
            }
        },
        start: {
            container: {
                display: 'inline-block'
            },
            input: {}
        },
        separator: {
            container: {
                display: 'inline-block',
                marginTop: 15,
                paddingLeft: 10,
                paddingRight: 10
            },
            typography: {
                color: 'black'
            }
        },
        end: {
            container: {
                display: 'inline-block'
            },
            input: {

            }
        }
    }

    let finalStyles = styles !== undefined && styles !== "" ? styles : defaultStyles;
    let inputType = () => {
        let type = "text"
        if(numbersOnly) {
            type = "number"
        }
        return type;
    }

    const renderError = () => {
        if(errorMessage !== undefined && errorMessage !== "") {
            return (
                <div style={finalStyles.errorMessage.container}>
                    <Typography style={finalStyles.errorMessage.text}>{errorMessage}</Typography>
                </div>
            )
        }
    }

    return (
        <div style={finalStyles.main.container}>
                <div style={finalStyles.controlsContainer}>
                        <div style={finalStyles.start.container}>
                            <TextField {...startInputProps} style={finalStyles.start.input} type={inputType()} onChange={onStartChanged} placeholder={startPlaceholder}/>
                        </div>
                        <div style={finalStyles.separator.container}><Typography style={finalStyles.separator.typography} variant={separatorValueVariant}>{separatorValue}</Typography></div>
                        <div style={finalStyles.end.container}>
                            <TextField {...endInputProps} style={finalStyles.end.input} type={inputType()} onChange={onEndChanged} placeholder={endPlaceholder}/>
                        </div>
                </div>
            {renderError()}
        </div>
    )
}

export default MaterialUIRanger;