import React, { useContext} from 'react'

import { journalListContext } from '../context/journalList-context'


const  CreateJournal = () => {

    const { writeJournal, setWriteJournal, addToList } = useContext(journalListContext)

    const submit = window.addEventListener('keydown', e => {
        if (e.key === 13 ) {
            console.log('you pressed enter')
        }
    })


    return (
        
        <div className="create-task">
            <input
                className="input-task"
                type="text" value={writeJournal} 
                placeholder="create a journal" 
                onChange={(e)=> {
                    setWriteJournal(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        addToList(writeJournal)
                    }
                }}
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