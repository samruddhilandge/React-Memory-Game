import React,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import BCard from './BCard';
import GridLayout from 'react-grid-layout';
import ReactCardFlip from 'react-card-flip';
class Board extends Component{

    
    constructor(props){

        super(props);
        this.state={

           // isFlipped:false,
           // isFlipped2:false,
           cards:[],
           flipped:[],
           check:[],
          
        }
        //this.handleClick=this.handleClick.bind(this);
        this.shuffle=this.shuffle.bind(this);
        this.renderCards=this.renderCards.bind(this);
        this.generateCards=this.generateCards.bind(this);
    }

    generateCards=(callback)=>{
      const cards=[];
      for(let i=1;i<2;i++){
        cards.push({name:i});
        cards.push({name:i});
      }
      console.log("Generated cards:",cards);
      this.setState({cards:cards});
      console.log("cards:",this.state.cards);
      setTimeout(()=>{
        callback();
      },500);
    }
    componentWillMount(){
        const flipped=[];
        localStorage.setItem("flipped",JSON.stringify(flipped))
        this.generateCards(this.seedCards);
        
      }

    // handleClick(e){
    //     e.preventDefault();
    //     this.setState(prevState=>({isFlipped: !prevState.isFlipped}));
       
    // }    

    shuffle=(cards)=>{
    
        var currentIndex=cards.length;
        var temporaryValue, randomIndex;
      
        while(currentIndex!==0){
      
          randomIndex=Math.floor(Math.random()*currentIndex); //pick the remaining element
          console.log("Random index:",randomIndex);
          currentIndex-=1;
      
          temporaryValue=cards[currentIndex];
          cards[currentIndex]=cards[randomIndex];
          cards[randomIndex]=temporaryValue;
        }
      
        return cards;
      
      }

      seedCards= () => {
        console.log("Shuffled cards are :")
       
      var shuffledCards = this.shuffle(this.state.cards);
      console.log("The shuffled cards:",shuffledCards);
      this.setState({
        cards:shuffledCards
      }); 
    }

    clearCheckArray=()=>{

      this.setState({
        check:[]
      })

    }
    checkCard=(name)=>{  
     //make it async and add callback to clear the check array
      console.log("In check card\n Length of check array:",this.state.check.length)
      if(this.state.check.length<2){
          this.setState(prevState => ({
            check: [...prevState.check,name]}),()=>{
                    console.log("check array:",this.state.check)
                    console.log("Length of check array after pushing :",this.state.check.length)
                    
                }) 
      }
      if(this.state.check.length===2){
         if(!(this.state.check[0]-this.state.check[1])){  //both elements are same
        // this.setState(prevState => ({
        //   flipped: [...prevState.flipped,name]}),()=>{
        //           console.log("flipped array in checkcard:",this.state.flipped)
        //       },()=>{
        //         localStorage.setItem("flipped",JSON.stringify(this.state.flipped))
        //         this.setState({
        //           check:[]
        //         })
        //       })                   

        const flipped=JSON.parse(localStorage.getItem('flipped'));
        console.log("In const flipped after parsing the localstorage 1:",flipped);
        flipped.push(name);
        localStorage.setItem('flipped',JSON.stringify(flipped));
        console.log("in localstorage after pushing",localStorage.getItem('flipped'))



        // this.state.flipped.push(name)
        //console.log("flipped array:",this.state.flipped)
        this.setState(prevState => ({
            flipped: [...prevState.flipped,name]
          }),()=>{
            console.log("flipped array in the state:",this.state.flipped)
            this.setState({
                check:[]
            })
        })
          
      }
      else{
        this.setState({
          check:[]
        })

      }
      
      console.log("in localstorage flipped",localStorage.getItem('flipped'))
      console.log("check array:",this.state.check )
    
    }
  
  }

  reset(){
    window.location.reload();
    localStorage.clear();
  }

  renderCards() {
        return this.state.cards.map( (card, index) => {
          return <a onClick={()=>this.checkCard(card.name)}>
            <BCard id={index} name={card.name}/></a>
        });
      }

    render(){ 
        return(
            <div style={{padding:30}}>
                <div>
                    <div className="container">
                      <button class="btn btn-primary" onClick={this.reset}>Reset Game</button>
                        <div className="rendering cards">
                            {this.renderCards()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;