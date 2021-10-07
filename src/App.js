import Input from "./Input";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <h1>Inputs</h1>
      <p className="m-2">{"<Input />"}</p>
      <Input />
      <p className="m-2">{"<Input error/>"}</p>
      <Input error />
      <p className="m-2">{"<Input disabled/>"}</p>
      <Input disabled />
      <p className="m-2">{`<Input helperText="Some intersting Text"/>`}</p>
      <Input helperText="Some intersting Text" />
      <p className="m-2">{`<Input helperText="Some intersting Text" error/>`}</p>
      <Input error helperText="Some intersting Text" />
      <p className="m-2">{'<Input value="Text"/>'}</p>
      <Input value="Text" />
      <p className="m-2">{'<Input sm="sm"/>'}</p>
      <Input size="sm" />
      <p className="m-2">{'<Input sm="md"/>'}</p>
      <Input size="md" />
      <p className="m-2">{"<Input fullWidth/>"}</p>
      <Input fullWidth />
      <p className="m-2">{'<Input multiline row="4"/>'}</p>
      <Input multiline row="4" />
    </div>
  );
}
