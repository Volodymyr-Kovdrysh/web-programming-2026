const App = () => {

    const feedbacks = [
        {id: 1, rating: 1, text: 'Text 1' },
        {id: 2, rating: 2, text: 'Text 2' },
        {id: 3, rating: 3, text: 'Text 3' }
    ]

    let a = "World's from Che"
    let b = 2026
    const isValid = false

    if (isValid) {
        a
    } else {
        b = 2028
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

          <p>
              {JSON.stringify(feedbacks)}
          </p>
          </>
  )
}

export default App
