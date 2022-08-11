import { IHomeServicesModel } from "../models/IHomeServicesModel";
import socialServicesData from "./socialServicesData";
import socialHelpData from "./socialHelpData";

const array: IHomeServicesModel[] = [
  {
    id: 1,
    title: "Социальные услуги",
    description:
      "Меры поддержки различных\nкатегорий граждан,\nнуждающихся в\nматериальной помощи и\nсоциальном обслуживании",
    backgroundColor: "#A0D4EC",
    redirectTitle: "Услуги",
    redirectData: socialServicesData,
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
    backgroundColor: "#E9C3DE",
    redirectTitle: "Социальная поддержка",
    redirectData: socialHelpData,
    photo: {
      // eslint-disable-next-line no-undef
      uri: require("../../assets/image/SocialSupport.png"),
      width: 160,
      height: 188,
    },
  },
  {
    id: 3,
    title: "Социальная поддержка",
    description:
      "Социальная помощь\nнаиболее уязвимым слоям\nнаселения, а также людям,\nоказавшимся в сложной\nжизненной ситуации",
    backgroundColor: "#AFDEA4",
    redirectTitle: "Социальная поддержка",
    redirectData: socialHelpData,
    photo: {
      // eslint-disable-next-line no-undef
      uri: require("../../assets/image/SocialSupport.png"),
      width: 160,
      height: 188,
    },
  },
];

export default array;
