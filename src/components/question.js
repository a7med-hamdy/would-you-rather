import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component{
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
                    <button>
                        {question.optionOne.text}
                    </button>
                    <button>
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
    let q;
    let user;
    for(let x in questions)
    {
        
        if(x === id)
        {
            q = x;
        }
    }
    
    for(let y in users)
    {
        if(y === questions[q].author)
        {
            user = y;
        }
    }

    return{
        question : questions[q],
        user : users[user],
        answered
    }
}

export default connect(mapStateToProps)(Question);