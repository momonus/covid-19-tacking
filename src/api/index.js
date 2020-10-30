import axios from 'axios';

const urlc='https://covid19.mathdro.id/api';

export const fetchData =async (country)=>{
    let changeableUrl=url;
    if(country){
        changeableUrl=`${url}/countries/${country}`
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} =await axios.get(changeableUrl);
        
        return {confirmed,recovered,deaths,lastUpdate};
        // const modifiedData={
        //     confirmed:data.confirmed,
        //     recovered:data.recovered,
        //     deaths:data.deaths,
        //     lastUpdate:data.lastUpdate
        // }
        // return modifiedData;
    }
    catch(error){
        console.log(error)
    
    }
}