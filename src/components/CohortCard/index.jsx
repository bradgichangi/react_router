import React from "react"


const CohortCard = ({data}) => {

    console.log(data)
    console.log(data.namesake)

    return (
        <div className="cohort-card">
            <h1>{data.namesake.name}</h1>
            <h2>Students</h2>
            <ul>
                <p>Students</p>
            </ul>
        </div>
    )
}

export default CohortCard
