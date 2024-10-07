export const loginStyles = {
    container:{minHeight:'calc(100vh - 242px)', display:'flex', alignItems:'center', justifyContent:'center'},
    card:{width:'min( 95%, 30rem )'},
    cardHeader:{background:'radial-gradient(farthest-corner, rgba(0,0,0,0.8), rgba(125,125,125,0.8))',padding:'2rem'},
    headerText:{display:'flex', gap:'1rem', fontSize:'1.8rem', alignItems:'baseline',
    '@media (max-width: 600px)': {fontSize:'1.2rem'},},
    cardActions:{display:'flex', alignItems:'center',justifyContent:'center'},
    span:{color:'#ffc709'},
    spinner:{margin:'auto'}
}
