import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Dashboard from '../pages/dashboard/Dasboard';
import Vendor from '../pages/vendor/Vendor';
import VendorDetails from '../pages/vendor/vendor-details/VendorDetails';
import Meetings from '../pages/meetings/Meetings';
import RequestedDocuments from '../pages/requested-documents/RequestedDocuments';
import TaskUploads from '../pages/task-uploads/TaskUploads';
import NotFound from '../pages/not-found/NotFound.jsx';
import VendorMonthlyReports from '../pages/vendor/vendor-reports/VendorMonthlyReports.jsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		// errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: 'vendor',
				element: <Vendor />,
			},
			{
				path: 'vendor/details',
				element: <VendorDetails />,
			},
			{
				path: '/vendor/reports/monthly',
				element: <VendorMonthlyReports />,
			},
			{
				path: 'task-uploads',
				element: <TaskUploads />,
			},
			{
				path: 'requested-documents',
				element: <RequestedDocuments />,
			},
			{
				path: 'meetings',
				element: <Meetings />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]); // Routes link and corresponding components listed
