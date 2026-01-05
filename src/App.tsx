import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <Show when={true}>
        <GridItem area="nav">
          <NavBar></NavBar>
          <ColorModeSwitch />
        </GridItem>
      </Show>
      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>
      <GridItem area="main" bg="dogerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
