export class MainController {
  constructor (technologies) {
    'ngInject';

    this.technologyList = [];
    this.activate(technologies);
  }

  activate(technologies) {
    this.getTech(technologies);
  }

  getTech(technologies) {
    this.technologyList = technologies.getTechnologies();

    angular.forEach(this.technologyList, (technologyList) => {
      technologyList.rank = Math.random();
    });
  }
}
