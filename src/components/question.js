import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../redux/actions/questions';

class Question extends Component{

    handleOne = (question) =>{
        this.props.dispatch(handleAnswerQuestion(question, "optionOne"))
    }

    handleTwo = (question) =>{
        this.props.dispatch(handleAnswerQuestion(question, "optionTwo"))
    }

    render(){
        const {question, user, answered} = this.props;
        const total_votes = question.optionOne.votes.length + question.optionTwo.votes.length;
        return(
            <div className = 'question'>
                <div>
                    <img
                        src = {user.avatarURL}
                        alt = 'avatar'
                        className = 'avatar'
                    />
                </div>
                <div className = 'text'>
                <p>{`${user.name} asks would you rather`}</p>
                </div>
                {answered ? 
                <div>
                    <button onClick = {() => this.handleOne(question.id)}>
                        {question.optionOne.text}
                    </button>
                    <button onClick = {() => this.handleTwo(question.id)}>
                        {question.optionTwo.text}
                    </button>
                </div>
                :
                <div>
                    <div>
                    {`${question.optionOne.text} : ${(question.optionOne.votes.length/total_votes*100).toFixed(2)}%`}
                    </div>
                    <div>
                    {`${question.optionTwo.text} : ${(question.optionTwo.votes.length/total_votes*100).toFixed(2)}%`}
                    </div>
                </div>
            }
            </div>
        )
    }

}


const mapStateToProps = ( {users, questions} , {id, answered}) =>{
    let user;
    for(let y in users)
    {
        if(y === questions[id].author)
        {
            user = y;
        }
    }

    return{
        question : questions[id],
        user : users[user],
        answered
    }
}

export default connect(mapStateToProps)(Question);