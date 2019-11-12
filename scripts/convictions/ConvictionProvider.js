let crimes = []

const setCrimes = (crimeArray) => {
    crimes = crimeArray.splice(0)
}

export const useCrimes = () => crimes.sort()

export const getCrimes = () => {
    // Load database state into application state
    return fetch("http://criminals.glassdale.us/crimes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(setCrimes)
}
