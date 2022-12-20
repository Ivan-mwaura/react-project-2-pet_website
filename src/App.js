import React from "react";
import Huskie from "./Components/Huskies"


function App(){
  return(
      <div className = "huskie_content">
         < Huskie
           img = "./Components/Images/husky1.jpg"
           owner = "Jane Njoroge"
           contact = "0702465672"
           email = "jnoroge@gmail.com"
         />
          < Huskie
           img = "./Components/Images/huskie_2.jfif"
           owner ="Evan Gachanja"
           contact = "0702466342"
           email = "evanhachnaj@gmail.com"
         />
          < Huskie
           img = "./Components/Images/huskie_3.jfif"
           owner = "Jonas blue"
           contact = "0702466342"
           email = "jonas@gmail.com"
         />
          < Huskie
           img = "./Components/Images/huskie_4.jfif"
           owner = "Dakota Fast"
           contact = "0702466342"
           email = "jnfastcar@gmail.com"
         />
          < Huskie
           img = "./Components/Images/huskie_5.jfif"
           owner = "Kylie Jenner"
           contact = "0702466342"
           email = "jnkyliescott@gmail.com"
         />
          < Huskie
           img = "./Components/Images/huskie_6.jfif"
           owner = "Skylar mitchelle"
           contact = "0702466342"
           email = "jskylmit@gmail.com"
         />
         < Huskie
           img = "./Components/Images/huskie_7.jfif"
           owner = "Dannie Trobe"
           contact = "0702466342"
           email = "jtrejodan@gmail.com"
         />
         < Huskie
           img = "./Components/Images/huskie_8.jfif"
           owner = "Dopple Ganger"
           contact = "0702466342"
           email = "jdopplee@gmail.com"
         />
   </div>
  
   )
}
export default App;