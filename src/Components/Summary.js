import React from 'react'
import SummaryItem from './SummaryItem'
import GigantomachieImg from '../Images/Gigantomachie.jpg'
import OvidImg from '../Images/Ovid.jpeg'
import GeschichteImg from '../Images/Geschichte.jpg'

const Geschichte = `
Die Gigantomachie bzw. die Geschichte der Giganten wird besonders in der Kunst immer wieder aufgegriffen.
So lassen sich schon ab dem Mittelalter Kunstwerke finden, die diese Metamorphose als Motiv für Gemälde verwenden. Im Mittelalter
wurden die Giganten aber als übergroße Menschen dargestellt während sie in der Mythologie als Mischwesen zwischen Schlange
und Mensch beschrieben wurden

`
const Gigantomachie = `
Die Gigantomachie beschreibt den Kampf der Götter des Olymps gegen die Giganten.
Als Reaktion auf den Sieg der Götter über die Titanen beauftragte Gaia ihre Kinder,
die Giganten, die olympischen Götter zu stürzen.
Als dann die Giganten gegen die olympischen Götter kämpften nahm der Kampf eine unerwartete Wendung.
Jedes Mal, wenn ein Gigant zu Boden ging, stand er mit neuer Kraft wieder auf.
Schließlich befragten die Götter ein Orakel, welches ihnen voraussagte, dass die Giganten nur mit Hilfe der
Sterblichen besiegt werden können. So gelang es den Göttern schließlich mit Hilfe von Herkules und Dionysos die Giganten
endgültig zu vernichten.

`
const Ovid = `
In Ovid's Versen wird gerade der Kampf der Titanen verkürzt dargestellt. Lediglich eine kurze Beschreibung, wie die 
Giganten vom Berg Olymp geschleudert werden, lässt sich in Ovid's Versen finden. Vielmehr liegt der Fokus auf
dem was aus den Giganten wird. Bei Ovid erschafft Gaia aus den Überresten der Giganten Menschen, um an das Erbe ihrer 
Kinder zu erinnern. Diese neuerschaffenen Menschen und deren Nachkommen waren gekennzeichnet durch ihren Hass auf die Götter.
`

const Summary = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <SummaryItem num="1" title="Die Gigantomachie" text={Gigantomachie} img={GigantomachieImg}/>
        <SummaryItem num="2" title="Die Giganten bei Ovid" text={Ovid} img={OvidImg}/>
        <SummaryItem num="3" title="Die Giganten im Verlauf der Geschichte" text={Geschichte} img={GeschichteImg}/>
    </div>
  )
}

export default Summary