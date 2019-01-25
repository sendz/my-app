import * as React from 'react';

export default class ChatBox extends React.Component {
  
  public render() {
    const containerStyle: React.CSSProperties = {
      bottom: 30,
      display: 'flex',
      position: 'absolute',
      width: '100%'
    };
    const messageBoxStyle: React.CSSProperties = {
      height: '10vh',
      marginLeft: '2%',
      marginRight: '2%',
      width: '88%'
    };
    const sendButtonStyle: React.CSSProperties = {
      height: '10vh',
      marginRight: '2%',
      width: '6%'
    };
    return (
      <div style={containerStyle}>
        <textarea
          style={messageBoxStyle}
        />
        <button
          style={sendButtonStyle}
        >
          Send
        </button>
      </div>
    );
  }
}