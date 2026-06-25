import { Building2 } from "lucide-react";

type TitleAmountCardProps = {
  title: string;
  balance: number;
  acctNumber: number;
};

function AccountBalanceCard({ title, balance, acctNumber }: TitleAmountCardProps) {
  const previousBalance = 4800;
  const balanceChange = ((balance - previousBalance) / previousBalance) * 100;
  const isPositive = balanceChange > 0;
  const maskedAcctNumber = `****${acctNumber.toString().slice(-4)}`;

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-md transition-all cursor-pointer">
  <div className=" items-end mb-4">
    <Building2 size={20} className="text-gray-400 mb-1" />
    <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
      {title}
    </h5>
    <p className="text-xs text-gray-400">{maskedAcctNumber}</p>
  </div>
  <div className="flex flex-col items-start">
    <h1 className="text-4xl font-bold text-gray-700 my-2">
      ${balance.toFixed(2)}
    </h1>
    <h5 className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
      {isPositive ? `+${balanceChange.toFixed(2)}% increase` : `${balanceChange.toFixed(2)}% decrease`}
    </h5>
  </div>
</div>
  );
}


export default AccountBalanceCard;