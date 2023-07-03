import Cards from '../../assets/1.jpg';

function Slogan() {
    return (
        <section className="md:text-48 my-14 md:items-center">
            <h3 className="border-b border-primary mt-12 mb-6 pb-4">”着たい！出かけたい” SUMMER COLLECTION</h3>
            <div className="flex justify-center">
                <img src={Cards} alt="Creadit Card" />
            </div>
        </section>
    );
}

export default Slogan;
