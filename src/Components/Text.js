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
          Man berichtet, Giganten haben nach dem himmlischen Reich gestrebt und hohe zusammengesuchte Berge bis zu den Sternen aufgetürmt. Damit auch der Äther hoch oben nicht ohne Sorgen sei.
          Damals zerschmetterte der allmächtige Vater den Olymp mit einem geschleuderten Blitz und warf den Pelion vom darunterliegenden Ossa (Pelion und Ossa: Berge in Thessalien in der Nähe des Olymp).
          Verschüttet von ihrem Bauwerk lagen die gräßlichen Leiber; es heißt, Mutter Erde sei, vom vielen Blut ihrer Kinder durchtränkt, nass geworden. Sie habe dann das noch warme Blut mit Leben erfüllt und es in die Gestalt von Menschen umgewandelt, damit das Andenken an ihre Nachkommenschaft nicht völlig unterginge. Aber auch jene Brut verachtete die Himmlischen,
          lechzte nach brutalem Mord und war gewalttätig; schließlich war sie aus Blut hervorgegangen.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Text