import StylesInSamePage from "./1-styles-in-same-page/StylesInSamePage";
import StylesInDifferentPage from "./2-styles-in-diffetent-page/StylesInDifferentPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <StylesInSamePage />
      </div>
      <div style={{ marginTop: "20px" }}>
        <StylesInDifferentPage />
      </div>
    </div>
  );
}

export default App;
