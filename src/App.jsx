import { RouterProvider } from 'react-router-dom';
import { router } from './data/routerData';

function App() {
	return <RouterProvider router={router} />;
}

export default App;
