import './MiddleLayer.css'
function MiddleLayer(props) {
    const {  index, taskArray} = props
    return(
        <div className='MiddleLayer'>
            <div className='question_box'>
                <div className='question_no'>
                    QUESTION {!taskArray[index] ? ".." : taskArray[index]._id} of 6</div>
                <div className='question'>
                    {!taskArray[index] ? ".." : taskArray[index].question}</div>
            </div>
        </div>
    );

}
export default MiddleLayer;