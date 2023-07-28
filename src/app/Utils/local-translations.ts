const PageTranslations = [
  {
    keyword: "ADMIN.HEADER.TITLE",
    translations: {
      en: "Admin Panel",
      ge: "ადმინისტრირება"
    }
  }
];




const Errors = [

  {
    keyword: "INCORRECT_OTP",
    translations: {
      en: "Incorrect or invalid code",
      ge: "კოდი ვადაგასული ან არასწორია"
    }
  },


]


const LocalTranslations = [...PageTranslations, ...Errors];

export default LocalTranslations;
