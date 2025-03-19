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

        it('should create an empty project when the project is not provided', () => {

            let result:viewModel.Project = projectMapper.mapProjectFromApiToVm(undefined);

            expect(result).toEqual(EMPTY_PROJECT);
        });
    });
});