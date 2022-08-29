import styled from "styled-components/native";
import RalewayTextSC from "../../../UI/RalewayTextSC/RalewayTextSC";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";

const ContainerSC = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  width: 100%;
  height: 192px;
  margin-bottom: 40px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 30px;
  padding: 18px 27px 28px;
  position: relative;
`;

const TitleSC = styled(RalewayTextSC)`
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 6px;
`;

const SubtitleSC = styled(MontserratTextSC)`
  font-size: 14px;
  line-height: 17px;
`;

const ImageSC = styled.ImageBackground`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const useHomeCardStyles = () => ({
  ImageSC,
  TitleSC,
  SubtitleSC,
  ContainerSC,
});
