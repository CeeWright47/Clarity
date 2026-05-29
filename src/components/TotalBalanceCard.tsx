type TotalBalanceCardProps = {
  balance: number;
};

function TotalBalanceCard({ balance }: TotalBalanceCardProps) {
  // Get current month and year for card
    const date = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  // Calculate days remaining in the month
  const today = new Date();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const daysRemaining = lastDay.getDate() - today.getDate();

  return (
    <div className="border border-gray-200 rounded-2xl p-6 w-full h-full bg-white">
      <h5 className="text-xs text-gray-700 uppercase tracking-widest">AVAILABLE BALANCE</h5>
      <h1 className="text-4xl font-bold text-gray-700 my-2">${balance.toFixed(2)}</h1>
      <h5 className="text-sm text-gray-700">After Bills & Spending - {date}</h5>
      <span className="mt-4 inline-flex items-center gap-1 rounded-full border border-emerald-500 px-3 py-1 text-sm text-emerald-500">
        ✓ {daysRemaining} days remaining
      </span>
    </div>
  );
}
    export default TotalBalanceCard;
