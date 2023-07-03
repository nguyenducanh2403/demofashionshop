import ProdCard from './ProdCard';
import { prodData } from './prodData';

const Index = () => {
    return (
        <>
            <h3 id="Trending" className="border-b border-primary mt-12 mb-6 pb-4">
                トレンド
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                {prodData.map((prod, index) => (
                    <ProdCard key={index} prod={prod} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="btn hover:scale-125 transition ease-out duration-500">もっと見る</button>
            </div>
        </>
    );
};

export default Index;
