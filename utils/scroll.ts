const navigateTo = (destination: string) => {
  const targetElement = document.querySelector(destination) as HTMLDivElement;
  if (targetElement) {
    const offsetTop = targetElement.offsetTop;

    setTimeout(
      () =>
        scroll({
          top: offsetTop,
          behavior: "smooth",
        }),
      150
    );
  }
};

export default navigateTo;
