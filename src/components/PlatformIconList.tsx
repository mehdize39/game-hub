import React from "react";
import { Platform } from "../hooks/userGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  //console.log(platforms);

  return (
    <>
      <HStack marginY={1}>
        {platforms?.map((platform) => (
          <Icon as={iconMap[platform.slug]} color={"gray.500"} />
        ))}

        {/* <AddIcon /> */}
      </HStack>
    </>
  );
};

export default PlatformIconList;
