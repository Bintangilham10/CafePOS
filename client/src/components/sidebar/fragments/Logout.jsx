import React from "react";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../../utils/helper/localStorage";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearLocalStorage();
    navigate("/login");
  };

  return (
    <Text
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        textColor: "yellow.500",
      }}
      onClick={() => handleLogout()}
      cursor="pointer"
    >
      Logout
    </Text>
  );
}
