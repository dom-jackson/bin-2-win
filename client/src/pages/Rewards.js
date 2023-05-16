import {
  Container,
  Heading,
  Flex,
  Box,
  Card,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';

const Rewards = () => {
  const rewards = [
    {
      title: 'Plantura',
      image: 'plantura.png',
      liveLink: '',
      description:
        'Plantura is a German business that provides organic gardening products and resources to help people grow their own food and create a sustainable garden. Their mission is to promote healthy, sustainable gardens that provide nutritious food and promote eco-friendly living.',
    },
    {
      title: 'EarthHero',
      image: 'EarthHero.png',
      liveLink: 'https://earthhero.com/',
      description:
        'Shop sustainable products for every aspect of your life at EarthHero. From clothing to home goods, this B Corp certified business is committed to sustainability and ethical practices.',
    },
    {
      title: 'Package Free Shop',
      image: 'PackageFreeShop.png',
      description:
        'Find everything you need to live a zero waste lifestyle at Package Free Shop. This sustainable shop offers products ranging from personal care to home goods, all designed to reduce waste.',
    },
    {
      title: 'Patagonia',
      image: 'Patagonia.png',
      liveLink: 'https://www.patagonia.com/home/',
      description:
        'Patagonia is a well-known outdoor clothing company committed to sustainability and environmental activism. Shop their collection of ethically-made and environmentally-conscious clothing, gear, and accessories.',
    },
  ];

  return (
    <Container>
      <Heading textAlign="center" mb="8">
        Rewards
      </Heading>
      <Flex flexWrap="wrap">
        {rewards.map((reward, index) => (
          <Box key={index} p="4" w="lg">
            <Card boxShadow="lg" bg="#83b271" color="#3c495d">
              <Image src={`images/${reward.image}`} alt={reward.title} />
              <Box p="6">
                <Text fontWeight="bold" fontSize="xl">
                  {reward.title}
                </Text>
                <Text mt="4">{reward.description}</Text>
                <Button
                  mt="6"
                  colorScheme="green"
                  as="a"
                  href={reward.liveLink}
                >
                  View Reward
                </Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Rewards;
