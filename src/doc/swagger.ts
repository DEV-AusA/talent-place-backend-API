
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
    definition: {
        swagger: "2.0", // Indica que estás usando Swagger 2.0
        info: {
            title: 'Talent Place Igwroker',
            version: '1.0.0'
        },
        host: process.env.SWAGGER_ENTORNO,
        // basePath: '/v1', // Base path de tu API
        basePath: '', // Base path de tu API
        schemes: ['https', 'http'], // Protocolo(s) que soporta
    },
    // apis: [process.env.SWAGGER_ENTORNO === 'api-talent-place.azurewebsites.net' ? './dist/routes/*{.ts,.js}' : './src/routes/*{.ts,.js}']
    apis: ["./dist/routes/*.js"]
}


//Docs JSON format
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, _port) =>{
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1/docs.json', (_req, res)=>{
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    })
    console.log("Documentación de backend versión 1.0.0 ")
}

export default swaggerDocs;