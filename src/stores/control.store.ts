import { create } from 'zustand'


type View = 'FirstPerson' | 'ThirdPerson';

type Store = {
    view: View
    switchView: () => void
}

/**
 * Store for controlling user interfaces on global level.
 */
export const useControlStore = create<Store>()((set) => ({
    view: 'ThirdPerson',
    switchView: () => set((state) => ({ view: state.view === 'FirstPerson' ? 'ThirdPerson' : 'FirstPerson' }))
}))
