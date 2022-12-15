import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosMu = axios.create({
  baseURL,
  headers: { authorization: `כאן שולחים את הטוקן` },
});

//interceptorsיבצע את כל הפעולות שיש בתוך  xiosMuכל שליחה של שתתבצאה בשימוש הa ה
axiosMu.interceptors.request.use(async, (req) => {
  // פה יהיה לוגיקה שתבדוק לפני כל בקשה עם הטוקן תקין ולא עבר לו  התוקף
  // טוקן
});
