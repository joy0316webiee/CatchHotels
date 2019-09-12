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
        <div class="lets-start">
          <h2>Let's start</h2>
        </div>
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
                <input v-model="reservationEmail" type="email" placeholder="your@email.com" />
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
                    <img :src="images.service(id)" :alt="id" />
                  </div>
                </div>
              </div>
            </div>
            <div class="reserv-confirm">
              <button @click="onReserveHotel">Reserv hotel</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section :class="classes.howitworksWrapper()">
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
        Don't need to make a booking right now but don't want to forget us?
        <br />Sign up to our highly ocassional newsletter
      </p>

      <div class="subscribe">
        <Subscribe :onSubcribe="services.subscribeNewsletter" />
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

      <Contact :onSend="services.writeUs" />
    </section>
  </div>
</template>

<script>
import RadioButton from "@/components/RadioButton";
import Subscribe from "@/components/Subscribe";
import Carousel from "./Carousel";
import Accordion from "./Accordion";
import Contact from "./Contact";
import { code2sign } from "@/helpers/String";
import services from "@/services";

export default {
  name: "Home",
  components: {
    RadioButton,
    Carousel,
    Subscribe,
    Accordion,
    Contact
  },
  data() {
    return {
      services,
      reservationEmail: "",
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
          title: "How does this work?",
          explanation:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know.",
          order: 1
        },
        {
          id: 2,
          title: "How much does this service cost?",
          explanation:
            "Nothing. Zero. It is and it always will be absolutley free of charge",
          order: 2
        },
        {
          id: 3,
          title: "So how do you guys make money?",
          explanation:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know.",
          order: 3
        },
        {
          id: 4,
          title: "Is it legal?",
          explanation:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know.",
          order: 4
        },
        {
          id: 5,
          title: "Does it work with every hotel?",
          explanation:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know.",
          order: 5
        },
        {
          id: 6,
          title: "Do you guarantee we will get a better deal?",
          explanation:
            "Good one, You might have already noticed that quite often you get a better price if you book last minute deal. Plane tickets, tours, food that is about to expire,... Well and hotel rooms are no exception to this. CatchHotels.com allows you to combine the luxury of having a hotel reservation sorted ahead of time with helping you get the best price by keeping an eye on the price. Once the same room on the same dates gets discounted, we will let you know.",
          order: 6
        }
      ],
      classes: {
        service: id => ["service", { active: id === this.selectedService }],
        howitworksWrapper: () => ["how-it-works", { low: this.hasReservation }]
      },
      images: {
        service: id => require(`@/assets/images/${id}.png`)
      }
    };
  },
  methods: {
    onReserveHotel() {
      const { success, message } = services.reserveHotels(
        this.reservationEmail,
        this.selectedService
      );

      if (success) {
        this.$notify({
          group: "notify",
          type: "success",
          title: "Hotel Reservation",
          text: message
        });
      } else {
        this.$notify({
          group: "notify",
          type: "error",
          title: "Hotel Reservation",
          text: "Faild, try again!"
        });
      }
    },
    onServiceSelect(id) {
      this.selectedService = id;
    },
    handleReservationSelected(value) {
      this.hasReservation = value;
    }
  },
  created() {
    const { data: testimonials } = services.listAllTestimonials();
    const { data: faq } = services.listAllFAQ();

    if (testimonials) this.testimonialItems = testimonials;
    if (faq) this.faqItems = faq;
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

    @include screen-md {
      height: 400px;
    }
    @include screen-xs {
      height: 212px;
      background-image: url("~@/assets/images/header_bg_mobile.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

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

      @include screen-lg {
        width: 1100px;
      }
      @include screen-md {
        width: 850px;
      }
      @include screen-sm {
        width: 80%;
        text-align: center;
      }
      @include screen-xs {
        width: 100%;
      }

      .title {
        margin: 0px;
        color: #ffffff;
        font-family: Poppins;
        font-size: 72px;
        font-weight: 600;
        top: 90px;

        @include screen-md {
          font-size: 60px;
        }
        @include screen-sm {
          font-size: 38px;
        }
        @include screen-xs {
          top: 40px;
          font-size: 26px;
        }
      }
      .description {
        top: 107px;

        @include screen-xs {
          top: 57px;
          padding: 0 33px 0 31px;
        }

        p {
          margin: 0;
          color: #ffffff;
          font-family: Rubik;
          font-size: 20px;
          font-weight: 400;
          line-height: 36px;

          @include screen-md {
            font-size: 17px;
          }
          @include screen-sm {
            font-size: 15px;
            line-height: 30px;
          }
          @include screen-xs {
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }

    .reserv-hotel {
      width: 1286px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
      border-radius: 4px;
      background-color: #ffffff;
      margin: 0 auto;
      bottom: 96px;

      @include screen-lg {
        width: 1100px;
      }
      @include screen-md {
        width: 850px;
        bottom: 75px;
      }
      @include screen-sm {
        width: 100%;
        max-width: 600px;
      }
      @include screen-xs {
        bottom: 0px;
        border-radius: 0px;
      }

      .lets-start {
        display: none;
        height: 95px;

        @include screen-sm {
          display: block;
        }

        h2 {
          text-align: center;
          padding-top: 25px;
          color: #000000;
          font-family: Poppins;
          font-size: 33px;
          font-weight: 600;

          @include screen-xs {
            font-size: 24px;
            margin: 0;
          }
        }
      }
      .reserv-header {
        height: 72px;
        border-radius: 4px 4px 0 0;
        background-color: #f7f7f7;
        display: flex;
        align-items: center;
        padding: 20px 0 20px 30px;

        @include screen-md {
          height: 60px;
        }
        @include screen-xs {
          padding: 14px 0px 15px 10px;
          height: 38px;
        }

        > div {
          display: flex;
          align-items: center;

          &:nth-child(2) {
            margin-left: 54px;

            @include screen-md {
              margin-left: 30px;
            }
            @include screen-xs {
              margin-left: 4px;
            }
          }

          span {
            margin-left: 18px;

            @include screen-md {
              font-size: 15px;
            }
            @include screen-xs {
              font-size: 12px;
              margin-left: 4px;
            }
          }
        }
      }
      .reserv-content {
        height: 142px;

        @include screen-md {
          height: 100px;
        }
        @include screen-sm {
          background-color: #f7f7f7;
          height: auto;
          padding-bottom: 20px;
        }
        @include screen-xs {
          padding-bottom: 14px;
        }

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

            @include screen-md {
              font-size: 15px;
            }
            @include screen-xs {
              padding: 10px 25px 0 14px;
              font-size: 14px;
              line-height: 20px;
              font-weight: 500;
            }

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

          @include screen-sm {
            flex-direction: column;
          }

          .info {
            width: 100%;
            height: 100%;
            padding: 28px 135px 21px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @include screen-lg {
              padding: 28px 10px 21px 30px;
            }
            @include screen-md {
              padding: 12px 50px 12px 30px;
            }
            @include screen-sm {
              padding: 12px 10px 37px 10px;
              flex-direction: column;
            }
            @include screen-xs {
              padding: 12px 10px 28px 10px;
            }

            span {
              color: #949494;
              font-family: Poppins;
              font-size: 16px;
              font-weight: 400;

              @include screen-md {
                font-size: 14px;
              }
              @include screen-sm {
                color: #091613;
              }
            }

            .email {
              display: flex;
              flex-direction: column;

              @include screen-sm {
                width: 100%;
              }

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

                @include screen-md {
                  margin-top: 6px;
                  width: 150px;
                  height: 40px;
                  font-size: 14px;
                }
                @include screen-sm {
                  width: 100%;
                }
                @include screen-xs {
                  font-size: 16px;
                }

                &::placeholder {
                  color: #8f8f8f;
                }
              }
            }
            .booking-service {
              @include screen-sm {
                margin-top: 20px;
                width: 100%;
              }

              .services {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 580px;
                margin-top: 9px;

                @include screen-md {
                  width: 400px;
                }
                @include screen-sm {
                  width: 100%;
                }

                .service {
                  width: 170px;
                  height: 54px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  opacity: 0.5;
                  cursor: pointer;

                  @include screen-md {
                    width: 126px;
                    height: 40px;
                  }

                  &.active {
                    box-shadow: 0 3px 13px rgba(0, 0, 0, 0.08);
                    border-radius: 4px;
                    border: 2px solid #09d4a1;
                    background-color: #f7f7f7;
                    opacity: 1;
                  }

                  img {
                    @include screen-md {
                      max-width: 90px;

                      &[alt="agoda"] {
                        max-width: 55px;
                      }
                    }
                  }
                }
              }
            }
          }
          .reserv-confirm {
            height: 100%;

            @include screen-sm {
              width: 100%;
              padding: 0 10px;
            }

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
              border: none;
              cursor: pointer;

              @include screen-md {
                width: 180px;
                font-size: 16px;
              }
              @include screen-sm {
                width: 100%;
                height: 50px;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
                border-radius: 4px;
                background-color: #09d4a1;
              }

              &:hover {
                background-color: #e02900;

                @include screen-sm {
                  background-color: #05ad83;
                }
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

    @include screen-md {
      padding-top: 150px;
      height: 420px;
    }
    @include screen-sm {
      height: auto;
      padding: 445px 0 63px;

      &.low {
        padding-top: 245px;
      }
    }
    @include screen-xs {
      &.low {
        padding-top: 275px;
      }
    }

    h2 {
      text-align: center;
      color: #091613;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 0;

      @include screen-md {
        font-size: 38px;
      }
      @include screen-sm {
        font-size: 33px;
      }
      @include screen-xs {
        font-size: 24px;
      }
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

        @include screen-lg {
          width: 650px;
        }
        @include screen-sm {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
      }
      &.do-not-have {
        width: 1344px;

        @include screen-lg {
          width: 1280px;
        }
        @include screen-md {
          margin-top: 25px;
          width: 900px;
        }
        @include screen-sm {
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        @include screen-xs {
          margin-top: 17px;
        }
      }

      .flow {
        width: 200px;
        height: 148px;

        @include screen-sm {
          width: 300px;
          height: auto;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        @include screen-xs {
          width: 200px;
        }

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

                @include screen-md {
                  width: 40px;
                  height: 40px;
                }
              }
            }
            &.image-email {
              width: 180px;
              height: 45px;
              border-radius: 4px;
              border: 1px solid #c7c7c7;
              background-color: #f3f3f3;
              padding: 13px 0 13px 15px;

              @include screen-md {
                padding: 7px 0 7px 12px;
                width: 140px;
                height: 35px;
              }
              @include screen-sm {
                width: 100%;
                height: 45px;
                padding: 9px 0 9px 12px;
              }

              span {
                color: #8f8f8f;
                font-family: Rubik;
                font-size: 14px;
                font-weight: 400;

                @include screen-md {
                  font-size: 13px;
                }
                @include screen-sm {
                  font-size: 14px;
                }
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

              @include screen-md {
                width: 144px;
                height: 35px;
              }
              @include screen-sm {
                width: 100%;
                height: 45px;
              }

              span {
                color: #ffffff;
                font-family: "Source Sans Pro";
                font-size: 18px;
                font-weight: 700;

                @include screen-md {
                  font-size: 15px;
                }
                @include screen-md {
                  font-size: 18px;
                }
              }
              img {
                width: 32px;
                height: 45px;
                object-fit: contain;
                position: absolute;
                right: 0;
                bottom: -22px;

                @include screen-md {
                  width: 23px;
                  height: 40px;
                  right: 0px;
                }
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

              @include screen-md {
                width: 140px;
                height: 35px;
              }
              @include screen-sm {
                width: 100%;
                height: 45px;
              }

              span {
                color: #ffffff;
                font-family: "Source Sans Pro";
                font-size: 18px;
                font-weight: 700;

                @include screen-md {
                  font-size: 15px;
                }
                @include screen-sm {
                  font-size: 18px;
                }
              }
              img {
                position: absolute;
                right: 0;
                bottom: -25px;

                @include screen-md {
                  width: 23px;
                  height: 31px;
                  object-fit: contain;
                  top: 20px;
                  right: 0px;
                }
              }
            }
            &.image-monitor {
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              height: 41px;

              @include screen-md {
                width: 155px;
              }

              span {
                color: #09d4a1;
                font-family: Rubik;
                font-size: 20px;
                font-weight: 500;

                @include screen-md {
                  font-size: 18px;
                }
                @include screen-sm {
                  font-size: 20px;
                }
              }
              img {
                width: 49px;
                height: 50px;
                object-fit: contain;
                position: absolute;
                right: 41px;
                top: 1px;

                @include screen-md {
                  width: 35px;
                  height: 35px;
                  right: 31px;
                  top: 6px;
                }
                @include screen-sm {
                  width: 49px;
                  height: 50px;
                  right: 21px;
                  top: 0px;
                }
              }
            }
            &.image-notify {
              height: 41px;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;

              @include screen-md {
                width: 150px;
              }

              img {
                width: 55px;
                height: 49px;
                object-fit: contain;

                @include screen-md {
                  width: 35px;
                  height: 30px;
                }
                @include screen-sm {
                  width: 54px;
                  height: 48px;
                }
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

                @include screen-md {
                  width: 20px;
                  height: 20px;
                  font-size: 13px;
                  right: 50px;
                  top: 0px;
                }
                @include screen-sm {
                  width: 27px;
                  height: 27px;
                  right: 37px;
                  top: -11px;
                }
              }
            }
          }
        }
        .description {
          margin-top: 57px;

          @include screen-md {
            margin-top: 35px;
          }
          @include screen-sm {
            margin-top: 20px;
          }

          p {
            margin: 0;
            text-align: center;
            color: #091613;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 700;

            @include screen-md {
              font-size: 12px;
            }
            @include screen-sm {
              font-size: 16px;
            }
          }
        }
      }
      .three-dots {
        margin-top: 20px;
        width: 55px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include screen-md {
          width: 25px;
        }
        @include screen-sm {
          height: 30px;
          flex-direction: column;
          margin-top: 16px;
          margin-bottom: 16px;
        }

        span {
          width: 5px;
          height: 5px;
          background-color: #cacaca;
          border-radius: 50%;

          @include screen-md {
            width: 3px;
            height: 3px;
          }
          @include screen-sm {
            width: 4px;
            height: 4px;
          }
        }
      }
    }
  }

  .testimonials {
    height: 880px;
    background-color: #fafafa;
    text-align: center;
    padding: 100px 20px 100px;

    @include screen-md {
      height: 650px;
      padding: 70px 20px 70px;
    }
    @include screen-sm {
      padding: 20px 10px 20px;
      height: 440px;
    }
    @include screen-xs {
      height: auto;
      padding: 20px 10px 50px;
    }

    label {
      color: #09d4a1;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 500;

      @include screen-md {
        font-size: 19px;
      }
      @include screen-sm {
        color: #000000;
        font-family: Poppins;
        font-size: 33px;
        font-weight: 600;
      }
      @include screen-xs {
        font-size: 24px;
      }
    }
    h2 {
      color: #000000;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 0;

      @include screen-md {
        font-size: 38px;
      }
      @include screen-sm {
        display: none;
      }
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

      @include screen-md {
        font-size: 15px;
      }
      @include screen-sm {
        display: none;
      }

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

    @include screen-md {
      height: 430px;
      padding: 70px 0 70px;
    }
    @include screen-sm {
      padding: 24px 0 35px;
      height: auto;
    }

    label {
      color: #09d4a1;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 500;

      @include screen-md {
        font-size: 19px;
      }
      @include screen-sm {
        display: none;
      }
    }
    h2 {
      color: #ffffff;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 10px 0 10px;

      @include screen-md {
        font-size: 38px;
      }
      @include screen-sm {
        font-size: 33px;
      }
      @include screen-xs {
        font-size: 24px;
      }
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

      @include screen-md {
        width: 530px;
        font-size: 16px;
      }
      @include screen-sm {
        font-size: 15px;
        width: 100%;
        padding: 0 10px;
      }
      @include screen-xs {
        font-size: 14px;
      }

      br {
        display: none;

        @include screen-md {
          display: inline;
        }
      }
    }

    .subscribe {
      width: 487px;
      margin: 50px auto 0px;

      @include screen-md {
        width: 400px;
      }
      @include screen-xs {
        width: 300px;
      }

      p {
        color: #9e9e9e;
        font-family: "Source Sans Pro";
        font-size: 14px;
        font-weight: 400;
        text-align: right;

        @include screen-md {
          font-size: 13px;
        }
        @include screen-xs {
          font-size: 10px;
        }
      }
    }
  }

  .faq {
    background-color: #fafafa;
    text-align: center;
    padding: 100px 0 100px;

    @include screen-md {
      padding: 70px 0 70px;
    }
    @include screen-sm {
      padding: 40px 0 40px;
    }

    label {
      color: #09d4a1;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 500;

      @include screen-md {
        font-size: 19px;
      }
      @include screen-sm {
        color: #091613;
        font-family: Poppins;
        font-size: 33px;
        font-weight: 600;
        line-height: 30px;
      }
      @include screen-xs {
        font-size: 24px;
      }
    }
    h2 {
      color: #000000;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 10px 0 10px;

      @include screen-md {
        font-size: 38px;
      }
      @include screen-sm {
        display: none;
      }
    }
  }

  .contact {
    text-align: center;
    padding: 100px 0 100px;
    height: 816px;

    @include screen-md {
      padding: 70px 0 70px;
      height: 700px;
    }
    @include screen-sm {
      padding: 40px 0 40px;
      height: auto;
    }

    h2 {
      color: #000000;
      font-family: Poppins;
      font-size: 48px;
      font-weight: 600;
      margin: 10px 0 10px;

      @include screen-md {
        font-size: 38px;
      }
      @include screen-sm {
        font-size: 33px;
      }
      @include screen-xs {
        font-size: 24px;
      }
    }
    p {
      color: #949494;
      font-family: Rubik;
      font-size: 20px;
      font-weight: 400;

      @include screen-md {
        font-size: 17px;
      }
      @include screen-sm {
        width: 237px;
        font-size: 16px;
        margin: 0 auto;
      }
    }
  }
}
</style>