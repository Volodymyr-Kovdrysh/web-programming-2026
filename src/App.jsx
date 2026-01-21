const App = () => {

    let a = "World's from Che"
    let b = 2026
    const isValid = false

    if (isValid) {
        a
    } else {
        b
    }

    return (
      <>
  <h1>


Hello, {a} !!
    </h1>
      <p>
          якийсь текст

          { isValid ? a : b + 2}

      </p>
          </>
  )
}

export default App
