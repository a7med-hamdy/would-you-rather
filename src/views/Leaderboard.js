import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component{
    render(){
        const {users} = this.props;
        const arr = Object.keys(users);
    
        // sort users according to scores
        arr.sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) - 
        (users[a].questions.length + Object.keys(users[a].answers).length)
        )
        return(
            <div className = 'leaderboard-area'>
                <ul>
                {arr.map((user) => 
                   <li key = {users[user].name} >
                       <h3>{users[user].name}</h3>
                        <img
                            src = {users[user].avatarURL} 
                            className = 'avatar'
                            alt = 'avatar'
                        />
                        <p>Questions posted : {users[user].questions.length}</p>
                        <p>Questions answered : {Object.keys(users[user].answers).length} </p>
                        <h2>Score : {users[user].questions.length + Object.keys(users[user].answers).length}</h2>
                   </li>
                )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({users}) =>{
    return{
        users,
    }
}

export default connect(mapStateToProps)(Leaderboard);
