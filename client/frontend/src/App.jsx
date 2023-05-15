import './App.css'

function App() {
  // api
  const getData = async ()=>{
    const API = "http://localhost:3000/auth/login"
    const data = await fetch(API)
    const resolveData = await data.json()
    console.log(resolveData)
  }
  getData()
  
  return (
    <div className='container'>
      {}
    </div>
  )
}

export default App
