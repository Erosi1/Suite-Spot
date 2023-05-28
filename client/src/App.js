import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/hotel'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
     </Routes>
    </div></BrowserRouter>
  
  );
}

export default App;