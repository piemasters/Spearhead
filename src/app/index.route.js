export function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/spearhead/components/home/home.view.html',
            controller: 'MainController',
            controllerAs: 'main'
        });
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'app/spearhead/components/about/about.view.html',
            controller: 'AboutController',
            controllerAs: 'about'
        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
}
