let criminals = []

const setCriminals = criminalArray => criminals = criminalArray.splice(0)

export const getCriminalsByCrime = crime => {
    return criminals.filter(currentCriminal => {
        for (const conviction of currentCriminal.convictions) {
            if (conviction.toLowerCase() === crime.toLowerCase()) {
                return true
            }
        }
        return false
    })
}

export const useCriminals = () => criminals
export const getCriminals = () => {
    // Load database state into application state
    return fetch("https://api.glassdale.us/criminals", {
        method: "GET"
    })
        .then(response => response.json())
}

