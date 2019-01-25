import * as React from 'react';

interface IProps {
  sendMessage: (message: string) => void;
}

interface IState {
  message?: string;
}

export default class ChatBox extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      message: ''
    }
  }

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
          onChange={this.setMessage}
          style={messageBoxStyle}
          value={this.state.message}
        />
        <button
          onClick={this.sendMessage}
          style={sendButtonStyle}
        >
          Send
        </button>
      </div>
    );
  }

  private clear = (): void => {
    this.setState({ message: '' });
  }

  private setMessage = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ message: event!.target!.value! });
  }

  private sendMessage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    this.props.sendMessage(this.state.message!);
    this.clear();
  }
}