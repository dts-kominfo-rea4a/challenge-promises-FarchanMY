const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promis eOutput sesuai ketentuan readme
let bioskopMarah = 0;
let bioskopTidakMarah =0;
const promiseOutput = emosi =>{
  if (emosi === 'marah' || emosi=== 'tidak marah'){
    return promiseTheaterIXX().then((value) =>{
      value.forEach((array) => {
        if (array.hasil === 'marah'|| array.hasil === 'marah'){
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
