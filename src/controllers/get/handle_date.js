//Esta función calcula el número de días, horas, minutos, segundos y
//meses entre la fecha de cierre (targetDate) que se recibe por parámetros (close_date) y
//la fecha del día actualen base al horario UTC.

const handle_date = (auction_id, close_date, types) => {
  const targetDate = new Date(close_date);
  const currentDate = new Date();

  if (targetDate <= currentDate) {
    throw Error(
      "No se puede establecer una fecha que ya pasó o que es actual. Por favor introduzca una fecha a futuro."
    );
  }

  // Se crea un timer que se va a actualizar cada 1 segundo.
  let timer = setInterval( async () => {
    // Se calcula la diferencia entre la close date y la fecha actual.
    const timeDifference = targetDate - currentDate;

    // Este código se ejecuta al finalizar el tiempo de la subasta, una vez que la diferencia entre los tiempos sea 0, se ejecuta.

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    const date = {
      days,
      hours,
      minutes,
      seconds
    };

    if (timeDifference <= 0) {
      // Esto hace que se corte la función del setInterval
      clearInterval(timer);

    }

    // Advance the current date by one second.
    currentDate.setSeconds(currentDate.getSeconds() + 1);

    // console.log(
    //   `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    // );

    return date;
  }, 1000);

};

// handle_date("2023-09-01T23:29:00.000Z", false);

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
