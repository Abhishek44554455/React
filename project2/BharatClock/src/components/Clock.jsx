function Clock(){
          let time=new Date();
  return(   
       <p className="font-monospace lead">The current date is-{time.toLocaleTimeString()}</p>  

  );
}
export default Clock;