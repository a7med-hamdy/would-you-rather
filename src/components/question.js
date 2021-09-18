import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
class Question extends Component{


    
    render(){
        const {question, user, answered, authedUser, users} = this.props;
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
                <p className = 'sentence'>{`${user.name} asks would you rather`}</p>
                {answered ?  
                <div>
                <ol>
                    <li>
                        {question.optionOne.text}
                    </li>
                    <li>
                        {question.optionTwo.text}
                    </li>
                </ol>
                <Link to = {`/question/:${question.id}`}>
                <Button className = 'answer' variant = 'contained' color = 'primary'>
                    Answer
                </Button>
                </Link>
                </div>

                :
                 
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

                
            }
                
                </div>
                <div className = 'break-line'></div>
            </div>
        )
    }

}


const mapStateToProps = ( {users, questions, authedUser} , {id, answered}) =>{
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
        answered,
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Question);