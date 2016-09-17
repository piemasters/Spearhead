/* global moment:false, _:false */

import { config } from '../app/index.config';
import { routerConfig } from '../app/index.route';
import { runBlock } from '../app/index.run';

// SPEARHEAD -------------------------------------------------------------------------------------------------------------------------
// Components
import { MainController } from '../app/spearhead/components/home/home.controller';
import { TechnologiesService } from '../app/spearhead/components/home/technologies/technologies.service';
import { AboutController } from '../app/spearhead/components/about/about.controller';

// Shared
import { NavbarDirective } from '../app/spearhead/shared/navbar/navbar.directive';
import { TimeDirective } from '../app/spearhead/shared/navbar/time.directive';
import { SidebarDirective } from '../app/spearhead/shared/sidebar/sidebar.directive';
// -----------------------------------------------------------------------------------------------------------------------------------

angular.module('gulp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'hc.marked', 'nvd3', 'ngMaterial'])
  .constant('moment', moment)
  .constant('_', _)
  .config(config)
  .config(routerConfig)
  .run(runBlock)

  .controller('MainController', MainController)
  .service('technologies', TechnologiesService)
  .controller('AboutController', AboutController)

  .directive('spearheadNavbar', NavbarDirective)
  .directive('time', TimeDirective)
  .directive('spearheadSidebar', SidebarDirective);
