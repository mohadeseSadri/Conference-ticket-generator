import Header from "./Components/Header";
import UploadAvatar from "./Components/UploadAvatar";
import "./index.css";
import PatternBottomDesktop from "./Components/PatternBottomDesktop";

function App() {
  return (
    <>
      <header>
          <Header />
      </header>
      <main>
        <UploadAvatar />
        <PatternBottomDesktop />
      </main>
    </>
  );
}

export default App;
