import * as projectMapper from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

const API_MODEL_PROJECT : apiModel.Project = {
    id: '1',
    name: 'First Project',
    externalId: undefined,
    comments: undefined,
    isActive: true,
    employees: []
};

const API_MODEL_PROJECT_WITH_EMPLOYEES : apiModel.Project = {
    id: '2',
    name: 'Second Project',
    externalId: undefined,
    comments: undefined,
    isActive: true,
    employees: [
      {
        id: '123',
        isAssigned: true,
        employeeName: 'John Smith',
      }
    ],
};

const EMPTY_PROJECT : viewModel.Project = {
    id: '',
    name: '',
    externalId: '',
    comments: '',
    isActive: false,
    employees: []
};

describe('Project mapper tests', () => {
    describe('map project from API to VM', () => {

        it('should map the project entity from the api model to the vm model', () => {

            let result:viewModel.Project = projectMapper.mapProjectFromApiToVm(API_MODEL_PROJECT);

            expect(result).toEqual(API_MODEL_PROJECT);
        });

        it('should map the project entity from the api model to the vm model with employees', () => {

            let result:viewModel.Project = projectMapper.mapProjectFromApiToVm(API_MODEL_PROJECT_WITH_EMPLOYEES);

            expect(result).toEqual(API_MODEL_PROJECT_WITH_EMPLOYEES);
        });

        it.each([null, undefined])('should create an empty project when the project is not provided, %s', (testCase) => {
            
            let result:viewModel.Project = projectMapper.mapProjectFromApiToVm(testCase);

            expect(result).toEqual(EMPTY_PROJECT);
        });
    });
});