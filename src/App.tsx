import CriptoSearchForm from "./components/CriptoSearchForm"

function App() {

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cripto <span className="">Currency Converter</span>
        </h1>
        <div className="content">
          <CriptoSearchForm/>
        </div>
      </div>
    </>
  )
}

export default App
