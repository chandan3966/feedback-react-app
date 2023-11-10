import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {
                feedback.map(items => (
                    <motion.div key={items.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}>
                        <FeedbackItem 
                            key={items.id} 
                            item={items}
                            />
                    </motion.div>
                ))
            }
            </AnimatePresence>
            
        </div>
      )

//   return (
//     <div className="feedback-list">
//         {
//             feedback.map(items => (
//                 <FeedbackItem 
//                 key={items.id} 
//                 item={items}
//                 handledelete = {handleDelete}
//                 />
//             ))
//         }
//     </div>
//   )
}


export default FeedbackList
