import './App.scss'
import {Home,About,AuthPage} from './pages/index'
import {Outlet, Route, Routes,Link} from "react-router-dom";

const App = () => {

    const routes = [
        { id: 1, element: <Home />, path: '/home', title: 'Home' },
        { id: 2, element: <About />, path: '/about', title: 'About' },
        { id: 3, element: <AuthPage />, path: '/auth', title: 'Auth' },
    ];

    function Layout() {
        return (
            <div>
                <nav>
                    <ul>
                        {routes.map(({ id, path, title }) => (
                            <li key={id}>
                                <Link to={path}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <hr />
                <Outlet />
            </div>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
            </Route>
            {routes.map(({ id, element, path }) => (
                <Route key={id} path={path} element={element} />
            ))}
        </Routes>
    )
};

export default App;
