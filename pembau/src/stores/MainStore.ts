import { create } from "zustand";


interface MainStore {

    // Typed man Components so?
    // oder doch lieber einfach als String und dann mappen?
    // -> und braucht man hier überhaupt State? ggf. macht ja das Routing alles..
    // currentPage: ((params:any)=>JSX.Element)

    menuOpen: boolean;
    setMenuOpen: (value: boolean) => void;
    toggleMenuOpen: () => void;

}


export const useMainStore = create<MainStore>((set) => ({

    menuOpen: false,
    setMenuOpen: (value: boolean) => set({ menuOpen: value }),
    toggleMenuOpen: () => set((state) => ({ menuOpen: !state.menuOpen }))

})



)
