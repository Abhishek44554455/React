function Clock(){
        var currentdate = new Date();
        var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
  return(   
       <p>The current date is-{currentdate} and current time is {datetime}</p>  

  );
}
export default Clock;