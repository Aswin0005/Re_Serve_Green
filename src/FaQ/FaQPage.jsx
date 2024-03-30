import { useState } from 'react';

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
  const [dropDown, setDropDown] = useState(null);
  const [count,setCount] = useState(0)
  const [questions, setQuestions] = useState(faq);

  const OnDropDowm = (id) => {
    setDropDown(id);
    const updateQues = faq.map((e, ID) => {
      if (id === ID) {
        if (id === dropDown) {
          setCount(count + 1)
          console.log(count)
          if (count%2 == 0) {
            e.boolDropDown = false;
          }else{
            e.boolDropDown = true
          }
        } else {
          setCount(0)
          e.boolDropDown = true;
        }
      } else {
        e.boolDropDown = false;
      }
      return e;
    });
    setQuestions(updateQues);
    // if (dropDown) {
    //   faq[dropDown].boolDropDown = false;
    // }
    // setDropDown(id);
    // if (dropDown === id) {
    //   faq[id].boolDropDown = false;
    // } else {
    //   faq[id].boolDropDown = true;
    // }
    // const updateQues = faq;
    // setQuestions(updateQues);
  };

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
      <div className="absolute bottom-0 h-36 w-full bg-[#14A856]">
        <div className="absolute flex items-center justify-center gap-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col text-[#D9D9D9] justify-center items-center">
            <p>Company</p>
            <hr className="border-[1px] w-[40px]"></hr>
            <button>About</button>
            <button>Orders</button>
            <button>Terms</button>
          </div>
          <div className="w-28 h-28 bg-[#D9D9D9] rounded-full flex flex-col items-center leading-[5px]">
            <img src="Img/Logo.svg" className="w-[70%]"></img>
            <p className="font-moonDance font-semibold">Re-Serve</p>
          </div>
          <div className="flex flex-col text-[#D9D9D9] justify-center items-center">
            <p>Support</p>
            <hr className="border-[1px] w-[40px]"></hr>
            <button>Updates</button>
            <button>Community</button>
            <button>Terms</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQ;
