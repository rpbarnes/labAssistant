import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardContainer from './CardContainer.jsx';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
    constructor(props) {
        super(props);
        // find the window width for conditional rendering.
        var w = window, 
            d = document, 
            documentElement = d.documentElement, 
            width = w.innerWidth || documentElement.clientWidth;
        console.log(width);
        this.state = {
            list: '',
            windowWidth: width,
        };
    } 


    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <CardContainer windowWidth={this.state.windowWidth} title='Procedure'/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App
