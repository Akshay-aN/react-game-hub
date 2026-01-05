import { Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Switch.Root
      checked={colorMode === "dark"}
      colorPalette="green"
      onCheckedChange={() => toggleColorMode()}
    >
      <Switch.HiddenInput />
      <Switch.Control />
      <Text>Dark Mode</Text>
    </Switch.Root>
  );
}

export default ColorModeSwitch;
