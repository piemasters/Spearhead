describe('technologies service', () => {
  let vm;

  beforeEach(angular.mock.module('gulp'));

  beforeEach(inject(($controller, technologies) => {
    spyOn(technologies, 'getTechnologies').and.returnValue([{}, {}, {}, {}, {}]);
    vm = $controller('MainController');
  }));

  it('should define more than 5 technologies', () => {
    expect(angular.isArray(vm.technologyList)).toBeTruthy();
    expect(vm.technologyList.length === 5).toBeTruthy();
  });
});
