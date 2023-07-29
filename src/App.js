import logo from "./logo.svg";
import "./App.css";
import FolderItem from "./components/FolderItem";
import FolderList from "./components/FolderList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <FolderList />
      <Footer />
    </div>
  );
}

export default App;
