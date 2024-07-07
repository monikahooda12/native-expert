// import axios from "axios";
// import { API_BASE_URL } from "../constant/Url";

// // axios.interceptors.request.use((config)=>{
// //     console.log("on")
// //     return config
// // })
// // axios.interceptors.response.use((response)=>{
// //     console.log("off")
// //     return response
// // })
// const _Fetch = (method, path, body, header) => {
//   return new Promise((resolve, reject) => {
//     return _handleMethod(method, path, body, header).then((e) => {
//       console.log(e.status)
//       if (e.status == 200) {
//         // console.log(e.data.categories)
//         resolve(e.data)
//       }
//       else {
//         reject(e.data)
//       }
//     }).catch((err) => {
//       reject(err)
//     })
//   })
// }

// function _handleMethod(method, path, body, header) {
//   // console.log(body.data)
//   if (method == "GET") {
//     return axios({
//       method: "GET",
//       url: '${ API_BASE_URL }${ path }',
//       // data:body,
//       headers: changeHeaders(header),
//       // redirect: 'follow'

//     })
//   }
//   else {
//     return axios({
//       method: method,
//       url: '${ API_BASE_URL }${ path }',
//       data: body.data,
//       headers: changeHeaders(header),
//     })
//   }
// }

// function changeHeaders(header) {
//   return {
//     ...header,
//   }
// }
// export default _Fetch

export const httpRequest = async data => {
  let controller = new AbortController();
  let signal = controller.signal;
  setTimeout(() => controller.abort(), 20000); // abort after 20 seconds

  const {url, params, method, alert} = data;
  const token = await getLocalData(LOCAL_DB.TOKEN);
  const apiPath = API.BASE_URL + API.VERSION + url;
  let response;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  try {
    if (method == 'POST' || method == 'PUT' || method == 'DELETE') {
      response = await fetch(apiPath, {
        method,
        headers,
        body: JSON.stringify(params),
        signal,
      });
    } else if (method == 'GET') {
      const payload = new URLSearchParams(params);
      console.log(payload);
      response = await fetch(apiPath + '?' + payload, {
        method,
        headers,
        signal,
      });
    }

    console.log(response.status);

    if (response.status == 401) {
      errorToast('Please Login again to Continue');
      await deleteAllLocalData();
      return NavigationService.navigate('Splash');
    }

    const responseObj = await response.json();
    console.log(JSON.stringify(responseObj, null, 2));

    if (!response.ok) {
      errorToast(responseObj.message);
      throw new Error(responseObj.message);
    } else {
      if (alert) successToast(responseObj.message);
    }
    return responseObj;
  } catch (error) {
    //Gaurav - Screen implementation on Network Error.
    errorToast(error.message);
    throw new Error(error.message);
  }
};
