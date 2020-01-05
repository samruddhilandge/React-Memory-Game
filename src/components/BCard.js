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

import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';
import BackCard from './BackCard';
class BCard extends Component{                   //Board Card

    constructor(props){

        super(props);
        this.state={

            isFlipped:false,
            flipped:[]
        }
        this.handleFrontClick=this.handleFrontClick.bind(this);
        this.handleBackClick=this.handleBackClick.bind(this);
    }

    handleBackClick(name){
       
        const flipped=JSON.parse(localStorage.getItem('flipped'));
        if(!flipped.includes(name)){

            this.setState(prevState=>({isFlipped: !prevState.isFlipped}),()=>{
            });     
        }
        
        
    }

    

    handleFrontClick(name){
        //e.preventDefault();
        console.log("in handle back click")

        this.setState(prevState=>({isFlipped: !prevState.isFlipped}),()=>{

            const flipped=JSON.parse(localStorage.getItem('flipped'));
            
            if(this.state.isFlipped){
                // console.log("is flipped is true"); 
                // const flipped=JSON.parse(localStorage.getItem('flipped'));
                // console.log("In const flipped after parsing the localstorage 1:",flipped);
                // flipped.push(name);
                // localStorage.setItem('flipped',JSON.stringify(flipped));
                // console.log("in localstorage",localStorage.getItem('flipped'))



                // this.state.flipped.push(name)
                // console.log("flipped array:",this.state.flipped)
                // this.setState(prevState => ({
                //     flipped: [...prevState.flipped,name]
                //   }),()=>{
                //     console.log("flipped array:",this.state.flipped)
                // })
                
            }
        });
        
    } 

    static defaultProps={
        name:'Card',
     
    }
    

    render(){
        //this.props.callbackFromParent(this.state.flipped);
        console.log("Flipp flag while rendering:",this.state.isFlipped);
        
        return(
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <a name="card1" onClick={()=>this.handleFrontClick(this.props.name)}>
                    <FrontCard />
                </a>
                <a name="card2" onClick={()=>this.handleBackClick(this.props.name)} >
                    <BackCard name={this.props.name}/>
                </a>
                
            </ReactCardFlip>
        );
    }
    
}

export default BCard;