import PageHeader from "../components/PageHeader";

export default function Orders() {
    return (
        <div id="orders-container">
            <PageHeader />
            <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">New Orders</h2>
                    <p className="text-3xl text-hijau font-extrabold">58</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Orders In Process</h2>
                    <p className="text-3xl text-kuning font-extrabold">25</p>
                </div>
            </div>
        </div>
    );
}
