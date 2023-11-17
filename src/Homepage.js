import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <h2>Welcome to "usersigned in"'s Pokedex!</h2>
            <h4 src='/main'>View Pokèdex</h4>
            <Link to='/main'>
                <h4>Find Pokèmon</h4>
            </Link>
        </div>
    )
}

export default Homepage