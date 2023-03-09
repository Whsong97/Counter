import { useState } from "react";

function App() {
  const [students, setStudents] = useState(10)



  return (
    <div>
      <h1> Peanut Butters </h1>
      <button onClick={() => setStudents(students+1)}>
        Add
      </button>
      <button onClick={() => setStudents(students-1)}>
        Subtract
      </button>
      <div>
        { students }
      </div>
    </div>
  );
}

export default App;
