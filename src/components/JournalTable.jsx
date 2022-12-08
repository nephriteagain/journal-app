import React from 'react'



const JournalTable = ( { journalList, removeJournal, addToLog, logData, setLogData} ) => {



    return (
        <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Date-created</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { journalList.map((entry) => {
                    const { key, journal, time } = entry
                    return (
                        <tr key={key}>
                            <td>{journal}</td>
                            <td>{time}</td>
                            <td><button onClick={(e) => {
                                e.stopPropagation
                                addToLog(key)
                                removeJournal(key)
                            }}>completed</button><button onClick={(e) => {
                                e.stopPropagation
                                addToLog(key)
                                removeJournal(key)
                            }}>delete</button></td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>

<table className='table'>
        <thead>
            <tr>
                <th>Logs</th>
                <th>Logs Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {logData && logData.map((log) => {
                const { journal, key, time } = log
                return (
                    <tr key={key}>
                        <td>{journal}</td>
                        <td>{time}</td>
                        <td>status</td>
                    </tr>
                )
                
            })}
        </tbody>
    </table>
        
    </div>






    )

}

export default JournalTable