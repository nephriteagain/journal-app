import React, { useContext} from 'react'
import { LogsContext } from "../context/Logs-context"


const  ModalClear = () =>  {

    const { setLogData, setShowModal } = useContext( LogsContext )


    const clearLogs = () => {
        setLogData([])
        setShowModal(false)
      }

  return (
    <aside className='modal-overlay'>
        <div className='modal-container'>
            <h3 className='warning'>Clearing logs will delete your data permanently, do you want to continue?</h3>
            <button className='button-modal-delete'
                onClick={() => clearLogs()}
            >Yes, delete all logs</button><button className='button-modal-cancel'
                onClick={() => {setShowModal(false)}}
            >cancel</button>
    </div>
    </aside>
    
  )
}

export default ModalClear