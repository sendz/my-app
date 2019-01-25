import * as React from 'react';
import ChatBox from './components/ChatBox';

class App extends React.Component {
  public render() {
    const app: React.CSSProperties = {
      textAlign: 'unset'
    }

    const appTitle: React.CSSProperties = {
      fontSize: '1.5em',
      textAlign: 'center'
    }

    const appWindow: React.CSSProperties = {
      border: '1px solid silver',
      borderRadius: 3,
      height: '70vh',
      margin: 10,
      overflowY: 'scroll',
      padding: 10
    }

    const chatItem: React.CSSProperties = {
      background: '#4386C0',
      borderRadius: 2,
      display: 'inline-block',
      margin: 1,
      padding: 5
    }

    const chatItemReply: React.CSSProperties = {
      background: '#DDFFC0',
      borderRadius: 2,
      display: 'inline-block',
      margin: 1,
      padding: 5
    }

    const sentItem: React.CSSProperties = {
      textAlign: 'right'
    }

    const replyItem: React.CSSProperties = {
      textAlign: 'left'
    }

    return (
      <div style={app}>
        <div>
          <h3 style={appTitle}>This is Chat</h3>
          <div style={appWindow}>
            <div style={sentItem}>
              <span style={chatItem}>Hi</span>
            </div>
            <div style={replyItem}>
              <span style={chatItemReply}>Reply To: Hi</span>
            </div>
          </div>
        </div>
        <ChatBox />
      </div>
    );
  }
}

export default App;
