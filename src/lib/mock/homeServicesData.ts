import { IHomeServicesModel } from "../models/IHomeServicesModel";
import socialServicesData from "./socialServicesData";
import socialHelpData from "./socialHelpData";
import { guardianshipServicesData } from "./guardianshipServicesData";

const array: IHomeServicesModel[] = [
  {
    id: 1,
    title: "Социальные услуги",
    description:
      "Меры поддержки различных\nкатегорий граждан,\nнуждающихся в\nматериальной помощи и\nсоциальном обслуживании",
    backgroundColor: "#A0D4EC",
    redirectTitle: "Соц услуги",
    redirectData: socialServicesData,
    photo: {
      // eslint-disable-next-line no-undef
      uri: require("../../assets/image/SocialServices.png"),
      width: 150,
      height: 122,
      marginRight: 0,
      marginBottom: 0,
    },
  },
  {
    id: 2,
    title: "Социальная\nподдержка",
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
      marginRight: 0,
      marginBottom: 0,
    },
  },
  {
    id: 3,
    title: "Отделение опеки и попечительства",
    description:
      "Социальная помощь\nнаиболее уязвимым слоям\nнаселения, а также людям,\nоказавшимся в сложной\nжизненной ситуации",
    backgroundColor: "#AFDEA4",
    redirectTitle: "Отделение опеки и попечительства",
    redirectData: guardianshipServicesData,
    photo: {
      // eslint-disable-next-line no-undef
      uri: require("../../assets/image/SocialHeart.png"),
      width: 135,
      height: 135,
      marginRight: 3,
      marginBottom: 10,
    },
  },
];

export default array;
