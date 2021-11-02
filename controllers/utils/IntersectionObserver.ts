type CallBack = (
  element: IntersectionObserverEntry,
  observer?: IntersectionObserver
) => void;

export const IntersectionObserverRegister = (
  selector: string,
  callBack: CallBack,
  options: IntersectionObserverInit
) => {
  const target = document.querySelector(selector);

  const observer = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
      callBack(element, observer);
    });
  }, options);

  observer.observe(target);
  return observer;
};
