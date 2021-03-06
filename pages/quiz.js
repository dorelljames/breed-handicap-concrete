import React from "react";
import {
  Text,
  Container,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  Wrap,
  WrapItem,
  Center,
  Image,
} from "@chakra-ui/react";

export default function QuizPage() {
  const [state, setState] = React.useState("idle"); // fetching, fetching_error, started -> finished
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [dogs, setDogs] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);

  const handleSubmitAnswer = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleClickStartAgain = () => {
    setCurrentQuestionIndex(0);
    setState("started");
  };

  const question = questions?.[currentQuestionIndex];

  React.useState(() => {
    fetch(`/api/questions`)
      .then((res) => res.json())
      .then(setQuestions)
      .then(() => setState("started"));
  }, []);

  React.useState(() => {
    const fetchDogs = fetch(`/api/dogs`);
    const fetchDogAttributes = fetch(`/api/dog_attributes`);

    Promise.all([fetchDogs, fetchDogAttributes]).then(
      async ([dogsResponse, dogAttributesResponse]) => {
        const dogs = await dogsResponse.json();
        const dogAttributes = await dogAttributesResponse.json();
        console.log(
          "🚀 ~ file: quiz.js ~ line 48 ~ dogAttributes",
          dogAttributes
        );
        console.log("🚀 ~ file: quiz.js ~ line 47 ~ dogs", dogs);

        const dogsWithAttributes = dogs
          .map((dog) => {
            return {
              ...dog,
              attributes: dog.attributes.map((id) =>
                dogAttributes.find((da) => da._id === id)
              ),
            };
          })
          .sort(() => 0.5 - Math.random());
        setDogs(dogsWithAttributes);
      }
    );
  }, []);

  React.useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      setState("finished");
    }
  }, [currentQuestionIndex]);

  return (
    <Container padding={5}>
      <VStack spacing={6}>
        <Text fontSize="2xl">Finding Your Service Dog Quiz</Text>

        <Text>
          This quiz is designed to get find your perfect buddy for life in
          helping you get around your day to day tasks.
        </Text>

        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Click here for more Info
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Service dogs play a vital role in the lives of people with
              disabilities, ranging from autism to muscular dystrophy. These
              loving animals help their owners perform day-to-day tasks, and
              some are specially trained for people with diabetes, epilepsy, or
              PTSD. Service dogs play an important practical role in the lives
              of their partners, but they also become loving friends.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {question && (
          <div key={question._id}>
            <Text fontSize="5xl">{question?.title}</Text>
            <Text fontSize="2xl">{question?.description}</Text>

            <VStack>
              <Wrap spacing={5}>
                {question?.choices.map((choice) => (
                  <WrapItem key={`${question?.title}-${choice._id}`}>
                    <Center>
                      <input
                        type={question?.type ? question?.type : "radio"}
                        name={question?.title}
                        id={choice._id}
                        value={choice._id}
                        style={{ marginRight: `5px` }}
                      />
                      <label htmlFor={choice._id}>{choice?.title}</label>
                    </Center>
                  </WrapItem>
                ))}
              </Wrap>
              <Button onClick={handleSubmitAnswer}>Next</Button>
            </VStack>
          </div>
        )}
      </VStack>

      {state === "finished" && (
        <>
          <Text fontSize="2xl">Hahaha</Text>
          <Text>Char char ra bitaw ni...</Text>
          <br />
          <br />
          <Text fontSize="5xl">Your Best 3</Text>
          {dogs.map((dog) => (
            <Box key={`dog-${dog?._id}`}>
              <Image src={dog?.imageSrc} />
              <Text fontSize="2xl">{dog?.name}</Text>
            </Box>
          ))}
          <br />
          <br />
          <Button onClick={handleClickStartAgain}>Start again...</Button>
        </>
      )}
    </Container>
  );
}
