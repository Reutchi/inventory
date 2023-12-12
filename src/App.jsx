import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute';
import { router } from './router/index';
import './styles/base.scss'
import './styles/typography.scss'

function App() {
    return (
        <Routes>
            {router.map(({ auth, path, element }, idx) =>
                auth ? (
                    <Route
                        key={idx}
                        path={path}
                        element={
                            <PrivateRoute>
                                {element}
                            </PrivateRoute>
                        }
                    />
                ) : (
                    <Route key={idx} path={path} element={element} />
                )
            )}
        </Routes>
    );
}

export default App;
