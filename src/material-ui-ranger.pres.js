import React, {useState} from 'react';
import {TextField, Typography, Grid} from '@material-ui/core';

const MaterialUIRanger = props => {
    const {styles, startInputProps, startPlaceholder, endInputProps, endPlaceholder, onStartChanged, onEndChanged, numbersOnly, separatorValue, separatorValueVariant} = props;

    let inputType = () => {
        let type = "text"
        if(numbersOnly) {
            type = "number"
        }
        return type;
    }

    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12}>
                <div style={styles.controlsContainer}>
                    <div style={styles.start.container}>
                        <TextField {...startInputProps} style={styles.start.input} type={inputType()} onChange={onStartChanged} placeholder={startPlaceholder}/>
                    </div>
                    <div style={styles.separator.container}><Typography style={styles.separator.typography} variant={separatorValueVariant}>{separatorValue}</Typography></div>
                    <div style={styles.end.container}>
                        <TextField {...endInputProps} style={styles.end.input} type={inputType()} onChange={onEndChanged} placeholder={endPlaceholder}/>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default MaterialUIRanger;