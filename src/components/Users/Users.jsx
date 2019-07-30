import React, { Component } from 'react';
import UsersCard from './UsersCard';

class Users extends Component{
    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'} )
        .then(response => response.json())
        .then(json => {
            this.setState({
                users: json
            })
        })
    }

    render(){
        const { users } = this.state
        return(
            <div className="ed-grid">
                <h1>
                    Pagina Usuarios
                </h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    {users.map(user => (
                        <UsersCard 
                            key={user.id} 
                            name={user.name}
                            username={user.username}
                            email={user.email}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default Users;