import React from "react";
import activityService from "../lib/activityService";

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
            allActivities,
            minutes,
            seconds,
            isWorkTime,
            isTheEnd,
            setRest,
            setBreak,
            setAllActivities,
            setWorkTimer,
            setRestTimer,
            setLargeTimer,
            length,
            index
          }) => {
            return (
              <WrappedComponent
                rest={rest}
                largeBreak={largeBreak}
                allActivities={allActivities}
                minutes={minutes}
                seconds={seconds}
                isWorkTime={isWorkTime}
                isTheEnd={isTheEnd}
                setRest={setRest}
                setBreak={setBreak}
                setAllActivities={setAllActivities}
                setWorkTimer={setWorkTimer}
                setRestTimer={setRestTimer}
                setLargeTimer={setLargeTimer}
                length={length}
                index={index}
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
    rest: "",
    largeBreak: "",
    allActivities: [],
    index: 0,
    minutes: 0,
    seconds: 0,
    isWorkTime: true,
    isTheEnd: false,
    length: 0
  };

  // KEEP ALL THE TIME INFO

  setRest = (rest) => {
    this.setState({ rest: rest });
  };

  setBreak = (largeBreak) => {
    this.setState({ largeBreak: largeBreak });
  };

  setAllActivities = () => {
    activityService
      .showAll()
      .then((activities) => {
        const lengthArray = activities.length;
        this.setState({ allActivities: activities, length:lengthArray });
      })
      .catch((err) => console.log(err));
  };

  // TIMER LOGIC

  counterPlus = () => {
    console.log('PRIMERO', this.state.index, this.state.allActivities.length)
    this.setState(({ index }) => ({
      index: index + 1,
    }));
    console.log('SEGUNDO', this.state.index, this.state.allActivities.length)
  };

  setWorkTimer = () => {
    const { index, allActivities } = this.state;
    const activity = allActivities[index];
    const minutesAct = Number(activity.completion);
    this.setState({ minutes: minutesAct, isWorkTime:true });

    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.counterPlus();
  };

  setRestTimer = () => {

    const { rest } = this.state;
    this.setState({ isWorkTime: false, minutes: rest });

    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  };

  setLargeTimer = () => {
    const {largeBreak} = this.state;

    this.setState({minutes: largeBreak, isWorkTime: false, isRestTime: false, isTheEnd:true});

    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }


  render() {
    const {
      rest,
      largeBreak,
      allActivities,
      minutes,
      seconds,
      isWorkTime,
      isTheEnd,
      length,
      index
    } = this.state;

    const { setRest, setBreak, setAllActivities, setWorkTimer, setRestTimer, setLargeTimer } = this;

    return (
      <Provider
        value={{
          rest,
          largeBreak,
          allActivities,
          minutes,
          seconds,
          isWorkTime,
          isTheEnd,
          setRest,
          setBreak,
          setAllActivities,
          setWorkTimer,
          setRestTimer,
          setLargeTimer,
          length,
          index
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { actConsum, ActProvider };
