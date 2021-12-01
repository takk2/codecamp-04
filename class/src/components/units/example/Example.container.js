import ExampleUI from "./Example.persenter";

export default function Example(props) {
  return <ExampleUI isEdit={props.isEdit} />;
}
