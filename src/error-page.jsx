import Starts from "./components/utils/Starts";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import LinkOffIcon from '@mui/icons-material/LinkOff';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {useNavigate} from 'react-router-dom';
import { errorStyles } from "./styles/globals/error";

const {container, main, bigIcon} = errorStyles;

export default function ErrorPage() {
    const navigate = useNavigate()
  return (
    <Box sx={container}>

        <Starts/>

        <Container sx={main}>

            <Stack width={'100%'} direction={{xs:'column-reverse',md:'row'}} alignItems={'center'} justifyContent={'center'} gap={5}>
                <Stack  width={'50%'}>
                    <Stack direction={{xs:'column',md:'row'}}  justifyContent={'space-between'} alignItems={'center'}>
                        <picture>
                            <source srcSet="/encuestas/img/logoCleu.avif" type="image/avif"/>
                            <source srcSet="/encuestas/img/logoCleu.webp" type="image/webp"/>
                            <img loading="lazy"  src=".//encuestas/img/logoCleu.png" alt="Campus Virtual" className="imgservisatribu"/>
                        </picture>
                        <Stack alignItems={'center'}>
                            <Typography variant="h2" color='white'>
                                Oops!
                            </Typography>

                            <Typography variant="h1" color='white' sx={{fontSize:{xs:30,md:50}}}>
                                404 Not Found
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography color="secondary" variant="body2" sx={{textAlign:'center'}}>
                        La ruta a la que has intendato ingresar es incorrecta te invitamos a seguir navegando:
                    </Typography>
                    <Stack direction={{xs:'column',md:'row'}} justifyContent={'space-between'} marginY={3} gap={3}>
                        <Button 
                        color="secondary" 
                        startIcon={<AssignmentIcon/>} 
                        variant="outlined"
                        onClick={() => navigate('/')}
                        >
                        Realizar Encuestas
                        </Button>
                        <Button 
                        color="secondary" 
                        startIcon={<AdminPanelSettingsIcon/>} 
                        variant="outlined" 
                        onClick={() => navigate('/admin')}
                        >
                            Administrar Encuestas
                        </Button>
                    </Stack>
                </Stack>

                <LinkOffIcon color='secondary' sx={bigIcon}/>
            </Stack>


        </Container>

    </Box>
 
  );
}