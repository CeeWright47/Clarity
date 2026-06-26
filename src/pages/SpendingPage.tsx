import SlidePanel from "../components/SlidePanel";
import { useState } from "react";


function SpendingPage() {

  const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(false);

  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Spending</h1>
        <p className="text-sm text-gray-400">May 2026 · Budget vs Actual</p>
      </div>

      <div className="flex items-center gap-3">

        <button onClick={() => setIsSlidePanelOpen(true)}
          className="px-4 py-2 rounded-lg bg-black text-white text-sm"
        >Set up budgets</button>
        <SlidePanel isOpen={isSlidePanelOpen} onClose={() => setIsSlidePanelOpen(false)} title="Spending Details">
          <p>Here are the details of your spending.</p>
        </SlidePanel>


        <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
          <button className="px-4 py-1.5 rounded-md bg-gray-100 text-sm text-gray-900">Current Month</button>
          <button className="px-4 py-1.5 rounded-md text-sm text-gray-400">3-Month Trend</button>
        </div>
      </div>
    </div>
  );
}

export default SpendingPage;
