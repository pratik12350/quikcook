import { AppTitle, Container, Button } from "./components/styled.js";
import "./App.css";
import { useState } from "react";
import Create from "./components/create.jsx";

function App() {
  const [createClicked, setCreateClicked] = useState(false);

  return (
    <>
      <AppTitle>
        <h1>
          Quik Cook<span style={{ color: "#ffBA00" }}>!</span>
        </h1>
        <p>"Your ingredients are your recipe"</p>
      </AppTitle>
      <Container>
        {createClicked ? (
          <Create/>
        ) : (
          <>
            <h3>Add ingredients you have</h3>
            <h4>and see magic 🪄</h4>
            <Button onClick={() => setCreateClicked(true)}>
              Create Recipe
            </Button>
          </>
        )}
      </Container>
      <Container>
        <h3>How it works</h3>
        <p>
          Remy from Ratatouille is making those recipies behind the scenes 🤫
          well that was a joke ofcourse,{" "}
          <span style={{ color: "#ffBA00" }}>QuikCooks!</span> uses AI to make
          delicious recipes using all the ingredients you have in your kitchen!
          😋 You just enter all the ingredients you have and your dietary
          restrictions 👨‍⚕️ and viola! Enjoy your own custom made recipe with your
          friends and family! 👨‍🍳
        </p>
      </Container>
      <Container>
        <p>Made with ❤️ By Pratik12350 (on GitHub)</p>
      </Container>
    </>
  );
}

export default App;
