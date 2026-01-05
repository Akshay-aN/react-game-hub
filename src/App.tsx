import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <Show above="lg">
        <GridItem area="nav" bg="coral">
          Nav
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
