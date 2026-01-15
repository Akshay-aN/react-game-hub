import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconLists from "./PlatformIconLists";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconLists
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
