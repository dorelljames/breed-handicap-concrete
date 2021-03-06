import Link from "next/link";
import { VStack, Center, Text, Button, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center justifyContent="center" alignContent="center" height="100vh">
      <VStack spacing={5}>
        <Image src="/imrs.webp" />
        <Text fontSize="6xl">Best Buddy Finder</Text>
        <Text fontSize="3xl" as="em">
          Finding your best pal in life!
        </Text>
        <Link href="/quiz">
          <Button colorScheme="blue" size="lg">
            Click here if you have a handicap.
          </Button>
        </Link>
        <Button
          variant="text"
          onClick={() =>
            (window.location.href =
              "https://www.youtube.com/watch?v=mQR0bXO_yI8")
          }
        >
          Of fly me to the moon.
        </Button>
      </VStack>
    </Center>
  );
}
