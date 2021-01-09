import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Player = ({ className }) => (
  <ReactPlayer
    url={'https://www.youtube.com/watch?v=MGsZU10pJAw&feature=emb_title'}
    className={className}
    playing
    volume={0.5}
    controls
    loop
    width="90%"
    height="90%"
    muted
  />
);

const AbsolutelyPositionedPlayer = styled(Player)`
  position: absolute;
  top: 2rem;
  left: 5%;
`;

const RelativePositionWrapper = styled.div`
  position: relative;
  padding-top: 50%;
  margin-bottom: 2rem;
  max-height="100vh"
`;

const ResponsiveStyledPlayer = () => (
  <RelativePositionWrapper>
    <AbsolutelyPositionedPlayer />
  </RelativePositionWrapper>
);

export default ResponsiveStyledPlayer;