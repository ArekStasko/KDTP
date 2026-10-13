
export const isMobile = (): boolean => {
    return window.matchMedia("(max-width: 767px)").matches;
};