const { handle_finish_auction } = require("./handle_finish_auction.js");

//Esta función calcula el número de días, horas, minutos, segundos y 
//meses entre la fecha de cierre (targetDate) que se recibe por parámetros (close_date) y 
//la fecha del día actualen base al horario UTC.

const handle_date = (status, close_date) => {
   
    const targetDate = new Date(close_date); //se crea un nuevo objeto de tipo Date, pasandole por parámetros la fecha de cierre de la subasta.
    const currentDate = new Date(); //La fecha del día actual, es un objeto que tiene las propiedades Date, para obtener la fecha actual.
  
    // Se crea un timer que se va a actualizar cada 1 segundo.
    let timer = setInterval(() => {
      // Se calcula la diferencia entre la close date y la fecha actual.
      const timeDifference = targetDate - currentDate;
  
      // Este código se ejecuta al finalizar el tiempo de la subasta, una vez que la diferencia entre los tiempos sea 0, se ejecuta.
      if (timeDifference <= 0) { //debería ponerle sólo el igual?
        //Esto hace que se corte la función del set interval
        clearInterval(timer);
  
        // Creo un objeto para devolver el status actualizado y pasar las fechas exactas.
        const newState = {
          months,
          days,
          hours,
          minutes,
          seconds
        };
  
        // Log the new auction state to the console.
        console.log(newState);
  
        // Return the new auction state.
        return newState;
      }
  
      // Calculate the number of months between the two dates.
      const months = Math.floor((targetDate.getMonth() - currentDate.getMonth()) + (targetDate.getFullYear() - currentDate.getFullYear()) * 12);
  
      // Calculate the number of days between the two dates.
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
      // Calculate the number of hours between the two dates.
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
      // Calculate the number of minutes between the two dates.
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
      // Calculate the number of seconds between the two dates.
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      // Log the number of days, hours, minutes, seconds, and months since the auction started to the console.
      console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${months} months`);
  
      // Advance the current date by one second.
      currentDate.setSeconds(currentDate.getSeconds() + 1);
    }, 1000);
  };

// handle_date("Activa", "2023-08-25T20:51:00.000Z");

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

