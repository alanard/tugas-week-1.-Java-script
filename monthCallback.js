const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "Marh",
      "April",
      "May",
      "Juni",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found."));
    }
  }, 1000);
};

const newMonth = (error, month) => {
  if (error == null) {
    view = month.map((item) => {
      console.log(item);
    });
  } else {
    console.log(error);
  }
};

getMonth(newMonth);
