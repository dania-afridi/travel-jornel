/* eslint-disable no-unused-vars */
import React from "react"
import Navbar from "./components/Navbar"
import Journey from "./components/Journey"
import Data from "./data"


function App() {
  const travelData = Data.map(traveldetail => {
    return <Journey
      key = {traveldetail.id}
      {...traveldetail}
    />
  })

  return (
    <div className="App">
      <Navbar />
      <section>
        {travelData}
      </section>
    </div>
  );
}

export default App;