import React from 'react'


import { PieChart, Pie, LabelList, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'ReactJs',
        outOf: 12,
        rate: 10.5,
        amt: 2400,
    },
    {
        name: 'NodeJs',
        outOf: 12,
        rate: 11,
        amt: 2210,
    },
    {
        name: 'NextJs',
        outOf: 12,
        rate: 7.9,
        amt: 2290,
    },
    {
        name: 'MongoDb',
        outOf: 12,
        rate: 9.5,
        amt: 2181,
    },
    {
        name: 'MySql',
        outOf: 12,
        rate: 6.5,
        amt: 2500,
    },
    {
        name: 'Web design',
        outOf: 12,
        rate: 9.5,
        amt: 2100,
    },
];

const Barcharts = () => {


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '##3e0587', '#ab6422', '#ed0961'];



    const renderCustomizedLabel = (props) => {
        const { x, y, width, height, value } = props;
        const radius = 10;

        return (
            <g>
                {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
                <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
                    {value}
                </text>
            </g>
        );
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                // layout="vertical"
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />

                <Legend />
                <Bar barSize={30} dataKey="rate" fill="#8884d8" minPointSize={5} radius={[10, 10, 0, 0]}>
                    <LabelList dataKey="name" content={renderCustomizedLabel} />
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Barcharts