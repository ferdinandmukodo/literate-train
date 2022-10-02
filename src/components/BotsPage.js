import React, { useState , useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(res => res.json())
    .then(setBots)
  },[])

  function displayBots(bot){
    console.log(bot);
    setBots(bots.map(allBots => allBots.id === bot.id ? {...allBots, army:true} : allBots));
  }

  function addRemoveBot(bot){
    console.log(bot);
    setBots(bots.map(allBots => allBots.id === bot.id ? {...allBots, army:false} : allBots));
  }

  function deleteCompletely(bot){
    setBots(bots.filter(allBots => allBots.id !== bot.id))
  }
  return (
    <div>
      <YourBotArmy 
      bots={bots.filter(b => b.army)}
      addRemoveBot ={addRemoveBot}
      deleteCompletely={deleteCompletely}
      />

      <BotCollection 
      bots={bots}
      displayBots={displayBots}
      deleteCompletely={deleteCompletely}
      />
    </div>
  )
}

export default BotsPage;