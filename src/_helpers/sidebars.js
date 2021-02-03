const superAdminSidebars = [
    {
        title: 'Dashboard',
        icon: require('../assets/icons/bar-chart.svg'),
        href: '/',
    },
    {
        title: 'Country',
        icon: require('../assets/icons/bar-chart.svg'),
        href: '/country'
    },
    {
        title: 'City',
        icon: require('../assets/icons/bar-chart.svg'),
        href: '/city'
    }
]

const bottomMenus = [
    {
        title: 'Settings',
        icon: require('../assets/icons/settings.svg'),
    },
    {
        title: 'Help',
        icon: require('../assets/icons/help.svg'),
    },
    {
        title: 'Logout',
        icon: require('../assets/icons/logout.svg'),
    },
]

export default {
    bottomMenus,
    superAdminSidebars
}