import React, { useState } from "react";
import TestComponent from "./testComponent";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div>
      {showComponent && <TestComponent />}
      <button onClick={() => setShowComponent((state) => !state)}>
        show Test Component
      </button>
    </div>
  );
}

export default App;
