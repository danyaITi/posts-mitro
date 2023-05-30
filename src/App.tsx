import { Burger } from './components/Burger';
import { RoutesApp } from './routes';
import './styles.css';

const App = () => {
    return (
        <section className="App">
            <Burger />
            <RoutesApp />
        </section>
    );
};

export default App;
