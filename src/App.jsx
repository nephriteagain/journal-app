import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import './App.css'
import CreateJournal from './components/CreateJournal'
import JournalTable from './components/JournalTable'
import Logs from './components/Logs'
import { journalListContext } from "./context/journalList-context"


function App() {

  const [ writeJournal, setWriteJournal ] = useState('')
  const [ journalList, setJournalList ] = useState([])
  const [ logData, setLogData ] = useState([])


  const clearInputArea = () => {
    setWriteJournal('')
  }

  const addToList = (writeJournal) => {
    let dateToday = `${new Date()}`.split('').slice(0, 21).join("")
    
    let key = Date.now()
    setJournalList([{'key': key, 'journal': writeJournal, 'time': `${dateToday}`}, ...journalList])
    clearInputArea()
}

// test


const addToLog = (item) => {
  let data = journalList.find((data) => {
    return data.key === item
  })
  let dateToday = `${new Date()}`.split('').slice(0, 21).join("")
  let newKey = Date.now()
  const { journal } = data
  const journalLog = { "journal": journal, "key": newKey, "time": dateToday}
  setLogData([journalLog,...logData])
}





const removeJournal = (item) => {
  setJournalList(journalList.filter((el) =>{
      return el.key !== item
  }))
}



  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <journalListContext.Provider
                value={ { writeJournal, setWriteJournal, addToList, journalList, setJournalList, logData, setLogData, removeJournal, addToLog } }
                    >
                  <CreateJournal />
                  <JournalTable />
                </journalListContext.Provider>

             } />
            <Route path='/logs' element={ <Logs/> } />
          </Routes>
        </BrowserRouter>

      
    </div>
    

  )
}

export default App
