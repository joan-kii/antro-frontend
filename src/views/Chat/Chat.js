import React, { useEffect, useState, useContext, useRef } from 'react';
import { io } from 'socket.io-client';
import { useForm, FormProvider } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { TextArea, InputError, Button } from '@components';
import { Context } from '@utils';
import { ChatComponent, ChatField, ChatMessage } from './Chat.styled';

const messageRules = {
  minLength: {
    value: 1,
    message: 'Message has at least 1 character.'
  },
  maxLength: {
    value: 140,
    message: 'Message has 140 characters max.'
  },
  required: 'Message is required.'
};

const Chat = () => {

  const { currentUser } = useContext(Context);

  const [socket, setSocket] = useState(null);
  const [socketUser, setSocketUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const lastMessage = useRef(null);
 
  const methods = useForm();

  useEffect(() => {
    connectSocket();
    return () => {
      setSocket(null);
    };
  }, [])

  useEffect(() => {
    setSocketUser({
      username: currentUser?.username,
      pic: currentUser?.profilePicture
    });
  }, [currentUser])

  useEffect(() => {
    socket?.emit('newUser', socketUser);
    // eslint-disable-next-line
  }, [socketUser]);

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const connectSocket = () => {
    setSocket(io(process.env.REACT_APP_API_USER_FEED));
  };

  const handleMessage = ({ message }) => {
    methods.reset();
    const emitter = { socketUser, message };
    socket?.emit('message', emitter);
  };

  const scrollToBottom = () => {
    lastMessage.current.scrollIntoView({ behavior: 'smooth'});
  };

  const displayMessage = (payload) => {

    const classMessage = 
      payload.socketUser.username === currentUser?.username ? 'user' : '';

    return (
      <ChatMessage className={classMessage}>
        <img alt='user' src={payload.socketUser.pic} />
        <div>
          <h4>{payload.socketUser.username}</h4>
          <p>{payload.message}</p>
        </div>
      </ChatMessage>
    )
  }; 

  const updateMessages = (payload) => {
    const newMessagesArray = [...messages, displayMessage(payload)];
    setMessages(newMessagesArray);
  };
  
  socket?.on('message', (payload) => updateMessages(payload));
  socket?.on('greeting', (payload) => updateMessages(payload));
  socket?.on('hello', (payload) => updateMessages(payload));
  socket?.on('goodbye', (payload) => updateMessages(payload));

  return (
    <ChatComponent>
      <ChatField>
        {messages?.map((message, key) => <div key={key}>{message}</div>)}
        <div ref={lastMessage} />
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(handleMessage)}>
            <TextArea 
              rows={1}
              inputName='message' 
              placeholder='Say something'
              rules={messageRules}
            />
            <ErrorMessage 
              errors={methods.formState.errors}
              name='message' 
              render={({ message }) => <InputError error={message} />}
            />
            <Button width='50%' type='submit' textButton='Send' />
          </form>
        </FormProvider>
      </ChatField>
    </ChatComponent>
  );
};

export { Chat };
