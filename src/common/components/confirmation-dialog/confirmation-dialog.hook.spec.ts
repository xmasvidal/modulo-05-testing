import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from '#common/models';

describe('useConfirmationDialog hook specs', () => {
    
    it('should initialize with correct default values', () => {

      const { result } = renderHook(() => useConfirmationDialog());
  
      expect(result.current.isOpen).toBe(false);
      expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    });

    it('should open the dialog and set the item to delete', () => {

        const { result } = renderHook(() => useConfirmationDialog());
        const mockItem: Lookup = { id: '1', name: 'Item 1' };
    
        act(() => {
          result.current.onOpenDialog(mockItem);
        });
    
        expect(result.current.isOpen).toBe(true);
        expect(result.current.itemToDelete).toEqual(mockItem);
      });

    it('should reset itemToDelete on accept', () => {

        const { result } = renderHook(() => useConfirmationDialog());

        const mockItem: Lookup = { id: '1', name: 'Item 1' };
    
        act(() => {
          result.current.onAccept();
        });
    
        expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    });

    it('should close the dialog', () => {

        const { result } = renderHook(() => useConfirmationDialog());
    
        act(() => {
          result.current.onClose();
        });
    
        expect(result.current.isOpen).toBe(false);
    });
});