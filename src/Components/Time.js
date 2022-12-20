
 function Time (){
   
        const date = new Date()
        const hours = date.getHours()

        let TimeOfTheDay

        if(hours < 12){
            TimeOfTheDay  = "Good morning";
        }
        else if(hours >12 && hours < 17){
            TimeOfTheDay = "Good Afternoon";
        }
        else 
            TimeOfTheDay = "Good Evening";

           return(
            <div>
                <h1>{TimeOfTheDay}</h1>
           </div>
           )
    
    }
     export default Time