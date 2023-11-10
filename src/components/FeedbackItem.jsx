import React, { useState } from 'react'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item}) {

  const {deleteFeedback,editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse = {true}>
        <div className="num-display">
            {item.rating}
        </div>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color='purple'></FaEdit>
        </button>
        <button onClick={() => deleteFeedback(item.id)} className="close">          
          <FaTimes color='purple'></FaTimes>
        </button>
        <div className="text">
                {item.text}
        </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.any.isRequired
}
export default FeedbackItem
