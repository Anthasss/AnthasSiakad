import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Legend } from "recharts";

// Custom Stripe Pattern Component
const StripedPattern = () => (
  <defs>
    <pattern id="striped" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
      <rect width="5" height="10" transform="translate(0,0)" fill="rgba(0, 0, 255, 0.3)" />
    </pattern>
  </defs>
);

const data = [
  { name: "1", uv: 3.89 },
  { name: "2", uv: 4 },
  { name: "3", uv: 3.56 },
  { name: "4", uv: 0 },
  { name: "5", uv: 0 },
  { name: "6", uv: 0 },
  { name: "7", uv: 0 },
  { name: "8", uv: 0 },
];

export default function IpsGraph() {
  return (
    <div className="w-full h-full py-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 50, bottom: 0 }}>
          {/* Define the stripe pattern */}
          <StripedPattern />

          <XAxis dataKey="name" domain={[0, 8]} />
          <YAxis hide domain={[0, 4.5]} />
          <Tooltip />

          {/* Area Chart with Stripes */}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="url(#striped)" // Use the striped pattern for the fill
            name="Grafik IPS (Semester)"
          >
            <LabelList dataKey="uv" position="top" />
          </Area>

          <Legend
            layout="horizontal" // Makes the legend horizontal
            verticalAlign="bottom" // Positions the legend at the bottom
            align="center" // Centers the legend horizontally
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
