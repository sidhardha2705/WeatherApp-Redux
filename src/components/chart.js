import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

function Average(data){
    return(
        _.round(_.sum(data)/data.length)
    )
}

const Chart= (props)=>{
    return(
        <div>
            <Sparklines height={30} width={70} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{Average(props.data)} {props.units}</div>
        </div>
    )
}

export default Chart