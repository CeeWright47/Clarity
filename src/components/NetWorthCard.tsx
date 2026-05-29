type NetWorthCardProps = {
  networth: number;
};

function NetWorthCard({ networth }: NetWorthCardProps) {

    // Networth increase/decrease logic (for demo purposes, this is hardcoded)
    const previousNetWorth = 4800; // This would typically come from props or state
  const netWorthChange = ((networth - previousNetWorth) / previousNetWorth) * 100;
  const isPositive = netWorthChange > 0;

    return (
    <div className="border border-gray-200 rounded-2xl p-6 w-full h-full bg-white">
            <h5 className="text-xs text-gray-700 uppercase tracking-widest">NET WORTH</h5>
            <h1 className="text-4xl font-bold text-gray-700 my-2">${networth.toFixed(2)}</h1>
            <h5 className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? `+${netWorthChange.toFixed(2)}% increase` : `${netWorthChange.toFixed(2)}% decrease`}
            </h5>
        </div>
    );
}

export default NetWorthCard;