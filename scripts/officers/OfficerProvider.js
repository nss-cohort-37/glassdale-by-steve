let officers = []

const setOfficers = (officerArray) => {
    officers = officerArray.splice(0)
}

export const useOfficers = () => officers

export const getOfficers = () => {
    // Load database state into application state
    return fetch("https://api.glassdale.us/officers", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(setOfficers)
}
