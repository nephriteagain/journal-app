import React, { useContext } from 'react'
import { LogsContext } from '../context/Logs-context'
import { useNavigate } from 'react-router-dom'
import { BsPersonCheck } from 'react-icons/bs'

const Logs = () => {
  
  const { logData, journalList, setJournalList, setLogData }  = useContext( LogsContext)


  const navigate = useNavigate("/")

  const backToHome = () => {
    navigate("/")
  }

  const retryJournal = (item, id) => {
    setLogData(logData.filter((id) => {
      return logData.id !== logData.key
    }))
    
    
    let dateToday = `${new Date()}`.split('').slice(0, 21).join("")
    let key = Date.now()
    setJournalList([{'key': key, 'journal': item, 'time': `${dateToday}`}, ...journalList])
  
  }


  return (
    <div className='logs-div'>
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
                const { journal, key, time, statusComplete } = log
                if (statusComplete === "completed") {

                  return (
                    <tr key={key} className="log-row-body">
                        <td>{journal}</td>
                        <td>{time}</td>
                        <td>{statusComplete}</td>
                        <td className='td-logo'>{<BsPersonCheck />}</td>
                    </tr>
                )

                } else {

                  return (
                      <tr key={key} className="log-row-body">
                          <td>{journal}</td>
                          <td>{time}</td>
                          <td>{statusComplete}</td>
                          <td><button className='button button-redo'  value={journal} onClick={(e) => {
                            let item = e.target.value
                            retryJournal(item, key)
                          }} >Retry</button></td>
                      </tr>
                  )
                }
                
            })}
        </tbody>
    </table>
        <button className='redirect-home' style={{cursor: 'pointer'}} onClick={() => {backToHome()}}>Back to Home</button>
    </div>
    
  )
}

export default Logs