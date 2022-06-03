import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Input from "./components/input/Input";

function App() {
  return (
    <div className="">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Header />
      <Input />
    </div>
  );
}

export default App;
