/* eslint-disable max-len */
import React from "react";
import Title, { Pink } from "./UI/Title";
import Container from "./Container";
import Button from "./UI/Button";

const reviews = [
  {
    id: 0,
    text: "Каріна чудово впоралась із завданнями, які перед нею стояли. Вона дуже активно брала участь у роботі над проєктом і постійно пропонувала свої ідеї та підходи. Усі етапи роботи були виконані в зазначені терміни. Співпраця з нею була дуже позитивною, тому ми з радістю плануємо працювати з нею знову в майбутніх проєктах!",
    isPink: false,
  },
  {
    id: 1,
    text: "Було приємно співпрацювати, ти уважна до деталей і терпима до правок, рада, що в результаті ми змогли з тобою знайти спільне розуміння того, як повинен виглядати сайт і яким я хотіла б його бачити.",
    isPink: true,
  },
  {
    id: 2,
    text: "Привіт, Карина. Дуже дякую за твій дизайн і твою роботу. Виглядає чудово!!! Мені дуже подобається. Для мене це просто ідеально. Чудова робота!!",
    isPink: false,
  },
  {
    id: 3,
    text: "Каріна, я хочу сказати тобі величезне дякую!\n\nТи створила для мене справжній магічний сайт - і найнеймовірніше, що ти відчула мене, не знаючи особисто, просто поглянувши на мій Instagram. Ти вловила все: мою енергію, естетику, настрій.\n\nКоли я вперше відкрила сайт, у мене були мурашки. Це було саме те, що я уявляла в своїй голові. Навіть додати нічого - все настільки ідеально, що я просто сиділа з відкритим ротом і захопленням.\n\nТи дуже тонко відчуваєш людей, і це неймовірний дар. Я від душі тебе рекомендую! З тобою хочеться працювати знову і знову. Дякую тобі за красу, легкість і точність до найдрібніших деталей.",
    isPink: true,
  },
  {
    id: 4,
    text: "Дякую, Карина, за вашу підтримку та дуже хорошу співпрацю.",
    isPink: false,
  },
  {
    id: 5,
    text: "Дуже сподобалось працювати з Каріною вона професійна, реактивна зробила швидше, ніж був вказаний термін Буду ще працювати з нею!",
    isPink: false,
  },
  {
    id: 6,
    text: "Робота була виконана вчасно, без затримок чітко по тз. Планую надалі співпрацювати з виконавцем. Рекомендую.",
    isPink: false,
  },
  {
    id: 7,
    text: "Дякую Каріні за відмінно виконану роботу!Вона постійно була на зв'язку, активно брала участь у роботі над проєктом, пропонувала своє бачення та ефективні рішення для проблем.\n\nРекомендую Каріну як надійного і креативного фахівця для майбутніх проєктів. Ми в свою чергу будемо продовжувати співпрацю!",
    isPink: false,
  },
  {
    id: 8,
    text: "Мені було велике задоволення працювати з Каріною. Вона відповідала за розробку інтерактивного прототипу нашого додатку та скріншотів для Google та Apple Store. Каріна — дуже креативна, швидка та прямолінійна людина. Я можу рекомендувати співпрацю з нею.",
    isPink: true,
  },
  {
    id: 9,
    text: "Дякую, Карина, за вашу підтримку та дуже хорошу співпрацю.",
    isPink: false,
  },
  {
    id: 10,
    text: "Робота чітко оформлена, контактність на вищому рівні.",
    isPink: true,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="flex flex-col  items-center">
      <Container>
        <Title maxWidth={587} className="  top-[360px] relative ">
          {" "}
          <Pink>Що кажуть </Pink> клієнти про мене
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] items-start mb-[200px] ">
          {/* Колонка 1 */}
          <div className="flex flex-col gap-[20px] mt-[390px]">
            {[reviews[0], reviews[1], reviews[2]].map((review) => (
              <div
                className={`rounded-[27px] p-[40px] ${review.isPink ? "bg-secondary" : "bg-[#fff]"}`}
                key={review.id}
              >
                <p
                  className={`whitespace-pre-line font-medium max-w-[557px] ${review.isPink ? "text-white" : "text-[#000]"}`}
                >
                  {review.text}
                </p>
              </div>
            ))}
          </div>
          {/* Колонка 2 */}
          <div className="flex mt-[75px] flex-col gap-[20px]">
            {[reviews[3], reviews[4], reviews[5]].map((review) => (
              <div
                className={`rounded-[27px] p-[40px] ${review.isPink ? "bg-secondary" : "bg-[#fff]"}`}
                key={review.id}
              >
                <p
                  className={`whitespace-pre-line font-medium max-w-[450px] ${review.isPink ? "text-white" : "text-[#000]"}`}
                >
                  {review.text}
                </p>
              </div>
            ))}
          </div>
          {/* Колонка 3 */}
          <div className="flex flex-col gap-[20px]">
            {[reviews[6], reviews[7], reviews[8]].map((review) => (
              <div
                className={`rounded-[27px] p-[40px] ${review.isPink ? "bg-secondary" : "bg-[#fff]"}`}
                key={review.id}
              >
                <p
                  className={`whitespace-pre-line font-medium max-w-[433px] ${review.isPink ? "text-white" : "text-[#000]"}`}
                >
                  {review.text}
                </p>
              </div>
            ))}
            <div className="flex gap-[20px]">
              <div className="  rounded-[27px] p-[40px] bg-[#fff]">
                <p className="text-[#000] font-medium">{reviews[9].text}</p>
              </div>
              <div className="rounded-[27px] p-[40px] bg-secondary">
                <p className="text-white font-medium">{reviews[10].text}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Button />
    </section>
  );
};

export default Reviews;
