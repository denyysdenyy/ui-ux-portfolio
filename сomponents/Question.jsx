import React from "react";
import Container from "./Container";
import Title from "./UI/Title";
import clientImg from "../public/questions/client.png";
import karinaImg from "../public/questions/karina.png";
import Image from "next/image";


const questions = [
  {
    id: 0,
    img: "",
    text: "Слухай, а якщо в мене немає ТЗ і я взагалі не знаю, чого хочу?",
    author: "Client",
  },
  {
    id: 1,
    img: "",
    text: "Це нормально. Я допоможу розібратися: поставлю правильні питання, витягну суть твого бізнесу і сама зберу структуру. Від тебе — тільки фідбек.",
    author: "Karina",
  },
  {
    id: 2,
    img: "",
    text: "Окей, а ти тільки малюєш чи можеш одразу й «оживити» сайт?",
    author: "Client",
  },
  {
    id: 3,
    img: "",
    text: "Я спеціалізуюсь на дизайні (UI/UX), але працюю в парі з крутими розробниками. Зроблю макети так, щоб верстка пройшла ідеально, або пораджу, на чому краще зібрати сайт.",
    author: "Karina",
  },
  {
    id: 4,
    img: "",
    text: "Що по термінах? Мені треба «на вчора».",
    author: "Client",
  },
  {
    id: 5,
    img: "",
    text: "Магію поза Хогвартсом не обіцяю, але лендінг зазвичай займає 1-2 тижні. Все залежить від того, як швидко ми будемо погоджувати етапи.",
    author: "Karina",
  },
  {
    id: 6,
    img: "",
    text: "А якщо після оплати я захочу щось змінити?",
    author: "Client",
  },
  {
    id: 7,
    img: "",
    text: "Я не зникаю після фінального кліку. Якщо вилізла дрібниця — поправлю безкоштовно. Якщо це велика нова ідея — обговоримо як окреме завдання.",
    author: "Karina",
  },
  {
    id: 8,
    img: "",
    text: "Окей, а як ми починаємо роботу? Потрібно платити одразу?",
    author: "Client",
  },
  {
    id: 9,
    img: "",
    text: "Все просто: обговорюємо деталі, фіксуємо ТЗ, і після передплати 50% я залітаю в макети. Це гарантія мого часу для твого проєкту і твого місця в моєму графіку.",
    author: "Karina",
  },
  { id: 10, img: "", text: "Супер, працюємо! 🔥", author: "Client" },
];

const Question = () => {
  return (
    <section>
      <Container>
        <Title maxWidth={433} title={"Часті запитання"} />
        <div className="flex flex-col gap-[50px]">
          {questions.map((card) => (
            <div
              key={card.id}
              className={`flex gap-[30px] items-center ${card.author === "Karina" ? "self-end flex-row-reverse" : ""}`}
            >
              <Image
                alt={card.author === "Karina" ? "Karina" : "Client"}
                src={card.author === "Karina" ? karinaImg : clientImg}
              />
              <div
                className={`py-[30px] px-[40px] rounded-[30px] rounded-bl-[0]  border border-[#363636] max-w-[1119px] w-[100%] ${card.author === "Karina" ? `bg-white rounded-br-[0] rounded-bl-[30px]` : "bg-[#151515]"} `}
              >
                <p
                  className={`font-medium  text-[24px] ${card.author === "Karina" ? `text-[#151515]` : ""} `}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Question;
