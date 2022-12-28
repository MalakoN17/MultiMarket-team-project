import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
const persist = JSON.parse(localStorage.getItem('persist:root'))
let accessToken;
if(persist){
  const user = JSON.parse((persist.user))
   accessToken = user.accessToken
}else{
  accessToken = null
}
const axiosMu = axios.create({
  baseURL,
  headers:{authorization:`Bearer ${accessToken}`}
});

//interceptorsיבצע את כל הפעולות שיש בתוך  xiosMuכל שליחה של שתתבצאה בשימוש הa ה
// axiosMu.interceptors.request.use(async, (req) => {
//   // פה יהיה לוגיקה שתבדוק לפני כל בקשה עם הטוקן תקין ולא עבר לו  התוקף
//   // טוקן
// });

export default axiosMu;
