
const BtnContainer = ({ jobs, currentElement, updateSelectedJob }) => {
    return (
        <div className="btn-container">
            {jobs.map((item, index) => {
                return (
                    <button key={item.id} onClick={() => updateSelectedJob(index)} className={index === currentElement ? 'job-btn active-btn': 'job-btn'}>
                        {item.company}
                    </button>
                );
            })}
        </div>
    );
}

export default BtnContainer;
