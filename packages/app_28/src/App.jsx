import { Box, Center, Stack, Flex, Spacer, Heading, Text, Button } from '@chakra-ui/react';

const App = () => {
  return (
    <>
      <Heading as="h1" size="lg">
        Box
      </Heading>
      <Box backgroundColor="orange" w="200px" h="50px" color="white" p="4">
        This is the Box(div tag)
      </Box>
      <Box backgroundColor="orange.600" w="200px" h="50px" color="white" as="section" p="4" mt="4">
        This is the Box(section tag)
      </Box>
      <Box backgroundColor="starbucks.500" w="200px" h="50px" color="white" as="section">
        Custom Theme
      </Box>

      <Heading as="h1" size="lg">
        Center
      </Heading>
      <Box>
        <Center bgColor="orange.500" color="white" p="4">
          This is the Box
        </Center>
        <Box bgColor="green.500" color="white" p="4" mt="4">
          This is the Box
        </Box>
      </Box>

      <Heading as="h1" size="lg">
        Stack
      </Heading>
      <Stack direction="row">
        <Box bgColor="orange.500" color="white" p="4">
          This is the Box
        </Box>
        <Box bgColor="green.500" color="white" p="4">
          This is the Box
        </Box>
      </Stack>

      <Heading as="h1" size="lg">
        Flex
      </Heading>
      <Flex>
        <Box bgColor="orange.500" color="white" p="4">
          This is the Box
        </Box>
        <Spacer />
        <Box bgColor="green.500" color="white" p="4">
          This is the Box
        </Box>
        <Spacer />
        <Box bgColor="blue.500" color="white" p="4">
          This is the wider Box
        </Box>
      </Flex>
      <Flex justify="flex-end">
        <Box bgColor="orange.500" color="white" p="4">
          This is the Box
        </Box>
        <Box bgColor="green.500" color="white" p="4">
          This is the Box
        </Box>
        <Box bgColor="blue.500" color="white" p="4">
          This is the wider Box
        </Box>
      </Flex>

      <Heading as="h1" size="lg">
        Text
      </Heading>
      <Text fontSize="2xl">This is first paragraph</Text>
      <Text fontWeight="bold">This is second paragraph</Text>
      <Text fontStyle="italic">This is third paragraph</Text>

      <Heading as="h1" size="lg">
        Button
      </Heading>
      <Box>
        <Button>ボタン</Button>
        <Button bgColor="red.500">ボタン</Button>
        <Button bgColor="red.500" variant="solid">
          ボタン
        </Button>
        <Button bgColor="red.500" variant="outline">
          ボタン
        </Button>
        <Button bgColor="red.500" variant="ghost">
          ボタン
        </Button>
        <Button bgColor="red.500" variant="link">
          ボタン
        </Button>
      </Box>
    </>
  );
};

export default App;
