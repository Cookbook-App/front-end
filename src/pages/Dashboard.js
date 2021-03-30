import React, { Component } from 'react'
import DashNav from '../components/DashNav'

export class Dashboard extends Component {
    render() {
        return (
            <>
            <DashNav />
            <div className='signin-greeting'>
                <h2>Thanks for signing in, Guest </h2>
            </div>
            <div className='saved-recipes'>
               <h2>Saved Secret Recipes</h2>
            </div>
            </>
        )
    }
}

export default Dashboard

