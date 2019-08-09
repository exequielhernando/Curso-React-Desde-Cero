import React, { Component } from 'react';
import axios from 'axios';
import UsersGrid from './UsersGrid';

class Users extends Component{
    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }
    // FETCH
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'} )
    //     .then(response => response.json())
    //     .then(json => {
    //         this.setState({
    //             users: json
    //         })
    //     })
    // }

    //AXIOS
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => 
            this.setState({
                users: response.data
            }))
    }

    render(){
        const { users } = this.state
        return <UsersGrid users={users}/>
    }
}
export default Users;