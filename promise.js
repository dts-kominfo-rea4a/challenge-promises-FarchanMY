const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promis eOutput sesuai ketentuan readme
let bioskopMarah = 1;
let bioskopTidakMarah = -1;
const promiseOutput = (emosi1,emosi2) =>{
  if (emosi1 === 'marah' || emosi2=== 'tidak marah'){
    return promiseTheaterIXX().then((value) =>{
      value.forEach((array) => {
        if (array.hasil === 'marah'|| array.hasil === 'tidak marah'){
         bioskopMarah++ && bioskopTidakMarah++;
        } else{
          'error'
        }
      });
      console.log(` ini yang marah ; ${bioskopMarah}`)
      console.log(` ini yang tidak marah ; ${bioskopTidakMarah}`)
    });
  }
};

module.exports = {
  promiseOutput,
};
