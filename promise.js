const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promis eOutput sesuai ketentuan readme
let bioskopMarah = 0;
let bioskopTidakMarah =0;
const promiseOutput = emosi =>{
  if (emosi === 'marah'){
    return promiseTheaterIXX().then((value) =>{
      value.forEach((array) => {
        if (array.hasil === 'marah'){
          bioskopMarah++;
        } else if(array.hasil === 'tidak marah'){
          bioskopTidakMarah++;
        }else{
          'error'
        }
      });
      return bioskopMarah
    });
  }
};

module.exports = {
  promiseOutput,
};
