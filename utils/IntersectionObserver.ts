type CallBack = (
  element: IntersectionObserverEntry,
  observer?: IntersectionObserver
) => void;

export const IntersectionObserverRegister = (
  selectors: string[],
  callBack: CallBack,
  options: IntersectionObserverInit
) => {
  const observer = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
      callBack(element, observer);
    });
  }, options);

  for (let selector of selectors) {
    const targets = document.querySelectorAll(selector);
    targets.forEach((target) => observer.observe(target));
  }
  return observer;
};
