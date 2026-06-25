import AccountBalanceCard from "../components/AccountBalanceCard";
import TitleAmountCard from "../components/TitleAmountCard";
import TransactionRow from "../components/TransactionRow";
import { Search } from "lucide-react";

function TransactionsPage() {
  const date = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const transactions = [
    {
      merchant: "Nobu Restaurant",
      category: "Dining Out",
      account: "Amex Gold",
      date: "May 5",
      amount: -142.0,
    },
    {
      merchant: "Salary Deposit",
      category: "Income",
      account: "Chase Checking",
      date: "May 5",
      amount: 4600.0,
    },
    {
      merchant: "Whole Foods",
      category: "Groceries",
      account: "Amex Gold",
      date: "May 4",
      amount: -84.32,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
        <p className="text-sm text-gray-400">All accounts for {date}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 items-stretch">
        <TitleAmountCard title="TOTAL IN" amount={4000} />
        <TitleAmountCard title="TOTAL OUT" amount={2000} />
        <TitleAmountCard title="NET" amount={2000} />
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search merchant or amount..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button className="px-6 py-2 rounded-lg bg-gray-100 text-sm text-gray-700">
            Filter
          </button>
          <button className="px-6 py-2 rounded-lg bg-gray-100 text-sm text-gray-700">
            Sort
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-widest border-b border-gray-100">
                <th className="text-left font-medium px-6 py-4">Merchant</th>
                <th className="text-left font-medium px-6 py-4">Category</th>
                <th className="text-left font-medium px-6 py-4">Account</th>
                <th className="text-left font-medium px-6 py-4">Date</th>
                <th className="text-right font-medium px-6 py-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <TransactionRow
                  key={index}
                  merchant={tx.merchant}
                  category={tx.category}
                  account={tx.account}
                  date={tx.date}
                  amount={tx.amount}
                />
              ))}
            </tbody>
          </table>
        </div>

      </div>
      
    </div>
  );
}

export default TransactionsPage;
