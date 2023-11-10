import React, { useState,useContext,useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [btnDiaabled, setbtnDiaabled] = useState(true)
    const [msg, setMsg] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDiaabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handletextChange = (e) => {
        if(text === ''){
            setbtnDiaabled(true)
            setMsg(null)
        }
        else if(text !== '' && text.trim().length <= 10){
            setMsg('Text must be atleat 10 characters')
            setbtnDiaabled(true)
        }
        else {
            setMsg(null)
            setbtnDiaabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newfeedback = {
                text,
                rating,
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newfeedback)
            }
            else{
                addFeedback(newfeedback)
            }
            setText('')
        }
        
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select ={(rating) => setRating(rating)}/>
        <div className="input-group">
            <input onChange={handletextChange} type="text" placeholder='Write a revice'
            value={text} />
            <Button type='submit' 
            isDisabled = {btnDiaabled}>Send</Button>
        </div>

        {msg && <div className='message'>{msg}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
