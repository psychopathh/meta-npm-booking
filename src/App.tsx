/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { QueryClient, QueryClientProvider } from "react-query";
import StageScene from "./components/blocks/StageScene";
import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const App = (props: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StageScene allDataJson={props.json} />
    </QueryClientProvider>
  );
};

export default App;
