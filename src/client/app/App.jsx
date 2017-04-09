import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SectionContainer from './SectionContainer.jsx';


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
                <SectionContainer />
            </MuiThemeProvider>
        );
    }
}

export default App
