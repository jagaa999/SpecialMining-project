export {};

declare global {
  interface Window {
    sectionRefs: {
      blasting?: React.RefObject<HTMLElement>;
      production?: React.RefObject<HTMLElement>;
      technical?: React.RefObject<HTMLElement>;
      monitoring?: React.RefObject<HTMLElement>;
      quality?: React.RefObject<HTMLElement>;
    };
  }
}
