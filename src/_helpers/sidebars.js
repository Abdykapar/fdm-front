const superAdminSidebars = [
    // {
    //     title: 'Dashboard',
    //     icon: require('../assets/icons/bar-chart.svg'),
    //     href: '/',
    // },
    {
        title: 'Airline',
        icon: require('../assets/icons/folder.svg'),
        href: '/airline'
    },
    {
        title: 'Country',
        icon: require('../assets/icons/folder.svg'),
        href: '/country'
    },
    {
        title: 'City',
        icon: require('../assets/icons/folder.svg'),
        href: '/city'
    },
    {
        title: 'Navbar',
        icon: require('../assets/icons/folder.svg'),
        href: '/navbar'
    },
    {
        title: 'Permission',
        icon: require('../assets/icons/folder.svg'),
        href: '/permission'
    },
    {
        title: 'Role',
        icon: require('../assets/icons/folder.svg'),
        href: '/role'
    },
    {
        title: 'Aircraft models',
        icon: require('../assets/icons/folder.svg'),
        href: '/aircraft-model'
    },
    {
        title: 'Aircrafts',
        icon: require('../assets/icons/folder.svg'),
        href: '/aircraft'
    },
    {
        title: 'Airports',
        icon: require('../assets/icons/folder.svg'),
        href: '/airport'
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