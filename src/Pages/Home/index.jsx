import React, { useState } from "react";
import { Auth } from "../";
import { DialogsList, Dialog } from "../../Modules";
import { Message } from "../../Components";
import testAvatar from "../../assets/img/testAvatar.png";

import styled from "styled-components";
const StyledHome = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Home = () => {
  const [isLogged, setisLogged] = useState(true);

  return !isLogged ? (
    <Auth />
  ) : (
    <StyledHome>
      <DialogsList />
      <Dialog>
        <Message text ='Hello from React.JS! Welcome to the incredible world of Web Development! Hello from React.JS! Welcome to the incredible world of Web Development! Hello from React.JS! Welcome to the incredible world of Web Development!' user = {user}/>
        <Message isTyping={true} user = {user}/>
        <Message isMe text ='Hello from other user! Welcome to the incredible world of Web Development!' user = {user}/>
        <Message text ='Hello!' user = {user} attachments={[
          {url: 'https://source.unsplash.com/250x250/?random=1&water,nature', filename: 'picture.jpg'},
          {url: 'https://source.unsplash.com/250x250/?random=2&water,nature', filename: 'picture.jpg'},
          {url: 'https://source.unsplash.com/250x250/?random=3&water,nature', filename: 'picture.jpg'},
        ]}/>
        <Message isMe user = {user} attachments={[
          {url: 'https://source.unsplash.com/250x250/?random=1&water,nature', filename: 'picture.jpg'},
          {url: 'https://source.unsplash.com/250x250/?random=2&water,nature', filename: 'picture.jpg'},
          {url: 'https://source.unsplash.com/250x250/?random=3&water,nature', filename: 'picture.jpg'},
        ]}/>
        <Message user = {user} attachments={[
          {url: 'https://source.unsplash.com/250x250/?random=1&water,nature', filename: 'picture.jpg'}
        ]}/>
        <Message isMe user = {user} attachments={[
          {url: 'https://source.unsplash.com/250x250/?random=1&water,nature', filename: 'picture.jpg'}
        ]}/>
        <Message text ='Hello from other user!' user = {user} attachments={[
          {url: 'https://source.unsplash.com/250x250/?random=1&water,nature', filename: 'picture.jpg'},
          {url: 'https://source.unsplash.com/250x250/?random=2&water,nature', filename: 'picture.jpg'},
        ]}/>
        <Message text ='Hello from other user! Welcome to the incredible world of Web Development!' user = {user} attachments={[
          {url: 'https://source.unsplash.com/250x250/?random=1&water,nature', filename: 'picture.jpg'},
        ]}/>
      </Dialog>
    </StyledHome>
  );
};

export default Home;

const user = {
  fullname: "Тарас Шевченко",
  avatar: testAvatar,
};
