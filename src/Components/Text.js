import React from 'react'

const Text = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className=" bg-emerald-500/40 flex flex-row w-3/4 lg:flex-col lg:w-screen">
        <div className="m-6 bg-emerald-400/50 p-2 basis-1/2 rounded-md">
          <h1 className="text-xl p-2 underline">Lateinischer Original Text</h1>
          <div className="break-words p-2 ">
          Neve foret terris securior arduus aether,
          adfectasse ferunt regnum caeleste gigantas
          altaque congestos struxisse ad sidera montis.
          tum pater omnipotens misso perfregit Olympum
          fulmine et excussit subiecto Pelion Ossae.
          obruta mole sua cum corpora dira iacerent,
          perfusam multo natorum sanguine Terram
          immaduisse ferunt calidumque animasse cruorem
          et, ne nulla suae stirpis monimenta manerent, 
          in faciem vertisse hominum; sed et illa propago
          contemptrix superum saevaeque avidissima caedis
          et violenta fuit: scires e sanguine natos.
          </div>
        </div>
        <div className="m-6 group flex items-center justify-center flex-col basis-1/2 bg-emerald-400/50 rounded-md">
          <button className="group bg-sky-600 p-2 rounded-md mt-5">Übersetzung</button>
          <div className=" scale-0 group-hover:scale-100 transition-all duration-500 break-words p-3">
          Und damit der hohe Äther nicht sorgloser sei als die Erde, sollen die Giganten, voll Gier nach der Herrschaft im Himmel, 
          Berge zusammengetragen und bis an die Sterne empor getürmt haben. Da zerschmetterte der allmächtige Vater 
          mit einem Blitzstrahl den Olymp und schlug den Pelion von dem darunterliegenden Ossa. Als die ungeschlachten 
          Leiber von ihrem eigenen Bauwerk erdrückt dalagen, soll die Erde von dem reichlich strömenden Blut ihrer Söhne 
          feucht geworden sein und das warme Blut beseelt und in Menschengestalt verwandelt haben, damit an ihre
          Nachkommenschaft eine Erinnerung bleibe. Aber auch diese Brut verachtete die Himmlischen, lechzte nach 
          grausamem Mord und war gewalttätig: Sie war ja auch aus Blut geboren.

          </div>
        </div>
      </div>
    </div>
  )
}

export default Text