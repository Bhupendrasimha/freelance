import logo from "./logo.svg";
import "./App.css";
import EmployeesTable from "./components/employeeTable";
import Addemployee from "./components/exployee";

function App() {
  return (
    <div className="App">
      <Addemployee />
      <EmployeesTable />
    </div>
  );
}

export default App;
