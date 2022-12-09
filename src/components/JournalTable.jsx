import React,{ useContext } from 'react'

import { journalListContext } from '../context/journalList-context'


const JournalTable = () => {

    const { journalList, setJournalList, logData, addToLog} = useContext(journalListContext)

    const removeJournal = (item) => {
        setJournalList(journalList.filter((el) =>{
            return el.key !== item
        }))
      }


    return (
        <div className='journaltable-div'>
        <table className='table table-journal'>
            <thead className='table-head'>
                <tr className='table-head-row'>
                    <th>Task</th>
                    <th>Date-created</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                { journalList.map((entry) => {
                    const { key, journal, time } = entry
                    return (
                        <tr key={key} className="table-body-row">
                            <td>{journal}</td>
                            <td>{time}</td>
                            <td><button 
                                className='button button-complete'
                            onClick={(e) => {
                                e.stopPropagation
                                addToLog(key)
                                removeJournal(key)
                            }}>completed</button><button 
                                className='button button-delete'
                            onClick={(e) => {
                                e.stopPropagation
                                addToLog(key)
                                removeJournal(key)
                            }}>delete</button></td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
        
    </div>






    )

}

export default JournalTable