import { BrowserRouter } from 'react-router'
import { Footer } from './components/Footer'
import { GlobalCss } from './styles'
import { RoutesManager } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RoutesManager />
      <Footer />
    </BrowserRouter>
  )
}

export default App
