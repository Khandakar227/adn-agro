export default function HeaderSection() {
    return (
        <div className="sm:min-h-screen bg-apple flex items-center py-48 bg-white">
            <div className="max-w-4xl mx-auto w-full px-4">
                <p className="font-viga text-3xl sm:text-5xl max-w-xl">
                    Check out our Best Weekly Prices
                </p>
                <p className="pt-4 text-gray-700 max-w-sm">
                    Pellentesque et justo lorem. Proin hendrerit, velit vitae vehicula vulputate
                </p>
                <div className="pt-5 flex gap-4">
                    <button className="bg-primary text-white font-semibold rounded-3xl py-2 px-10 text-sm sm:text-base">View Sale</button>
                    <button className="bg-white text-primary font-semibold rounded-3xl py-2 px-10 text-sm sm:text-base border-primary border">Shop all</button>
                </div>
            </div>
        </div>
    )
}
