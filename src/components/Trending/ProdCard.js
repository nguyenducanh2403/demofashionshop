import { BiHeart } from 'react-icons/bi';
import { ProdData } from './prodData';

const ProdCard = ({ prod }: { prod: ProdData }) => {
    const { src, title, main, favorite } = prod;
    return (
        <div className="card">
            <img src={src} className="w-full" />
            <div className="p-4 text-white">
                <h4>{title}</h4>
                <h4>{main}</h4>
            </div>
            <div className="badge">
                <BiHeart />
            </div>
        </div>
    );
};

export default ProdCard;
