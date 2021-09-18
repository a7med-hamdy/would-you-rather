import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddQuestion } from '../redux/actions/questions'

class NewQuestion extends Component{
    state = {
        one: '',
        two: '',
        toHome: false,
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.dispatch(handleAddQuestion(this.state.one, this.state.two, this.props.authedUser));
        this.setState(() => ({
            one : '',
            two : '',
            toHome : true,
        }))
        this.props.history.push("/Home")
    }

    handleChangeOne = (text) => {
        this.setState(() =>({
            one : text
        }))
    }

    handleChangeTwo = (text) => {
        this.setState(() =>({
            two : text
        }))
    }

    render(){
        return(
            <div>
                <h2 style = {{textAlign : 'center'}} >Compose New Question</h2>
                <form onSubmit = {this.handleSubmit}>
                <h4>Would You Rather : </h4>
                    <input placeholder = 'option one' onChange = {(event) => this.handleChangeOne(event.target.value)}/>
                    <input placeholder = 'option two' onChange = {(event) => this.handleChangeTwo(event.target.value)}/>
                    <button type = "submit" disabled = {this.state.one === '' || this.state.two === ''}>
                        Submit
                    </button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = ({authedUser}) =>{
    return{
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion);