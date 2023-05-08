import { useEffect, useState } from "react"
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = 'https://course-api.com/react-tabs-project'

export const Tabs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(0);

    const getTabs = async () => {
        try {
            const response = await fetch(url);
            const body = await response.json();
            setJobs(body);
            setIsLoading(false);
            console.log(body);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    const updateSelectedJob = (index) => {
        setSelectedJob(index);
    }

    useEffect(() => {
        getTabs();
    }, []);

    if(isLoading) {
        return (
            <section className='jobs-center'>
                <div className='loading'></div>
            </section>
        );
    }

    return (
        <section className="jobs-center">
            <BtnContainer jobs={jobs} selectedJob={selectedJob} updateSelectedJob={updateSelectedJob} />
            <JobInfo jobs={jobs} currentItem={selectedJob}/>
        </section>
    );

}


