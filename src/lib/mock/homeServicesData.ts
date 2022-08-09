import { IHomeServicesModel } from "../models/IHomeServicesModel";

const array: IHomeServicesModel[] = [
  {
    id: 1,
    title: "Социальные услуги",
    description:
      "Меры поддержки различных\nкатегорий граждан,\nнуждающихся в\nматериальной помощи и\nсоциальном обслуживании",
    pathname: "ServicesStack",
    screen: "Services",
    backgroundColor: "#A0D4EC",
    photo: {
      // eslint-disable-next-line no-undef
      uri: require("../../assets/image/SocialServices.png"),
      width: 150,
      height: 122,
    },
  },
  {
    id: 2,
    title: "Подобрать вид социальной поддержки",
    description:
      "Социальная помощь\nнаиболее уязвимым слоям\nнаселения, а также людям,\nоказавшимся в сложной жизненной ситуации",
    pathname: "HomeStack",
    screen: "Calculator",
    backgroundColor: "#E9C3DE",
    photo: {
      // eslint-disable-next-line no-undef
      uri: require("../../assets/image/SocialSupport.png"),
      width: 160,
      height: 188,
    },
  },
];

export default array;
