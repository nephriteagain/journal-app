import React from 'react'


const  CreateJournal = ( { writeJournal, setWriteJournal, addToList} ) => {
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