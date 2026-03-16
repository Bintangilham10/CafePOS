import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { X, AlignCenter } from "react-feather";
import Logout from "./fragments/Logout";
import { getLocalStorage } from "../../utils/helper/localStorage";
import { LOCAL_STORAGE_USER } from "../../utils/constants";
import { NavLink } from "react-router-dom";

const dataNavbarAdmin = [
  {
    label: "Dashboard",
    link: "/dashboard/admin/",
  },
  {
    label: "Menu",
    link: "/dashboard/admin/menu",
  },
  {
    label: "Meja",
    link: "/dashboard/admin/meja",
  },
  {
    label: "Pengguna",
    link: "/dashboard/admin/user",
  },
];

const dataNavbarKasir = [
  {
    label: "Dashboard",
    link: "/dashboard/kasir/",
  },
  {
    label: "Transaksi",
    link: "/dashboard/kasir/transaksi",
  },
];

const dataNavbarManajer = [
  {
    label: "Dashboard",
    link: "/dashboard/manajer/",
  },
  {
    label: "Transaksi",
    link: "/dashboard/manajer/transaksi",
  },
  {
    label: "Menu",
    link: "/dashboard/manajer/menu",
  },
  {
    label: "Laporan",
    link: "/dashboard/manajer/laporan",
  },
];

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dataUser = getLocalStorage(LOCAL_STORAGE_USER);

  return (
    <Box
      w={"100vw"}
      px={[4, 20]}
      py={2}
      zIndex={10}
      boxShadow={"1px 5px 24px -12px rgba(0, 0, 0, 0.3);"}
      position={"fixed"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          p={2}
          icon={isOpen ? <X /> : <AlignCenter />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Text fontWeight={600} fontSize={"2xl"} color="yellow.500">
            Wikusama Cafe
          </Text>
        </HStack>
        <HStack
          as={"nav"}
          spacing={10}
          fontWeight={"semibold"}
          fontSize={"lg"}
          textColor={"gray.500"}
          display={{ base: "none", md: "flex" }}
        >
          {dataUser.role === "admin" &&
            dataNavbarAdmin.map((item, index) => {
              return (
                <NavLink to={item.link} key={index}>
                  <Text
                    px={2}
                    py={1}
                    rounded={"md"}
                    _activeLink={{ textColor: "yellow.500" }}
                    _hover={{
                      textDecoration: "none",
                      textColor: "yellow.500",
                    }}
                    fontWeight={600}
                  >
                    {item.label}
                  </Text>
                </NavLink>
              );
            })}
          {dataUser.role === "kasir" &&
            dataNavbarKasir.map((item, index) => {
              return (
                <NavLink to={item.link} key={index}>
                  <Text
                    px={2}
                    py={1}
                    rounded={"md"}
                    _activeLink={{ textColor: "yellow.500" }}
                    _hover={{
                      textDecoration: "none",
                      textColor: "yellow.500",
                    }}
                    fontWeight={600}
                  >
                    {item.label}
                  </Text>
                </NavLink>
              );
            })}
          {dataUser.role === "manajer" &&
            dataNavbarManajer.map((item, index) => {
              return (
                <NavLink to={item.link} key={index}>
                  <Text
                    px={2}
                    py={1}
                    rounded={"md"}
                    _activeLink={{ textColor: "yellow.500" }}
                    _hover={{
                      textDecoration: "none",
                      textColor: "yellow.500",
                    }}
                    fontWeight={600}
                  >
                    {item.label}
                  </Text>
                </NavLink>
              );
            })}
        </HStack>
        <Flex alignItems={"center"}>
          <Logout />
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {dataNavbarAdmin.map((item, index) => {
              return (
                <NavLink to={item.link} key={index}>
                  <Text
                    px={2}
                    py={1}
                    rounded={"md"}
                    _activeLink={{ textColor: "blue.500" }}
                    _hover={{
                      textDecoration: "none",
                      textColor: "primary.100",
                    }}
                  >
                    {item.label}
                  </Text>
                </NavLink>
              );
            })}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
