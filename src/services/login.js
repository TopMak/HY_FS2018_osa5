import axios from 'axios'
const baseUrl = '/api/login'

const loginUser = async (loginCreds) => {

    const response = await axios.post(baseUrl, loginCreds)
    //console.log(response.data);
    return response.data

}

export default { loginUser }


// DevDell86
// DeeBigDeeYo86

// KentKey66
// Keekeeyikes66!


//Roro02
//RoroYoyoHoho02#!

//TepTest66
//TepinHuonoSalasana123#

//Poistettava testikäyttäjä, löytyy alta ja/tai Postmanista
// KK78
// superSecret

// {
// 	"username": "KK78",
// 	"name": "Kent Keyboard",
// 	"password": "superSecret",
// 	"isAdult": "true"
// }