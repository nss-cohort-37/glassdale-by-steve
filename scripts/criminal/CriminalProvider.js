let criminals = []

const setCriminals = criminalArray => criminals = criminalArray.splice(0)

export const getCriminalsByCrime = crime => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.conviction.toLowerCase() === crime.toLowerCase()) {
            return true
        }
        return false
    })
}

export const getCriminalsByOfficer = officerName => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.arrestingOfficer.toLowerCase() === officerName.toLowerCase()) {
            return true
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
        .then(setCriminals)
}

