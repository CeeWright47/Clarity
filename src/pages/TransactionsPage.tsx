import AccountBalanceCard from "../components/AccountBalanceCard";
import TitleAmountCard from "../components/TitleAmountCard";
import { Search } from "lucide-react";


function TransactionsPage() {
    const date = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

    return (
        <div className="flex flex-col gap-4">
            /*-------------------- Header with title and date ------------------------------*/
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
                <p className="text-sm text-gray-400">All accounts for {date}</p>
            </div>
            /* ------------Search bar and filter/sort buttons ------------------------------*/
            <div className="flex gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search merchant or amount..."
                        className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                </div>
                <button className="px-6 py-2 rounded-lg bg-gray-100 text-sm text-gray-700">Filter</button>
                <button className="px-6 py-2 rounded-lg bg-gray-100 text-sm text-gray-700">Sort</button>
            </div>
            <div className="grid grid-cols-3 gap-4 items-stretch">
                <TitleAmountCard title="TOTAL IN" amount={4000} />
                <TitleAmountCard title="TOTAL OUT" amount={2000} />
                <TitleAmountCard title="NET" amount={2000} />
            </div>

        </div>
    );
}

export default TransactionsPage
