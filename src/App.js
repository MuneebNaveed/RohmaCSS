import React, { useState } from "react"
import "./index.css"

import Left from "./Left"
import Right from "./Right/Right"

const App = () => {
  const [isOpen, setOpen] = useState(true)

  return (
    <div className="master">
      <Left />
      {isOpen && <Right toggle={() => setOpen(!isOpen)} />}
    </div>
  )
}

export default App
