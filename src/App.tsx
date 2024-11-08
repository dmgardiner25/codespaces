import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="h-screen w-screen flex flex-col items-center justify-center">
        <Button
          variant="gooeyRight"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </Button>
      </header>
    </div>
  );
}

export default App;