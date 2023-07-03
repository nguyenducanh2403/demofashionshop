import './App.css';
import AuthButtons from './components/AuthButtons';
import Header from './components/Header';
import Nav from './components/Nav';
import Trending from './components/Trending';
import Contact from './components/Contact';

function App() {
    return (
        <div className="grid md:grid-cols-1">
            <main className="px-12 pb-6 md:col-span-4 bg-cyan-50">
                <Nav />
                <Header />
                <Trending />
                <Contact />
            </main>
        </div>
    );
}

export default App;
