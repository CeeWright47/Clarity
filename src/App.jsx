import TotalBalanceCard from "./components/TotalBalanceCard";
import NetWorthCard from "./components/NetWorthCard";
import TotalDebtCard from "./components/TotalDebtCard";
import WeeklyOverviewCard from "./components/WeeklyOverviewCard";
import TitleAmountCard from "./components/TitleAmountCard";
import AccountBalanceCard from "./components/AccountBalanceCard.tsx";
import "./index.css";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-56 bg-[#0D1B2E] h-full shrink-0">
        {/* Sidebar goes here */}
      </aside>
      <main className="flex-1 overflow-auto px-10 py-6">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4 items-stretch">
            <TotalBalanceCard balance={1000} />
            <NetWorthCard networth={5000} />
            <TotalDebtCard debt={2000} />
          </div>

          <WeeklyOverviewCard amountSpentCurrentWeek={300} />
          <div className="grid grid-cols-3 gap-4 items-stretch">
            <TitleAmountCard title="MONTHLY INCOME" amount={4000} />
            <TitleAmountCard title="TOTAL BILLS" amount={4000} />
            <TitleAmountCard title="SPENT SO FAR" amount={4000} />
          </div>
          <h1>Cash & Checkings</h1>
          <div className="grid grid-cols-2 gap-4 items-stretch">
            <AccountBalanceCard  title="CHECKING ACCOUNT" balance={1000} acctNumber={123456789} />
            <AccountBalanceCard title="SAVINGS ACCOUNT" balance={5000} acctNumber={987654321} />
          </div>
          <h1>Credit Cards</h1>
          <div className="grid grid-cols-2 gap-4 items-stretch">
            <AccountBalanceCard  title="CREDIT CARD 1" balance={1000} acctNumber={123456789} />
            <AccountBalanceCard title="CREDIT CARD 2" balance={5000} acctNumber={987654321} />
          </div>
          <h1>Investments</h1>
          <div className="grid grid-cols-2 gap-4 items-stretch">
            <AccountBalanceCard  title="INVESTMENT 1" balance={1000} acctNumber={123456789} />
            <AccountBalanceCard title="INVESTMENT 2" balance={5000} acctNumber={987654321} />
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
