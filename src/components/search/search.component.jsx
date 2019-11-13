import React from 'react'
import './search.styles.css'

export class Search extends React.PureComponent {
    state={
        value: ''
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
        this.props.onSearchInfoChange(e.target.value);
    }

   render(){
       return ( 
       <input
        className='search'
        value={this.state.value}
        type='search'
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
    />);
    }
}