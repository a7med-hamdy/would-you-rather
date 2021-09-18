import React, { Component } from 'react';
import { handleAnswerQuestion } from '../redux/actions/questions';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

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

        const { err } = this.props;
        if(err){
            return <Redirect to = '/error' />
        }
        let { question, user, users, authedUser } = this.props
   
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
                        {`${question.optionOne.text} : ${question.optionOne.votes.length} users answered this`}
                        </label>
                    </div>
                    <div>
                        {`${question.optionTwo.text} : ${question.optionTwo.votes.length} users answered this`}
                    </div>
                    </div>
                    :
                    <div>
                    <div>
                        
                        
                        {`${question.optionOne.text} : ${question.optionOne.votes.length} users answered this`}
                        
                    </div>
                    <div style = {{fontWeight : 'bold'}}>
                        <label> &#10003;
                        {`${question.optionTwo.text} : ${question.optionTwo.votes.length} users answered this`}
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
    if(questions[id] === undefined)
    {
        return{
            err : true
        }
    }
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
        authedUser,
        err : false
    }
}

export default connect(mapStateToProps)(QuestionInformation);