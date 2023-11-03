import './App.css'
import Nav from './Components/Nav'
import Showcase from './Components/Showcase'
// import Categories from './Components/Categories'
import Collection from './Components/Collection'
// import Shop from './Components/Shop' // 
// import News from './Components/News' 
import Footer from './Components/Footer'

function App() {
  return (
    <div className='Pompeo'>
      <Nav></Nav>
      <Showcase></Showcase>
      {/* <Categories></Categories> */}
      <Collection></Collection>
      {/* <Shop></Shop> */}
      {/* <News></News>  */}
      <Footer></Footer>
      
    </div>
  )
}

export default App
