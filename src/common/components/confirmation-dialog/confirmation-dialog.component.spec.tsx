import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

const DIALOG_PROPS = {
    isOpen: true,
    onAccept: (vi.fn()),
    onClose: (vi.fn()),
    title: 'Dialog Title',
    labels: {closeButton: 'Close', acceptButton: 'Ok'},
    children: undefined
  };

describe('common/components/confirmation-dialog/confirmation-dialog.component', () => {
    it('should render as expected', () => {
      
        const { getByRole } = render (<ConfirmationDialogComponent {...DIALOG_PROPS} />);

        expect(getByRole('dialog')).toBeInTheDocument();
    });

    it('should execute the onClose action when the close button has been clicked', async () => {
      
        render (<ConfirmationDialogComponent {...DIALOG_PROPS} />);
        const closeButton = await screen.getByRole('button', {
            name: /close-button/i
        });

        await userEvent.click(closeButton);

        expect(DIALOG_PROPS.onClose).toHaveBeenCalled();
    });

    it('should execute the onAccept and the onClose actions when the accept button has been clicked', async () => {
       
        render (<ConfirmationDialogComponent {...DIALOG_PROPS} />);
        const acceptButton = await screen.getByRole('button', {
            name: /accept-button/i
        });
        await userEvent.click(acceptButton);

        expect(DIALOG_PROPS.onAccept).toHaveBeenCalled();
        expect(DIALOG_PROPS.onClose).toHaveBeenCalled();
    });
});