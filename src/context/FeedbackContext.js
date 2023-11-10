import { createContext,useState } from "react"
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
      {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
      {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
      {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false
    })

    //edit feedback
    const editFeedback =(item)=> {
      setFeedbackEdit({
        item,
        edit: true
      })
    }

    //delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure wanna delete?')){
          setFeedback(feedback.filter((item) => item.id != id))
        }
      }
    
    //add feedback
    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
    }

    //Update Data
    const updateFeedback = (id,upitem) => {
        setFeedback(feedback.map((item) => item.id === id ? {
          ...feedback,...upitem
        }:item))
        setFeedbackEdit({
          item:{},
          edit:false
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
