import React, { useContext } from 'react'
import { journalListContext } from '../context/journalList-context'


const Logs = () => {
  
  const { logData }  = useContext(journalListContext)



  return (
    <table className='log-table'>
        <thead className='log-head'>
            <tr className='log-row-head'>
                <th>Logs</th>
                <th>Logs Date</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody className='log-head'>
            {logData && logData.map((log) => {
                const { journal, key, time } = log
                return (
                    <tr key={key} className="log-row-body">
                        <td>{journal}</td>
                        <td>{time}</td>
                        <td>status</td>
                        <td><button className='button button-redo'>Retry</button></td>
                    </tr>
                )
                
            })}
        </tbody>
    </table>
  )
}

export default Logs