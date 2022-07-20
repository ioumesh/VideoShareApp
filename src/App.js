import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 5;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode);
  };
  useEffect(() => {
    const themeValue = localStorage.getItem("theme");
    if (themeValue) {
      const booleanValue = themeValue.toLowerCase() === "true";
      setDarkMode(booleanValue);
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Menu changeMode={changeMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
