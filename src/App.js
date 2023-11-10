import React from 'react'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import AboutPage  from './pages/AboutPage'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import AboutPageLink from './components/AboutPageLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  
  return (
    <FeedbackProvider>
       <Router>
        <Header text='Feedback UI' />
        
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
              <FeedbackForm/>
              <FeedbackStats />
                <FeedbackList />
                <AboutPageLink/>
              </>
            }/>
            <Route path='/about' element={<AboutPage/>}/>
            
          </Routes>
          
        </div>
    </Router>
    </FeedbackProvider>
   
    

  )
}

export default App
