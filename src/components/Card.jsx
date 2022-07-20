import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 250px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 140px;
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  background-color: #999;
  border-radius: 50%;
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Card = () => {
  return (
    <Container>
      <Image src="https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkM8MBKqkPTSH7iKWsn8FzmcSEDQ" />
      <Details>
        <ChannelImage src="https://yt3.ggpht.com/vJEsALWnQIwPZ2oaVbFWPu1n4L0CDkHpAdGJ-KBPFsxM9hsMsvExFK1mnCGUrMzfC67XPVThmQ=s88-c-k-c0x00ffffff-no-rj" />
        <Texts>
          <Title>Kesariya - Brahmāstra </Title>
          <ChannelName>Sony Music India</ChannelName>
          <Info>660,908 views • 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;
