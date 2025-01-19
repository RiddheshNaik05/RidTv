import EntryPoint from "./containers/EntryPoint";
import RoutingProvider from "./routing";
import "./App.css";

const App = () => (
  <EntryPoint>
    <RoutingProvider />
  </EntryPoint>
);

export default App;
