import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  axios.defaults.withCredentials = true;
  axios.post('https://final-project-api-phi.vercel.app')
  return <Layout/>;
}

export default App;
