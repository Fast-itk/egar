import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ data, open }) => {

   
    let tools = data.map(item => item.tool)
    const uniqTools = tools.filter((item, pos) => tools.indexOf(item) === pos)   
    const dataForLines = [] 
    uniqTools.forEach((name) => {
        dataForLines.push({
            name: name,
            data: data.filter(item => item.tool === name).sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            })
        })
    })

    return (
        <div className="d-flex justify-content-center">
            {
                !open 
                ? <LineChart width={800} height={500} style={{zIndex: 0}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" allowDuplicatedCategory={false} />
                    <YAxis dataKey="cost" />
                    <Tooltip />
                    <Legend />
                    {dataForLines.map((s) => (
                        <Line dataKey="cost" data={s.data} name={s.name} key={s.name} />
                    ))}
                </LineChart>

                : null
            }
            

            
        </div>
    )
}

export default Chart