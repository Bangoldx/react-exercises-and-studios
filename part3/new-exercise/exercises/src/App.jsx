import './App.css'
import HobbyIntroduction from './components/Introduction.jsx'
import MyGames from './components/Projects.jsx'
function App() {


  return (
    <>
     <h1>My Hobby: Board Games</h1>
     <div>
      <HobbyIntroduction />
      <MyGames />
     </div>
    </>
  )
}

export default App
