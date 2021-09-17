import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../components/question';

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
        return(
            <div style = {{textAlign : 'center'}}>
                <button disabled = {this.state.answered}
                onClick ={() => this.handleAnsweredClick()}>
                    Not answered
                </button>
                <button disabled = {!this.state.answered}
                onClick ={() => this.handleNotAnsweredClick()}>
                    answered
                </button>
                { this.state.answered ? array.map((id) => <Question id = {id} key = {id} answered = {this.state.answered}/>) : 
                arr.map((id) => <Question id = {id} key = {id} answered = {this.state.answered}/>)
                }
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