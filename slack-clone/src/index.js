import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import styled from "styled-components";
import Chat from "./components/Chat";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Chat />
    </Routes>
  </BrowserRouter>,
  rootElement
);

const AppBody = styled.div`
  
`;

