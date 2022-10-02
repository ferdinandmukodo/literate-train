import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots,deleteCompletely, displayBots,}) {
  // Your code here

  let displayaAllBots = bots.map(bot => 
    <BotCard 
    key={bot.id}
    bot={bot}
    clickEvent={displayBots}
    deleteCompletely={deleteCompletely}
    />)

  return (
    <div className="ui four column grid">
      <div className="row">
        {displayaAllBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;