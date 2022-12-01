import { Suspense } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Logo />
        <Gallery />
      </Suspense>
    </div>
  );
}

export default App;
