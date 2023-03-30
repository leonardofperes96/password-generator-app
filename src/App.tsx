import GeneratedPassword from "./components/GeneratedPassword";
import FormComponent from "./components/FormComponent";
import { useGeneratePasswordContext } from "./contexts/generate_password_context";
import CopyModal from "./components/CopyModal";

const App = () => {
  const { show } = useGeneratePasswordContext();
  return (
    <div className="container">
      <h1>Gere instantaneamente uma senha aleatória e segura</h1>
      <GeneratedPassword />
      <FormComponent />
      {show && <CopyModal />}
    </div>
  );
};

export default App;
