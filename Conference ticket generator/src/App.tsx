import Header from "./Components/Header";
import UploadAvatar from "./Components/UploadAvatar";
import "./index.css";
import PatternBottomDesktop from "./Components/PatternBottomDesktop";
import Inputs from "./Components/Inputs";

function App() {
  return (
    <>
      <header>
          <Header />
      </header>
      <main>
        <UploadAvatar />
        <Inputs/>
        <PatternBottomDesktop />
      </main>
    </>
  );
}

export default App;
