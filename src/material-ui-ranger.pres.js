import React from 'react';
import {Grid, TextField, Typography} from '@mui/material';

const MaterialUIRanger = props => {
    const {styles, startPlaceholder, endPlaceholder, onStartChanged, onEndChanged, numbersOnly, separatorValue, separatorValueVariant} = props;

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
                    <div style={styles.start.container}><TextField style={styles.start.input} type={inputType()} onChange={onStartChanged} placeholder={startPlaceholder}/></div>
                    <div style={styles.to.container}><Typography style={styles.to.typography} variant={separatorValueVariant}>{separatorValue}</Typography></div>
                    <div style={styles.end.container}><TextField style={styles.end.input} type={inputType()} onChange={onEndChanged} placeholder={endPlaceholder}/></div>
                </div>
            </Grid>
        </Grid>
    )
}

export default MaterialUIRanger;