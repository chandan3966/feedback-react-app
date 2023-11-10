import React from 'react'
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <div className="card">
        <h2>About Page</h2>
        <p>This is the about section for the application Feedback UI where
            tou can go throgh all the necessary steps to use this app. 
        </p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default AboutPage
