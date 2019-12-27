import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './Footer';
// import publicIp from "public-ip";


function randomDate(start, end) {
    // let IPAddr = (async () => {
    //     return await publicIp.v4(); // for public ip v4
    // })();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
  
  
let deathDate = randomDate(new Date(2020, 0, 1), new Date(2090, 12, 30)).toISOString().substring(0, 10);

function CountdownTimer() {

    const calculateTimeLeft = () => {
    // const difference = +new Date("2020-01-01") - +new Date(); 
    const difference = +new Date(deathDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        years: Math.floor(difference / (1000 * 60 * 60 * 24 * 12 * 365)),
        months: Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={i}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="container">
      <h1>IF YOU COULD FIND OUT EXACTLY WHEN YOU'RE GOING TO DIE... WOULD YOU WANT TO KNOW?</h1>
      <div id="time">{timerComponents.length ? timerComponents : <span>GoodBye!</span>}</div>  
      <Footer/>
    </div>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CountdownTimer />, rootElement);
