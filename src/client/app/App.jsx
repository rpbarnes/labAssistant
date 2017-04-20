import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardContainer from './CardContainer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:''
        };
    } 


    render () {
        return (
            <MuiThemeProvider>
                <CardContainer />
            </MuiThemeProvider>
        );
    }
}

export default App
