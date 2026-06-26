import { X } from "lucide-react"

type SlidePanelProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string
    children: React.ReactNode;
}

function SlidePanel({ isOpen, onClose, title, children }: SlidePanelProps) {
    return (
        <div
            className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            aria-hidden={!isOpen}
        >
            <div
                className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            />
            <div
                className={`relative h-full w-[420px] bg-white p-6 shadow-xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <button onClick={onClose}>
                        <X size={20} className="text-gray-400" />
                    </button>
                </div>
                {children}
                <div className="mt-6 flex gap-3">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-black text-white text-sm">Save Budget</button>
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 text-black text-sm">Close</button>
                </div>
            </div>
            
        </div>
    )
}
export default SlidePanel