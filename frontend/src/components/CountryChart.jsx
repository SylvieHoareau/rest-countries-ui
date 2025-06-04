import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const CountryChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`}/>
                <Tooltip formatter={(value) => value.toLocaleString()}/>
                <Bar dataKey="population" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default CountryChart;