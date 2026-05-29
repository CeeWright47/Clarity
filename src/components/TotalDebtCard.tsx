type TotalDebtCardProps = {
  debt: number;
  totalDebtPaidOff?: number; // Optional prop for amount of debt paid off
};

function TotalDebtCard({ debt, totalDebtPaidOff }: TotalDebtCardProps) {
  // debt calculation logic (for demo purposes, this is hardcoded)
    const debtPercentagePaidOff = totalDebtPaidOff ? (totalDebtPaidOff / (debt + totalDebtPaidOff)) * 100 : 0;
  return (
    <div className="border border-gray-200 rounded-2xl p-6 w-full h-full bg-white">
      <h5 className="text-xs text-gray-700 uppercase tracking-widest">
        TOTAL DEBT
      </h5>
      <p className="text-4xl font-bold text-red-500 my-2">${debt}</p>{" "}
      <h5 className="text-sm text-gray-700">{debtPercentagePaidOff}% paid off</h5>
    </div>
  );
}

export default TotalDebtCard;
