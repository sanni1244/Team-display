import './App.css';
import Employee from './components/employee';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App bg-gray-100">
     {
      showEmployees ? (
      <>
      <Employee role={role}/>
      </>
      ) : (<p>No</p>)

     }
    </div>
  );
}
export default App;