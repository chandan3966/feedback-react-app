import { createContext,useEffect,useState } from "react"
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

  const [isLoading,setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false
    })

    useEffect(() => {
      fetchFeedback()
    },[])



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
          deleteFeedbackToDB(id,feedback.filter((item) => item.id === id)[0])
          setFeedback(feedback.filter((item) => item.id != id))
          setIsLoading(false)
        }
      }

      const deleteFeedbackToDB = async(id,newFeedback) => {
        try {
          const response = await fetch(`/feedback/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
          });
    
          if (response.ok) {
            console.log('Record deleted successfully!');
          } else {
            console.error('Failed to delete record');
          }
        } catch (error) {
          console.error('Error deleting record:', error);
        }
      }
    
    //add feedback
    const addFeedback = (newFeedback) => {
      // newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
      addFeedbackToDB(newFeedback)
      setIsLoading(false)
    }

    //Fetch feedback
    const fetchFeedback = async() => {
      const response = await fetch(`/feedback?_sort=id&order=desc`)
      const data = await response.json()
      setFeedback(data)
      setIsLoading(false)
    }

    //Add data to DB
    const addFeedbackToDB = async(newFeedback) => {
      try {
        const response = await fetch('/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
        });
  
        if (response.ok) {
          console.log('Record created successfully!');
        } else {
          console.error('Failed to create record');
        }
      } catch (error) {
        console.error('Error creating record:', error);
      }
    }

    //Update Data
    const updateFeedback = (id,upitem) => {
        setFeedback(feedback.map((item) => item.id === id ? {
          ...feedback,...upitem
        }:item))
        updateFeedbackToDB(id,upitem)
        setFeedbackEdit({
          item:{},
          edit:false
        })
        setIsLoading(false)
    }

    //update DB data
    const updateFeedbackToDB = async(id,newFeedback) => {
      try {
        const response = await fetch(`/feedback/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
        });
  
        if (response.ok) {
          console.log('Record updated successfully!');
        } else {
          console.error('Failed to update record');
        }
      } catch (error) {
        console.error('Error updating record:', error);
      }
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
