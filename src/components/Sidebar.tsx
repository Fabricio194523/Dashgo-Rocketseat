import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";


export default function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8" px={6}>
          <Stack spacing={12} align="flex-start">
           <Box>
            <Text fontWeight="bold" color={"gray.400"} fontSize="small">Geral</Text>
              <Stack spacing={4} mt="8" align={"stretch"}>
                <Link display={"flex"} alignItems="center" color={"pink"}>
                   <Icon as={RiDashboardLine} fontSize="20"/>
                   <Text ml={4} fontWeight="medium">Dashboard</Text>
                </Link>
                <Link display={"flex"} alignItems="center" color={"pink"}>
                   <Icon as={RiContactsLine} fontSize="20"/>
                   <Text ml={4} fontWeight="medium">Usuários</Text>
                </Link>
              </Stack>
           </Box>
           <Box>
            <Text fontWeight="bold" color={"gray.400"} fontSize="small">Automação</Text>
              <Stack spacing={4} mt="8" align={"stretch"}>
                <Link display={"flex"} alignItems="center" color={"pink"}> 
                   <Icon as={RiInputMethodLine} fontSize="20"/>
                   <Text ml={4} fontWeight="medium">Formulários</Text>
                </Link>
                <Link display={"flex"} alignItems="center" color={"pink"}>
                   <Icon as={RiGitMergeLine} fontSize="20"/>
                   <Text ml={4} fontWeight="medium">Automação</Text>
                </Link> 
              </Stack>
           </Box>
        </Stack>
      </Box>
    );
}