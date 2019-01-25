import * as React from 'react';
import ChatBox from './components/ChatBox';

export interface IMessage {
  message?: string;
  type?: 'sent' | 'reply';
}

interface IState {
  messages?: IMessage[];
}

interface IMethods {
  sendMessage: (message: string) => void;
}

export default class App extends React.Component<{}, IState> implements IMethods {
  constructor({ }) {
    super({});
    this.state = {
      messages: []
    }
  }

  public sendMessage = (message: string): void => {
    this.setState({ messages: [...this.state.messages!, { message, type: 'sent' }] });
    setTimeout(() => this.replyMessage(message), 1000);
  }

  public replyMessage = (message: string): void => { // This is dummy method
    this.setState({ messages: [...this.state.messages!, { message: `Reply to: ${message}`, type: 'reply' }] });
  }

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
        <h3 style={appTitle}>This is Chat</h3>
        <div style={appWindow}>
          {
            this.state.messages! ?
              this.state.messages!.map((message, index) =>
                <div style={message.type === 'sent' ? sentItem : replyItem} key={index}>
                  <span style={message.type === 'reply' ? chatItemReply : chatItem}>{message.message!}</span>
                </div>
              )
              : null
          }
        </div>
        <ChatBox
          sendMessage={this.sendMessage}
        />
      </div>
    );
  }
}
