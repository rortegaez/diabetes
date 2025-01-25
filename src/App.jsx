import { Header } from "./components/element/Header";
import { SearchFood } from "./components/element/SearchFood";
import { RatioProvider } from "./components/hooks/RatioContext";

function App() {
  return (
    <RatioProvider>
      <Header />
      <SearchFood />
    </RatioProvider>
  );
}

export default App;
