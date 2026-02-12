export const sidebarData = [
	{
		name: 'Finsights',
		icon: 'ri-dashboard-line',
		link: '/',
	},
	{
		name: 'Vendor',
		icon: 'ri-user-3-line',
		link: '/vendor',
		children: [
			{
				name: 'Vendor Details',
				link: '/vendor/details',
			},
			{
				name: 'Vendor Reports',
				link: '/vendor/reports',
				children: [
					{
						name: 'Monthly Reports',
						link: '/vendor/reports/monthly',
					},
				],
			},
		],
	},
	{
		name: 'Task Uploads',
		icon: 'ri-file-list-line',
		link: '/task-uploads',
	},
	{
		name: 'Requested Documents',
		icon: 'ri-task-line',
		link: '/requested-documents',
	},
	{
		name: 'Meetings',
		icon: 'ri-video-on-line',
		link: '/meetings',
	},
]; // Datas listing sidebar menu details
