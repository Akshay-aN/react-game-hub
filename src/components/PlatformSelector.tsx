import { Button, Menu, Portal } from "@chakra-ui/react";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";
import { TbChevronDown } from "react-icons/tb";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <Button as={Menu.Trigger} variant="outline" size="sm">
        <TbChevronDown />
        Platforms
      </Button>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item key={platform.id}>{platform.name} </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
