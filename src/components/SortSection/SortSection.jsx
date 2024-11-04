import { BsSortDown } from "react-icons/bs";

const SortSection = () => {
    return (
        <div className="flex items-center gap-5 justify-between px-20 py-10">
            <div>
                <h1>Cart</h1>
            </div>
            <div className="flex items-center gap-5">
                <h1>Total Cost: 99k</h1>
                <div className="flex items-center gap-5">
                    <h1>Sort by Price</h1>
                    <div><BsSortDown /></div>
                </div>
                <button>Purchase</button>
            </div>
        </div>
    );
};

export default SortSection;