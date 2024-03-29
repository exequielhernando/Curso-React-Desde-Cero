import React from 'react'
import UsersCard from './UsersCard';
import withLoader from '../HOC/withLoader';

const UsersGrid = ({users}) => (
    <div className="ed-grid">
        <h1>
           Pagina Usuarios
        </h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            {
                users.map(user => 
                    <UsersCard 
                        key={user.id} 
                        name={user.name}
                        username={user.username}
                        email={user.email}
                    />
                )
            }
        </div>
    </div>

)
export default withLoader("users")(UsersGrid) 