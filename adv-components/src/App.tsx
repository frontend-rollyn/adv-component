import { useRef } from "react";
import "./App.css";
import Button from "./components/Button";
import Form, { FormHandle } from "./components/Form";
import Input from "./components/Input";

function App() {
  //function HeartIcon() {
  //  return <span>❤️</span>;
  //}

  //const users = [
  //  { id: "u1", name: "Max" },
  //  { id: "u2", name: "Manuel" },
  //];

  //const hobbies = ["Sports", "Reading", "Cooking"];
  const customform = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    //type guarding
    //if (
    //  !data ||
    //  typeof data !== 'object' ||
    //  !('name' in data) ||
    //  !('age' in data)
    //) {
    //    return;
    //}

    console.log(extractedData);
    customform.current?.clear();
  }

  return (
    <>
      <Form onSave={handleSave}>
        <Input id="name" name="name" type="text" label="Name" />
        <Input id="age" name="age" type="number" label="Age" />
        <Button>Save</Button>
      </Form>
      {/*<section>
        <h2>Users</h2>
        <List
          items={users}
          renderItem={(user) => <li key={user.id}>{user.name}</li>}
        />
      </section>
      <section>
        <h2>Hobbies</h2>
        <List
          items={hobbies}
          renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
        />
      </section>

      <IconButton
        icon={HeartIcon}
        onClick={() => console.log("Button clicked!")}
      >
        Like
      </IconButton>*/}

      {/*// <Input label="Enter name" id="name" type="text" />
      // <Input label="Enter age" id="age" type="checkbox" />
      // <Button>A Button</Button>
      // <Button href="http://www.google.com">A Link</Button>*/}
      {/*<Container as="button" onClick={() => alert("hello")}>
        Click Me
      </Container>

      <Card
        title="My Card"
        actions={<button onClick={() => alert("card")}>Click Me!</button>}
      >
        <p>Some content</p>
      </Card>*/}
    </>
  );
}

export default App;
