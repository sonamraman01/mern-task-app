import "./App.css";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <div
        className="bg-gray-800 min-h-screen font-sans "
        style={{ minHeight: "100vh" }}
      >
        <AppRouter />
      </div>
    </>
  );
}

export default App;
