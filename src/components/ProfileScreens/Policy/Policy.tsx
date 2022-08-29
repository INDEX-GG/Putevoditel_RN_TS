import React from "react";
import { Linking, StyleSheet, View } from "react-native";
import AuthHeader from "../Auth/AuthHeader/AuthHeader";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParams } from "../../../screens/types";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";

const Policy = () => {
  // useHideBottomTab();
  const { goBack } = useNavigation<NavigationProp<ProfileStackParams>>();
  const handlePressEmail = () => Linking.openURL("mailto:yurist.maima@mail.ru");
  return (
    <ScreenContainer
      isScroll={true}
      isSafeAreaView={true}
      scrollViewProps={{ stickyHeaderIndices: [0], style: styles.container }}>
      <AuthHeader
        title="Политика конфиденциальности"
        handlePressBack={goBack}
      />
      <View>
        <View style={styles.textContainer}>
          <MontserratTextSC style={styles.title} fontWeight={600}>
            Согласие Пользователя{"\n"} на обработку персональных данных
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            В соответствии со статьями 23, 24 Конституции Российской Федерации,
            Федеральным законом от 27.07.2006 No 152-ФЗ «О персональных данных»,
            Политикой конфиденциальности, размещенной в мобильном приложении
            «Услуги в кармане». (далее-Политика конфиденциальности),
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            {"    "}Я, субъект персональных данных, именуемый в дальнейшем
            Пользователь, отправляя информацию через формы обратной связи
            (далее, каждая из них и все в совокупности-Форма, Формы) при
            прохождении процедуры регистрации в целях использования мобильного
            приложения «Услуги в кармане» и его сервисов (далее- Мобильное
            приложение, Сервис), и в дальнейшем при использовании Мобильного
            приложения и/или его Сервисов, выражаю полное, безоговорочное и
            однозначное Согласие на обработку моих персональных данных
            (далее-Согласие) на следующих условиях:
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            {"    "}
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              1. Согласие выдано
            </MontserratTextSC>{" "}
            КУ РА «УСПН Майминского района» (ОГРН 1110411005396, ИНН 0411157921,
            КПП 041101001, Республика Алтай, Майминский район, село Майма, улица
            Ленина, дом 8А), (далее-Оператор).
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"    "}2. Согласие выдано на обработку персональных и иных
              данных,
            </MontserratTextSC>{" "}
            указанных Пользователем в Формах путем заполнения соответствующих
            текстовых полей и/или прикрепленных к Формам файлов, а именно
            следующих категорий:{"\n"} - фамилия, имя, отчество, адрес
            электронной почты (e-mail), номер телефона, другая аналогичная
            информация, сообщённая о себе Пользователем Мобильного приложения,
            на основании которой возможна его идентификация как субъекта
            персональных данных.{"\n"} - данных, которые автоматически
            передаются в процессе просмотра и при посещении страниц Мобильного
            приложения: IP адрес, информация из cookies, информация о браузере,
            время доступа, адрес посещаемой страницы, реферер (адрес предыдущей
            страницы);{"\n"}
            {"\t"} - статистики о моих IP-адресах.
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}3. Согласие выдано на обработку персональных данных в целях:
            </MontserratTextSC>
            {"\n"}
            {"\t"}3.1. Общество руководствуется конкретными, заранее
            определенными целями обработки ПДН, в соответствии с которыми ПДН
            были предоставлены Субъектом, в частности:{"\n"}
            {"\t"}3.1.1. Обеспечение защиты прав и свобод Субъекта при обработке
            его ПДН;{"\n"}
            {"\t"}3.1.2. Ведение бухгалтерского учета и отчетности;{"\n"}
            {"\t"}
            3.1.3. Обеспечение Пользователю возможности взаимодействовать с
            Мобильным приложением, в частности направление уведомлений, запросов
            и информации, связанных с оказанием услуг, а также обработка
            запросов и заявок от Пользователя, предоставление доступа к
            персонализированным ресурсам Мобильного приложения, предоставления
            Пользователю специальных предложений, любых информационных
            сообщений, включая рекламу и иных сведений от имени Мобильного
            приложения или от имени партнеров Мобильного приложения,
            предоставления доступа Пользователю в мобильное приложение или
            сервисы партнеров Мобильного приложения, в соответствии с
            Пользовательским соглашением;{"\n"}
            {"\t"}3.1.4. Оказания услуг курьерской доставки Клиентам в рамках
            договора возмедного оказания курьерских услуг;{"\n"}
            {"\t"}3.1.5. Ведение уставной деятельности Общества в части
            заключения, учета и исполнения договоров с контрагентами (Заказчики,
            Подрядчики, Исполнители и т.п.);{"\n"}
            {"\t"}3.1.6. Проведение опросов и исс ледований, направленных на
            выявление удовлетворенности/неудовлетворенности Клиента услугами
            Общества, улучшение качества услуг;{"\n"}
            {"\t"}3.1.7. Проведение статистических и иных исследований на основе
            обезличенных данных.
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}4. Согласие выдано на обработку персональных данных
              смешанным (автоматизированным и неавтоматизированным) способом.
              {"\n"}
            </MontserratTextSC>
            {"\t"}В процессе обработки персональных данных Оператор вправе
            осуществлять: сбор, запись, систематизацию, накопление, хранение,
            уточнение (обновление, изменение), извлечение, использование,
            передачу (распространение, предоставление, доступ), обезличивание,
            блокирование, удаление, уничтожение персональных данных
            Пользователя.
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}5. Настоящим, Пользователь подтверждает, что:{"\n"}
            </MontserratTextSC>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}5.1. Ознакомлен и согласен с тем, что передача персональных
              данных Пользователя может осуществляться Оператором в объеме,
            </MontserratTextSC>{" "}
            необходимом для получения Пользователем доступа к Мобильному
            приложению, его Содержанию и/или его Сервису.
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}5.3. Проинформирован о возможности отзыва согласия{" "}
            </MontserratTextSC>
            на основании положений Федерального закона от 27.07.2006 No 152-ФЗ
            «О персональных данных» путем личного обращения или направления
            письменного обращения (в том числе в форме электронного документа,
            подписанного простой электронной подписью или усиленной
            квалифицированной электронной подписью), на имя лиц, указанных в
            пункте 1 Согласия, в том числе проинформирован о праве отозвать
            Согласие в целях прекращения обработки лицом, указанным в пункте 1
            Согласия, как всех указанных в пункте 2 Согласия персональных
            данных, так и отдельно биометрических персональных данных (если
            таковые будут запрошены Оператором и предоставлены Пользователем).
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}5.4. Проинформирован, что лица, указанные в пункте 1
              настоящего Согласия, вправе продолжать обработку персональных
              данных.{" "}
            </MontserratTextSC>
            Пользователя после получения отзыва Согласия, а равно после
            истечения срока действия Согласия, при наличии оснований,
            предусмотренных частью 2 статьи 9 Федерального закона от 27.07.2006
            No 152-ФЗ «О персональных данных».
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}5.5. Дает согласие на получение рекламно-информационных
              материалов{" "}
            </MontserratTextSC>
            и ознакомлен Оператором о возможности и порядке совершения отказа от
            таковой.
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}6. Согласие вступает в силу с момента его отправки и может
              быть отозвано Пользователем{" "}
            </MontserratTextSC>
            путем направления письменного заявления в произвольной форме в адрес
            Оператора по адресу электронной почты{" "}
            <MontserratTextSC
              fontWeight={500}
              style={styles.paragraphLink}
              onPress={handlePressEmail}>
              yurist.maima@mail.ru
            </MontserratTextSC>{" "}
            либо иным способом, позволяющим однозначно определить факт его
            получения адресатом.
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}7. Согласие действует в течение неопределенного срока до
              момента его отзыва Пользователем.{" "}
            </MontserratTextSC>
            Согласие прекращает свое действие с даты, указанной в заявлении
            Пользователя об отзыве Согласия на обработку персональных данных, но
            не ранее даты, следующей за датой фактического получения Оператором
            отзыва Согласия.
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}8. Датой и временем формирования, подтверждения и отправки
              Согласия{" "}
            </MontserratTextSC>
            прошу считать момент маркировки соответствующего поля (либо нажатия
            на соответствующую кнопку) в Форме и/или нажатие на кнопку отправки
            Формы на любой странице Мобильного приложения и/или его Сервиса.
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}9. Руководствуясь ч. 4 ст. 9 Федерального закона от
              27.07.2006 No 152-ФЗ «О персональных данных»,
            </MontserratTextSC>{" "}
            направляю через личное мобильное устройство путем прикрепления к
            специальной форме или при заполнении соответствующих полей такой
            формы при прохождении процедуры регистрации в Мобильном приложении
            свои персональные данные.
          </MontserratTextSC>
          <MontserratTextSC style={styles.paragraph} fontWeight={400}>
            <MontserratTextSC fontWeight={600} style={styles.paragraphSpan}>
              {"\t"}10. Пользователь проинформирован, что ответственность перед
              ним за действия лица, обрабатывающего его персональные данные по
              поручению Оператора, несет Оператор, выдавший соответствующее
              поручение (согласие).
            </MontserratTextSC>
          </MontserratTextSC>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  textContainer: {
    paddingTop: 10,
    paddingHorizontal: 27,
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  paragraphLink: {
    color: "blue",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textDecorationColor: "blue",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "justify",
    marginBottom: 10,
  },
  paragraphSpan: {},
});

export default React.memo(Policy);
