import { Heading, Stack } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import styles from "../Styles/github.module.css";
function Github() {
  return (
    <>
      <Heading
        size={"lg"}
        fontWeight={"550"}
        color="rgb(35,34,34)"
        w={"75%"}
        margin="auto"
        textAlign={"left"}
        marginTop="50px"
        mb={3}
        className={styles.text}
      >
        GitHub Stats
      </Heading>
      <div className={styles.github}>
        <GitHubCalendar
          username="TechyRushi"
          fontSize={18}
          color="#ff0000"
        />
        <Stack mt={5} align={"center"} >
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=techyrushi&show_icons=true&locale=en&layout=compact"
            alt="TechyRushi"
            height="139"
          />
          <img align="center" src="https://github-readme-stats.vercel.app/api?username=techyrushi&show_icons=true&locale=en" alt="TechyRushi" />
        </Stack>
      </div>
    </>
  );
}
export default Github;
