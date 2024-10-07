export const headerStyles = {
    containter:{display:'flex',height:'80px',color:"#fff"},
    flexTop:{marginX:'2rem',width:'100%'},
    
}

export const footerStyles = {
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'2rem',
        height:'120px',
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            gap:'0.5rem',
          },
    },
    madeLAbel:{display:'flex', gap:'.3rem'}
}

export const layoutSyles = {
    main:{minHeight:'calc( 100vh - 202px)'},
    mainChild:{display:'flex',flexDirection:'column', alignItems:'center',width:'100%', gap:'2rem'},
    flexCol:{display:'flex',flexDirection:'column', alignItems:'center', gap:'1rem'},
    my:{marginY:'1rem'},
    inputContent:{paddingY:'1rem', display:'flex', flexWrap:'wrap', gap:'1rem'},
    input:{width:'min(95%, 25rem)'},
    buttonAdmin:{marginY:'1rem', display:'flex', flexWrap:'wrap'},
    adminChild:{width:'100%', height:'100%'},
    justTextChild:{margin:'auto', height:'50vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'},
    textCenter:{textAlign:'center'},
    fullWidth:{width:'100%'},
    fullHeight:{ height: '100%'},
    permissionsContain:{height:'calc(100vh - 202px)'},
    shadowNone:{boxShadow:'none'},
}

export const loadersStyles = {
    encuestas:{height:'10rem', width:'min( 25rem, 95vw)'},
    encuestasContainer:{width:'95%'},
    table:{height:'3rem', margin:'1rem'}
}