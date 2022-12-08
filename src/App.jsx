import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CreateJournal from './components/CreateJournal'
import JournalTable from './components/JournalTable'
import Logs from './components/Logs'


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
    <>
      <CreateJournal 
        writeJournal={writeJournal}
        setWriteJournal={setWriteJournal}
        addToList={addToList}
      />
      <JournalTable
        journalList={journalList}
        removeJournal={removeJournal}
        addToLog={addToLog}

        logData={logData}
        setLogData={setLogData}
      />
      <Logs 
        logData={logData}
        setLogData={setLogData}
      />
    </>
    

  )
}

export default App
