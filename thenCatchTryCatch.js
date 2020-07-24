const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDAy = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
      let cek = dataDAy.find((item) => {
        return item.toLocaleLowerCase() === day.toLocaleLowerCase();
      });

      if (cek) {
        let result = cek;
        resolve(result);
      } else {
        reject("Hari ini bukan hari kerja");
      }
    }, 3000);
  });
};

// cekHariKerja("sabtu")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getData = async (day) => {
  console.log("Ini ke 1");
  // console.log(cekHariKerja("Senin"));
  try {
    result = await cekHariKerja("sabtu");
    console.log(result);
    // Baris program dibawahnya tidak akan di eksekusi, sebelum baris ini di eksekusi
  } catch (error) {
    console.log(error);
  }
  // console.log(result);
  console.log("Ini ke 2");
};

getData();
