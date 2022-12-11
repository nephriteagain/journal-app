import React,{ useContext } from 'react'
import { useNavigate  } from 'react-router-dom'

import { journalListContext } from '../context/journalList-context'


const JournalTable = () => {

    const { journalList, setJournalList, addToLog} = useContext(journalListContext)

    const navigate = useNavigate()

    const removeJournal = (item) => {
        setJournalList(journalList.filter((el) =>{
            return el.key !== item
        }))
      }

    const handleLogs = () => {
        navigate("/logs")
    }
    

    return (
        
        <div className='journaltable-div'>
            <div className='redirect-div'>
            <button  className='redirect-logs'  style={{cursor: 'pointer'}} onClick={() => {handleLogs()}}> Check Logs</button>
        </div>
        
            <div className='scrollit'>
        <table className='table-journal'>

            <thead className='table-head'>
                <tr className='table-head-row'>
                    <th className='task-column'>Task</th>
                    <th className='date-column'>Date-created</th>
                    <th className='action-column'>Action</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                    { journalList.map((entry) => {
                    const { key, journal, time } = entry
                    return (
                        <tr key={key} className="table-body-row">
                            <td className='task-data'>{journal}</td>
                            <td className='task-time'>{time}</td>
                            <td className='task-action'><button 
                                className='button button-complete'
                            onClick={(e) => {
                                e.stopPropagation
                                addToLog(key, "completed")
                                removeJournal(key)
                            }}>completed</button><button 
                                className='button button-delete'
                            onClick={(e) => {
                                e.stopPropagation
                                addToLog(key, "deleted")
                                removeJournal(key)
                            }}>delete</button></td>
                        </tr>
                    )
                }) }
            </tbody>

        </table>
            </div>

    </div>






    )

}

export default JournalTable