import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'


class SearchBar extends React.Component{

    constructor(props){
        super(props);

        this.state = {input : ''}
        this.onInputChange = this.onInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInputChange(event){
        this.setState({input:event.target.value})
        console.log(event.target.value)
    }

    onSubmit(event){
        event.preventDefault()

        this.props.fetchWeather(this.state.input)
        this.setState({input : ''})

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} className='input-group'>
                    <input onChange={this.onInputChange} value={this.state.input} placeholder='Search..' className='form-control'/>
                    <span className='input-group-btn'>
                        <button type='submit' className='btn btn-secendary'>Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return(
        bindActionCreators({fetchWeather},dispatch)
    )
}

export default connect(null, mapDispatchToProps)(SearchBar)