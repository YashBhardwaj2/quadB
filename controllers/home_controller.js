const axios = require('axios');
const Crypto = require('../models/Crypto');

module.exports.home = async function(req,res){
    await Crypto.deleteMany({})
        .then((result)=>{
            console.log(`delete count: ${result.deletedCount}`);
        })
        .catch((error)=>{
            console.log('error while deleting',error);
        });
    let data = [];
    await axios.get('https://api.wazirx.com/api/v2/tickers',{
        params:{
            _limit:10
        }
    })
        .then(response=>{
            // console.log(response.data);
            let iter=0;
            for(let key in response.data){
                iter+=1;
                const ob = response.data[key];
                data.push(ob);
                if(iter==10){
                    break;
                }
            }
        })
        .catch(error=>{
            console.log('Error',error);
        })
    // console.log('RESPONSE',data);
    const savePromises = [];
    data.forEach((obj) =>{
        const newObj = new Crypto(obj);
        savePromises.push(newObj.save());
    });
    Promise.all(savePromises)
        .then(()=>{
            console.log('Objects saved to db');
        })
        .catch((error)=>{
            console.error('Error saving objs',error);
        })
    res.render('home',{
        currency: data,
    });
}