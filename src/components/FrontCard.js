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



class FrontCard extends Component{                   //Board Card


    render(){

        return(
            <Card  style={{height:100,width:100}} >
                <CardBody style={{backgroundColor:'lightblue'}}>
                    <CardTitle style={{fontWeight:"bolder"}}></CardTitle>
                   {/* { <Link to = {userLinkUrl}>
                        <CardTitle style={{fontWeight:"bolder"}}>{userFullName}<span style={{color:"grey",fontWeight:"normal"}}> @{userName}</span></CardTitle>
                    </Link>} */}    
                    <br/><br/>
                </CardBody>
            </Card>
        );
    }

}

export default FrontCard;