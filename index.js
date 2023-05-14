// Convert today day to input format

const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

// Tomorow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// Convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value)
  
  if (end_date.value < start_date.value){
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
})

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value)

  if (end_date < start_date) {
    day.setDate(day.getDate() - 1);
    start_date.max = day.toISOString().split("T")[0];
  }
})

const bookingCalc = () => {
  // différence entre la date de début et de fin
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
    );
    
    // 1000 milisec * 60sec * 60min * 24h
    let diffDay = Math.ceil(diffTime / ( 1000 * 60 * 60 * 24 ))
    total.textContent = diffDay * nightPrice.textContent


  }

  start_date.addEventListener("change", bookingCalc)
  end_date.addEventListener("change", bookingCalc)