<template>
  <div class="home-wrapper">
    <section class="reservation">
      <div class="details">
        <h1 class="title">Same room for less</h1>
        <div class="description">
          <p>Over 40 % hotel rooms either free up or get discounted.</p>
          <p>We will keep an eye on the hotel deals and send you a notification once its price drops</p>
        </div>
      </div>

      <div class="reserv-hotel">
        <div class="reserv-header">
          <div class="do-not-have">
            <RadioButton
              name="reserved"
              :value="false"
              :selected="!hasReservation"
              :onSelect="handleReservationSelected"
            />
            <span>I don't have a reservation</span>
          </div>
          <div class="have-already">
            <RadioButton
              name="reserved"
              :value="true"
              :selected="hasReservation"
              :onSelect="handleReservationSelected"
            />
            <span>I have a reservation</span>
          </div>
        </div>
        <div class="reserv-content">
          <div v-if="hasReservation" class="have-already">
            <p>
              Simply resend your booking confirmation to
              <strong>booking@catchhotels.com</strong> and we will get straight to it
            </p>
          </div>

          <div v-else class="do-not-have">
            <div class="info">
              <div class="email">
                <span>E-mail</span>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div class="booking-service">
                <span>Choose booking service</span>
                <div class="services">
                  <div
                    v-for="id in bookingServices"
                    :key="id"
                    :class="classes.service(id)"
                    @click="onServiceSelect(id)"
                  >
                    <img :src="images.service(id)" alt="service" />
                  </div>
                </div>
              </div>
            </div>
            <div class="reserv-confirm">
              <button>Reserv hotel</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <h2>How it works</h2>

      <div v-if="hasReservation" class="have-already">
        <div class="flow forward">
          <div class="flow-diagram">
            <div class="image image-forward">
              <img src="@/assets/images/ic_forward.png" alt="forward" />
            </div>
          </div>
          <div class="description">
            <p>
              Forward us your
              <br />booking confirmation
            </p>
          </div>
        </div>
        <div class="three-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="flow monitor">
          <div class="flow-diagram">
            <div class="image image-monitor">
              <span>2 500$</span>
              <img src="@/assets/images/ic_search.png" alt="search" />
            </div>
          </div>
          <div class="description">
            <p>
              We monitor the price
              <br />of a hotel room
            </p>
          </div>
        </div>
        <div class="three-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="flow notify">
          <div class="flow-diagram">
            <div class="image image-notify">
              <img src="@/assets/images/ic_inbox.png" alt="inbox" />
              <span>1</span>
            </div>
          </div>
          <div class="description">
            <p>
              Notify you when
              <br />price drops
            </p>
          </div>
        </div>
      </div>

      <div v-else class="do-not-have">
        <div class="flow email">
          <div class="flow-diagram">
            <div class="image image-email">
              <span>your@email.com</span>
            </div>
          </div>
          <div class="description">
            <p>
              Give us your e-mail
              <br />and choose booking site
            </p>
          </div>
        </div>
        <div class="three-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="flow reserve-hotel">
          <div class="flow-diagram">
            <div class="image image-reserve">
              <span>RESERVE HOTEL</span>
              <img src="@/assets/images/ic_hover.png" alt="hover" />
            </div>
          </div>
          <div class="description">
            <p>
              Click RESERVE HOTEL
              <br />and go to booking
            </p>
          </div>
        </div>
        <div class="three-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="flow book">
          <div class="flow-diagram">
            <div class="image image-book">
              <span>BOOK</span>
              <img src="@/assets/images/ic_hover.png" alt="hover" />
            </div>
          </div>
          <div class="description">
            <p>Book hotel you like</p>
          </div>
        </div>
        <div class="three-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="flow monitor">
          <div class="flow-diagram">
            <div class="image image-monitor">
              <span>2 500$</span>
              <img src="@/assets/images/ic_search.png" alt="search" />
            </div>
          </div>
          <div class="description">
            <p>
              We monitor the price
              <br />of a hotel room
            </p>
          </div>
        </div>
        <div class="three-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="flow notify">
          <div class="flow-diagram">
            <div class="image image-notify">
              <img src="@/assets/images/ic_inbox.png" alt="inbox" />
              <span>1</span>
            </div>
          </div>
          <div class="description">
            <p>
              Notify you when
              <br />price drops
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <label>Testimonials</label>
      <h2>We already helped people save money</h2>
      <p>
        Rated&nbsp;
        <strong>8</strong>&nbsp;out of 10 based on&nbsp;
        <u>6 564 reviews</u>&nbsp;on&nbsp;
        <img src="@/assets/images/ic_star.png" alt="star" />&nbsp;
        <strong>Trustpilot</strong>
      </p>

      <Carousel :testimonials="testimonialItems" />
    </section>

    <section class="can-not-book">
      <label>Newsletter</label>
      <h2>Can't book right now?</h2>
      <p>
        Don't need to make a booking right now but dont wnat to forget us?
        Sign up to our highly ocassional newsletter
      </p>

      <div class="subscribe">
        <Subscribe />
        <p>
          By clicking the subscribe button you agree to our
          <u>T&C</u>
        </p>
      </div>
    </section>

    <section class="faq">
      <label>F&Q</label>
      <h2>Frequently asked questions</h2>

      <Accordion :content="faqItems" :multiple="true" />
    </section>

    <section class="contact">
      <h2>Contact</h2>
      <p>Fancy getting in touch with us? Leave us a message</p>

      <div class="form">
        <input type="email" placeholder="Email address*" />
        <PhoneInput />
        <textarea placeholder="Message*" />
        <button>SEND</button>
      </div>
    </section>
  </div>
</template>

<script>
import RadioButton from "@/components/RadioButton";
import Subscribe from "@/components/Subscribe";
import Carousel from "./Carousel";
import Accordion from "./Accordion";
import PhoneInput from "./PhoneInput";
import { code2sign } from "@/helpers/String";

export default {
  name: "Home",
  components: {
    RadioButton,
    Carousel,
    Subscribe,
    Accordion,
    PhoneInput
  },
  data() {
    return {
      hasReservation: false,
      bookingServices: ["booking", "agoda", "hotels"],
      selectedService: "booking",
      testimonialItems: [
        {
          name: "John",
          surname: "Doe",
          avatar: "avatar01",
          role: "Customer",
          review:
            "To make a long story short, CatchHotels just easily saved me $30 on my hotel booking.",
          oldPrice: 237,
          newPrice: 207,
          currencyCode: "USD"
        },
        {
          name: "John",
          surname: "Doe",
          avatar: "avatar02",
          role: "Customer",
          review:
            "To make a long story short, CatchHotels just easily saved me $30 on my hotel booking.",
          oldPrice: 237,
          newPrice: 207,
          currencyCode: "USD"
        },
        {
          name: "John",
          surname: "Doe",
          avatar: "avatar01",
          role: "Customer",
          review:
            "To make a long story short, CatchHotels just easily saved me $30 on my hotel booking.",
          oldPrice: 237,
          newPrice: 207,
          currencyCode: "USD"
        },
        {
          name: "John",
          surname: "Doe",
          avatar: "avatar02",
          role: "Customer",
          review:
            "To make a long story short, CatchHotels just easily saved me $30 on my hotel booking.",
          oldPrice: 237,
          newPrice: 207,
          currencyCode: "USD"
        }
      ],
      faqItems: [
        {
          id: 1,
          active: false,
          question: "How does this work?",
          answer:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know."
        },
        {
          id: 2,
          active: false,
          question: "How much does this service cost?",
          answer:
            "Nothing. Zero. It is and it always will be absolutley free of charge"
        },
        {
          id: 3,
          active: false,
          question: "So how do you guys make money?",
          answer:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know."
        },
        {
          id: 4,
          active: false,
          question: "Is it legal?",
          answer:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know."
        },
        {
          id: 5,
          active: false,
          question: "Does it work with every hotel?",
          answer:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know."
        },
        {
          id: 6,
          active: false,
          question: "Do you guarantee we will get a better deal?",
          answer:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know."
        }
      ],
      classes: {
        service: id => ["service", { active: id === this.selectedService }]
      },
      images: {
        service: id => require(`@/assets/images/${id}.png`)
      }
    };
  },
  methods: {
    onServiceSelect(id) {
      this.selectedService = id;
    },
    handleReservationSelected(value) {
      this.hasReservation = value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.home-wrapper {
  .reservation {
    height: 544px;
    background-image: url("~@/assets/images/header_bg.png");
    background-size: cover;
    position: relative;

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.58);
      opacity: 0.8;
      position: absolute;
      left: 0;
      top: 0;
    }

    * {
      position: relative;
    }

    .details {
      margin: 0 auto;
      width: 1286px;
      height: 100%;

      .title {
        margin: 0px;
        color: #ffffff;
        font-family: Poppins;
        font-size: 72px;
        font-weight: 600;
        top: 90px;
      }
      .description {
        top: 107px;

        p {
          margin: 0;
          color: #ffffff;
          font-family: Rubik;
          font-size: 20px;
          font-weight: 400;
          line-height: 36px;
        }
      }
    }

    .reserv-hotel {
      width: 1288px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
      border-radius: 4px;
      background-color: #ffffff;
      margin: 0 auto;
      bottom: 96px;

      .reserv-header {
        height: 72px;
        border-radius: 4px 4px 0 0;
        background-color: #f7f7f7;
        display: flex;
        align-items: center;
        padding: 20px 0 20px 30px;

        > div {
          display: flex;
          align-items: center;

          &:nth-child(2) {
            margin-left: 54px;
          }

          span {
            margin-left: 18px;
          }
        }
      }
      .reserv-content {
        height: 142px;

        .have-already {
          height: 100%;

          p {
            margin: 0;
            padding: 30px 0 0 24px;
            color: #091613;
            font-family: Rubik;
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;

            strong {
              color: #ff3d11;
              text-decoration: underline;
            }
          }
        }
        .do-not-have {
          display: flex;
          align-items: center;
          height: 100%;

          .info {
            width: 100%;
            height: 100%;
            padding: 28px 135px 21px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
              color: #949494;
              font-family: Poppins;
              font-size: 16px;
              font-weight: 400;
            }

            .email {
              display: flex;
              flex-direction: column;

              input {
                margin-top: 9px;
                width: 216px;
                height: 54px;
                border-radius: 4px;
                border: 1px solid #c7c7c7;
                background-color: #f7f7f7;
                padding: 16px;
                font-family: Rubik;
                font-size: 18px;
                font-weight: 400;

                &::placeholder {
                  color: #8f8f8f;
                }
              }
            }
            .booking-service {
              .services {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 580px;
                margin-top: 9px;

                .service {
                  width: 170px;
                  height: 54px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  opacity: 0.5;
                  cursor: pointer;

                  &.active {
                    box-shadow: 0 3px 13px rgba(0, 0, 0, 0.08);
                    border-radius: 4px;
                    border: 2px solid #09d4a1;
                    background-color: #f7f7f7;
                    opacity: 1;
                  }
                }
              }
            }
          }
          .reserv-confirm {
            height: 100%;

            button {
              width: 232px;
              height: 100%;
              border-radius: 0 0 4px;
              box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
              background-color: #ff3d11;
              font-family: Rubik;
              font-size: 21px;
              font-weight: 500;
              color: #ffffff;
              cursor: pointer;

              &:hover {
                background-color: #e02900;
              }
            }
          }
        }
      }
    }
  }

  .how-it-works {
    padding-top: 218px;
    height: 579px;
    background-color: #ffffff;

    h2 {
      text-align: center;
      color: #091613;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 0;
    }

    > div {
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 34px;
      position: relative;

      &.have-already {
        width: 740px;
      }
      &.do-not-have {
        width: 1344px;
      }

      .flow {
        width: 200px;
        height: 148px;

        .flow-diagram {
          .image {
            margin: 0 auto;

            &.image-forward {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 41px;

              img {
                width: 50px;
                height: 60px;
                object-fit: contain;
              }
            }
            &.image-email {
              width: 180px;
              height: 45px;
              border-radius: 4px;
              border: 1px solid #c7c7c7;
              background-color: #f3f3f3;
              padding: 13px 0 13px 15px;

              span {
                color: #8f8f8f;
                font-family: Rubik;
                font-size: 14px;
                font-weight: 400;
              }
            }
            &.image-reserve {
              width: 177px;
              height: 41px;
              background-color: #ff3d11;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;

              span {
                color: #ffffff;
                font-family: "Source Sans Pro";
                font-size: 18px;
                font-weight: 700;
              }
              img {
                width: 32px;
                height: 45px;
                object-fit: contain;
                position: absolute;
                right: 0;
                bottom: -22px;
              }
            }
            &.image-book {
              width: 177px;
              height: 41px;
              border-radius: 21px;
              background-color: #0593c4;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;

              span {
                color: #ffffff;
                font-family: "Source Sans Pro";
                font-size: 18px;
                font-weight: 700;
              }
              img {
                position: absolute;
                right: 0;
                bottom: -25px;
              }
            }
            &.image-monitor {
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              height: 41px;

              span {
                color: #09d4a1;
                font-family: Rubik;
                font-size: 20px;
                font-weight: 500;
              }
              img {
                width: 49px;
                height: 50px;
                object-fit: contain;
                position: absolute;
                right: 41px;
                top: 1px;
              }
            }
            &.image-notify {
              height: 41px;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;

              img {
                width: 55px;
                height: 49px;
                object-fit: contain;
              }
              span {
                width: 27px;
                height: 27px;
                background-color: #ff3d11;
                border-radius: 50%;
                color: #ffffff;
                font-family: "Source Sans Pro";
                font-size: 16px;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                right: 56px;
                top: -11px;
              }
            }
          }
        }
        .description {
          margin-top: 57px;

          p {
            margin: 0;
            text-align: center;
            color: #091613;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 700;
          }
        }
      }
      .three-dots {
        margin-top: 20px;
        width: 55px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          width: 5px;
          height: 5px;
          background-color: #cacaca;
          border-radius: 50%;
        }
      }
    }
  }

  .testimonials {
    height: 880px;
    background-color: #fafafa;
    text-align: center;
    padding: 100px 20px 100px;

    label {
      color: #09d4a1;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 500;
    }
    h2 {
      color: #000000;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 0;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #7d7d7d;
      font-family: Rubik;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;

      strong {
        color: #091613;
        font-weight: 500;
      }
      img {
        width: 25px;
        height: 24px;
        object-fit: contain;
      }
    }
  }

  .can-not-book {
    height: 557px;
    background-color: #25302d;
    text-align: center;
    padding: 100px 0 100px;

    label {
      color: #09d4a1;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 500;
    }
    h2 {
      color: #ffffff;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 10px 0 10px;
    }
    > p {
      width: 628px;
      height: 53px;
      color: #bfbfbf;
      font-family: Rubik;
      font-size: 20px;
      font-weight: 400;
      line-height: 29px;
      margin: 10px auto;
    }

    .subscribe {
      width: 487px;
      margin: 50px auto 0px;

      p {
        color: #9e9e9e;
        font-family: "Source Sans Pro";
        font-size: 14px;
        font-weight: 400;
        text-align: right;
      }
    }
  }

  .faq {
    background-color: #fafafa;
    text-align: center;
    padding: 100px 0 100px;

    label {
      color: #09d4a1;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 500;
    }
    h2 {
      color: #000000;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 10px 0 10px;
    }
  }

  .contact {
    text-align: center;
    padding: 100px 0 100px;
    height: 816px;

    h2 {
      color: #000000;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 10px 0 10px;
    }
    p {
      color: #949494;
      font-family: Rubik;
      font-size: 20px;
      font-weight: 400;
    }

    .form {
      margin: 46px auto 0;
      width: 725px;

      > * {
        width: 100%;
        margin-bottom: 20px;
        font-family: Rubik;
        font-size: 18px;
        font-weight: 400;
        padding: 30px 30px 30px 37px;
        border: 1px solid #c7c7c7;
        background-color: #f7f7f7;
        border-radius: 4px;
        ::placeholder {
          color: #949494;
        }
      }

      > input {
        height: 80px;
      }
      > textarea {
        height: 160px;
        resize: none;
      }
      > button {
        height: 76px;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        background-color: #ff3d11;
        color: #ffffff;
        font-family: Rubik;
        font-size: 22px;
        font-weight: 500;
        cursor: pointer;

        &:hover {
          background-color: #e02900;
        }
      }
    }
  }
}
</style>