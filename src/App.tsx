import * as React from "react";
import { HomePage } from "./HomePage";
import { FilePage } from "./FilePage";

function App() {
  const [json, setJson] = React.useState<unknown>();

  if (!json) {
    return <HomePage setJson={setJson} />;
  }

  return <FilePage json={json} />;
}

export default App;
