'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount:number}) => {
  return (
    <div>
        <CountUp className='w-full'
         decimal="," end={amount} prefix='₹' decimals={2}/>
    </div>
  )
}

export default AnimatedCounter