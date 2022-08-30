import { ISpecialistModel } from "../models/ISpecialistData";

type specialistsSocialObjectType = {
  specialist1: ISpecialistModel;
  specialist2: ISpecialistModel;
  specialist3: ISpecialistModel;
  specialist4: ISpecialistModel;
  specialist5: ISpecialistModel;
  specialist6: ISpecialistModel;
  specialist7: ISpecialistModel;
  specialist8: ISpecialistModel;
  specialist9: ISpecialistModel;
  specialist10: ISpecialistModel;
  specialist11: ISpecialistModel;
  specialist12: ISpecialistModel;
  specialist13: ISpecialistModel;
  specialist14: ISpecialistModel;
  specialist15: ISpecialistModel;
  specialist16: ISpecialistModel;
  specialist17: ISpecialistModel;
};

type specialistsSocialServicesObjectType = {
  specialist1: ISpecialistModel;
  specialist2: ISpecialistModel;
  specialist3: ISpecialistModel;
  specialist4: ISpecialistModel;
  specialist5: ISpecialistModel;
  specialist6: ISpecialistModel;
  specialist7: ISpecialistModel;
  specialist8: ISpecialistModel;
  specialist9: ISpecialistModel;
};

type specialistsGuardianshipObjectType = {
  specialist1: ISpecialistModel;
  specialist2: ISpecialistModel;
  specialist3: ISpecialistModel;
  specialist4: ISpecialistModel;
  specialist5: ISpecialistModel;
  specialist6: ISpecialistModel;
  specialist7: ISpecialistModel;
  specialist8: ISpecialistModel;
};

const phoneOne = "8(388)222-05-06";
const phoneTwo = "8(388)222-05-36";

export const specialistsSocialHelpData: specialistsSocialObjectType = {
  specialist1: {
    specialistNumber: "1.1.",
    department: "Ветераны труда",
    specialistData: [{ name: "Романова Лидия Федоровна" }],
    phone: phoneOne,
  },
  specialist2: {
    specialistNumber: "1.2.",
    department: "Ветераны труда Республики Алтай",
    specialistData: [{ name: "Романова Лидия Федоровна" }],
    phone: phoneOne,
  },
  specialist3: {
    specialistNumber: "1.3.",
    department: "Взнос на капитальный ремонт",
    specialistData: [{ name: "Емельянова Инна Николаевна" }],
    phone: phoneOne,
  },
  specialist4: {
    specialistNumber: "1.4.",
    department: "Выплата за газификацию жилого помещения",
    specialistData: [{ name: "Типикина Валентина Анатольевна" }],
    phone: phoneOne,
  },
  specialist5: {
    specialistNumber: "1.5.",
    department: "Дети войны",
    specialistData: [{ name: "Романова Лидия Федоровна" }],
    phone: phoneOne,
  },
  specialist6: {
    specialistNumber: "1.6.",
    department: "Доплата к пенсии",
    specialistData: [
      { name: "МергееваБайару Ивановна" },
      { name: "Мироненко Светлана Викторовна" },
    ],
    phone: phoneOne,
  },
  specialist7: {
    specialistNumber: "1.7.",
    department: "Ежемесячная выплата на детей  от 3 до 7 лет",
    specialistData: [
      { name: "Мергеева Байару Ивановна" },
      { name: "Мироненко Светлана Викторовна" },
      { name: "Патрушева Юлия Григорьевна" },
    ],
    phone: phoneOne,
  },
  specialist8: {
    specialistNumber: "1.8.",
    department: "Ежемесячная выплата на первого ребенка",
    specialistData: [
      { name: "Мергеева Байару Ивановна" },
      { name: "Мироненко Светлана Викторовна" },
      { name: "Патрушева Юлия Григорьевна" },
    ],
    phone: phoneOne,
  },
  specialist9: {
    specialistNumber: "1.9.",
    department:
      "Ежемесячная выплата на третьего и последующих детей из многодетных семей",
    specialistData: [
      { name: "МергееваБайару Ивановна" },
      { name: "Мироненко Светлана Викторовна" },
      { name: "Патрушева Юлия Григорьевна" },
    ],
    phone: phoneOne,
  },
  specialist10: {
    specialistNumber: "1.10.",
    department: "Ежемесячное пособие на ребенка",
    specialistData: [{ name: "Вдовина Оксана Валерьевна" }],
    phone: phoneOne,
  },
  specialist11: {
    specialistNumber: "1.11.",
    department:
      "Меры социальной защиты для инвалидов, членов семей погибших (умерших) военнослужащих, ветеранов ВОВ",
    specialistData: [
      { name: "Романова Лидия Федоровна" },
      { name: "Емельянова Инна Николаевна" },
      { name: "Иванова Надежда Павловна" },
    ],
    phone: phoneOne,
  },
  specialist12: {
    specialistNumber: "1.12.",
    department: "Меры социальной поддержки для  многодетных семей",
    specialistData: [
      {
        name: "Типикина Валентина Анатольевна",
      },
    ],
    phone: phoneOne,
  },
  specialist13: {
    specialistNumber: "1.13.",
    department: "Меры социальной поддержки специалистов сельской местности",
    specialistData: [{ name: "Иванова Надежда Павловна" }],
    phone: phoneOne,
  },
  specialist14: {
    specialistNumber: "1.14.",
    department: "Реабилитированные граждане",
    specialistData: [{ name: "Емельянова Инна Николаевна" }],
    phone: phoneOne,
  },
  specialist15: {
    specialistNumber: "1.15.",
    department: "Республиканский материнский капитал",
    specialistData: [{ name: "Типикина Валентина Анатольевна" }],
    phone: phoneOne,
  },
  specialist16: {
    specialistNumber: "1.16.",
    department: "Субсидия на оплату ЖКУ",
    specialistData: [{ name: "Иванова Нина Васильевна" }],
    phone: phoneOne,
  },
  specialist17: {
    specialistNumber: "1.17.",
    department: "Труженики тыла",
    specialistData: [{ name: "Романова Лидия Федоровна" }],
    phone: phoneOne,
  },
};

export const specialistsSocialServicesData: specialistsSocialServicesObjectType =
  {
    specialist1: {
      specialistNumber: "2.1.1.",
      department: "Летнее оздоровление",
      specialistData: [{ name: "Мурадова Наталья Константиновна" }],
      phone: phoneTwo,
    },
    specialist2: {
      specialistNumber: "2.1.2.",
      department:
        "Профилактическая работа с семьями, несовершеннолетними, в том числе СОП",
      specialistData: [{ name: "Силигародцева Варвара Валерьевна" }],
      phone: phoneTwo,
    },
    specialist3: {
      specialistNumber: "2.1.3.",
      department: "Реабилитация для детей и подростков",
      specialistData: [
        {
          name: "Кудрявцева Эльвира Олеговна",
          address: "с. Майма, ул. Ленина 8А, 1 кабинет",
          url: "https://yandex.ru/maps/10231/altai-republic/house/ulitsa_lenina_8a/bEwYfwdhSkcAQFtofXxxdHpibQ==/?ll=85.903771%2C52.005593&z=16.01",
        },
      ],
      phone: phoneOne,
    },
    specialist4: {
      specialistNumber: "2.1.4.",
      department: "Услуги психолога",
      specialistData: [{ name: "Шевелева Юля Геннадьевна" }],
      phone: phoneTwo,
    },
    specialist5: {
      specialistNumber: "2.1.5.",
      department: "Услуги специалиста",
      specialistData: [{ name: "Кудрявцева Эльвира Олеговна" }],
      phone: phoneOne,
    },
    specialist6: {
      specialistNumber: "2.2.1.",
      department: "Надомное обслуживание",
      specialistData: [{ name: "Пикина Юлия Николаевна" }],
      phone: phoneTwo,
    },
    specialist7: {
      specialistNumber: "2.2.2.",
      department:
        "Оформление пожилых и нуждающихся граждан в дома интернат для престарелых и инвалидов",
      specialistData: [{ name: "Олифиренко Татьяна Владимировна" }],
      phone: phoneTwo,
    },
    specialist8: {
      specialistNumber: "2.2.3.",
      department: "Служба сиделок",
      specialistData: [{ name: "Пикина Юлия Николаевна" }],
      phone: phoneTwo,
    },
    specialist9: {
      specialistNumber: "2.2.4.",
      department: "Услуги для пожилых граждан и граждан с инвалидностью",
      specialistData: [
        {
          name: "Кудрявцева Эльвира Олеговна",
          address: "с. Майма, ул. Ленина 8А, 1 кабинет.",
          url: "https://yandex.ru/maps/10231/altai-republic/house/ulitsa_lenina_8a/bEwYfwdhSkcAQFtofXxxdHpibQ==/?ll=85.903771%2C52.005593&z=16.01",
        },
      ],
      phone: phoneOne,
    },
  };

export const specialistsGuardianshipData: specialistsGuardianshipObjectType = {
  specialist1: {
    specialistNumber: "3.1.",
    department:
      "Включение в список детей-сирот и детей оставшихся без попечения родителей которые подлежат обеспечению жилыми помещениями",
    specialistData: [{ name: "Аткунова Мария Мундусовна" }],
    phone: phoneTwo,
  },
  specialist2: {
    specialistNumber: "3.2.",
    department: "Выдача разрешений на смену ФИО несовершеннолетних",
    specialistData: [{ name: "Аткунова Мария Мундусовна" }],
    phone: phoneTwo,
  },
  specialist3: {
    specialistNumber: "3.3.",
    department: "Опека и попечительство",
    specialistData: [
      { name: "Силивестру Динара Ноктаевна" },
      { name: "Чичинова Диана Жанатовна" },
      { name: "Конева Татьяна Васильевна" },
      { name: "Медведева Лариса Александровна", phone: phoneOne },
    ],
    phone: phoneTwo,
  },
  specialist4: {
    specialistNumber: "3.4.",
    department:
      "Порядок установления опеки над недееспособным  (ограниченно дееспособным) гражданином",
    specialistData: [{ name: "Медведева Лариса Александровна" }],
    phone: phoneTwo,
  },
  specialist5: {
    specialistNumber: "3.5.",
    department: "Прием заявлений дляполучение сертификата",
    specialistData: [{ name: "Конева Татьяна Васильевна" }],
    phone: phoneTwo,
  },
  specialist6: {
    specialistNumber: "3.6.",
    department:
      "Разрешение на снятие денежных средств со счета несовершеннолетнего",
    specialistData: [{ name: "Аткунова Мария Мундусовна" }],
    phone: phoneTwo,
  },
  specialist7: {
    specialistNumber: "3.7.",
    department: "Сделки с имуществом с участием несовершеннолетних детей",
    specialistData: [{ name: "Аткунова Мария Мундусовна" }],
    phone: phoneTwo,
  },
  specialist8: {
    specialistNumber: "3.8.",
    department: "Участие представителей опеки в качестве третьих лиц",
    specialistData: [{ name: "Силивестру Динара Ноктаевна" }],
    phone: phoneTwo,
  },
};
