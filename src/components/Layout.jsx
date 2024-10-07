import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container sx={{height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', gap:2, paddingTop:15}}>
        <Typography variant="h2">
            ¡Gracias!
        </Typography>
        <Typography>
            Gracias por brindarnos tus datos, en breve nos contactaremos contigo.
        </Typography>
        <img src="/thanks/img/illustration_recruitment.svg" alt="" width={300} height={300} />
        <Box>
            <Outlet/>
        </Box>
    </Container>
  )
}
