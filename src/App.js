import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/layouts"
import Routes from "./router/routes"
function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;


