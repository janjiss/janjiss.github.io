import * as React from "react"

const ReadingProgress = () => {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setWidth((scrollTop / docHeight) * 100)
      }
    }

    window.addEventListener("scroll", updateProgress, { passive: true })
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return <div className="reading-progress" style={{ width: `${width}%` }} />
}

export default ReadingProgress
