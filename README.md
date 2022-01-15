#A Simple Two Input Material UI Range Component

##Example Implementation

```
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
```

##CSS Override classes

| Parent Classname | Child Classname | Description |
| --------- | :---------- | :---------- |
| main      | | |
| main | container | The main container that holds all other elements |
| controlsContainer      | | The container that holds all of the inputs |
| errorMessage      | | |
| errorMessage      | container | the container DIV that holds the error message component |
| errorMessage      | text | the actual error message text displayed |
| start      | container | the container that holds the Start input control |
| start      | input | the actual Start input control |
| end      | container | the container that holds the End input control |
| end      | input | the actual End input control | 
| separator      | container | the container that holds the Separator component |
| separator      | typography | the separator text that is displayed |

###Default Styles
```
{
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
```