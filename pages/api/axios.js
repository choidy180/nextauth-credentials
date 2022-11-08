const { default: axios } = require("axios");

axios.get('https://dev-nft.storicha.in/api/cashseries?series_idx=5737')
    .then(res => {
        console.log(res);
    })