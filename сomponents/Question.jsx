import React from "react";
import Container from "./Container";
import Title, { Pink } from "./UI/Title";
import clientImg from "../public/questions/client.png";
import karinaImg from "../public/questions/karina.png";
import Image from "next/image";

const questions = [
  {
    id: 0,
    text: "Слухай, а якщо в мене немає ТЗ і я взагалі не знаю, чого хочу?",
    author: "Client",
  },
  {
    id: 1,
    text: "Це нормально. Я допоможу розібратися: поставлю правильні питання, витягну суть твого бізнесу і сама зберу структуру. Від тебе — тільки фідбек.",
    author: "Karina",
  },
  {
    id: 2,
    text: "Окей, а ти тільки малюєш чи можеш одразу й «оживити» сайт?",
    author: "Client",
  },
  {
    id: 3,
    text: "Я спеціалізуюсь на дизайні (UI/UX), але працюю в парі з крутими розробниками. Зроблю макети так, щоб верстка пройшла ідеально, або пораджу, на чому краще зібрати сайт.",
    author: "Karina",
  },
  {
    id: 4,
    text: "Що по термінах? Мені треба «на вчора».",
    author: "Client",
  },
  {
    id: 5,
    text: "Магію поза Хогвартсом не обіцяю, але лендінг зазвичай займає 1-2 тижні. Все залежить від того, як швидко ми будемо погоджувати етапи.",
    author: "Karina",
  },
  {
    id: 6,
    text: "А якщо після оплати я захочу щось змінити?",
    author: "Client",
  },
  {
    id: 7,
    text: "Я не зникаю після фінального кліку. Якщо вилізла дрібниця — поправлю безкоштовно. Якщо це велика нова ідея — обговоримо як окреме завдання.",
    author: "Karina",
  },
  {
    id: 8,
    text: "Окей, а як ми починаємо роботу? Потрібно платити одразу?",
    author: "Client",
  },
  {
    id: 9,
    text: "Все просто: обговорюємо деталі, фіксуємо ТЗ, і після передплати 50% я залітаю в макети. Це гарантія мого часу для твого проєкту і твого місця в моєму графіку.",
    author: "Karina",
  },
  { id: 10, text: "Супер, працюємо! 🔥", author: "Client" },
];

const Question = () => {
  return (
    <section className="questions">
      <Container>
        <Title maxWidth={433}>
          Часті <Pink>запитання</Pink>
        </Title>
        <div className="flex flex-col gap-[clamp(15px,2vw,30px)] py-[20px]">
          {questions.map((card) => {
            const isKarina = card.author === "Karina";
            return (
              <div key={card.id}>
                <div
                  className={`flex gap-[clamp(10px,2vw,30px)] items-end ${isKarina ? "self-end flex-row-reverse" : ""}`}
                >
                  <Image
                    alt={isKarina ? "Karina" : "Client"}
                    src={isKarina ? karinaImg : clientImg}
                    className="shrink-0 w-[clamp(50px,6vw,100px)] h-[clamp(50px,6vw,100px)]"
                  />
                  <div
                    className={`py-[clamp(15px,2vw,30px)] px-[clamp(15px,2.5vw,40px)] rounded-[clamp(15px,2vw,30px)] rounded-bl-[0] border border-[#363636] max-w-[1119px] w-[100%] ${isKarina ? "bg-white rounded-br-[0] rounded-bl-[clamp(15px,2vw,30px)]" : "bg-[#151515]"}`}
                  >
                    <p
                      className={`font-medium text-[clamp(16px,1.8vw,24px)] ${isKarina ? "text-[#151515]" : ""}`}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Question;
