import React from "react";
const { Consumer, Provider } = React.createContext();

// --> HOC to create Consumer <-- //

const actConsum = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({
            rest,
            largeBreak,
            setRest,
            setBreak
          }) => {
            return (
              <WrappedComponent
                rest={rest}
                largeBreak={largeBreak}
                setRest={setRest}
                setBreak={setBreak}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// --> Provider <-- //

class ActProvider extends React.Component {
  state = {
    rest: '',
    largeBreak:''
  };

  setRest = (rest) => {
      this.setState({rest:rest});
  };

  setBreak = (largeBreak) => {
      this.setState({largeBreak:largeBreak});
  };

  render() {
    const { rest, largeBreak} = this.state;
    const {setRest, setBreak} = this;

    return (
      <Provider
        value={{
            rest,
            largeBreak,
            setRest,
            setBreak
          
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { actConsum, ActProvider };