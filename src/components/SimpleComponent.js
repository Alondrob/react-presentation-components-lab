// Code SimpleComponent Here

import React, { Component } from 'react'

class SimpleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mood: 'happy'
        }
    }

     handleClick = () => {
         const newMood = this.state.mood == 'happy' ? 'sad' :'happy'
         this.setState({mood:newMood})
        // this.setState(prevState => {
        //     console.log(prevState)
        //     prevState.mood === 'happy' ? 'sad' :'happy'
       
       
    }
    
    
    render() {
        return (
            <div onClick={this.handleClick}>
             
                    {this.state.mood}
                    
              </div>
        )
    }
    
}

export default SimpleComponent

