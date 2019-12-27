import React, { useEffect, useState, useImperativeHandle } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './Footer';
import { ClipLoader } from "react-spinners";
// import {Animated} from "react-animated-css";

// import publicIp from "public-ip";


function randomDate(start, end) {
    // let IPAddr = (async () => {
    //     return await publicIp.v4(); // for public ip v4
    // })();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
  
  
let deathDate = randomDate(new Date(2020, 0, 1), new Date(2090, 12, 30)).toISOString().substring(0, 10);

function CountdownTimer() {

    const [buttonclicked, setButtonClicked] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

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

    function handleClick(e) {
        e.preventDefault();
        setButtonClicked(true)
        setLoading(true)  
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    // if(true){
        // return(
        //     <div>     
        //     <Animated animationIn="fadeIn" animationInDuration={2500} animationOut="fadeOut" animationOutDuration={2500} isVisible={this.state.open_close}>
        //         <img id="loading" style= {{'width':window.screen.width,'height':window.screen.height}} alt="Loading" />
        //     </Animated>
        //     </div>
        // );
    // }
    // else{
        return (
            <div className="container">
              <h1>If you could find out exactly when you're going to die... would you want to know?</h1>
              <ClipLoader size={200} color={"#8C0204"} loading={loading}/>
                {buttonclicked && !loading && <div id="time">{timerComponents.length ? timerComponents : <span>GoodBye!</span>}</div>}  
                {!buttonclicked && <button className="bouton18" onClick={handleClick}>Hour of your Death</button>}          
              <Footer/>
            </div>      
        );
    // }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<CountdownTimer />, rootElement);
