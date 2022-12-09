import React, { useContext} from 'react'

import { journalListContext } from '../context/journalList-context'


const  CreateJournal = () => {

    const { writeJournal, setWriteJournal, addToList } = useContext(journalListContext)

    return (
        <div className="create-task">
            <input
                className="input-task"
                type="text" value={writeJournal} 
                placeholder="create a journal" 
                onChange={(e)=> setWriteJournal(e.target.value)}
            ></input>
            <button
                className="button task-button"
                type="submit"
                onClick={()=>{if(writeJournal) {addToList(writeJournal)}}}
            >Create Task</button>
        </div>
    )
}

export default CreateJournal