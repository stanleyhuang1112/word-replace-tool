import { useEffect, useState } from "react"
import "./App.css"
import ExcelUploader from "./components/ExcelUploader"

function App() {
  const [sheetData, setSheetData] = useState([])
  
  useEffect(() => console.log(sheetData), [sheetData])

  return (
    <>
      <ExcelUploader handleSheetData={(data: []) => setSheetData(data)} />
    </>
  )
}

export default App
