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

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  color: #fff;
  height: 100vh;
  font-size: 14px;
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
`;
const Menu = () => {
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
        <Items>
          <VideoLibraryIcon />
          Library
        </Items>
        <Items>
          <HistoryIcon />
          History
        </Items>
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
        <Items>
          <SettingsBrightnessIcon />
          Light Mode
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Menu;
