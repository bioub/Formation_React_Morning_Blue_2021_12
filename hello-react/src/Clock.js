// function Clock() {
//   let now = new Date();
//   setInterval(() => {
//     now = new Date();
//   }, 1000);
//   return <div className="Clock">{now.toLocaleTimeString()}</div>;
// }

import { useEffect, useState } from "react";

// import { Component } from "react";

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       now: new Date(),
//     };
//   }
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         now: new Date(),
//       });
//     }, 1000);
//   }
//   render() {
//     const { format = 'HH:mm:ss' } = this.props;
//     const { now } = this.state;

//     return <div className="Clock">{now.toLocaleTimeString()}</div>;
//   }
// }

function Clock({ format = "HH:mm:ss" }) {
  // console.log('render Clock');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000)
  }, []);

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}

export default Clock;
