import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Left from './components/left-components/Left.tsx';
import LeftSub1 from './components/left-components/LeftSub1.tsx';
import Right from './components/right-components/Right.tsx';
import RightSub1 from './components/right-components/RightSub1.tsx';
import RightSub2 from './components/right-components/RightSub2.tsx';
import RightSub3 from "./components/right-components/RightSub3.tsx";
import LeftSub3 from "./components/left-components/LeftSub3.tsx";
import LeftSub2 from "./components/left-components/LeftSub2.tsx";

const router = createBrowserRouter([
    { path: '', element: <App />, children: [
            { path: 'left', element: <Left />, children: [
                    { path: 'sub1', element: <LeftSub1 />, children: [
                            { path: 'sub2', element: <LeftSub2 />, children: [
                                    { path: 'sub3', element: <LeftSub3 /> }
                                ]}
                        ]}
                ]},
            { path: 'right', element: <Right />, children: [
                    { path: 'sub1', element: <RightSub1 />, children: [
                            { path: 'sub2', element: <RightSub2 />, children: [
                                    {path: 'sub3', element: <RightSub3/>}
                                ]}
                        ]}
                ]}
        ]}
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
