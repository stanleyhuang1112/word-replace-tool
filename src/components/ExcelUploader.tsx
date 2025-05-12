import { read, utils } from "xlsx"

type ExcelUploaderProps = { handleSheetData: (sheetData) => void }

const ExcelUploader = ({ handleSheetData }: ExcelUploaderProps) => {
  const handleFileUpload = (e) => {
    const reader = new FileReader()
    const file = e.target.files?.[0]
    if (!file) {
      console.error("No file selected")
      return
    }

    reader.onload = (e) => {
      const data = e.target?.result

      try {
        const workbook = read(data, { type: "array" })
        const firstSheetName = workbook.SheetNames[0] //Get the first sheet name
        const worksheet = workbook.Sheets[firstSheetName] //Get the first sheet
        const jsonData = utils.sheet_to_json(worksheet, { header: 1 })
        console.log("translate success")
        handleSheetData(jsonData)
      } catch {
        console.error("translate error")
      }
    }

    reader.readAsArrayBuffer(file)
  }

  return <input type="file" accept=".xlsx" onChange={handleFileUpload} />
}

export default ExcelUploader
