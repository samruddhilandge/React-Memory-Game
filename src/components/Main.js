import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Board from './Board';

class Main extends Component {
    render(){
        return(
            <div>
                
                <Route exact path="/" component={Board}/>

            </div>
        )
    }
}
//Export The Main Component
export default Main;