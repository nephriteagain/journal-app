import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import './App.css'
import CreateJournal from './components/CreateJournal'
import JournalTable from './components/JournalTable'
import Logs from './components/Logs'
import { journalListContext } from "./context/journalList-context"
import { LogsContext } from "./context/Logs-context"


function App() {

  const [ writeJournal, setWriteJournal ] = useState('')
  const [ journalList, setJournalList ] = useState(JSON.parse(localStorage.getItem("journalList")) || [])
  const [ logData, setLogData ] = useState(JSON.parse(localStorage.getItem("logData")) || [])
  


  const clearInputArea = () => {
    setWriteJournal('')
  }



  const addToList = (writeJournal) => {
    let dateToday = `${new Date()}`.split('').slice(0, 21).join("")
    
    let key = Date.now()
    setJournalList([{'key': key, 'journal': writeJournal, 'time': `${dateToday}`}, ...journalList])
    clearInputArea()
}


const addToLog = (item, status) => {
  let data = journalList.find((data) => {
    return data.key === item
  })
  let dateToday = `${new Date()}`.split('').slice(0, 21).join("")
  let newKey = Date.now()
  const { journal } = data
  const journalLog = { "journal": journal, "key": newKey, "time": dateToday, statusComplete: status}
  setLogData([journalLog,...logData])
}

useEffect(() => {
  localStorage.setItem("journalList", JSON.stringify(journalList))
}, [journalList])

useEffect(() => {
  localStorage.setItem("logData" , JSON.stringify(logData))
}, [logData])


// const removeJournal = (item) => {
//   setJournalList(journalList.filter((el) =>{
//       return el.key !== item
//   }))
// }





  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <journalListContext.Provider
                value={ { writeJournal, setWriteJournal, addToList, journalList, setJournalList, addToLog } }
                    >
                  <CreateJournal />
                  <JournalTable />
                </journalListContext.Provider>

             } />
            <Route path='/logs' element={ 
              <LogsContext.Provider
                value={{  logData, setLogData, journalList, setJournalList }}>
                <Logs/>
              </LogsContext.Provider>

            } />
          </Routes>
        </BrowserRouter>

      
    </div>
    

  )
}

export default App
