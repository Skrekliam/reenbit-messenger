export default function convertTime(convTime){
    if( typeof convTime === 'string') return convTime
    // return convTime
    // console.log(convTime.seconds ?? convTime)
    const date = new Date()
    const time = new Date(convTime * 1000);
    return  date - time < 86400000  ? time.getHours() +':'+ ('0' + time.getMinutes()).substr(-2) +':' +('0' + time.getSeconds()).substr(-2) : time.getDate() + '/' + (time.getMonth() + 1) + '/' + (time.getYear() + 1900); 
}