import React from 'react';
import styled from "styled-components";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {useSelector} from "react-redux";
import { selectRoomId } from "../features/appSlice";

function Chat() {
  const roomId = useSelector(selectRoomId)
  return <ChatContainer>
      <h1>I am the chat screen</h1>
        <>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room-name</strong></h4>
                    <StarBorderOutlinedIcon />
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon />
                    </p>
                </HeaderRight>

            </Header>
            <ChatMessages></ChatMessages>

            <ChatInput 
                channelId={roomId}
                
            />
        </>
  </ChatContainer>;
}

export default Chat;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
      display: flex;
      text-transform: lowercase;
      margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
      margin-left: 10px;
      font-size: 10px;
  }
`;
const HeaderRight = styled.div`
  > p {
      display: flex;
      align-items: center;
      font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
      margin-right: 5px !important;
      font-size: 16px;
  }
`;


const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
