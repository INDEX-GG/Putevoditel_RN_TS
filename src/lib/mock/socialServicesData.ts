import { IServiceItemModel } from "../models/IServiceItemModel";

const socialServicesData: IServiceItemModel[] = [
  {
    title: "Социальное обслуживание пожилых граждан и граждан с инвалидностью",
    children: [
      {
        title: "Услуги для граждан с инвалидностью, ОВЗ",
        children: [
          {
            title: "Реабилитация для взрослых",
            children: [
              { title: "Услуги предоставляемые АУ РА КЦСОН" },
              { title: "Телефон" },
              { title: "Перечень документов Комплексный центр социа" },
              { title: "Кто имеет право на реабилитацию" },
            ],
          },
          {
            title: "Услуги специалиста",
            children: [{ title: "Услуги" }, { title: "Перечень документов" }],
          },
        ],
      },
      { title: "Служба сиделок", children: [{ title: "Общая информация" }] },
      {
        title:
          "Оформление пожилых и нуждающихся граждан в дома интернат для престарелых и инвалидов",
        children: [
          { title: "Перечень документов" },
          { title: "Описание" },
          { title: "Медицинское заключение" },
          { title: "Заявление" },
        ],
      },
      {
        title: "Надомное обслуживание",
        children: [
          { title: "Перечень документов" },
          { title: "Заявление на обслуживание" },
          { title: "Виды услуг на дому" },
        ],
      },
    ],
  },
  {
    title: "Социальное обслуживание детей, детей с инвалидностью и детей с ОВЗ",
    children: [
      {
        title: "Услуги специалиста",
        children: [{ title: "Услуги" }, { title: "Перечень документов" }],
      },
      {
        title: "Услуги психолога",
        children: [
          { title: "Услуги психолога" },
          { title: "Перечень документов" },
        ],
      },
      {
        title: "Реабилитация для детей и подростков",
        children: [
          { title: "Услуги" },
          { title: "Телефон" },
          { title: "Перечень документов" },
          { title: "Кто имеет право на реабилитацию" },
        ],
      },
      {
        title:
          "Профилактическая работа с семьями, несовершеннолетними, в том числе СОП",
        children: [{ title: "Перечень документов" }, { title: "Описание" }],
      },
      {
        title: "Летнее оздоровление",
        children: [
          {
            title: "Санаторно-курортное оздоровление",
            children: [
              { title: "Согласие на обработку данных" },
              { title: "Перечень документов" },
              { title: "Памятка для родителей" },
              { title: "Категории имеющие право .." },
              { title: "Анкета" },
            ],
          },
          {
            title: "Ление оздоровительные лагеря",
            children: [
              { title: "Согласие на обработку персональных данных" },
              { title: "Перечень документов" },
              { title: "Перечень документов" },
              { title: "Памятка для родителей" },
              { title: "Категории имеющие право ...." },
              { title: "Заявление лагерь" },
            ],
          },
        ],
      },
    ],
  },
];

export default socialServicesData;
