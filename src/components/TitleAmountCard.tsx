type TitleAmountCardProps = {
    title: string;
    amount: number;
};

function TitleAmountCard({ title, amount }: TitleAmountCardProps) {
    return (
        <div className="bg-white rounded-lg shadow p-6 w-full min-w-0 overflow-hidden">
            <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-widest">{title}</h5>
            <h1 className="my-2 text-[clamp(2rem,3vw,3.25rem)] leading-none font-bold tracking-tight text-gray-700 tabular-nums">${amount.toFixed(2)}</h1>
        </div>
    );
}

export default TitleAmountCard;