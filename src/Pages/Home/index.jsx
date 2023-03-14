import React, { useState } from "react";
import { Message } from "@/Components";
import { SideBar, ChatRoom } from "@/Modules";
import { Auth } from "@/Pages";

import testAvatar from "@/assets/img/testAvatar.png";
import testAudio from "@/assets/audio/sample.mp3";

import styled from "styled-components";
const StyledHome = styled.section`
  margin: 0 auto;
  width: 1140px;
  height: 100%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.04204);
  display: flex;
`;

const Home = () => {
  const [isLogged, setisLogged] = useState(true);

  return !isLogged ? (
    <Auth />
  ) : (
    <StyledHome>
      <SideBar />
      <ChatRoom>
        <Message created_at={new Date(2023,2,5,10)} text ='Hello from React.JS! Welcome to the incredible world of Web Development! Hello from React.JS! Welcome to the incredible world of Web Development! Hello from React.JS! Welcome to the incredible world of Web Development!' user = {user} audio={null}/>
        <Message created_at={new Date(2023,2,5,10)} isTyping={true} user = {user}/>
        <Message created_at={new Date(2023,2,5,10)} isMe text ='Hello from other user! Welcome to the incredible world of Web Development!' user = {user3} audio={null}/>
        <Message created_at={new Date(2023,2,5,10)} text ='Hello!' user = {user2} attachments={[
          {url: 'https://source.unsplash.com/250x250/?random=1&water,nature', filename: 'picture.jpg'},
          {url: 'https://source.unsplash.com/250x250/?random=2&water,nature', filename: 'picture.jpg'},
          {url: 'https://source.unsplash.com/250x250/?random=3&water,nature', filename: 'picture.jpg'},
        ]} audio={null}/>
       
        <Message created_at={new Date(2023,2,5,10)} user = {user} attachments={[
          {url: 'https://source.unsplash.com/250x250/?random=1&water,nature', filename: 'picture.jpg'}
        ]} audio={null}/> 
        <Message created_at={new Date(2023,2,5,10)} user = {user} attachments={[]} audio={testAudio}/>
        <Message created_at={new Date(2023,2,5,10)} isMe user = {user} attachments={[]} audio={testAudio}/>
      </ChatRoom>
    </StyledHome>
  );
};

export default Home;

const user = {
  fullName: "Тарас Шевченко",
  avatar: testAvatar,
  hash: "a1260058d7138fe768cae84670845002"
};
const user2 = {
  fullName: "Леся Українка",
  avatar: null,
  hash: "76a196e90398cbbc37008b64dd033f8d"
};
const user3 = {
  fullName: "Лариса Косач",
  avatar: null,
  hash: "1d7e1f1f3495c43fc4ed0601a96e7749"
};
