import { Navbar, Welcome, Services, Transactions } from './components/index';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Services />
        <Transactions />
    </div>
  )
}

export default App;