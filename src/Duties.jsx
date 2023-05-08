
import { v4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';

export const Duties = ({ duties }) => {
    return (
        <div>
            {duties.map((duty) => {
                const id = v4();
                return (
                    <div key={id} className="job-desc">
                        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                        <p>{duty}</p>
                    </div>
                );
            })}
        </div>
    );
}

