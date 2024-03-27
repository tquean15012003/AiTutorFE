import { Center, HStack, Hide, Spinner } from "@chakra-ui/react";
import MainLayout, { MainLayoutContent } from "./pages/mainLayout";
import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
// import SearchPage from '@/pages/SearchPage/SeachPage'
import { Suspense } from "react";
import React from "react";
import ConversationListSidebar from "./pages/chat/components/ConversationListSidebar";
const ChatPage = React.lazy(() => import("./pages/chat/ChatPage"));

const FallbackLoader = () => {
  return (
    <Center w="full" h="100dvh">
      <Spinner size="lg" color="brand.purple.500" />
    </Center>
  );
};

const HomeLayOut = () => {
  return (
    <MainLayout>
      <MainLayoutContent maxW="none" p={0} h="full">
        <HStack
          h="full"
          align="flex-start"
          flexGrow={1}
          spacing={2}
          pb={{ base: 3, sm: 8 }}
          pr={{ base: 3, sm: 8 }}
          pl={{ base: 3, sm: 8, md: 0 }}
        >
          <Hide below="md">
            <ConversationListSidebar />
          </Hide>
          <Outlet />
        </HStack>
      </MainLayoutContent>
    </MainLayout>
  );
};

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayOut />}>
        <Route
          index
          element={
            <Suspense fallback={<FallbackLoader />}>
              <ChatPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
