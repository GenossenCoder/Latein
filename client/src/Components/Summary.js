import React from 'react'
import SummaryItem from './SummaryItem'
import GigantomachieImg from '../Images/Gigantomachie.jpg'
import OvidImg from '../Images/Ovid.jpeg'

const Gigantomachie = `
  	Die Gigantomachie beschreibt den Kampf der Götter des Olymps gegen die Giganten.
    Als Reaktion auf den Sieg der Götter über die Titanen beauftragte Gaia ihre Kinder,
    die Giganten, die olympischen Götter zu stürtzen.
    Als dann die Giganten gegen die olympischen Götter kämpften nahm der Kampf eine unerwartete Wendung,
    denn jedes mal, wenn ein Gigant zu Boden ging stand er mit neuer Kraft wieder auf.
  	Schließlich befragten die Götter ein Orakel, welches ihnen vorraussagte, dass die Giganten nur mit Hilfe der
    Sterblichen besiegt werden können. Und so gelang es den Göttern schließlich mit Hilfe von Herkules die Giganten
    entgültigt zu vernichten.
`
const Ovid = `
    Bei Ovid wird gerade der Kampf der Titanen verkürtzt dargestellt, lediglich eine kurze Beschreibung, wie die 
    Giganten vom Berg Olymp geschleudert werden, lässt sich in Ovid's Versen finden. Viel mehr liegt der Fokus auf
    dem was aus den Giganten wird. Bei Ovid erschafft Gaia aus den Überresten der Giganten Menschen um an das Erbe ihrer 
    Kinder zu erinnern. Diese neuerschaffende Menschen und deren nachkommen waren gekennzeichnet durch ihren Hass auf die Götter.

`

const Summary = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <SummaryItem num="1" title="Die Gigantomachie" text={Gigantomachie} img={GigantomachieImg}/>
        <SummaryItem num="2" title="Die Giganten bei Ovif" text={Ovid} img={OvidImg}/>
        <SummaryItem num="3"/>
    </div>
  )
}

export default Summary