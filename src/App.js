import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div>
      <Outlet context={{ reviews, setReviews }} />
    </div>
  );
}

export default App;
