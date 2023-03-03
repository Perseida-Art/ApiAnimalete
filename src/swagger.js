const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec =

{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Animaletes",
            version: "1.0",
            description: "API con gatetes y perretes",
            contact: {
                name: "Perseida",
                email: "perseida@gmail.com",
                url: "https://api.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            "/api/perretes": {
                get: {
                    summary: "Devuelve un perrete de Andalucía, olé",
                    tags: [
                        "perretes"
                    ],
                    responses: {
                        200: {
                            description: "lista de perretes.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Samba"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            },
            "/api/perretes/{id}": {
                get: {
                    summary: "Devuelve un perrete de Madrid",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID de perrete ",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A perrete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Samba"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Desaparece un perrete :(",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del perrete a desaparecer",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Un unico perrete.", 
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Vas a hacer desaparecer el perrete con id  1 '"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Añadir al perrete",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID  del perrete que vas a añadir",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "un perrete ",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Vas a añadir al perrete 1"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
               
            },
            "/api/gatetes": {
                get: {
                    summary: "Devuelve todos los gatetes de Extremadura",   
                    tags: [
                        "gatetes"
                    ],
                    responses: {
                        200: {
                            description: "Una lista de los gatetes",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Salchicha"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            },
            "/api/gatetes/{id}": {
                get: {
                    summary: "Devulve un gatete de la Comunidad Valenciana",
                    tags: [
                        "gatetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID  del gatete a devolver",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Un gatete", 
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Salchicha"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Hacer desaparecer al gatete",
                    tags: [
                        "gatetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID  del gatete que va a desaparecerr",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "un gatete ",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Vas a hacer desaparecer el gatete 1"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Añadir al gatete",
                    tags: [
                        "gatetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID  del gatete que vas a añadir",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "un gatete ",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Vas a añadir al gatete 1"
                                        }
                                    }
                                }
                            }
                        }
                    }
                } 
                
            },
        },
    },
    apis: [path.join(__dirname, 'routes/*.js')]
};
const swaggerDocs = (app, port) => {

    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    console.log(`Swagger docs disponible en https://localhost:${port}/api/docs`);
}

module.exports = { swaggerDocs };