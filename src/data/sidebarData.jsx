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
		submenu: [
			{
				name: 'Vendor Details',
				link: '/vendor/details',
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
];
