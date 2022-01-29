import './App.css'
import Header from './Header'
import Page from './Page'
import User from './User'
function App() {
  return (
    <div dir="rtl">
      <Header />
      <Page>
        <User></User>
      </Page>
    </div>
  )
}

export default App
