import React from 'react'
import SummaryItem from './SummaryItem'
import Image from '../Images/Image.jpg'
const text ="hasjkdhaksjdhkjasdhk djkashdkjasd kasjdh askjdhajk sdhkjas dah kdhjkashdkjash kjdajksd kjash kdjah kjdha skdh kja dkjah dkj ashkjd akjdh kasj dkjas dkj ask dkaj djkasdkjahskjdhaskj dkha sdkas d asd askdhask hdkjas kdj ahskj dkasjdhk jashk jdas hkj dhaskj dhkja hkd kja sdkjas hdk"

const Summary = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <SummaryItem num="Worum gehts?" title="Worum geht es in der Metamorphose" text={text} img={Image}/>
        <SummaryItem num="2"/>
        <SummaryItem num="3"/>
    </div>
  )
}

export default Summary