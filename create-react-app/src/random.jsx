function Random(){
            let number=Math.random()*100;
            return <h2 style={{'backgroundColor':'#776691'}}>
                        The Random Number is:{Math.round(number)}
            </h2>
}
export default Random;