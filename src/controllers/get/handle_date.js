const handle_date = (close_date) => {
    const targetDate = new Date(close_date);
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        return "Countdown expired!";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    console.log(`${days} ${hours} : ${minutes} : ${seconds} `);
    return `${days} ${hours} : ${minutes} : ${seconds} `;
};

handle_date("2023-08-18T03:52:00.000Z");

module.exports = {
    handle_date
};


// const handle_date = (close_date) => {
//     const currentDate = new Date(); // Crear un objeto Date con la fecha actual

//     const getActualYear = currentDate.getUTCFullYear();
//     const getActualMonth = currentDate.getUTCMonth();
//     const getActualDay = currentDate.getUTCDay();
//     const getActualHour = currentDate.getUTCHours();
//     const getActualMinutes = currentDate.getUTCMinutes();
//     const getActualSeconds = currentDate.getUTCSeconds();
//     console.log(getActualYear);
//     console.log(getActualMonth);
//     console.log(getActualDay);
//     console.log(getActualHour);
//     console.log(getActualMinutes);
//     console.log(getActualSeconds);

//     let year = close_date.slice(0, 4);
//     let month = close_date.slice(5, 7);
//     let day = close_date.slice(8, 10);
//     let hour = close_date.slice(11, 13);
//     let minutes = close_date.slice(14, 16);
//     let seconds = close_date.slice(17, 19);
//     console.log("--------");
//     console.log(year);
//         console.log(month);
//         console.log(day);
//         console.log(hour);
//         console.log(minutes);
//         console.log(seconds);

//     let timer = setInterval(()=>{

//         if(month !== 0) month = Number(month) - getActualMonth;
//         if(day !== 0) day = Number(day) - getActualDay;
//         if(hour !== 0) hour = Number(hour) - getActualHour;
//         if(minutes !== 0) minutes = Number(minutes) - getActualMinutes;
//         if(seconds !== 0) seconds =  Number(seconds) - getActualSeconds;
//         console.log("--------");
//         console.log(year);
//         console.log(month);
//         console.log(day);
//         console.log(hour);
//         console.log(minutes);
//         console.log(seconds);

//         if(month === 0 && day === 0 && hour === 0 && minutes === 0 && seconds === 0){
//             clearInterval(timer);
//         }
//     },1000);


//     console.log(typeof year);
//     console.log(typeof getActualYear);
//     console.log(currentDate);
// }

// handle_date("2023-28-08T23:55:00.000Z");