import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';


export default function Graph({ data }: { data: { contributions: number }[] }) {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="contributions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--primary-dark)" stopOpacity={1} />
                        <stop offset="0%" stopColor="var(--primary-dark)" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="var(--primary-dark)" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" hide={true} />
                <Tooltip contentStyle={{ borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-translucent)', backdropFilter: 'blur(20px)', borderColor: 'var(--primary-light)' }} itemStyle={{ color: 'inherit' }} />
                <Area
                    type="monotone"
                    dataKey="contributions"
                    stroke="var(--primary-light)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#contributions)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}