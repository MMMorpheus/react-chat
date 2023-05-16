import styled, {css} from 'styled-components';
import { Play, Pause } from '@styled-icons/boxicons-regular';
import { IsMeProp } from 'types/styledProps';

import { Bubble } from 'components/Message/style';

export const AudioBubble = styled(Bubble)`
  width: 300px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const AudioProgressBar = styled.div<{$width: string}>`
  width: ${props => props.$width || "0%"};
  background-color: #418fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: width 0.5s ease;
`;


export const AudioControls = styled.button<IsMeProp>`
  width: 40px;
  height: 40px;
  background-color: #0f3997;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(51, 116, 255, 0.2);
  z-index: 1;
  ${(props) =>
    props.$isMe &&
    css`
      background-color: #fff;
      border: 0.3px solid #b7b7b7;
    `}
`;

export const PlayBtn = styled(Play)<IsMeProp>`
  width: 30px;
  padding-left: 3px;
  color: #fff;
  ${(props) =>
    props.$isMe &&
    css`
      color: #0f3997;
    `}
`;
export const PauseBtn = styled(Pause)<IsMeProp>`
  width: 30px;
  color: #fff;
  ${(props) =>
    props.$isMe &&
    css`
      color: #0f3997;
    `}
`;

export const AudioWaves = styled.div`
  z-index: 1;
`;

export const AudioDuration = styled.span`
  display: block;
  font-size: 14px;
  opacity: 0.8;
`;