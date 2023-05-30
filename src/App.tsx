import { Link } from 'react-router-dom';
import { Burger } from './components/Burger';
import { RoutesApp } from './routes';
import './styles.css';

const App = () => {
    return (
        <div className="App">
            <Burger />
            <RoutesApp />
        </div>
    );
};

export default App;
