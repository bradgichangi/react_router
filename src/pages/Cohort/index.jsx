import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CohortCard from "../../components/CohortCard"
import axios from 'axios'

const Cohort = () => {

    let { name } = useParams()

    const [cohortData, setCohortData] = useState({
        namesake: { name: 'Test' },
        students: []
    })

    useEffect(() => {

        async function getCohortData() {
            const response = await axios.get(`https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/${name}/roster.json`)
            setCohortData(response.data)
        }

        getCohortData()
    }, [name])

    function displayCohort() { 
        console.log(cohortData)
        return <CohortCard data={cohortData} />
    }

    return (

        displayCohort()

    )
}

export default Cohort
