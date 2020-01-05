import React,{Component} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardLink
  } from "reactstrap";



class BackCard extends Component{                   //Board Card

    static defaultProps={
        name:'Card'
    }
    render(){

        return(
            <Card  style={{height:100,width:100}}>
                <CardBody>
                    <CardTitle style={{fontWeight:"bolder"}}>{this.props.name}</CardTitle>  
                    <br/><br/>
                </CardBody>
            </Card>
        );
    }

}

export default BackCard;