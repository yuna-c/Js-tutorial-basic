// Login Promise
// axios library 특징 => 모든 메서드들이 프로미스 형태로 지원됨
axios.post('https://api.marktube.tv/v1/me'/* 주소 */,{
    /* 바디 */
    email,
    password,

}).then(res => {});

// Login Async-Await
// res => resolve된 리턴 값(async function 안에 들어 있어야 함)
const res = await axios.post('https://api.marktube.tv/v1/me',{
    email,
    password,
});