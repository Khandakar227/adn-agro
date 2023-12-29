import { MdHeadsetMic } from "react-icons/md";

function BannerSection() {
    return (
        <div className="bg-oval bg-slate-950 bg-opacity-5">
            <div className="max-w-4xl mx-auto py-32 text-center">
                <h3 className="font-viga text-3xl">Order Home Delivery of Groceries</h3>
                <p className="text-primary-dark pb-4 mx-auto text-2xl">Adipiscing elit ut aliquam purus sit amet luctus. Neque egestas congue quisque egestas diam in. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Leo a diam sollicitudin tempor</p>
                <div className="flex justify-center items-center gap-4 w-max mx-auto py-5 px-8 rounded-full shadow-sm bg-white font-viga text-xl text-primary-dark">
                    <MdHeadsetMic />
                    <span>+1-202-555-0168</span>
                </div>
            </div>
        </div>
    )
}

export default BannerSection