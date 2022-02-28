import { Navbar, Welcome, Services } from './components/index';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Services />
    </div>
  )
}

export default App;