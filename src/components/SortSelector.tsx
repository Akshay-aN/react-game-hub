import { Button, Menu, Portal } from "@chakra-ui/react";
import { TbChevronDown } from "react-icons/tb";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Button as={Menu.Trigger} variant="outline" size="sm">
        <TbChevronDown />
        Order by: Relevance
      </Button>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item>Relevance</Menu.Item>
            <Menu.Item>Date added</Menu.Item>
            <Menu.Item>Name</Menu.Item>
            <Menu.Item>Release date</Menu.Item>
            <Menu.Item>Popularity</Menu.Item>
            <Menu.Item>Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
