
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const isProduction = process.env.SWAGGER_ENTORNO === 'api-talent-place.azurewebsites.net';

const routesPath = isProduction
    ? './dist/routes/*.js'  // para produccion
    : './src/routes/*.ts';  // para desarrollo

const options = {
    definition: {
        swagger: "2.0", // Indica que estás usando Swagger 2.0
        info: {
            title: 'Talent Place Igwroker',
            version: '1.0.0',
            description: 'API para gestionar usuarios y talentos en Talent Place.', // Descripción del proyecto
        },
        securityDefinitions: {
            BearerAuth: {
              type: 'apiKey',
              name: 'Authorization',  // Nombre del header
              in: 'header',  // El token irá en el encabezado
              description: 'Introduce el token con el prefijo "Bearer" seguido del token, por ejemplos "Bearer token1234" ',
            },
        },
        host: process.env.SWAGGER_ENTORNO,
        // basePath: '/v1', // Base path de tu API
        basePath: '', // Base path de tu API
        schemes: ['https', 'http'], // Protocolo(s) que soporta
    },
    apis: [routesPath],
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