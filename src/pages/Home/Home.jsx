import Categories from "../../components/Shared/Rooms/Categories/Categories";
import Rooms from "../../components/Shared/Rooms/Rooms";

const Home = () => {
    return (
        <div>
            {/* category section */}
            <div className="mb-6">
                <Categories />
            </div>
            {/* rooms section */}
            <Rooms />
        </div>
    );
};

export default Home;