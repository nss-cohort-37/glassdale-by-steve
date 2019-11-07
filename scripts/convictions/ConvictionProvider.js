let crimes = []

const setCrimes = (crimeArray) => {
    crimes = crimeArray.splice(0)
}

export const getCrimes = () => {
    // Load database state into application state
    return fetch("https://api.glassdale.us/crimes")
        .then(response => response.json())
        .then((crimeArray) => {
            setCrimes(crimeArray)
            return crimes
        })
}
