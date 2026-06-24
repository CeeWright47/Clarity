import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { weekDay: "Mon", amountSpent: 50 },
  { weekDay: "Tue", amountSpent: 75 },
  { weekDay: "Wed", amountSpent: 100 },
  { weekDay: "Thu", amountSpent: 125 },
  { weekDay: "Fri", amountSpent: 150 },
  { weekDay: "Sat", amountSpent: 175 },
  { weekDay: "Sun", amountSpent: 200 },
];

type WeeklyOverviewCardProps = {
  amountSpentCurrentWeek: number;
};

function WeeklyOverviewCard({
  amountSpentCurrentWeek,
}: WeeklyOverviewCardProps) {
  //weekly overview logic calculations
  const today = new Date();
  // get Monday of current week
  const monday = new Date(today);
  monday.setDate(today.getDate() - today.getDay() + 1);
  // get Sunday of current week
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay() + 7);
  // format both dates
  const formatDate = (date: Date) =>
    date.toLocaleString("default", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const weekRange = `${formatDate(monday)} - ${formatDate(sunday)}`;

  return (
    <div className=" border border-gray-200 rounded-2xl p-6 w-full h-full bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-4xl font-semibold text-gray-900 mb-4">
            Weekly Spending Pulse
          </h3>
          <p className="text-xs text-gray-400 mb-4">{weekRange}</p>
        </div>
        <div className="text-right">
          <h3 className="text-2xl semi font-bold text-gray-900">
            ${amountSpentCurrentWeek.toLocaleString()}
          </h3>
          <p className="text-4x1 text-gray-900">Spent this week</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barSize={28}>
          <XAxis
            dataKey="weekDay"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />
          <Bar dataKey="amountSpent" fill="#10B981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default WeeklyOverviewCard;
