'use strict';


/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 *
 * returns Map
 **/
exports.getAppLayout = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      layout: {
        main: {
            hasAside: true,
            hasSidebar: true,
        },
        aside: {
            tabs: [
                {
                    icon: 'icon-list',
                    value: 'icon-list',
                    index: '1',
                },
                {
                    icon: 'icon-speech',
                    value: 'icon-speech',
                    index: '2',
                },
                {
                    icon: 'icon-settings',
                    value: 'icon-settings',
                    index: '3',
                },
            ],
            content: [
                { index: '1', type: 'notifList', desc: 'Hello Buddy' },
                { index: '2', type: 'none' },
                { index: '3', type: 'none' },
            ],
        },
        footer: {
            poweredBy: {
                name: 'Raseedy',
                url: 'https://google.com',
            },
            company: {
                name: 'Room Art Space',
                url: 'https://google.com',
            },
        },
        header: {
            appNavbarBrand: {
                full: {
                    logo: {
                        'src:': '',
                        alt: '',
                    },
                },
                minimized: {
                    logo: {
                        'src:': '',
                        alt: '',
                    },
                },
            },
            primaryMenu: [
                {
                    url: '/dashboard',
                    name: 'Dashboard',
                    index: 0,
                    class: 'nav-link',
                    type: 'NavItem',
                },
                {
                    url: '/v-caps',
                    name: 'Visual Caps',
                    index: 1,
                    class: 'nav-link',
                    type: 'NavItem',
                },
                {
                    url: '/resource-x/create',
                    name: 'Create Employee',
                    index: 2,
                    class: 'nav-link',
                    type: 'NavItem',
                },
                {
                    url: '/resource-x',
                    name: 'List Employee',
                    index: 2,
                    class: 'nav-link',
                    type: 'NavItem',
                },
            ],
            secondaryMenu: [
                {
                    type: 'StyledNavItem',
                    url: '/dashboard',
                    name: 'Dashboard',
                    index: 3,
                    class: 'nav-link',
                    icon: 'icon-bell',
                    badge: {
                        variant: 'danger',
                    },
                    menuItems: [
                        {
                            type: 'header',
                            name: 'You have new notifications',
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-bell-o',
                            name: 'Updates',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-bell-o',
                            name: 'Settings',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                        {
                            type: 'header',
                            name: 'Notification',
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-bell-o',
                            name: 'Updates',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                    ],
                },
                {
                    type: 'StyledNavItem',
                    toggle: '',
                    src: '',
                    index: 4,
                    class: '',
                    icon: 'icon-envelope-letter',
                    badge: {
                        variant: 'info',
                    },
                    alt: '',
                    menuItems: [
                        {
                            type: 'header',
                            name: 'Account',
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-bell-o',
                            name: 'Updates',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                        {
                            type: 'divider',
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-bell-o',
                            name: 'Settings',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                        {
                            type: 'header',
                            name: 'Notification',
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-bell-o',
                            name: 'Updates',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                    ],
                },
                {
                    type: 'LogoNavItem',
                    toggle: '',
                    src: '',
                    index: 4,
                    class: '',
                    badge: {
                        variant: 'warning',
                    },
                    icon: 'icon-list',
                    alt: '',
                    menuItems: [
                        {
                            type: 'header',
                            name: 'Account',
                        },
                        {
                            type: 'item',
                            icon: 'icon-user-follow text-success',
                            name: 'Updates',
                            url: '/users',
                            badge: {
                                variant: 'success',
                            },
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-bell-o',
                            name: 'Settings',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                        {
                            type: 'header',
                            name: 'Settings',
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-user',
                            name: 'Profile',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-wrench',
                            name: 'Settings',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                        {
                            type: 'divider',
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-shield',
                            name: 'Lock account',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                        {
                            type: 'item',
                            icon: 'fa fa-lock',
                            name: 'Logout',
                            url: '/users',
                            badge: {
                                variant: 'info',
                            },
                        },
                    ],
                },
            ],
        },
        styling: {
            base: '16px',
            spacing: '1rem',
            breakpoints: {
                xs: '0em' /* 0px */,
                sm: '30em' /* 480px */,
                md: '64em' /* 1024px */,
                lg: '75em', /* 1200px */
            },
            typography: {
                font: "'Open Sans', sans-serif",
                text: '1rem',
                title: '2rem',
            },
            colors: {
                primary: '#2c97de',
                secondary: '#7F8FA4',
                warning: '#f2c500',
                success: '#1fce6d',
                danger: '#e94b35',
                error: '#e94b35',
            },
        },
        sidebar: {
            header: {},
            form: {},
            nav: {
                items: [
                    {
                        name: 'Dashboard',
                        url: '/dashboard',
                        icon: 'icon-speedometer',
                        badge: {
                            variant: 'info',
                            text: 'NEW',
                        },
                    },
                    {
                        title: true,
                        name: 'Theme',
                        wrapper: {
                            // optional wrapper object
                            element: '', // required valid HTML5 element tag
                            attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
                        },
                        class: '', // optional class names space delimited list for title item ex: "text-center"
                    },
                    {
                        name: 'Colors',
                        url: '/theme/colors',
                        icon: 'icon-drop',
                    },
                    {
                        name: 'Typography',
                        url: '/theme/typography',
                        icon: 'icon-pencil',
                    },
                    {
                        title: true,
                        name: 'Components',
                        wrapper: {
                            element: '',
                            attributes: {},
                        },
                    },
                    {
                        name: 'Base',
                        url: '/base',
                        icon: 'icon-puzzle',
                        children: [
                            {
                                name: 'Breadcrumbs',
                                url: '/base/breadcrumbs',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Cards',
                                url: '/base/cards',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Carousels',
                                url: '/base/carousels',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Collapses',
                                url: '/base/collapses',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Dropdowns',
                                url: '/base/dropdowns',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Forms',
                                url: '/base/forms',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Jumbotrons',
                                url: '/base/jumbotrons',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'List groups',
                                url: '/base/list-groups',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Navs',
                                url: '/base/navs',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Paginations',
                                url: '/base/paginations',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Popovers',
                                url: '/base/popovers',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Progress Bar',
                                url: '/base/progress-bar',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Switches',
                                url: '/base/switches',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Tables',
                                url: '/base/tables',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Tabs',
                                url: '/base/tabs',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Tooltips',
                                url: '/base/tooltips',
                                icon: 'icon-puzzle',
                            },
                        ],
                    },
                    {
                        name: 'Buttons',
                        url: '/buttons',
                        icon: 'icon-cursor',
                        children: [
                            {
                                name: 'Buttons',
                                url: '/buttons/buttons',
                                icon: 'icon-cursor',
                            },
                            {
                                name: 'Button dropdowns',
                                url: '/buttons/button-dropdowns',
                                icon: 'icon-cursor',
                            },
                            {
                                name: 'Button groups',
                                url: '/buttons/button-groups',
                                icon: 'icon-cursor',
                            },
                            {
                                name: 'Brand Buttons',
                                url: '/buttons/brand-buttons',
                                icon: 'icon-cursor',
                            },
                        ],
                    },
                    {
                        name: 'Charts',
                        url: '/charts',
                        icon: 'icon-pie-chart',
                    },
                    {
                        name: 'Icons',
                        url: '/icons',
                        icon: 'icon-star',
                        children: [
                            {
                                name: 'CoreUI Icons',
                                url: '/icons/coreui-icons',
                                icon: 'icon-star',
                                badge: {
                                    variant: 'info',
                                    text: 'NEW',
                                },
                            },
                            {
                                name: 'Flags',
                                url: '/icons/flags',
                                icon: 'icon-star',
                            },
                            {
                                name: 'Font Awesome',
                                url: '/icons/font-awesome',
                                icon: 'icon-star',
                                badge: {
                                    variant: 'secondary',
                                    text: '4.7',
                                },
                            },
                            {
                                name: 'Simple Line Icons',
                                url: '/icons/simple-line-icons',
                                icon: 'icon-star',
                            },
                        ],
                    },
                    {
                        name: 'Notifications',
                        url: '/notifications',
                        icon: 'icon-bell',
                        children: [
                            {
                                name: 'Alerts',
                                url: '/notifications/alerts',
                                icon: 'icon-bell',
                            },
                            {
                                name: 'Badges',
                                url: '/notifications/badges',
                                icon: 'icon-bell',
                            },
                            {
                                name: 'Modals',
                                url: '/notifications/modals',
                                icon: 'icon-bell',
                            },
                        ],
                    },
                    {
                        name: 'Widgets',
                        url: '/widgets',
                        icon: 'icon-calculator',
                        badge: {
                            variant: 'info',
                            text: 'NEW',
                        },
                    },
                    {
                        divider: true,
                    },
                    {
                        title: true,
                        name: 'Extras',
                    },
                    {
                        name: 'Pages',
                        url: '/pages',
                        icon: 'icon-star',
                        children: [
                            {
                                name: 'Login',
                                url: '/login',
                                icon: 'icon-star',
                            },
                            {
                                name: 'Register',
                                url: '/register',
                                icon: 'icon-star',
                            },
                            {
                                name: 'Error 404',
                                url: '/404',
                                icon: 'icon-star',
                            },
                            {
                                name: 'Error 500',
                                url: '/500',
                                icon: 'icon-star',
                            },
                        ],
                    },
                    {
                        name: 'Disabled',
                        url: '/dashboard',
                        icon: 'icon-ban',
                        attributes: { disabled: true },
                    },
                    {
                        name: 'Download CoreUI',
                        url: 'https://coreui.io/react/',
                        icon: 'icon-cloud-download',
                        class: 'mt-auto',
                        variant: 'success',
                        attributes: { target: '_blank', rel: 'noopener' },
                    },
                    {
                        name: 'Try CoreUI PRO',
                        url: 'https://coreui.io/pro/react/',
                        icon: 'icon-layers',
                        variant: 'danger',
                        attributes: { target: '_blank', rel: 'noopener' },
                    },
                ],
            },
            footer: {
                desc: 'you can win',
            },
            minimizer: {},
        },
        breadcrumb: {},
    },
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

