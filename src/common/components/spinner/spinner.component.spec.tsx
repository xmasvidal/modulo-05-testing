import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as promiseTracker from "react-promise-tracker";

vi.mock('react-promise-tracker', async (importOriginal) => {
    const actual = await importOriginal();
    return {
      ...actual,
      __esModule: true,
      promiseInProgress: true
    }
});

describe('common/components/spinner/spinner.component', () => {


    it('should show the spinner modal when there is a promise in progress', async () => {

        vi.spyOn(promiseTracker, 'usePromiseTracker').mockReturnValue({ promiseInProgress: true });

        render (<SpinnerComponent/>);

        const modal = screen.getByRole('presentation');
        expect(modal).toBeInTheDocument();
    })

    it('should not show the spinner modal when there is not a promise in progress', async () => {

        vi.spyOn(promiseTracker, 'usePromiseTracker').mockReturnValue({ promiseInProgress: false });

        render (<SpinnerComponent/>);

        expect(() => screen.getByRole('presentation')).toThrowError();
    })
})