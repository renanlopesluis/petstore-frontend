import { PetTypeService } from './pettype.service';
import { of } from 'rxjs'
import { UtilsService } from '../utils/utils.service';

describe('PetTypeService', () => {
  let utils: UtilsService;
  let httpClientSpy: { get: jasmine.Spy };
  let petTypeService: PetTypeService;
  let types: Array<any>;
  
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    utils = new UtilsService();
    petTypeService = new PetTypeService(<any> httpClientSpy, utils);
    types = [{id: 1, description: "Dog"},{id: 2, description: "Cat"}];
  });
  

  it('should list pet types', () => {
    httpClientSpy.get.and.returnValue(of(types));
    petTypeService.list().subscribe(
      heroes => expect(heroes).toEqual(types, 'types'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
