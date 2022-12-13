import React, { useContext } from 'react'
import { LogsContext } from '../context/Logs-context'
import { useNavigate } from 'react-router-dom'
import { BsPersonCheck } from 'react-icons/bs'

const Logs = () => {
  
  const { logData, journalList, setJournalList, setLogData, setShowModal }  = useContext( LogsContext)


  const navigate = useNavigate("/")

  const backToHome = () => {
    navigate("/")
  }
  

  const retryJournal = (item) => {
    let dateToday = `${new Date()}`.split('').slice(0, 21).join("")


    item.time = dateToday
    delete item.statusComplete
    setJournalList([item, ...journalList])

    let data = logData.filter((log) => {
      return log !== item
    })
    setLogData(data)
  }


  return (
    <div className=' logs-div'>
        <div className='button-div'>
          <button className='redirect-home' style={{cursor: 'pointer'}} onClick={() => {backToHome()}}>Back to Home</button> <button className='button-clear'
            onClick={() => {
              if (logData.length) {
                setShowModal(true)
              } else {
                alert("Log Table is already empty!")
              }
              
            }}
          >Clear All Logs</button>
        </div>

        <div className='scrollit'>
        <table className='log-table'>
          <thead className='log-head'>
            <tr className='log-row-head'>
                <th className='logs-column'>Logs</th>
                <th className='logs-date'>Log Date</th>
                <th className='logs-status'>Status</th>
                <th className='logs-action'>Action</th>
            </tr>
          </thead>
          <tbody className='log-body'>
            {logData && logData.map((log) => {
                const { journal, key, time, statusComplete } = log
                if (statusComplete === "completed") {

                  return (
                    <tr key={key} className="log-row-body">
                        <td className='logs-column'>{journal}</td>
                        <td className='logs-date'>{time}</td>
                        <td className='logs-status'>{statusComplete}</td>
                        <td className='td-logo logs-action'>{<BsPersonCheck />}</td>
                    </tr>
                )

                } else {

                  return (
                      <tr key={key} className="log-row-body">
                          <td className='logs-column'>{journal}</td>
                          <td className='logs-date'>{time}</td>
                          <td className='logs-status'>{statusComplete}</td>
                          <td className='td-logo logs-action'><button className='button button-redo' value={log} onClick={(e) => {
                            let item = log
                            e.stopPropagation
                            retryJournal(item)
                          }} >Retry</button></td>
                      </tr>
                  )
                }
                
            })}
        </tbody>
    </table>
    </div>
    </div>
    
  )
}

export default Logs