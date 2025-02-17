import Header from "./Components/Header";
import UploadAvatar from "./Components/UploadAvatar";
import "./index.css";
import PatternBottomDesktop from "./Components/PatternBottomDesktop";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <header>
          <Header />
      </header>
      <main>
        <UploadAvatar />
        <Form />
        <PatternBottomDesktop />
      </main>
    </>
  );
}

export default App;
