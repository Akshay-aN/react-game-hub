import { Button, Menu, Portal } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import { TbChevronDown } from "react-icons/tb";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <Button as={Menu.Trigger} variant="outline" size="sm">
        <TbChevronDown />
        {selectedPlatform?.name || "Platforms"}
      </Button>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
