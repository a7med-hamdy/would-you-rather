import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../components/question';
import { Button } from '@material-ui/core';

class Home extends Component {
    state = {
        answered : true,
    }
    

    handleAnsweredClick = () =>{
        this.setState(() => ({
           answered: true 
        }))
    }

    handleNotAnsweredClick = () =>{
        this.setState(() => ({
            answered: false 
         }))
    }

    render(){
        const {questions, authedUser, users} = this.props;
        const x = users[authedUser].answers
        const arr = Object.keys(x);
        arr.sort((a,b) => questions[b].timestamp - questions[a].timestamp)//sort according to time
        const arr2 = Object.keys(questions);
        let array = [];
        arr2.map((id) => {
            let flag = false;
            arr.map((id2) =>{
                if(id2 === id)
                {
                    flag = true;
                }
            })
            if(!flag)
            {array.push(id)}
        })
        array.sort((a,b) => questions[b].timestamp - questions[a].timestamp)//sort according to time
        return(
            <div style = {{textAlign : 'center'}}>
                <Button disabled = {this.state.answered}
                onClick ={() => this.handleAnsweredClick()} variant = "outlined">
                    Not answered
                </Button>
                <Button disabled = {!this.state.answered}
                onClick ={() => this.handleNotAnsweredClick()} variant = "outlined">
                    answered
                </Button>
                <ul>
                { this.state.answered ? array.map((id) => <Question id = {id} key = {id} answered = {this.state.answered}/>) : 
                arr.map((id) => <li key = {id}> <Question id = {id}  answered = {this.state.answered} /> </li>)
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({questions, authedUser, users}) =>{

    return{
        questions,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Home);