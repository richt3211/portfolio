import Typography from 'typography';

const typography = new Typography({
    baseFontSize: '18px',
    googleFonts: [
        {
            name: 'Montserrat',
            styles: [
                '400',
                '700',
            ]
        }
    ],
    bodyFontFamily: ['montserrat'],
});

export default typography