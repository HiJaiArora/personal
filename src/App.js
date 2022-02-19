import "./App.css";
import AdminRoutes from "./routes/adminRoutes";
import SimpleBackdrop from "./spinner/container/backdrop";

function App() {
  return (
    <div>
      <AdminRoutes />
      <SimpleBackdrop />
    </div>
  );
}

export default App;
