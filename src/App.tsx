
import 'bootstrap/dist/css/bootstrap.min.css';
import GeneratedPassword from "./components/GeneratedPassword";
import FormComponent from "./components/FormComponent";

const App = () => {
  return (
    <div className="container">
      <h1>Gere instantaneamente uma senha aleatória e segura</h1>
      <GeneratedPassword />
      <FormComponent />
    </div>
  );
};

export default App;
