import React from "react";
import styled from "styled-components";
import Logo from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import FeedIcon from "@mui/icons-material/Feed";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Button } from "../utils/Button";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 14px;
  overflow-x: hidden;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 25px;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft}; ;
`;
const Login = styled.div``;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ changeMode, darkMode }) => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Img src={Logo} />
          Youtube
        </LogoWrapper>
        <Items>
          <HomeIcon />
          Home
        </Items>
        <Items>
          <ExploreIcon />
          Explore
        </Items>
        <Items>
          <SubscriptionsIcon />
          Subscription
        </Items>
        <Hr />
        <Items>
          <VideoLibraryIcon />
          Library
        </Items>
        <Items>
          <HistoryIcon />
          History
        </Items>
        <Hr />
        <Login>
          Sign in to Like videos, comment and subscribe
          <Button>
            <AccountCircleOutlined />
            SIGN IN
          </Button>
        </Login>
        <Hr />
        <Title>Best of Youtube</Title>
        <Items>
          <LibraryMusicIcon />
          Music
        </Items>
        <Items>
          <SportsBasketballIcon />
          Sports
        </Items>
        <Items>
          <ExploreIcon />
          Explore
        </Items>
        <Items>
          <SportsEsportsIcon />
          Gaming
        </Items>
        <Items>
          <MovieCreationIcon />
          Movie
        </Items>
        <Items>
          <FeedIcon />
          News
        </Items>
        <Items>
          <LiveTvIcon />
          Live
        </Items>
        <Hr />
        <Items>
          <SettingsIcon />
          Setting
        </Items>
        <Items>
          <FlagIcon />
          Report
        </Items>
        <Items>
          <HelpIcon />
          Help
        </Items>
        <Items onClick={changeMode}>
          <SettingsBrightnessIcon />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Menu;
