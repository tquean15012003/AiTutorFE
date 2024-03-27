import { DarkModeBox } from "@/components/ColorMode";
import {
  Button,
  HStack,
  LightMode,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import useConversationList from "../hooks/useConversationList";

const ConversationListSidebar: React.FC = () => {
  const { data, isLoading } = useConversationList();

  const transformedData = useMemo(() => {
    if (!data) {
      return [];
    }
    return data;
  }, [data]);

  console.log(data);

  return (
    <DarkModeBox h="full">
      <Stack
        w="full"
        maxW="350px"
        minW={{ md: "300px", lg: "350px" }}
        h="full"
        px={4}
        justify="space-between"
        overflow="auto"
      >
        <Stack spacing={1} py={1} px={2}>
          {isLoading && (
            <>
              <Skeleton h="40px" w="full" />
              <Skeleton h="40px" w="full" />
              <Skeleton h="40px" w="full" />
            </>
          )}
          {transformedData.map((conversation) => (
            <HStack
              as={NavLink}
              to={`/${conversation.conversationId}`}
              _hover={{
                bg: `purple`,
              }}
              sx={{
                "&.active": {
                  bg: `purple`,
                },
              }}
              key={conversation.conversationId}
              px={2}
              role="group"
              borderRadius="md"
              cursor="pointer"
              transition="background 0.2s ease, color 0.2s ease"
              align="center"
            >
              <Text
                sx={{
                  ".active > &": {
                    color: "purple",
                  },
                }}
                mt={0.5}
              >
                {conversation.conversationTitle}
              </Text>
            </HStack>
          ))}
        </Stack>
        <LightMode>
          <Button colorScheme="brand.purple" as={Link} to="/create" w="full">
            Create Assistant
          </Button>
        </LightMode>
      </Stack>
    </DarkModeBox>
  );
};

export default ConversationListSidebar;
