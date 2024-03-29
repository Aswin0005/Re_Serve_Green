import { useState } from "react";

const FaQ = () => {
    
     let faq = [
       {
         id: 1,
         ques: 'How does Re-Serve work?',
         ans: 'Re-Serve connects users with local businesses offering surplus food at discounted prices. Users can browse available deals, purchase them through the app, and pick up the food during specified times.',
         boolDropDown: false,
       },
       {
         id: 2,
         ques: 'Is the food safe to eat?',
         ans: 'Yes, all food offered through Re-Serve is from reputable businesses that adhere to strict food safety standards. They ensure that the food is safe, fresh, and of high quality.',
         boolDropDown: false,
       },
       {
         id: 3,
         ques: 'How do I pay for the food?',
         ans: 'Payments are securely processed through the app using various methods such as credit/debit cards, digital wallets, or other payment options available in your region.',
         boolDropDown: false,
       },
       {
         id: 4,
         ques: 'What happens if I miss the pickup window?',
         ans: "It's crucial to pick up your order during the designated window. If you miss, the food is shown to everyone and can be placed by anyone.",
         boolDropDown: false,
       },
     ];
    const [dropDown,setDropDown] = useState(null)

   const [questions,setQuestions] = useState(faq)
   
    const OnDropDowm = (id) => {
        if(dropDown) {faq[dropDown].boolDropDown = false} 
        setDropDown(id)
        if(dropDown === id){
            faq[id].boolDropDown = false;
        }else{
        faq[id].boolDropDown = true;
        }
        const updateQues = faq
        setQuestions(updateQues)
    }

  return (
    <div className="relative h-[100vh] bg-man overflow-hidden">
      <p className="absolute z-10 font-lato font-extrabold text-7xl left-1/2 -translate-x-1/2 top-[20%]">
        FAQ's
      </p>

      {questions.map((e, id) => {
        return (
          <div
            className="relative z-10 w-[800px] h-auto bg-[#f5f5f5] rounded-lg shadow-xl p-3 left-1/2 top-[35%] -translate-x-1/2 mb-4 font-lato font-semibold space-y-4"
            key={id}
          >
            <div className="flex justify-between ">
              <p>{e.ques}</p>
              <button className="w-5 mr-2">
                <img
                  src="Img/ArrowDown_pic.svg"
                  onClick={() => OnDropDowm(id)}
                ></img>
              </button>
            </div>
            <div className={`${!e.boolDropDown && 'hidden'} font-normal`}>
              <p>{e.ans}</p>
            </div>
          </div>
        );
      })}

      {/* Lines Bg */}
      <div className="absolute w-[200px] bottom-16">
        <img src="Img/Ellipse 4.svg"></img>
      </div>

      {/* Circle bg */}
      <div className="absolute w-32 h-32 bg-[#14A856] rounded-full blur-sm top-1/4 left-1/4"></div>
      <div className="absolute w-72 h-72 bg-[#14A856] rounded-full blur-sm top-[30%] right-[23%] opacity-70"></div>

      {/* Lines Bg */}
      <div className="absolute top-0 bg-lines w-1/2 h-full ">
        {/* <img src="Img/Lines1_pic.png"></img> */}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 h-32 w-full bg-[#14A856]"></div>
    </div>
  );
};

export default FaQ;
