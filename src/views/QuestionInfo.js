import React, { Component } from 'react';
import { handleAnswerQuestion } from '../redux/actions/questions';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

class QuestionInformation extends Component{

    state = {
        voted : false
    }
    handleOne = (question) =>{
        this.props.dispatch(handleAnswerQuestion(question, "optionOne"))
        this.setState(() =>({
            voted : true
        }))
    }

    handleTwo = (question) =>{
        this.props.dispatch(handleAnswerQuestion(question, "optionTwo"))
        this.setState(() =>({
            voted : true
        }))
    }
    render(){
        let { question, user, users, authedUser } = this.props
        const total_votes = question.optionOne.votes.length + question.optionTwo.votes.length;
        return(
        <div>  
            <div>
                    <img
                        src = {user.avatarURL}
                        alt = 'avatar'
                        className = 'avatar'
                    />
                </div>
            {this.state.voted ? 
            
            <div> 
                    {users[authedUser].answers[question.id] === 'optionOne' ? 
                    <div>
                    <div style = {{fontWeight : 'bold'}}>
                        
                        <label> &#10003;
                        {`${question.optionOne.text} : ${(question.optionOne.votes.length/total_votes*100).toFixed(2)}% of the users answered this`}
                        </label>
                    </div>
                    <div>
                        {`${question.optionTwo.text} : ${(question.optionTwo.votes.length/total_votes*100).toFixed(2)}% of the users answered this`}
                    </div>
                    </div>
                    :
                    <div>
                    <div>
                        
                        
                        {`${question.optionOne.text} : ${(question.optionOne.votes.length/total_votes*100).toFixed(2)}% of the users answered this`}
                        
                    </div>
                    <div style = {{fontWeight : 'bold'}}>
                        <label> &#10003;
                        {`${question.optionTwo.text} : ${(question.optionTwo.votes.length/total_votes*100).toFixed(2)}% of the users answered this`}
                        </label>
                    </div>
                    </div>
                    }
            </div>
            : 
            <div>
                <div className = 'text'>
                    <p className = 'sentence'>{`${user.name} asks would you rather`}</p>
                </div>

                <div>
                    <Button onClick = {() => this.handleOne(question.id)} variant = 'contained' color = 'secondary'>
                        {question.optionOne.text}
                    </Button>
                    <Button onClick = {() => this.handleTwo(question.id)} variant = 'contained' color = 'secondary'>
                        {question.optionTwo.text}
                    </Button>
                </div>
            </div>
            } 
               
        </div>
        )
    }
}

const mapStateToProps = ({ questions, users,authedUser }, { id }) =>{
    id = id.substring(1);
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
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionInformation);