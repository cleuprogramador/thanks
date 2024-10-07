/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import { useEffect, useState } from "react";

export default function RedirectButton({url}) {

    const [couter, setCouter] = useState(5);

    useEffect(() => {
        const timeUp = setInterval(() => {
            setCouter(prevCouter => prevCouter - 1); // Usar el valor previo
        }, 1000);
        return () => clearInterval(timeUp)
    }, []);

    useEffect(()=>{
        if(couter > 0) return;
        
        handleButton();
    },[couter])

    const handleButton = () => {
        window.location.href = url;
    }

  return (
    <Stack gap={1} alignItems={'center'}>
        <Button startIcon={<LanguageIcon/>} variant="contained" onClick={() => handleButton()} sx={{width:'min(300px , 100vw)'}} >
                Seguir navegando
        </Button>
        <Typography>
            Se redigirá automaticamente en : {couter} s
        </Typography>
    </Stack>
  )     
}
