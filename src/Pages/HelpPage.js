
import React from "react";
import TitlesAndSubs from "../Components/TitlesAndSubs";
import AskedQuestionComp from "../Components/AskedQuestionsComp";
import './HelpPage.css'
import TrustBoosterComp from "../Components/TrustBoosterComp";


function HelpPage() {

    const data = [
        {
          "question": "Are my tickets transferable?",
          "answer": "No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details."
        },
        {
          "question": "How long will it take to receive my ticket?",
          "answer": "The tickets will hit your inbox as soon as you complete making the payment."
        },
        {
          "question": "Is my payment secure?",
          "answer": "We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!"
        },
        {
          "question": "What type of payment options do you offer?",
          "answer": "We accept payments via all major international debit cards, credit cards, Google Pay and Apple Pay. Please note that Tickete being an online marketplace does not accept cash payments."
        },
        {
          "question": "Why am I being charged in USD?",
          "answer": "All payments on Tickete are charged in USD. Your account will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal but, we’re working on accepting payments in currencies across the world."
        },
        {
          "question": "Will I get a complete refund if I cancel this ticket?",
          "answer": "The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can’t be canceled once the reservation has been confirmed. For the ones that can be canceled within the permissible cancellation period, you will receive a full refund."
        },
        {
          "question": "How long does it take for a refund to reflect in my account?",
          "answer": "Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to reflect in your account."
        }
      ];
      


    return (
        <div className="container mt-5">

            <TitlesAndSubs title={'Frequently asked questions'} subtitle={''}>/</TitlesAndSubs>
            <div className="row">

                {/* Left side: 2 of 3 columns (Order 1 on small screens) */}
                <div className="col-md-8 with-vertical-line order-1 order-md-1">

                {data.map((el, index) => (
        <AskedQuestionComp key={index} question={el.question} answer={el.answer} />
      ))}
                </div>
                {/* Right side: 1 of 3 columns (Order 2 on small screens) */}
                <div className="  col-md-4 order-2 order-md-2">
                    <div className=" cointainer chatContainer"> 
                <div className="firstDiv">
        <div className="textContainer">
            <TitlesAndSubs title={'Need help?'} subtitle = {"'We're here to help, 24*7"}></TitlesAndSubs>
         
        </div>
        <button className="chatButton">Chat with us</button>
      </div>

      {/* Second Div */}
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className="svgIcon">
        <path d="M43.2188 35.5875C44.3709 33.437 44.9811 31.038 44.9965 28.5984C45.0119 26.1588 44.432 23.7522 43.3071 21.5874C42.1822 19.4225 40.5462 17.5647 38.541 16.1751C36.5359 14.7854 34.222 13.9058 31.8 13.6125C31.0026 11.7526 29.837 10.0732 28.3735 8.67558C26.91 7.27792 25.1788 6.19085 23.2842 5.47981C21.3895 4.76877 19.3706 4.44845 17.3489 4.53815C15.3272 4.62784 13.3446 5.1257 11.5203 6.00173C9.69609 6.87777 8.06798 8.11388 6.73401 9.63565C5.40003 11.1574 4.38777 12.9334 3.75817 14.8566C3.12856 16.7799 2.89463 18.8106 3.07046 20.8267C3.24628 22.8427 3.82822 24.8023 4.78125 26.5875L3.61875 30.6375C3.48402 31.088 3.47367 31.5666 3.58882 32.0225C3.70397 32.4784 3.94032 32.8947 4.27283 33.2272C4.60533 33.5597 5.02159 33.796 5.47751 33.9112C5.93342 34.0263 6.41199 34.016 6.8625 33.8813L10.9125 32.7188C12.5573 33.5955 14.3499 34.1613 16.2 34.3875C17.0172 36.3028 18.2243 38.0269 19.7443 39.4501C21.2643 40.8734 23.064 41.9645 25.0289 42.6542C26.9937 43.3438 29.0805 43.6168 31.1566 43.4557C33.2327 43.2947 35.2525 42.7031 37.0875 41.7188L41.1375 42.8812C41.588 43.016 42.0666 43.0263 42.5225 42.9112C42.9784 42.796 43.3947 42.5597 43.7272 42.2272C44.0597 41.8947 44.296 41.4784 44.4112 41.0225C44.5263 40.5666 44.516 40.088 44.3813 39.6375L43.2188 35.5875ZM40.3313 34.6313C40.2221 34.8019 40.1506 34.9938 40.1215 35.1943C40.0924 35.3948 40.1064 35.5991 40.1625 35.7938L41.325 39.825L37.2938 38.6625C37.0991 38.6064 36.8948 38.5924 36.6943 38.6215C36.4938 38.6506 36.3019 38.7221 36.1313 38.8313C34.7567 39.6423 33.2346 40.1719 31.6535 40.3892C30.0724 40.6066 28.4639 40.5074 26.9215 40.0974C25.3791 39.6873 23.9336 38.9747 22.6692 38.0009C21.4048 37.0271 20.3466 35.8115 19.5563 34.425C23.2428 34.0321 26.6543 32.2911 29.1356 29.5364C31.6169 26.7817 32.9931 23.2075 33 19.5C32.9958 18.6009 32.9142 17.7039 32.7563 16.8188C35.3877 17.4398 37.7323 18.9312 39.4101 21.0514C41.0879 23.1716 42.0005 25.7963 42 28.5C41.9975 30.6556 41.4215 32.7717 40.3313 34.6313Z" fill="#7F2D0F"/>
      </svg>
      </div>

      <div className="custom-line"></div>






                </div>
            </div>
 <div className="custom-div title"> The Tickete promise</div>

 <TrustBoosterComp></TrustBoosterComp>


        </div>



    )

}

export default HelpPage;