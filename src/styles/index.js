export default (theme) => ({
    "@global": {
        'body': {
            padding: 0,
            margin: 0,
            background: '#424242'
        }
    },
    grid: {
        width: '100%',
        margin: 'auto'
    },
    sector: {
        maxWidth: '100%',
        padding: '10px',
        backgroundColor: '#424242',
        margin: '20px 0',
        boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)'
    },
    sectorTitle:{
        letterSpacing: '9px',
        fontWeight: '600',
        textTransform: 'uppercase'
    },
})