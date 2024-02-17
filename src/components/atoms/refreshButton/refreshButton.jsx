import React from 'react'
import { SlRefresh } from "react-icons/sl";
import "./refreshButton.css"

export default function RefreshButton({onClick}) {

  return (
    <div>
      <button className='refresh-btn' onClick={onClick}>
        <SlRefresh className='refresh-icon'/>
        Refresh
      </button>

    </div>
  )
}