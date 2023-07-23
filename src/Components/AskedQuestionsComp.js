import React, { useState } from "react";
import './AskedQuestionComp.css';

const AskedQuestionComp = ({ question, answer }) => {
  const [expandClicked, setExpandClicked] = useState(false)


  function handleExpand() {
    setExpandClicked(true);

  }
  return (
    <div className="outer-container">
      <div className="inner-container">
        <p>{question}</p>
        <button className="small-button" onClick={handleExpand}>

          {expandClicked && (<>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75Z" fill="#474747" />
            </svg></>)

          }
          {

            !expandClicked && (<>


              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.875 9.375H10.625V3.125C10.625 2.95924 10.5592 2.80027 10.4419 2.68306C10.3247 2.56585 10.1658 2.5 10 2.5C9.83424 2.5 9.67527 2.56585 9.55806 2.68306C9.44085 2.80027 9.375 2.95924 9.375 3.125V9.375H3.125C2.95924 9.375 2.80027 9.44085 2.68306 9.55806C2.56585 9.67527 2.5 9.83424 2.5 10C2.5 10.1658 2.56585 10.3247 2.68306 10.4419C2.80027 10.5592 2.95924 10.625 3.125 10.625H9.375V16.875C9.375 17.0408 9.44085 17.1997 9.55806 17.3169C9.67527 17.4342 9.83424 17.5 10 17.5C10.1658 17.5 10.3247 17.4342 10.4419 17.3169C10.5592 17.1997 10.625 17.0408 10.625 16.875V10.625H16.875C17.0408 10.625 17.1997 10.5592 17.3169 10.4419C17.4342 10.3247 17.5 10.1658 17.5 10C17.5 9.83424 17.4342 9.67527 17.3169 9.55806C17.1997 9.44085 17.0408 9.375 16.875 9.375Z" fill="#474747" />
              </svg>
            </>)

          }


        </button>

      </div>


      {


        expandClicked && (<>
          <div className="answer">
            {answer}

          </div></>)

      }



      <div className="custom-line"></div>
    </div>



  );

}
export default AskedQuestionComp;