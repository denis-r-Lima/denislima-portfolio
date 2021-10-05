const navigateTo = (destination: string) => {
  const targetElement = document.querySelector(destination) as HTMLDivElement;

  const offsetTop = targetElement.offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
};

export default navigateTo;
