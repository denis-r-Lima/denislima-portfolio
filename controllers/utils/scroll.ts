const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const destination = e.currentTarget.getAttribute("href")
    const targetElement = document.querySelector(destination) as HTMLDivElement
    
    const offsetTop = targetElement.offsetTop

    scroll({
      top: offsetTop,
      behavior: "smooth"
    })
    
  }

  export default navigateTo