const Criminal = (criminal) => {
    return `
        <section class="criminal">
            <header class="criminal__header">
               ${criminal.name.first} ${criminal.name.last}
            </header>
            <div>Age: ${criminal.age}</div>
            <div>
                Crimes:
                ${criminal.convictions.map(currentConviction =>{
                    return currentConviction.crime
                }).join(", ")
                }
            </div>
        </section>
    `
}

export default Criminal