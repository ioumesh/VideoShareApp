import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 5;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div``;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu changeMode={changeMode} />
        <Main>
          <Navbar />
          <Wrapper>Video Card</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
