import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    reservTitle: 'Same room for less',
    reservDesc1: 'Over 40 % hotel rooms either free up or get discounted.',
    reservDesc2:
      'We will keep an eye on the hotel deals and send you a notification once its price drops'
  },
  cz: {
    reservTitle: 'Stejný pokoj za méně peněz',
    reservDesc1: 'Více než 40% hotelových pokojů se uvolní nebo zlevní',
    reservDesc2:
      'Budeme sledovat hotelové nabídky a zašleme vám oznámení, jakmile jeho cena klesne'
  }
};

export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'cz', // set fallback locale
  messages // set locale messages}
});
