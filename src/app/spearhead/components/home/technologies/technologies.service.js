export class TechnologiesService {
  constructor () {
    'ngInject';

    this.data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': '../../../assets/img/angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': '../../../assets/img/browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': '../../../assets/img/gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': '../../../assets/img/jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': '../../../assets/img/karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': '../../../assets/img/protractor.png'
      },
      {
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': '../../../assets/img/bootstrap.png'
      },
      {
        'title': 'Angular UI Bootstrap',
        'url': 'http://angular-ui.github.io/bootstrap/',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'logo': '../../../assets/img/ui-bootstrap.png'
      },
      {
        'title': 'Sass',
        'url': 'http://sass-lang.com/',
        'description': 'Sass extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
        'logo': '../../../assets/img/sass.png'
      },
      {
        'title': 'ES6 (Babel)',
        'url': 'https://babeljs.io/',
        'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
        'logo': '../../../assets/img/babel.png'
      }
    ];
  }

  getTechnologies() {
    return this.data;
  }
}
