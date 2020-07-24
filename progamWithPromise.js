// Program sederhana menggunakan promise 1
// Mengecek angka yang diinputkan user bilangan ganjil atau bilangan genap
// const countNum = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof num == "number") {
//         if (num % 2 == 0) {
//           resolve(`${num} Merupakan Bilangan Genap`);
//         } else {
//           reject(`${num} Merupakan Bilangan Ganjil`);
//         }
//       } else {
//         reject("Yang anda masukan bukan angka");
//       }
//     }, 2000);
//   });
// };

// countNum("alksalsj")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   Program 2
// Menentukan angka bilangan prima atau bukan sesuai dengan yang di inputkan user
const cekNum = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataNum = [2, 3, 5, 7, 9, 11, 13, 17, 19, 23, 29];
      let cek = dataNum.find((item) => {
        return item === num;
      });
      if (cek) {
        resolve(`${num} Merupakan Bilangan Prima`);
      } else {
        reject(`${num} Bukan Termasuk Bilangan Prima`);
      }
    }, 1000);
  });
};

cekNum(11)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
