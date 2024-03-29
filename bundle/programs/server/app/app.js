var require = meteorInstall({"imports":{"api":{"meusprojetos":{"collection.js":["../reuse/collectionBase","./schema",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/meusprojetos/collection.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({CollectionMeusProjetos:function(){return CollectionMeusProjetos}});var CollectionBase;module.import("../reuse/collectionBase",{"CollectionBase":function(v){CollectionBase=v}});var schemaMeusProjetos;module.import("./schema",{"schemaMeusProjetos":function(v){schemaMeusProjetos=v}});
                                                                                                                       // 2
                                                                                                                       //
var CollectionMeusProjetos = new CollectionBase('meusprojetos');                                                       // 5
                                                                                                                       //
//Definição do Schema da Collection - Schema Default                                                                   // 7
CollectionMeusProjetos.setSchema(schemaMeusProjetos);                                                                  // 8
                                                                                                                       //
//################################################                                                                     // 10
//################ SUB-SCHEMAS ###################                                                                     // 11
//################################################                                                                     // 12
                                                                                                                       //
var endereco = ['cep', 'rua', 'bairro', 'localidade', 'uf'];                                                           // 14
                                                                                                                       //
CollectionMeusProjetos.addSubSchema('default', ['title', 'text', 'sections', 'process']);                              // 16
                                                                                                                       //
CollectionMeusProjetos.addSubSchema('insert', ['title', 'text', 'process', 'name', 'cpf'].concat(endereco));           // 19
                                                                                                                       //
CollectionMeusProjetos.addSubSchema('update', ['title', 'text', 'process', 'name', 'cpf', 'tasks'].concat(endereco));  // 22
                                                                                                                       //
CollectionMeusProjetos.addSubSchema('view', ['title', 'text', 'process', 'tasks', 'name', 'cpf', 'createdDate', 'updatedDate'].concat(endereco));
                                                                                                                       //
CollectionMeusProjetos.addSubSchema('tableview', ['title', 'text', 'process', 'createdDate']);                         // 28
                                                                                                                       //
CollectionMeusProjetos.addSubSchema('form', ['title', 'text', 'process', 'name', 'cpf', 'tasks'].concat(endereco));    // 31
                                                                                                                       //
//################################################                                                                     // 34
//############ RESTRIÇÃO DE ACESSO ###############                                                                     // 35
//################################################                                                                     // 36
var permissions = [                                                                                                    // 37
    //     {                                                                                                           // 38
    //     actions: ['insert', 'update', 'remove', 'read'],                                                            // 39
    //     groups: ['administrador'], //Permissions by Functionality                                                   // 40
    // },                                                                                                              // 41
    //     {                                                                                                           // 42
    //         actions: ['remove', 'read', 'update'],                                                                  // 43
    //         groups: ['administrador'], //Permissions by Functionality                                               // 44
    //         data: {userId: "{_UserID_}"}, //Filter/Permissions by Data                                              // 45
    //     },                                                                                                          // 46
];                                                                                                                     // 37
                                                                                                                       //
CollectionMeusProjetos.setPermissions(permissions);                                                                    // 49
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"model.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","./collection.js","../reuse/modelBase",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/meusprojetos/model.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({MdlMeusProjetos:function(){return MdlMeusProjetos}});var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var CollectionMeusProjetos;module.import("./collection.js",{"CollectionMeusProjetos":function(v){CollectionMeusProjetos=v}});var ModelBase;module.import("../reuse/modelBase",{"ModelBase":function(v){ModelBase=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       //
var ModelMeusProjetos = function (_ModelBase) {                                                                        //
  _inherits(ModelMeusProjetos, _ModelBase);                                                                            //
                                                                                                                       //
  function ModelMeusProjetos() {                                                                                       //
    _classCallCheck(this, ModelMeusProjetos);                                                                          //
                                                                                                                       //
    return _possibleConstructorReturn(this, _ModelBase.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  return ModelMeusProjetos;                                                                                            //
}(ModelBase);                                                                                                          //
                                                                                                                       //
var MdlMeusProjetos = new ModelMeusProjetos(CollectionMeusProjetos);                                                   // 8
                                                                                                                       //
//MdlMeusProjetos.setCollectionModelDependent(MdlProjetos);                                                            // 10
                                                                                                                       //
//Aplicar os métodos que serão utilizados no Client através do "Meteor.Call"                                           // 12
MdlMeusProjetos.applyAllMethods();                                                                                     // 13
                                                                                                                       //
//Aplicar as publicações que serão consideradas quando no Client for executado                                         // 15
// o "Template.subscribe"                                                                                              // 16
MdlMeusProjetos.applyPublications();                                                                                   // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/meusprojetos/schema.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({schemaMeusProjetos:function(){return schemaMeusProjetos}});var schemaMeusProjetos = {                   // 1
    name: {                                                                                                            // 2
        type: "String",                                                                                                // 3
        defaultValue: "",                                                                                              // 4
        label: 'Nome',                                                                                                 // 5
        formOptions: {                                                                                                 // 6
            VISIBLE: true,                                                                                             // 7
            FIELD_COMPONENT: 'TextField'                                                                               // 8
        },                                                                                                             // 6
        formValidation: {                                                                                              // 10
            required: { value: true, message: 'O nome é obrigatório!' }                                                // 11
        }                                                                                                              // 10
    },                                                                                                                 // 2
    cpf: {                                                                                                             // 14
        type: String,                                                                                                  // 15
        defaultValue: '',                                                                                              // 16
        label: 'CPF',                                                                                                  // 17
        formOptions: {                                                                                                 // 18
            VISIBLE: true,                                                                                             // 19
            FIELD_COMPONENT: 'TextField'                                                                               // 20
        },                                                                                                             // 18
        formValidation: {                                                                                              // 22
            required: { value: true, message: 'O CPF é obrigatório' }                                                  // 23
        }                                                                                                              // 22
    },                                                                                                                 // 14
    cep: {                                                                                                             // 26
        type: String,                                                                                                  // 27
        defaultValue: '',                                                                                              // 28
        label: 'CEP da área a ser regularizada (somente números)',                                                     // 29
        formOptions: {                                                                                                 // 30
            VISIBLE: true,                                                                                             // 31
            FIELD_COMPONENT: 'TextField'                                                                               // 32
        },                                                                                                             // 30
        formValidation: {                                                                                              // 34
            required: { value: true, message: 'O CEP é obrigatório' }                                                  // 35
        }                                                                                                              // 34
    },                                                                                                                 // 26
    rua: {                                                                                                             // 38
        type: String,                                                                                                  // 39
        defaultValue: '',                                                                                              // 40
        label: 'Rua',                                                                                                  // 41
        formOptions: {                                                                                                 // 42
            VISIBLE: true,                                                                                             // 43
            FIELD_COMPONENT: 'TextField'                                                                               // 44
        },                                                                                                             // 42
        formValidation: {                                                                                              // 46
            required: { value: true, message: "A rua é obrigatória" }                                                  // 47
        }                                                                                                              // 46
    },                                                                                                                 // 38
    bairro: {                                                                                                          // 50
        type: String,                                                                                                  // 51
        defaultValue: '',                                                                                              // 52
        label: 'bairro',                                                                                               // 53
        formOptions: {                                                                                                 // 54
            VISIBLE: true,                                                                                             // 55
            FIELD_COMPONENT: 'TextField'                                                                               // 56
        },                                                                                                             // 54
        formValidation: {                                                                                              // 58
            required: { value: true, message: "O bairro é obrigatório" }                                               // 59
        }                                                                                                              // 58
    },                                                                                                                 // 50
    localidade: {                                                                                                      // 62
        type: String,                                                                                                  // 63
        defaultValue: '',                                                                                              // 64
        label: 'Localidade',                                                                                           // 65
        formOptions: {                                                                                                 // 66
            VISIBLE: true,                                                                                             // 67
            FIELD_COMPONENT: 'TextField'                                                                               // 68
        },                                                                                                             // 66
        formValidation: {                                                                                              // 70
            required: { value: true, message: "A localidade é obrigatória" }                                           // 71
        }                                                                                                              // 70
    },                                                                                                                 // 62
    uf: {                                                                                                              // 74
        type: String,                                                                                                  // 75
        defaultValue: '',                                                                                              // 76
        label: 'UF',                                                                                                   // 77
        formOptions: {                                                                                                 // 78
            VISIBLE: true,                                                                                             // 79
            FIELD_COMPONENT: 'TextField'                                                                               // 80
        },                                                                                                             // 78
        formValidation: {                                                                                              // 82
            required: { value: true, message: "UF é obrigatório" }                                                     // 83
        }                                                                                                              // 82
    },                                                                                                                 // 74
    process: {                                                                                                         // 86
        type: Object,                                                                                                  // 87
        blackbox: true,                                                                                                // 88
        defaultValue: [],                                                                                              // 89
        label: 'Tipo de Guia',                                                                                         // 90
        formOptions: {                                                                                                 // 91
            VISIBLE: true,                                                                                             // 92
            FIELD_COMPONENT: 'CollectionSelectField',                                                                  // 93
            OPTIONSCOLLECTION: {                                                                                       // 94
                COLLECTIONBASE: 'CollectionProcessos',                                                                 // 95
                COLLECTION_SCHEMA: 'tableview',                                                                        // 96
                FIRST_FIELD: 'name'                                                                                    // 97
            }                                                                                                          // 94
        },                                                                                                             // 91
        formValidation: {                                                                                              // 100
            required: { value: true, message: 'O ID da Seção é obrigatório' }                                          // 101
        }                                                                                                              // 100
    },                                                                                                                 // 86
    tasks: {                                                                                                           // 104
        type: [Object],                                                                                                // 105
        blackbox: true,                                                                                                // 106
        defaultValue: [],                                                                                              // 107
        label: 'Subprocessos',                                                                                         // 108
        optional: true                                                                                                 // 109
    },                                                                                                                 // 104
    createdDate: {                                                                                                     // 111
        type: Date,                                                                                                    // 112
        label: "Data de Criação",                                                                                      // 113
        autoValue: function () {                                                                                       // 114
            function autoValue() {                                                                                     // 114
                if (this.isInsert) return new Date();                                                                  // 115
            }                                                                                                          // 117
                                                                                                                       //
            return autoValue;                                                                                          // 114
        }(),                                                                                                           // 114
        denyUpdate: true,                                                                                              // 118
        optional: true,                                                                                                // 119
        formOptions: {                                                                                                 // 120
            VISIBLE: true,                                                                                             // 121
            FIELD_COMPONENT: 'TextField',                                                                              // 122
            FIELD_TYPE: 'date'                                                                                         // 123
        }                                                                                                              // 120
    }                                                                                                                  // 111
};                                                                                                                     // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"processos":{"collection.js":["../reuse/collectionBase","./schema",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/processos/collection.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({CollectionProcessos:function(){return CollectionProcessos}});var CollectionBase;module.import("../reuse/collectionBase",{"CollectionBase":function(v){CollectionBase=v}});var schemaProcessos;module.import("./schema",{"schemaProcessos":function(v){schemaProcessos=v}});
                                                                                                                       // 2
                                                                                                                       //
var CollectionProcessos = new CollectionBase('processos');                                                             // 5
                                                                                                                       //
//Definição do Schema da Collection - Schema Default                                                                   // 7
CollectionProcessos.setSchema(schemaProcessos);                                                                        // 8
                                                                                                                       //
//################################################                                                                     // 10
//################ SUB-SCHEMAS ###################                                                                     // 11
//################################################                                                                     // 12
                                                                                                                       //
CollectionProcessos.addSubSchema('default', ['name', 'description']);                                                  // 14
                                                                                                                       //
CollectionProcessos.addSubSchema('insert', ['name', 'description', 'firstsubprocess']);                                // 17
                                                                                                                       //
CollectionProcessos.addSubSchema('update', ['name', 'description', 'firstsubprocess']);                                // 20
                                                                                                                       //
CollectionProcessos.addSubSchema('view', ['name', 'description', 'firstsubprocess']);                                  // 23
                                                                                                                       //
CollectionProcessos.addSubSchema('tableview', ['name', 'description', 'firstsubprocess']);                             // 26
                                                                                                                       //
//################################################                                                                     // 30
//############ RESTRIÇÃO DE ACESSO ###############                                                                     // 31
//################################################                                                                     // 32
var permissions = [                                                                                                    // 33
    //     {                                                                                                           // 34
    //     actions: ['insert', 'update', 'remove', 'read'],                                                            // 35
    //     groups: ['administrador'], //Permissions by Functionality                                                   // 36
    // },                                                                                                              // 37
    //     {                                                                                                           // 38
    //         actions: ['remove', 'read', 'update'],                                                                  // 39
    //         groups: ['administrador'], //Permissions by Functionality                                               // 40
    //         data: {userId: "{_UserID_}"}, //Filter/Permissions by Data                                              // 41
    //     },                                                                                                          // 42
];                                                                                                                     // 33
                                                                                                                       //
CollectionProcessos.setPermissions(permissions);                                                                       // 45
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"model.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","./collection.js","../reuse/modelBase",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/processos/model.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({MdlProcessos:function(){return MdlProcessos}});var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var CollectionProcessos;module.import("./collection.js",{"CollectionProcessos":function(v){CollectionProcessos=v}});var ModelBase;module.import("../reuse/modelBase",{"ModelBase":function(v){ModelBase=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       //
var ModelProcessos = function (_ModelBase) {                                                                           //
  _inherits(ModelProcessos, _ModelBase);                                                                               //
                                                                                                                       //
  function ModelProcessos() {                                                                                          //
    _classCallCheck(this, ModelProcessos);                                                                             //
                                                                                                                       //
    return _possibleConstructorReturn(this, _ModelBase.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  return ModelProcessos;                                                                                               //
}(ModelBase);                                                                                                          //
                                                                                                                       //
var MdlProcessos = new ModelProcessos(CollectionProcessos);                                                            // 8
                                                                                                                       //
//MdlProcessos.setCollectionModelDependent(MdlProjetos);                                                               // 10
                                                                                                                       //
//Aplicar os métodos que serão utilizados no Client através do "Meteor.Call"                                           // 12
MdlProcessos.applyAllMethods();                                                                                        // 13
                                                                                                                       //
//Aplicar as publicações que serão consideradas quando no Client for executado                                         // 15
// o "Template.subscribe"                                                                                              // 16
MdlProcessos.applyPublications();                                                                                      // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/processos/schema.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({schemaProcessos:function(){return schemaProcessos}});var schemaProcessos = {                            // 1
    name: {                                                                                                            // 2
        type: String,                                                                                                  // 3
        defaultValue: '',                                                                                              // 4
        label: 'Nome',                                                                                                 // 5
        formOptions: {                                                                                                 // 6
            VISIBLE: true,                                                                                             // 7
            FIELD_COMPONENT: 'TextField'                                                                               // 8
        },                                                                                                             // 6
        formValidation: {                                                                                              // 10
            required: { value: true, message: 'O nome do processo é obrigatório' }                                     // 11
        },                                                                                                             // 10
        dataTableConfig: {                                                                                             // 13
            link: {                                                                                                    // 14
                router: 'ProcessosView',                                                                               // 15
                field: '_id'                                                                                           // 16
            }                                                                                                          // 14
        }                                                                                                              // 13
    },                                                                                                                 // 2
    description: {                                                                                                     // 20
        type: String,                                                                                                  // 21
        defaultValue: '',                                                                                              // 22
        optional: true,                                                                                                // 23
        label: 'Descrição',                                                                                            // 24
        formOptions: {                                                                                                 // 25
            VISIBLE: true,                                                                                             // 26
            FIELD_COMPONENT: 'TextField'                                                                               // 27
        }                                                                                                              // 25
    },                                                                                                                 // 20
    firstsubprocess: {                                                                                                 // 30
        type: Object,                                                                                                  // 31
        blackbox: true,                                                                                                // 32
        defaultValue: [],                                                                                              // 33
        optional: true,                                                                                                // 34
        label: 'Primeiro SubProcesso',                                                                                 // 35
        formOptions: {                                                                                                 // 36
            VISIBLE: true,                                                                                             // 37
            FIELD_COMPONENT: 'CollectionSelectField',                                                                  // 38
            OPTIONSCOLLECTION: {                                                                                       // 39
                COLLECTIONBASE: 'CollectionSubProcessos',                                                              // 40
                COLLECTION_SCHEMA: 'tableview',                                                                        // 41
                FIRST_FIELD: 'title'                                                                                   // 42
            }                                                                                                          // 39
        }                                                                                                              // 36
    },                                                                                                                 // 30
    createdDate: {                                                                                                     // 46
        type: Date,                                                                                                    // 47
        label: "Data de Criação",                                                                                      // 48
        autoValue: function () {                                                                                       // 49
            function autoValue() {                                                                                     // 49
                if (this.isInsert) return new Date();                                                                  // 50
            }                                                                                                          // 52
                                                                                                                       //
            return autoValue;                                                                                          // 49
        }(),                                                                                                           // 49
        denyUpdate: true,                                                                                              // 53
        optional: true,                                                                                                // 54
        formOptions: {                                                                                                 // 55
            VISIBLE: true,                                                                                             // 56
            FIELD_COMPONENT: 'TextField',                                                                              // 57
            FIELD_TYPE: 'date'                                                                                         // 58
        }                                                                                                              // 55
    },                                                                                                                 // 46
    updatedDate: {                                                                                                     // 61
        type: Date,                                                                                                    // 62
        label: "Ultima atualização",                                                                                   // 63
        autoValue: function () {                                                                                       // 64
            function autoValue() {                                                                                     // 64
                if (this.isUpdate || this.isInsert) return new Date();                                                 // 65
            }                                                                                                          // 67
                                                                                                                       //
            return autoValue;                                                                                          // 64
        }(),                                                                                                           // 64
        optional: true,                                                                                                // 68
        formOptions: {                                                                                                 // 69
            VISIBLE: true,                                                                                             // 70
            FIELD_COMPONENT: 'TextField',                                                                              // 71
            FIELD_TYPE: 'date'                                                                                         // 72
        }                                                                                                              // 69
    },                                                                                                                 // 61
    createdUserEmail: {                                                                                                // 75
        type: String,                                                                                                  // 76
        label: "Criado Por",                                                                                           // 77
        autoValue: function () {                                                                                       // 78
            function autoValue() {                                                                                     // 78
                if (this.isInsert) return Meteor.users.find({ "_id": this.userId }).fetch()[0].emails[0].address; //   // 79
            }                                                                                                          // 81
                                                                                                                       //
            return autoValue;                                                                                          // 78
        }(),                                                                                                           // 78
        denyUpdate: true,                                                                                              // 82
        optional: true,                                                                                                // 83
        formOptions: {                                                                                                 // 84
            VISIBLE: true,                                                                                             // 85
            FIELD_COMPONENT: 'TextField',                                                                              // 86
            FIELD_TYPE: 'text',                                                                                        // 87
            PLACEHOLDER: 'horario'                                                                                     // 88
        }                                                                                                              // 84
    },                                                                                                                 // 75
    updatedUserEmail: {                                                                                                // 91
        type: String,                                                                                                  // 92
        label: "Atualizado Por",                                                                                       // 93
        autoValue: function () {                                                                                       // 94
            function autoValue() {                                                                                     // 94
                if (this.isUpdate || this.isInsert) return Meteor.users.find({ "_id": this.userId }).fetch()[0].emails[0].address; //
            }                                                                                                          // 97
                                                                                                                       //
            return autoValue;                                                                                          // 94
        }(),                                                                                                           // 94
        optional: true,                                                                                                // 98
        formOptions: {                                                                                                 // 99
            VISIBLE: true,                                                                                             // 100
            FIELD_COMPONENT: 'TextField',                                                                              // 101
            FIELD_TYPE: 'text',                                                                                        // 102
            PLACEHOLDER: 'horario'                                                                                     // 103
        }                                                                                                              // 99
    }                                                                                                                  // 91
};                                                                                                                     // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"reuse":{"collectionBase.js":["babel-runtime/helpers/typeof","babel-runtime/helpers/classCallCheck","meteor/meteor","./utils",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/reuse/collectionBase.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({CollectionBase:function(){return CollectionBase}});var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Utils;module.import('./utils',{"Utils":function(v){Utils=v}});
                                                                                                                       //
/**                                                                                                                    // 1
 * <p>                                                                                                                 //
 * Finalidade da Classe: Aplicar os métodos para a                                                                     //
 * manipulação de uma collection,                                                                                      //
 * baseado nos métodos definidos pelo framework Synergia Meteor.                                                       //
 * </p>                                                                                                                //
 *                                                                                                                     //
 * <p>                                                                                                                 //
 * Copyright: Copyright (c) Synergia - DCC - UFMG                                                                      //
 * </p>                                                                                                                //
 *                                                                                                                     //
 * @author mfpinheiro                                                                                                  //
 * @author Última modificação realizada por : mfpinheiro $.                                                            //
 * @version :: 21/06/2016#$.                                                                                           //
 *                                                                                                                     //
 */                                                                                                                    //
                                                                                                                       // 17
                                                                                                                       // 18
                                                                                                                       //
var CollectionBase = function () {                                                                                     // 20
    function CollectionBase(collectionName) {                                                                          // 22
        var isOffline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;                     // 22
                                                                                                                       //
        _classCallCheck(this, CollectionBase);                                                                         // 22
                                                                                                                       //
        this.collectionName = collectionName;                                                                          // 23
                                                                                                                       //
        if (isOffline) {                                                                                               // 25
            this.collectionInstance = new Ground.Collection(collectionName);                                           // 26
        } else {                                                                                                       // 27
            this.collectionInstance = new Mongo.Collection(collectionName);                                            // 29
        }                                                                                                              // 30
                                                                                                                       //
        this.collectionPermissions = {};                                                                               // 32
        this.collectionsDependents = [];                                                                               // 33
                                                                                                                       //
        this.schemaDefault = {};                                                                                       // 36
        this.subSchemas = {};                                                                                          // 37
                                                                                                                       //
        /**                                                                                                            // 39
         * Definições de segurança                                                                                     //
         * Deny all client-side updates on the MdlClientes collection                                                  //
         */                                                                                                            //
        this.collectionInstance.deny({                                                                                 // 43
            insert: function () {                                                                                      // 44
                function insert() {                                                                                    // 43
                    return true;                                                                                       // 45
                }                                                                                                      // 46
                                                                                                                       //
                return insert;                                                                                         // 43
            }(),                                                                                                       // 43
            update: function () {                                                                                      // 48
                function update() {                                                                                    // 43
                    return true;                                                                                       // 49
                }                                                                                                      // 50
                                                                                                                       //
                return update;                                                                                         // 43
            }(),                                                                                                       // 43
            remove: function () {                                                                                      // 52
                function remove() {                                                                                    // 43
                    return true;                                                                                       // 53
                }                                                                                                      // 54
                                                                                                                       //
                return remove;                                                                                         // 43
            }()                                                                                                        // 43
        });                                                                                                            // 43
                                                                                                                       //
        //endregion                                                                                                    // 57
    }                                                                                                                  // 58
                                                                                                                       //
    CollectionBase.prototype.getCollectionName = function () {                                                         // 20
        function getCollectionName() {                                                                                 // 20
            return this.collectionName;                                                                                // 62
        }                                                                                                              // 63
                                                                                                                       //
        return getCollectionName;                                                                                      // 20
    }();                                                                                                               // 20
                                                                                                                       //
    //region ####################### Hooks #######################                                                     // 67
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.afterUpdate = function () {                                                               // 20
        function afterUpdate(id, doc) {                                                                                // 20
                                                                                                                       //
            var listOfCollectionsDependents = this.collectionsDependents;                                              // 70
            var thisCollectionName = this.collectionName;                                                              // 71
                                                                                                                       //
            //Itera                                                                                                    // 73
            for (var key in meteorBabelHelpers.sanitizeForInObject(listOfCollectionsDependents)) {                     // 74
                var Schema = listOfCollectionsDependents[key].getSchemaJson();                                         // 75
                                                                                                                       //
                //Itera os campos da collection dependente está associado à collection em alteração                    // 77
                //Para realizar a atualização                                                                          // 78
                for (var field in meteorBabelHelpers.sanitizeForInObject(Schema)) {                                    // 79
                    if (typeof Schema[field].formOptions != 'undefined' && typeof Schema[field].formOptions.OPTIONSCOLLECTION != 'undefined' && Schema[field].formOptions.OPTIONSCOLLECTION.COLLECTION == thisCollectionName) {
                                                                                                                       //
                        //Define o filtro que será utilizado para                                                      // 84
                        // realizar a atualização                                                                      // 85
                        var fieldFilter = JSON.parse('{"' + field + '._id": "' + id + '"}');                           // 86
                                                                                                                       //
                        //Define a String de atualização considerando o                                                // 88
                        // campo que será atualizado como um array de objetos                                          // 89
                        var atualizar = JSON.parse('{"$set": {"' + field + '.$": ' + JSON.stringify(doc) + '}}');      // 90
                                                                                                                       //
                        //Executa a atualização do campo                                                               // 93
                        var resultUpdate = listOfCollectionsDependents[key].collectionInstance.update(fieldFilter, atualizar, {
                            upsert: false,                                                                             // 95
                            multi: true                                                                                // 96
                        });                                                                                            // 94
                                                                                                                       //
                        //console.log('{"' + field + '._id": "' + id + '"}');                                          // 99
                        //console.log('{"$set": {"' + field + '.$": ' + JSON.stringify(doc) + '}}');                   // 100
                        //console.log(resultUpdate);                                                                   // 101
                    }                                                                                                  // 102
                }                                                                                                      // 103
            }                                                                                                          // 105
        }                                                                                                              // 106
                                                                                                                       //
        return afterUpdate;                                                                                            // 20
    }();                                                                                                               // 20
                                                                                                                       //
    CollectionBase.prototype.canRemove = function () {                                                                 // 20
        function canRemove(id) {                                                                                       // 20
            var listOfCollectionsDependents = this.collectionsDependents;                                              // 109
            var thisCollectionName = this.collectionName;                                                              // 110
                                                                                                                       //
            var result = true;                                                                                         // 112
                                                                                                                       //
            for (var key in meteorBabelHelpers.sanitizeForInObject(listOfCollectionsDependents)) {                     // 114
                var Schema = listOfCollectionsDependents[key].getSchemaJson();                                         // 115
                                                                                                                       //
                //Itera os campos da collection dependente está associado à collection em alteração                    // 117
                //Para realizar a atualização                                                                          // 118
                for (var field in meteorBabelHelpers.sanitizeForInObject(Schema)) {                                    // 119
                    if (typeof Schema[field].formOptions != 'undefined' && typeof Schema[field].formOptions.OPTIONSCOLLECTION != 'undefined' && Schema[field].formOptions.OPTIONSCOLLECTION.COLLECTION == thisCollectionName) {
                                                                                                                       //
                        //Define o filtro que será utilizado para                                                      // 124
                        // realizar a pesquisa de documentos dependentes                                               // 125
                        var fieldFilter = JSON.parse('{"' + field + '._id": "' + id + '"}');                           // 126
                                                                                                                       //
                        //Executa a pesquisa por documentos dependentes                                                // 128
                        var documentsDependent = listOfCollectionsDependents[key].collectionInstance.find(fieldFilter).fetch();
                                                                                                                       //
                        //Se houver documento que depende do item a ser removido                                       // 132
                        // a remoção é negada                                                                          // 133
                        if (documentsDependent.length > 0) {                                                           // 134
                            //console.log('Não é possível excluir o documento pois ele está associado a outro documento');
                            result = false;                                                                            // 136
                            throw new Meteor.Error('Operação não realizada', 'Não será possível realizar esta operação pois este dado está associado a ' + listOfCollectionsDependents[key].collectionName);
                        }                                                                                              // 140
                    }                                                                                                  // 141
                }                                                                                                      // 142
            }                                                                                                          // 144
                                                                                                                       //
            //O documento que será excluído não está relacionado a nenhum outro documento.                             // 146
            return result;                                                                                             // 147
        }                                                                                                              // 148
                                                                                                                       //
        return canRemove;                                                                                              // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 151
     * Retorna o schema desejado                                                                                       //
     * @param schemaName - Nome do Schema definido                                                                     //
     * @returns {SimpleSchema} - Retorna o schema passado por parâmetro ou default                                     //
     * caso nenhum seja passado por parâmetro                                                                          //
     */                                                                                                                //
    CollectionBase.prototype.getSchema = function () {                                                                 // 20
        function getSchema() {                                                                                         // 20
            var schemaName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';            // 157
                                                                                                                       //
            var schema = {};                                                                                           // 158
            if (schemaName === 'default' || _typeof(this.subSchemas[schemaName]) == undefined) {                       // 159
                schema = Utils.cloneObj(this.schemaDefault);                                                           // 160
            } else {                                                                                                   // 161
                schema = this.getSubSchemaJson(schemaName);                                                            // 162
            }                                                                                                          // 163
                                                                                                                       //
            for (var key in meteorBabelHelpers.sanitizeForInObject(schema)) {                                          // 165
                                                                                                                       //
                if (typeof schema[key].formOptions != 'undefined') {                                                   // 167
                    delete schema[key].formOptions;                                                                    // 168
                }                                                                                                      // 169
                                                                                                                       //
                if (typeof schema[key].formValidation != 'undefined') {                                                // 171
                    delete schema[key].formValidation;                                                                 // 172
                }                                                                                                      // 173
                                                                                                                       //
                if (typeof schema[key].dataTableConfig != 'undefined') {                                               // 175
                    delete schema[key].dataTableConfig;                                                                // 176
                }                                                                                                      // 177
            }                                                                                                          // 178
            return new SimpleSchema(schema);                                                                           // 179
        }                                                                                                              // 180
                                                                                                                       //
        return getSchema;                                                                                              // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 182
     * Retorna o subSchema desejado                                                                                    //
     * @param schemaName - Nome do subSchema definido                                                                  //
     * @returns {*} - Retorna o schema passado por parâmetro ou default                                                //
     * caso nenhum seja passado por parâmetro                                                                          //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.getSubSchemaJson = function () {                                                          // 20
        function getSubSchemaJson() {                                                                                  // 20
            var schemaName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';            // 188
                                                                                                                       //
            var fields = [];                                                                                           // 189
            if (typeof this.subSchemas[schemaName] != 'undefined') fields = this.subSchemas[schemaName];else console.log('O SubSchema ' + schemaName + ' NÃO existe!!!');
                                                                                                                       //
            var schema = Utils.cloneObj(this.schemaDefault);                                                           // 195
            for (var key in meteorBabelHelpers.sanitizeForInObject(schema)) {                                          // 196
                if (fields.indexOf(key) == -1) {                                                                       // 197
                    delete schema[key];                                                                                // 198
                }                                                                                                      // 199
            }                                                                                                          // 200
            return schema;                                                                                             // 201
        }                                                                                                              // 203
                                                                                                                       //
        return getSubSchemaJson;                                                                                       // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 205
     * Aplica um schema                                                                                                //
     * @param schema - schema que será aplicado                                                                        //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.setSchema = function () {                                                                 // 20
        function setSchema(schema) {                                                                                   // 20
            this.schemaDefault = schema;                                                                               // 210
            this.collectionInstance.attachSchema(this.getSchema());                                                    // 211
        }                                                                                                              // 213
                                                                                                                       //
        return setSchema;                                                                                              // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 215
     * Inclui em uma lista uma collection que depende da atual                                                         //
     * @param collection - é a collection dependente                                                                   //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.isRequiredBy = function () {                                                              // 20
        function isRequiredBy(collection) {                                                                            // 20
            //console.log(collection.collectionName + ' depende da collection ' + this.collectionName);                // 220
            this.collectionsDependents.push(collection);                                                               // 221
        }                                                                                                              // 223
                                                                                                                       //
        return isRequiredBy;                                                                                           // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 225
     * Adiciona um subSchmea                                                                                           //
     * @param schemaName -                                                                                             //
     * @param schemaFields -                                                                                           //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.addSubSchema = function () {                                                              // 20
        function addSubSchema(schemaName, schemaFields) {                                                              // 20
            this.subSchemas[schemaName] = schemaFields;                                                                // 231
        }                                                                                                              // 233
                                                                                                                       //
        return addSubSchema;                                                                                           // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 235
     * Retorna um subSchema                                                                                            //
     * @param schemaName -                                                                                             //
     * @returns {*}                                                                                                    //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.getSubSchema = function () {                                                              // 20
        function getSubSchema(schemaName) {                                                                            // 20
            return this.subSchemas[schemaName];                                                                        // 241
        }                                                                                                              // 242
                                                                                                                       //
        return getSubSchema;                                                                                           // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 244
     *  Retorna o schmema, em formato json, definido no modelo                                                         //
     * @param schemaName                                                                                               //
     * @returns {{}}                                                                                                   //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.getSchemaJson = function () {                                                             // 20
        function getSchemaJson() {                                                                                     // 20
            var schemaName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';            // 249
                                                                                                                       //
            var schema = {};                                                                                           // 250
                                                                                                                       //
            if (schemaName === 'default' || _typeof(this.subSchemas[schemaName]) == undefined) {                       // 252
                schema = Utils.cloneObj(this.schemaDefault);                                                           // 253
            } else {                                                                                                   // 254
                schema = this.getSubSchemaJson(schemaName);                                                            // 255
            }                                                                                                          // 256
                                                                                                                       //
            return schema;                                                                                             // 258
        }                                                                                                              // 259
                                                                                                                       //
        return getSchemaJson;                                                                                          // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 261
     *  Retorna o schema, em formato json para um determinado campo do documento                                       //
     * @param schemaName                                                                                               //
     * @returns {{}}                                                                                                   //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.getFieldSchemaJson = function () {                                                        // 20
        function getFieldSchemaJson(fieldName) {                                                                       // 20
            var schema = {};                                                                                           // 267
            var fieldJson = {};                                                                                        // 268
                                                                                                                       //
            schema = Utils.cloneObj(this.schemaDefault);                                                               // 270
                                                                                                                       //
            if (schema[fieldName] && schema[fieldName].formOptions && schema[fieldName].formOptions.FIELD_SCHEMA) {    // 272
                fieldJson = schema[fieldName].formOptions.FIELD_SCHEMA;                                                // 274
            }                                                                                                          // 275
                                                                                                                       //
            return fieldJson;                                                                                          // 277
        }                                                                                                              // 278
                                                                                                                       //
        return getFieldSchemaJson;                                                                                     // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 280
     * Retorna a coleção                                                                                               //
     * @returns {Mongo.Collection} - Retorna uma coleção                                                               //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.getCollection = function () {                                                             // 20
        function getCollection() {                                                                                     // 20
            return this.collectionInstance;                                                                            // 285
        }                                                                                                              // 286
                                                                                                                       //
        return getCollection;                                                                                          // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 288
     * Retorna um objeto com as permissões da Collection                                                               //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.getPermissions = function () {                                                            // 20
        function getPermissions() {                                                                                    // 20
            return this.collectionPermissions;                                                                         // 292
        }                                                                                                              // 293
                                                                                                                       //
        return getPermissions;                                                                                         // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 295
     * Aplica as permissões para ações por funcionalidade e por data                                                   //
     * Essa funcionalidade só pode ser aplicada no servidor                                                            //
     * @param permissions permissões definidas para a collection                                                       //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.setPermissions = function () {                                                            // 20
        function setPermissions(permissions) {                                                                         // 20
            var _this = this;                                                                                          // 300
                                                                                                                       //
            if (Meteor.isServer) {                                                                                     // 301
                                                                                                                       //
                this.collectionPermissions = permissions;                                                              // 303
                                                                                                                       //
                if (typeof permissions.byFunctionality != 'undefined') {                                               // 305
                    for (var keyPerm in meteorBabelHelpers.sanitizeForInObject(permissions.byFunctionality)) {         // 306
                        this.collectionInstance.permit(permissions.byFunctionality[keyPerm].actions).ifHasRole(permissions.byFunctionality[keyPerm].groups);
                    }                                                                                                  // 309
                }                                                                                                      // 310
                                                                                                                       //
                if (typeof permissions.byData != 'undefined') {                                                        // 312
                    var _loop = function () {                                                                          // 312
                        function _loop(_keyPerm) {                                                                     // 312
                                                                                                                       //
                            Security.defineMethod(_this.collectionName + 'Permissions_' + _keyPerm, {                  // 315
                                fetch: [],                                                                             // 316
                                allow: function () {                                                                   // 317
                                    function allow(type, field, userId, doc) {                                         // 315
                                        var result = true;                                                             // 318
                                                                                                                       //
                                        for (var key in meteorBabelHelpers.sanitizeForInObject(permissions.byData[_keyPerm].data)) {
                                            if (doc[key] != permissions.byData[_keyPerm].data[key]) result = false;    // 321
                                        }                                                                              // 323
                                                                                                                       //
                                        return result && Roles.userIsInRole(userId, permissions.byData[_keyPerm].groups);
                                    }                                                                                  // 326
                                                                                                                       //
                                    return allow;                                                                      // 315
                                }()                                                                                    // 315
                            });                                                                                        // 315
                            _this.collectionInstance.permit(permissions.byData[_keyPerm].actions)[_this.collectionName + 'Permissions_' + _keyPerm]();
                        }                                                                                              // 312
                                                                                                                       //
                        return _loop;                                                                                  // 312
                    }();                                                                                               // 312
                                                                                                                       //
                    for (var _keyPerm in meteorBabelHelpers.sanitizeForInObject(permissions.byData)) {                 // 313
                        _loop(_keyPerm);                                                                               // 313
                    }                                                                                                  // 329
                }                                                                                                      // 331
            }                                                                                                          // 333
        }                                                                                                              // 335
                                                                                                                       //
        return setPermissions;                                                                                         // 20
    }();                                                                                                               // 20
                                                                                                                       //
    /**                                                                                                                // 337
     * Retorna os campos de uma collection que serão exibidos                                                          //
     * @param schemaName - Nome do schema que será aplicado                                                            //
     * as regras de projection                                                                                         //
     * @returns {{_id: number}} - Retorna estado dos campos                                                            //
     * 0 não será exibido e 1 será exibido                                                                             //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    CollectionBase.prototype.getProjection = function () {                                                             // 20
        function getProjection(schemaName) {                                                                           // 20
            var fields = [];                                                                                           // 345
            if (this.getSubSchema(schemaName) != undefined) {                                                          // 346
                fields = this.getSubSchema(schemaName);                                                                // 347
            } else {                                                                                                   // 348
                for (var key in meteorBabelHelpers.sanitizeForInObject(this.getSchemaJson())) {                        // 349
                    fields.push(key);                                                                                  // 350
                }                                                                                                      // 351
            }                                                                                                          // 352
                                                                                                                       //
            //fields necessita ser um array de string                                                                  // 354
            if (!Array.isArray(fields)) {                                                                              // 355
                fields = [fields];                                                                                     // 356
            }                                                                                                          // 357
                                                                                                                       //
            var projection = { _id: 1 };                                                                               // 359
            fields.forEach(function (field) {                                                                          // 360
                projection[field] = 1;                                                                                 // 361
            });                                                                                                        // 362
                                                                                                                       //
            return projection;                                                                                         // 364
        }                                                                                                              // 366
                                                                                                                       //
        return getProjection;                                                                                          // 20
    }();                                                                                                               // 20
                                                                                                                       //
    return CollectionBase;                                                                                             // 20
}();                                                                                                                   // 20
;                                                                                                                      // 371
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"modelBase.js":["babel-runtime/helpers/typeof","babel-runtime/helpers/classCallCheck","meteor/meteor","meteor/random","./utils","meteor/tmeasday:publish-counts",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/reuse/modelBase.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({ModelBase:function(){return ModelBase}});var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Random;module.import('meteor/random',{"Random":function(v){Random=v}});var Utils;module.import('./utils',{"Utils":function(v){Utils=v}});var Counts;module.import('meteor/tmeasday:publish-counts',{"Counts":function(v){Counts=v}});
                                                                                                                       //
/**                                                                                                                    // 1
 * <p>                                                                                                                 //
 * Finalidade da Classe: Aplicar os métodos para a                                                                     //
 * manipulação de uma collection, baseado nos                                                                          //
 * métodos definidos pelo framework Synergia Meteor.                                                                   //
 * </p>                                                                                                                //
 *                                                                                                                     //
 * <p>                                                                                                                 //
 * Copyright: Copyright (c) Synergia - DCC - UFMG                                                                      //
 * </p>                                                                                                                //
 *                                                                                                                     //
 * @author mfpinheiro                                                                                                  //
 * @author Última modificação realizada por : mfpinheiro $.                                                            //
 * @version :: 21/06/2016#$.                                                                                           //
 *                                                                                                                     //
 */                                                                                                                    //
                                                                                                                       // 17
                                                                                                                       // 18
                                                                                                                       // 19
                                                                                                                       //
                                                                                                                       // 21
                                                                                                                       //
var ModelBase = function () {                                                                                          // 23
                                                                                                                       //
    /**                                                                                                                // 25
     * Construtor                                                                                                      //
     * @param collectionBase - Collection que será passada para o construtor                                           //
     * @param isTest - Modo de teste                                                                                   //
     */                                                                                                                //
    function ModelBase(collectionBase) {                                                                               // 30
        var _this = this;                                                                                              // 30
                                                                                                                       //
        var isTest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;                        // 30
                                                                                                                       //
        _classCallCheck(this, ModelBase);                                                                              // 30
                                                                                                                       //
        this.myCollection = collectionBase.getCollection();                                                            // 32
                                                                                                                       //
        this.myCollectionBase = collectionBase;                                                                        // 34
                                                                                                                       //
        this.collectionsModelDependents = [];                                                                          // 36
                                                                                                                       //
        this.functions = {};                                                                                           // 38
                                                                                                                       //
        this.isTest = isTest;                                                                                          // 40
                                                                                                                       //
        this.publications = function (filter, projection, tableConfig) {                                               // 42
                                                                                                                       //
            Counts.publish(this, collectionBase.getCollection()._name + "-counter", collectionBase.getCollection().find());
                                                                                                                       //
            var data = null;                                                                                           // 47
            var userId = this.userId;                                                                                  // 48
            var permissions = collectionBase.getPermissions();                                                         // 49
            var queryParameter = {};                                                                                   // 50
                                                                                                                       //
            if (typeof tableConfig != 'undefined') check(tableConfig, Object);                                         // 52
                                                                                                                       //
            check(projection, Object);                                                                                 // 55
            // se existe um filtro                                                                                     // 56
                                                                                                                       //
            if (projection != {}) queryParameter["fields"] = projection;                                               // 58
                                                                                                                       //
            if ((typeof filter === 'undefined' ? 'undefined' : _typeof(filter)) === 'object') {                        // 63
                check(filter, Object);                                                                                 // 64
                                                                                                                       //
                if (permissions.length > 0) {                                                                          // 66
                    var result = true;                                                                                 // 67
                                                                                                                       //
                    for (var keyPerm in meteorBabelHelpers.sanitizeForInObject(permissions)) {                         // 69
                                                                                                                       //
                        //Se o usuário não estiver no Grupo ele não pode ver nada                                      // 71
                        if (permissions[keyPerm].groups != 'undefined' && Roles.userIsInRole(userId, permissions[keyPerm].groups) == false && permissions[keyPerm].actions.indexOf('read') > -1) {
                            result = false;                                                                            // 74
                        } else if (permissions[keyPerm].groups != 'undefined' && Roles.userIsInRole(userId, permissions[keyPerm].groups) == true && permissions[keyPerm].actions.indexOf('read') > -1) {
                            //Esta variável permite saber se o usuário em alguma das keyPerm possui direito 'read'     // 78
                            //Se a keyPerm atual chegar até aqui o result deve ser verdadeiro para o próximo if        // 79
                            result = true;                                                                             // 80
                        }                                                                                              // 81
                                                                                                                       //
                        //Altera o filtro para informar as permissões de acesso                                        // 83
                        if (result && typeof permissions[keyPerm].data != 'undefined' && permissions[keyPerm].actions.indexOf('read') > -1) {
                            //Faz a substituiçãop da tag {_UserID_} pelo ID do usuário logado                          // 85
                            var _data = JSON.stringify(permissions[keyPerm].data);                                     // 86
                            if (typeof userId != 'undefined') {                                                        // 87
                                _data = _data.replace(new RegExp('{_UserID_}', 'g'), userId);                          // 88
                            }                                                                                          // 89
                            filter = Utils.mergeObj(filter, JSON.parse(_data));                                        // 90
                        }                                                                                              // 92
                                                                                                                       //
                        if (result) {                                                                                  // 94
                                                                                                                       //
                            //Define quais campos serão visiveis                                                       // 96
                            if (filter != {}) queryParameter["filter"] = filter;                                       // 97
                                                                                                                       //
                            //Define propriedades da tabela: ordenação, paginação, etc.                                // 100
                            if (typeof tableConfig != 'undefined' && Object.keys(tableConfig).length != 0) {           // 101
                                if (typeof tableConfig.limit != 'undefined') queryParameter["limit"] = tableConfig.limit;
                                                                                                                       //
                                if (typeof tableConfig.skip != 'undefined') queryParameter["skip"] = tableConfig.skip;
                                                                                                                       //
                                if (typeof tableConfig.sort != 'undefined') queryParameter["sort"] = tableConfig.sort;
                            }                                                                                          // 110
                                                                                                                       //
                            return collectionBase.getCollection().find(filter, queryParameter);                        // 113
                                                                                                                       //
                            //console.log('Publications Default');                                                     // 115
                            //return collectionBase.getCollection().find();                                            // 116
                        }                                                                                              // 117
                    }                                                                                                  // 120
                    console.log('Não publicou nada');                                                                  // 121
                    return this.ready();                                                                               // 122
                } else {                                                                                               // 124
                    //Se não existir permissões é retornado o filtro padrão                                            // 125
                    //Define quais campos serão visiveis                                                               // 126
                    if (filter != {}) queryParameter["filter"] = filter;                                               // 127
                                                                                                                       //
                    //Define propriedades da tabela: ordenação, paginação, etc.                                        // 130
                    if (typeof tableConfig != 'undefined' && Object.keys(tableConfig).length != 0) {                   // 131
                        if (typeof tableConfig.limit != 'undefined') queryParameter["limit"] = tableConfig.limit;      // 132
                                                                                                                       //
                        if (typeof tableConfig.skip != 'undefined') queryParameter["skip"] = tableConfig.skip;         // 135
                                                                                                                       //
                        if (typeof tableConfig.sort != 'undefined') queryParameter["sort"] = tableConfig.sort;         // 138
                    }                                                                                                  // 140
                                                                                                                       //
                    return collectionBase.getCollection().find(filter, queryParameter);                                // 143
                }                                                                                                      // 144
            } else {                                                                                                   // 146
                console.log('Não publicou nada');                                                                      // 147
                //Se o parãmetro filter for inválido, ou seja, não for um objeto, não retorna nada.                    // 148
                return this.ready();                                                                                   // 149
            }                                                                                                          // 150
        };                                                                                                             // 152
                                                                                                                       //
        this.getUserId = function () {                                                                                 // 154
            var userId = null;                                                                                         // 155
                                                                                                                       //
            try {                                                                                                      // 157
                userId = Meteor.userId();                                                                              // 158
            } catch (err) {                                                                                            // 159
                userId = _this.userId;                                                                                 // 161
            }                                                                                                          // 162
                                                                                                                       //
            return userId;                                                                                             // 164
        };                                                                                                             // 165
                                                                                                                       //
        this.canUserDo = function (action, doc) {                                                                      // 167
            var permissions = _this.myCollectionBase.getPermissions();                                                 // 168
            var userId = _this.getUserId();                                                                            // 169
            var result = false;                                                                                        // 170
            if (userId === null) {                                                                                     // 171
                                                                                                                       //
                //ToDo                                                                                                 // 173
                //Avaliar melhor essa situação, pois se o usuário não logado conseguir fazer uma                       // 174
                //requsiçaõ para o servidor ele poderá prejudicar o sistema                                            // 175
                //Se não existir userId o retorno é true para permitir que o usuário se cadastre e logue.              // 176
                result = true;                                                                                         // 177
            } else {                                                                                                   // 178
                if (permissions.length > 0) {                                                                          // 179
                    for (var index in meteorBabelHelpers.sanitizeForInObject(permissions)) {                           // 180
                                                                                                                       //
                        if (typeof permissions[index].groups != 'undefined') {                                         // 182
                                                                                                                       //
                            if (Roles.userIsInRole(userId, permissions[index].groups) && permissions[index].actions.indexOf(action) > -1) {
                                result = true;                                                                         // 186
                            }                                                                                          // 187
                        }                                                                                              // 189
                        //Verifica somente o acesso, o filtro de dados é feito no Model                                // 190
                        if ((result || typeof permissions[index].groups == 'undefined') && typeof permissions[index].data != 'undefined' && typeof doc != 'undefined' && permissions[index].actions.indexOf(action) > -1) {
                                                                                                                       //
                            //Substitui as tags {_UserID_} pelo ID do usuário no Objeto                                // 195
                            var dataTmp = JSON.stringify(permissions[index].data);                                     // 196
                            permissions[index].data = JSON.parse(dataTmp.replace(new RegExp('{_UserID_}', 'g'), userId));
                                                                                                                       //
                            for (var field in meteorBabelHelpers.sanitizeForInObject(permissions[index].data)) {       // 199
                                                                                                                       //
                                //Se alguma condição não for aceita o resultado é false                                // 201
                                if (permissions[index].data[field] != doc[field]) {                                    // 202
                                    result = false;                                                                    // 203
                                }                                                                                      // 204
                            }                                                                                          // 206
                            if (result) {                                                                              // 207
                                return true;                                                                           // 208
                            }                                                                                          // 209
                        } else if (result) {                                                                           // 211
                            return true;                                                                               // 212
                        }                                                                                              // 213
                    }                                                                                                  // 215
                    //Se nenhuma permissão é atendida o resultado é sempre falso.                                      // 216
                    return result;                                                                                     // 217
                } else {                                                                                               // 219
                    //Se não existir permissões por funcionalidade (groups) ou data o acesso é sempre permitido.       // 220
                    return true;                                                                                       // 221
                }                                                                                                      // 222
            }                                                                                                          // 223
        };                                                                                                             // 225
                                                                                                                       //
        //Define uma variável para a função de verificação de permissões                                               // 227
        var fCanUserDo = this.canUserDo;                                                                               // 228
                                                                                                                       //
        //######################################################                                                       // 230
        //###Inicialização de métodos de validação# de acesso###                                                       // 231
        //######################################################                                                       // 232
                                                                                                                       //
        this.functions['get.' + collectionBase.getCollection()._name + '.permissions'] = function () {                 // 234
            return collectionBase.getPermissions();                                                                    // 236
        };                                                                                                             // 237
                                                                                                                       //
        //##################################################                                                           // 239
        //###Inicialização de métodos que alteram o banco###                                                           // 240
        //##################################################                                                           // 241
                                                                                                                       //
                                                                                                                       //
        this.functions[collectionBase.getCollection()._name + '.getTotalDocuments'] = function () {                    // 244
                                                                                                                       //
            var result = collectionBase.getCollection().find().count();                                                // 247
            return result;                                                                                             // 248
        };                                                                                                             // 250
                                                                                                                       //
        this.functions[collectionBase.getCollection()._name + '.insert'] = function (dataObj) {                        // 252
                                                                                                                       //
            check(dataObj, collectionBase.getSchema('insert'));                                                        // 255
                                                                                                                       //
            var result = collectionBase.getCollection().insert(dataObj);                                               // 257
            return result;                                                                                             // 258
        };                                                                                                             // 260
                                                                                                                       //
        this.functions[collectionBase.getCollection()._name + '.update'] = function (id, dataObj) {                    // 262
            check(id, String);                                                                                         // 263
            check(dataObj, collectionBase.getSchema('update'));                                                        // 264
                                                                                                                       //
            var result = collectionBase.getCollection().update(id, {                                                   // 266
                $set: dataObj                                                                                          // 267
            });                                                                                                        // 266
                                                                                                                       //
            return result;                                                                                             // 270
        };                                                                                                             // 272
                                                                                                                       //
        this.functions[collectionBase.getCollection()._name + '.upsert'] = function (id, dataObj) {                    // 274
            check(id, String);                                                                                         // 275
            //console.log(collectionBase.getSubSchemaJson('update'));                                                  // 276
            check(dataObj, collectionBase.getSchema('update'));                                                        // 277
            //console.log(dataObj);                                                                                    // 278
                                                                                                                       //
                                                                                                                       //
            var result = collectionBase.getCollection().upsert(id, {                                                   // 281
                $set: dataObj                                                                                          // 282
            });                                                                                                        // 281
                                                                                                                       //
            return result;                                                                                             // 285
        };                                                                                                             // 287
                                                                                                                       //
        this.functions[collectionBase.getCollection()._name + '.remove'] = function (id) {                             // 289
            check(id, String);                                                                                         // 290
                                                                                                                       //
            var result = collectionBase.getCollection().remove(id);                                                    // 292
            return result;                                                                                             // 293
        };                                                                                                             // 295
                                                                                                                       //
        //####################### Hooks ##################################                                             // 297
        //####################### Hooks ##################################                                             // 298
        //####################### Hooks ##################################                                             // 299
        //####################### Hooks ##################################                                             // 300
                                                                                                                       //
        this.myCollection.before.remove(function (userId, doc) {                                                       // 302
                                                                                                                       //
            if (fCanUserDo('remove', doc) == false) {                                                                  // 304
                throw new Meteor.Error('Acesso negado', 'Você não tem permissão para realizar esta operação.');        // 305
                return false;                                                                                          // 306
            } else {                                                                                                   // 307
                if (collectionBase.canRemove(doc._id)) return true;                                                    // 308
            }                                                                                                          // 310
        });                                                                                                            // 312
                                                                                                                       //
        this.myCollection.before.update(function (userId, doc) {                                                       // 314
            if (fCanUserDo('update', doc) == false) {                                                                  // 315
                throw new Meteor.Error('Acesso negado', 'Você não tem permissão para realizar esta operação.');        // 316
                return false;                                                                                          // 317
            } else return true;                                                                                        // 318
        });                                                                                                            // 320
                                                                                                                       //
        this.myCollection.after.update(function (userId, doc) {                                                        // 322
            collectionBase.afterUpdate(doc._id, doc);                                                                  // 323
        });                                                                                                            // 324
                                                                                                                       //
        this.myCollection.before.insert(function (userId, doc) {                                                       // 327
            if (fCanUserDo('insert') == false) {                                                                       // 328
                throw new Meteor.Error('Acesso negado', 'Você não tem permissão para realizar esta operação.');        // 329
                return false;                                                                                          // 330
            } else {                                                                                                   // 331
                return true;                                                                                           // 332
            }                                                                                                          // 333
        });                                                                                                            // 335
    }                                                                                                                  // 337
                                                                                                                       //
    /**                                                                                                                // 339
     * Inicializa todos os métodos que são executados no servidor, referente ao modelo.                                //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    ModelBase.prototype.applyAllMethods = function () {                                                                // 23
        function applyAllMethods() {                                                                                   // 23
            Meteor.methods(this.functions);                                                                            // 343
            return true;                                                                                               // 344
        }                                                                                                              // 345
                                                                                                                       //
        return applyAllMethods;                                                                                        // 23
    }();                                                                                                               // 23
                                                                                                                       //
    /**                                                                                                                // 347
     * Retorna todos os métodos em uso                                                                                 //
     * @returns {*|any}                                                                                                //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    ModelBase.prototype.getAllApplyMethods = function () {                                                             // 23
        function getAllApplyMethods() {                                                                                // 23
            return Meteor.methods(this.functions);                                                                     // 352
        }                                                                                                              // 353
                                                                                                                       //
        return getAllApplyMethods;                                                                                     // 23
    }();                                                                                                               // 23
                                                                                                                       //
    ModelBase.prototype.getCollectionName = function () {                                                              // 23
        function getCollectionName() {                                                                                 // 23
            return this.myCollection._name;                                                                            // 356
        }                                                                                                              // 357
                                                                                                                       //
        return getCollectionName;                                                                                      // 23
    }();                                                                                                               // 23
                                                                                                                       //
    ModelBase.prototype.getCollection = function () {                                                                  // 23
        function getCollection() {                                                                                     // 23
            return this.myCollection;                                                                                  // 361
        }                                                                                                              // 362
                                                                                                                       //
        return getCollection;                                                                                          // 23
    }();                                                                                                               // 23
                                                                                                                       //
    /**                                                                                                                // 364
     * Inicializa o método informado                                                                                   //
     * @param methodName Nome do método que será inicializado no servidor.                                             //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    ModelBase.prototype.applyMethod = function () {                                                                    // 23
        function applyMethod(methodName) {                                                                             // 23
            Meteor.methods(this.functions[methodName]);                                                                // 369
        }                                                                                                              // 370
                                                                                                                       //
        return applyMethod;                                                                                            // 23
    }();                                                                                                               // 23
                                                                                                                       //
    /**                                                                                                                // 372
     * Aplica os métodos que serão executados no servidor                                                              //
     * @param methodName                                                                                               //
     * @param functionDeclaration                                                                                      //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    ModelBase.prototype.setMethod = function () {                                                                      // 23
        function setMethod(methodName, functionDeclaration) {                                                          // 23
            this.functions[methodName] = functionDeclaration;                                                          // 378
            this.applyMethod(methodName);                                                                              // 379
        }                                                                                                              // 380
                                                                                                                       //
        return setMethod;                                                                                              // 23
    }();                                                                                                               // 23
                                                                                                                       //
    /**                                                                                                                // 382
     * Aplica as publicações para a collection                                                                         //
     * @param newPublicationsFunction                                                                                  //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    ModelBase.prototype.setPublications = function () {                                                                // 23
        function setPublications(newPublicationsFunction) {                                                            // 23
            this.publications = newPublicationsFunction;                                                               // 387
            this.applyPublications();                                                                                  // 388
        }                                                                                                              // 389
                                                                                                                       //
        return setPublications;                                                                                        // 23
    }();                                                                                                               // 23
                                                                                                                       //
    /**                                                                                                                // 391
     * Faz a publicação da collection                                                                                  //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    ModelBase.prototype.applyPublications = function () {                                                              // 23
        function applyPublications() {                                                                                 // 23
                                                                                                                       //
            Meteor.publish(this.myCollection._name, this.publications);                                                // 396
        }                                                                                                              // 399
                                                                                                                       //
        return applyPublications;                                                                                      // 23
    }();                                                                                                               // 23
                                                                                                                       //
    ModelBase.prototype.setPermissions = function () {                                                                 // 23
        function setPermissions() {                                                                                    // 23
            var permissions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};                  // 401
                                                                                                                       //
                                                                                                                       //
            this.myCollectionBase.setPermissions(permissions);                                                         // 403
        }                                                                                                              // 404
                                                                                                                       //
        return setPermissions;                                                                                         // 23
    }();                                                                                                               // 23
                                                                                                                       //
    return ModelBase;                                                                                                  // 23
}();                                                                                                                   // 23
;                                                                                                                      // 407
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"utils.js":["babel-runtime/helpers/typeof","babel-runtime/helpers/classCallCheck",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/reuse/utils.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({Utils:function(){return Utils}});var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});
                                                                                                                       //
                                                                                                                       //
var Util = function () {                                                                                               //
    function Util() {                                                                                                  // 3
        _classCallCheck(this, Util);                                                                                   // 3
    }                                                                                                                  // 5
                                                                                                                       //
    /**                                                                                                                // 7
     * Clona um objeto.                                                                                                //
     * @param obj - Objeto que será clonado                                                                            //
     * @returns {*} - Objeto clonado.                                                                                  //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    Util.prototype.cloneObj = function () {                                                                            //
        function cloneObj(obj) {                                                                                       //
            if (obj === null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || 'isActiveClone' in obj) return obj;
                                                                                                                       //
            if (obj instanceof Date) var temp = new obj.constructor(); //or new Date(obj);                             // 16
            else var temp = obj.constructor();                                                                         // 16
                                                                                                                       //
            for (var key in meteorBabelHelpers.sanitizeForInObject(obj)) {                                             // 21
                if (Object.prototype.hasOwnProperty.call(obj, key)) {                                                  // 22
                    obj['isActiveClone'] = null;                                                                       // 23
                    temp[key] = this.cloneObj(obj[key]);                                                               // 24
                    delete obj['isActiveClone'];                                                                       // 25
                }                                                                                                      // 26
            }                                                                                                          // 27
                                                                                                                       //
            return temp;                                                                                               // 29
        }                                                                                                              // 30
                                                                                                                       //
        return cloneObj;                                                                                               //
    }();                                                                                                               //
                                                                                                                       //
    Util.prototype.mergeObj = function () {                                                                            //
        function mergeObj(source1, source2) {                                                                          //
            /*                                                                                                         // 33
             * Properties from the Souce1 object will be copied to Source2 Object.                                     //
             * Note: This method will return a new merged object, Source1 and Source2 original values will not be replaced.
             * */                                                                                                      //
            var mergedObj = this.cloneObj(source2); // Copying Source2 to a new Object                                 // 37
                                                                                                                       //
            for (var attrname in meteorBabelHelpers.sanitizeForInObject(source1)) {                                    // 39
                if (mergedObj.hasOwnProperty(attrname)) {                                                              // 40
                    if (source1[attrname] != null && source1[attrname].constructor == Object) {                        // 41
                        /*                                                                                             // 42
                         * Recursive call if the property is an object,                                                //
                         * Iterate the object and set all properties of the inner object.                              //
                         */                                                                                            //
                        mergedObj[attrname] = mergedObj(source1[attrname], mergedObj[attrname]);                       // 46
                    }                                                                                                  // 47
                } else {                                                                                               // 49
                    //else copy the property from source1                                                              // 49
                    mergedObj[attrname] = source1[attrname];                                                           // 50
                }                                                                                                      // 52
            }                                                                                                          // 53
                                                                                                                       //
            return mergedObj;                                                                                          // 55
        }                                                                                                              // 56
                                                                                                                       //
        return mergeObj;                                                                                               //
    }();                                                                                                               //
                                                                                                                       //
    /**                                                                                                                // 58
     * Converte Array em Object                                                                                        //
     * @param arr Array que será convertido em um objeto                                                               //
     * @returns Object                                                                                                 //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    Util.prototype.toObject = function () {                                                                            //
        function toObject(arr) {                                                                                       //
                                                                                                                       //
            var objRetorno = {};                                                                                       // 65
            if (arr !== undefined && arr != null) {                                                                    // 66
                for (var i = 0; i < arr.length; ++i) {                                                                 // 67
                    try {                                                                                              // 68
                        if (arr[i] !== undefined) objRetorno[i] = JSON.parse(arr[i]);                                  // 69
                    } catch (err) {                                                                                    // 71
                        if (arr[i] !== undefined) objRetorno[i] = arr[i];                                              // 73
                    }                                                                                                  // 75
                }                                                                                                      // 77
                                                                                                                       //
                return objRetorno;                                                                                     // 79
            } else {                                                                                                   // 80
                console.log('Valor indefinido');                                                                       // 81
            }                                                                                                          // 82
        }                                                                                                              // 84
                                                                                                                       //
        return toObject;                                                                                               //
    }();                                                                                                               //
                                                                                                                       //
    /**                                                                                                                // 86
     * Converte Array em Object Array                                                                                  //
     * @param arr Array que será convertido em um array de objeto                                                      //
     * @returns Object Array --> ([Object])                                                                            //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    Util.prototype.toObjectArray = function () {                                                                       //
        function toObjectArray(arr) {                                                                                  //
                                                                                                                       //
            var objArrRetorno = [];                                                                                    // 94
            if (arr !== undefined && arr != null) {                                                                    // 95
                                                                                                                       //
                if (typeof arr == 'string') {                                                                          // 97
                    arr = JSON.parse(arr);                                                                             // 98
                }                                                                                                      // 99
                                                                                                                       //
                for (var i = 0; i < arr.length; ++i) {                                                                 // 101
                    try {                                                                                              // 102
                        if (arr[i] !== undefined) objArrRetorno[i] = JSON.parse(arr[i]);                               // 103
                    } catch (err) {                                                                                    // 105
                        if (arr[i] !== undefined) {                                                                    // 107
                            objArrRetorno[i] = arr[i];                                                                 // 108
                        }                                                                                              // 109
                    }                                                                                                  // 110
                }                                                                                                      // 112
                                                                                                                       //
                return objArrRetorno;                                                                                  // 114
            } else {                                                                                                   // 115
                console.log('Valor indefinido');                                                                       // 116
            }                                                                                                          // 117
        }                                                                                                              // 119
                                                                                                                       //
        return toObjectArray;                                                                                          //
    }();                                                                                                               //
                                                                                                                       //
    /**                                                                                                                // 121
     * Converte Object em Array                                                                                        //
     * @param obj Object que será convertido em um Array                                                               //
     * @returns Array                                                                                                  //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    Util.prototype.toArray = function () {                                                                             //
        function toArray(obj) {                                                                                        //
                                                                                                                       //
            var arrRetorno = [];                                                                                       // 128
            if (obj !== undefined && obj != null) {                                                                    // 129
                for (var i in meteorBabelHelpers.sanitizeForInObject(obj)) {                                           // 130
                    try {                                                                                              // 131
                                                                                                                       //
                        if (obj[i] !== undefined) {                                                                    // 133
                            var stringObjeto = '{"_id":"' + obj[i]._id + '"';                                          // 134
                            for (var key in meteorBabelHelpers.sanitizeForInObject(obj[i])) {                          // 135
                                if (key != '_id') stringObjeto = stringObjeto + ',"' + key + '":"' + obj[i][key] + '"';
                            }                                                                                          // 138
                            arrRetorno[i] = stringObjeto + '}';                                                        // 139
                        }                                                                                              // 141
                    } catch (err) {                                                                                    // 142
                        if (obj[i] !== undefined) arrRetorno[i] = obj[i];                                              // 144
                    }                                                                                                  // 146
                }                                                                                                      // 148
                                                                                                                       //
                return arrRetorno;                                                                                     // 150
            } else {                                                                                                   // 151
                console.log('Valor indefinido');                                                                       // 152
            }                                                                                                          // 153
        }                                                                                                              // 155
                                                                                                                       //
        return toArray;                                                                                                //
    }();                                                                                                               //
                                                                                                                       //
    return Util;                                                                                                       //
}();                                                                                                                   //
                                                                                                                       //
var Utils = new Util();                                                                                                // 159
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"subprocessos":{"collection.js":["../reuse/collectionBase","./schema",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/subprocessos/collection.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({CollectionSubProcessos:function(){return CollectionSubProcessos}});var CollectionBase;module.import("../reuse/collectionBase",{"CollectionBase":function(v){CollectionBase=v}});var schemaSubProcessos;module.import("./schema",{"schemaSubProcessos":function(v){schemaSubProcessos=v}});
                                                                                                                       // 2
                                                                                                                       //
var CollectionSubProcessos = new CollectionBase('subprocessos');                                                       // 5
                                                                                                                       //
//Definição do Schema da Collection - Schema Default                                                                   // 7
CollectionSubProcessos.setSchema(schemaSubProcessos);                                                                  // 8
                                                                                                                       //
//################################################                                                                     // 10
//################ SUB-SCHEMAS ###################                                                                     // 11
//################################################                                                                     // 12
                                                                                                                       //
CollectionSubProcessos.addSubSchema('default', ['title', 'text', 'pergunta', 'options', 'process', 'tasks', 'phase']);
                                                                                                                       //
CollectionSubProcessos.addSubSchema('insert', ['title', 'text', 'pergunta', 'options', 'process', 'tasks', 'phase']);  // 17
                                                                                                                       //
CollectionSubProcessos.addSubSchema('update', ['title', 'text', 'pergunta', 'options', 'process', 'tasks', 'phase']);  // 20
                                                                                                                       //
CollectionSubProcessos.addSubSchema('view', ['title', 'text', 'pergunta', 'options', 'process', 'tasks', 'phase']);    // 23
                                                                                                                       //
CollectionSubProcessos.addSubSchema('tableview', ['title', 'text', 'pergunta']);                                       // 26
                                                                                                                       //
//################################################                                                                     // 29
//############ RESTRIÇÃO DE ACESSO ###############                                                                     // 30
//################################################                                                                     // 31
var permissions = [                                                                                                    // 32
    //     {                                                                                                           // 33
    //     actions: ['insert', 'update', 'remove', 'read'],                                                            // 34
    //     groups: ['administrador'], //Permissions by Functionality                                                   // 35
    // },                                                                                                              // 36
    //     {                                                                                                           // 37
    //         actions: ['remove', 'read', 'update'],                                                                  // 38
    //         groups: ['administrador'], //Permissions by Functionality                                               // 39
    //         data: {userId: "{_UserID_}"}, //Filter/Permissions by Data                                              // 40
    //     },                                                                                                          // 41
];                                                                                                                     // 32
                                                                                                                       //
CollectionSubProcessos.setPermissions(permissions);                                                                    // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"model.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","./collection.js","../reuse/modelBase",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/subprocessos/model.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({MdlSubProcessos:function(){return MdlSubProcessos}});var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var CollectionSubProcessos;module.import("./collection.js",{"CollectionSubProcessos":function(v){CollectionSubProcessos=v}});var ModelBase;module.import("../reuse/modelBase",{"ModelBase":function(v){ModelBase=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       //
var ModelSubProcessos = function (_ModelBase) {                                                                        //
  _inherits(ModelSubProcessos, _ModelBase);                                                                            //
                                                                                                                       //
  function ModelSubProcessos() {                                                                                       //
    _classCallCheck(this, ModelSubProcessos);                                                                          //
                                                                                                                       //
    return _possibleConstructorReturn(this, _ModelBase.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  return ModelSubProcessos;                                                                                            //
}(ModelBase);                                                                                                          //
                                                                                                                       //
var MdlSubProcessos = new ModelSubProcessos(CollectionSubProcessos);                                                   // 8
                                                                                                                       //
//MdlSubProcessos.setCollectionModelDependent(MdlProjetos);                                                            // 10
                                                                                                                       //
//Aplicar os métodos que serão utilizados no Client através do "Meteor.Call"                                           // 12
MdlSubProcessos.applyAllMethods();                                                                                     // 13
                                                                                                                       //
//Aplicar as publicações que serão consideradas quando no Client for executado                                         // 15
// o "Template.subscribe"                                                                                              // 16
MdlSubProcessos.applyPublications();                                                                                   // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/subprocessos/schema.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({schemaSubProcessos:function(){return schemaSubProcessos}});var schemaSubProcessos = {                   // 1
    title: {                                                                                                           // 2
        type: String,                                                                                                  // 3
        defaultValue: '',                                                                                              // 4
        label: 'Titulo',                                                                                               // 5
        formOptions: {                                                                                                 // 6
            VISIBLE: true,                                                                                             // 7
            FIELD_COMPONENT: 'TextField'                                                                               // 8
        },                                                                                                             // 6
        formValidation: {                                                                                              // 10
            required: { value: true, message: 'O título do subprocesso é obrigatório' }                                // 11
        },                                                                                                             // 10
        dataTableConfig: {                                                                                             // 13
            link: {                                                                                                    // 14
                router: 'SubProcessosView',                                                                            // 15
                field: '_id'                                                                                           // 16
            }                                                                                                          // 14
        }                                                                                                              // 13
    },                                                                                                                 // 2
    text: {                                                                                                            // 20
        type: String,                                                                                                  // 21
        defaultValue: '',                                                                                              // 22
        label: 'Texto (Lei)',                                                                                          // 23
        formOptions: {                                                                                                 // 24
            VISIBLE: true,                                                                                             // 25
            FIELD_COMPONENT: 'TextField'                                                                               // 26
        },                                                                                                             // 24
        formValidation: {                                                                                              // 28
            required: { value: true, message: 'O texto do subprocesso é obrigatório' }                                 // 29
        },                                                                                                             // 28
        optional: true                                                                                                 // 31
    },                                                                                                                 // 20
    pergunta: {                                                                                                        // 33
        type: String,                                                                                                  // 34
        defaultValue: '',                                                                                              // 35
        label: 'Pergunta',                                                                                             // 36
        formOptions: {                                                                                                 // 37
            VISIBLE: true,                                                                                             // 38
            FIELD_COMPONENT: 'TextField'                                                                               // 39
        },                                                                                                             // 37
        formValidation: {                                                                                              // 41
            required: { value: true, message: 'O texto do subprocesso é obrigatório' }                                 // 42
        },                                                                                                             // 41
        optional: true                                                                                                 // 44
    },                                                                                                                 // 33
    phase: {                                                                                                           // 46
        type: String,                                                                                                  // 47
        defaultValue: '',                                                                                              // 48
        label: 'Fase',                                                                                                 // 49
        formOptions: {                                                                                                 // 50
            VISIBLE: true,                                                                                             // 51
            FIELD_COMPONENT: 'TextField'                                                                               // 52
        },                                                                                                             // 50
        formValidation: {                                                                                              // 54
            required: { value: true, message: 'A fase a qual o subprocesso pertence é obrigatória' }                   // 55
        },                                                                                                             // 54
        optional: true                                                                                                 // 57
    },                                                                                                                 // 46
    process: {                                                                                                         // 59
        type: Object,                                                                                                  // 60
        blackbox: true,                                                                                                // 61
        defaultValue: [],                                                                                              // 62
        label: 'Processo',                                                                                             // 63
        formOptions: {                                                                                                 // 64
            VISIBLE: true,                                                                                             // 65
            FIELD_COMPONENT: 'CollectionSelectField',                                                                  // 66
            OPTIONSCOLLECTION: {                                                                                       // 67
                COLLECTIONBASE: 'CollectionProcessos',                                                                 // 68
                COLLECTION_SCHEMA: 'tableview',                                                                        // 69
                FIRST_FIELD: 'name'                                                                                    // 70
            }                                                                                                          // 67
        },                                                                                                             // 64
        formValidation: {                                                                                              // 73
            required: { value: true, message: 'O ID da Seção é obrigatório' }                                          // 74
        }                                                                                                              // 73
    },                                                                                                                 // 59
    options: {                                                                                                         // 77
        type: [Object],                                                                                                // 78
        blackbox: true,                                                                                                // 79
        defaultValue: [],                                                                                              // 80
        label: 'Opções',                                                                                               // 81
        optional: true,                                                                                                // 82
        formOptions: {                                                                                                 // 83
            VISIBLE: true,                                                                                             // 84
            FIELD_COMPONENT: 'MaterialUITableEdit',                                                                    // 85
            FIELD_SCHEMA: {                                                                                            // 86
                option: {                                                                                              // 87
                    type: String,                                                                                      // 88
                    defaultValue: '',                                                                                  // 89
                    label: 'Opção',                                                                                    // 90
                    formOptions: {                                                                                     // 91
                        VISIBLE: true,                                                                                 // 92
                        FIELD_COMPONENT: 'TextField'                                                                   // 93
                    }                                                                                                  // 91
                },                                                                                                     // 87
                subprocess: {                                                                                          // 96
                    type: Object,                                                                                      // 97
                    blackbox: true,                                                                                    // 98
                    defaultValue: [],                                                                                  // 99
                    label: 'SubProcesso',                                                                              // 100
                    formOptions: {                                                                                     // 101
                        VISIBLE: true,                                                                                 // 102
                        FIELD_COMPONENT: 'CollectionSelectField',                                                      // 103
                        OPTIONSCOLLECTION: {                                                                           // 104
                            COLLECTIONBASE: 'CollectionSubProcessos',                                                  // 105
                            COLLECTION_SCHEMA: 'tableview',                                                            // 106
                            FIRST_FIELD: 'title'                                                                       // 107
                        }                                                                                              // 104
                    }                                                                                                  // 101
                }                                                                                                      // 96
            }                                                                                                          // 86
        },                                                                                                             // 83
        formValidation: {                                                                                              // 113
            required: { value: true, message: 'O preenchimento da seções é obrigatório' }                              // 114
        }                                                                                                              // 113
    },                                                                                                                 // 77
    tasks: {                                                                                                           // 117
        type: [Object],                                                                                                // 118
        blackbox: true,                                                                                                // 119
        defaultValue: [],                                                                                              // 120
        label: 'Tarefas',                                                                                              // 121
        optional: true,                                                                                                // 122
        formOptions: {                                                                                                 // 123
            VISIBLE: true,                                                                                             // 124
            FIELD_COMPONENT: 'MaterialUITableEdit',                                                                    // 125
            FIELD_SCHEMA: {                                                                                            // 126
                task: {                                                                                                // 127
                    type: String,                                                                                      // 128
                    defaultValue: '',                                                                                  // 129
                    label: 'Tarefa',                                                                                   // 130
                    formOptions: {                                                                                     // 131
                        VISIBLE: true,                                                                                 // 132
                        FIELD_COMPONENT: 'TextField'                                                                   // 133
                    }                                                                                                  // 131
                },                                                                                                     // 127
                description: {                                                                                         // 136
                    type: Object,                                                                                      // 137
                    blackbox: true,                                                                                    // 138
                    defaultValue: [],                                                                                  // 139
                    label: 'Descrição',                                                                                // 140
                    formOptions: {                                                                                     // 141
                        VISIBLE: true,                                                                                 // 142
                        FIELD_COMPONENT: 'TextField'                                                                   // 143
                    }                                                                                                  // 141
                },                                                                                                     // 136
                completed: {                                                                                           // 146
                    type: Boolean,                                                                                     // 147
                    defaultValue: false,                                                                               // 148
                    label: 'Completa?',                                                                                // 149
                    formOptions: {                                                                                     // 150
                        VISIBLE: false,                                                                                // 151
                        FIELD_COMPONENT: 'TextField'                                                                   // 152
                    }                                                                                                  // 150
                }                                                                                                      // 146
            }                                                                                                          // 126
        },                                                                                                             // 123
        formValidation: {                                                                                              // 157
            required: { value: true, message: 'O preenchimento da seções é obrigatório' }                              // 158
        }                                                                                                              // 157
    },                                                                                                                 // 117
    createdDate: {                                                                                                     // 161
        type: Date,                                                                                                    // 162
        label: "Data de Criação",                                                                                      // 163
        autoValue: function () {                                                                                       // 164
            function autoValue() {                                                                                     // 164
                if (this.isInsert) return new Date();                                                                  // 165
            }                                                                                                          // 167
                                                                                                                       //
            return autoValue;                                                                                          // 164
        }(),                                                                                                           // 164
        denyUpdate: true,                                                                                              // 168
        optional: true,                                                                                                // 169
        formOptions: {                                                                                                 // 170
            VISIBLE: true,                                                                                             // 171
            FIELD_COMPONENT: 'TextField',                                                                              // 172
            FIELD_TYPE: 'date'                                                                                         // 173
        }                                                                                                              // 170
    },                                                                                                                 // 161
    updatedDate: {                                                                                                     // 176
        type: Date,                                                                                                    // 177
        label: "Ultima atualização",                                                                                   // 178
        autoValue: function () {                                                                                       // 179
            function autoValue() {                                                                                     // 179
                if (this.isUpdate || this.isInsert) return new Date();                                                 // 180
            }                                                                                                          // 182
                                                                                                                       //
            return autoValue;                                                                                          // 179
        }(),                                                                                                           // 179
        optional: true,                                                                                                // 183
        formOptions: {                                                                                                 // 184
            VISIBLE: true,                                                                                             // 185
            FIELD_COMPONENT: 'TextField',                                                                              // 186
            FIELD_TYPE: 'date'                                                                                         // 187
        }                                                                                                              // 184
    }                                                                                                                  // 176
};                                                                                                                     // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"server":{"fixtures.js":["../../api/subprocessos/collection","../../api/processos/collection",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/server/fixtures.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var CollectionSubProcessos;module.import('../../api/subprocessos/collection',{"CollectionSubProcessos":function(v){CollectionSubProcessos=v}});var CollectionProcessos;module.import('../../api/processos/collection',{"CollectionProcessos":function(v){CollectionProcessos=v}});
                                                                                                                       // 2
                                                                                                                       //
console.log('Iniciando fixtures.js');                                                                                  // 4
                                                                                                                       //
// if the database is empty on server start, create some sample data.                                                  // 6
Meteor.startup(function () {                                                                                           // 7
                                                                                                                       //
    console.log('Meteor.startup()');                                                                                   // 9
                                                                                                                       //
    var Processos = CollectionProcessos.getCollection();                                                               // 11
    var SubProcessos = CollectionSubProcessos.getCollection();                                                         // 12
    var FIRST_SUBPROCESS_SECAO = '1';                                                                                  // 13
                                                                                                                       //
    // se o banco esta vazio                                                                                           // 15
    if (Processos.findOne() && SubProcessos.findOne()) {                                                               // 16
        return;                                                                                                        // 17
    }                                                                                                                  // 18
                                                                                                                       //
    console.log("Removendo todos os Processos");                                                                       // 20
    Processos.remove({});                                                                                              // 21
    console.log("Todos os Processos foram removidos");                                                                 // 22
                                                                                                                       //
    console.log("Removendo todos os SubProcessos");                                                                    // 24
    SubProcessos.remove({});                                                                                           // 25
    console.log("Todos os SubProcessos foram removidos");                                                              // 26
                                                                                                                       //
    // Criando processso de Regularização Fundiária                                                                    // 28
    var processo = {                                                                                                   // 29
        name: "Regularização Fundiária",                                                                               // 30
        description: "Meu processo"                                                                                    // 31
    };                                                                                                                 // 29
                                                                                                                       //
    console.log("Criando processo de Regularização Fundiária");                                                        // 34
                                                                                                                       //
    // insere o processo no banco                                                                                      // 36
    var processoId = Processos.insert(processo, { bypassCollection2: true });                                          // 37
                                                                                                                       //
    processo = Processos.findOne({ _id: processoId });                                                                 // 39
                                                                                                                       //
    console.log("Processo de Regularização Fundiária criado");                                                         // 41
                                                                                                                       //
    var subprocessos = [{ "secao": "1", "fase": "introdução", "titulo": "GUIA PRÁTICO DE REGULARIZAÇÃO FUNDIÁRIA URBANA", "texto": "Departamento de Regularização Fundiária do Colégio Registral Imobiliário de Minas Gerais - CORI-MG\n Coordenação: José Celso Ribeiro Vilela de Oliveira", "pergunta": "", "op1_opt": "Continuar", "op1_res": "2", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "2", "fase": "introdução", "titulo": "Com o presente Guia, pretendemos auxiliar os mais diversos interessados na busca de soluções jurídicas para situações de irregularidade fundiária urbana, baseadas na POSSE, predominantemente para fins de moradia, conforme previsão do artigo 47, VI, da Lei Federal 11.977-09 (definição de assentamentos irregulares).", "texto": "OBSERVAÇÃO: NÃO É ESCOPO DO PRESENTE GUIA a apresentação de soluções para parcelamentos rurais (situados fora do perímetro urbano previsto em Lei Municipal, mesmo que com finalidade urbana, como as chácaras de recreio), que devem respeito às normas de parcelamento rural (especialmente com respeito à Fração Mínima de Parcelamento), nem tampouco para loteamentos irregulares ou clandestinos urbanos que NÃO APRESENTEM situação de ocupação consolidada (esses, com solução prevista nos artigos 38 e seguintes da Lei Federal 6.766-79).", "pergunta": "", "op1_opt": "Continuar", "op1_res": "4", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "4", "fase": "Localização Urbana", "titulo": "Localização do Imóvel conforme Lei Municipal (ou art. 1º, §3º, do Decreto-Lei 271/67).", "texto": "LEI 11.977/09:\n \n Art. 47. Para efeitos da regularização fundiária de assentamentos urbanos, consideram-se: \n \n I – área urbana: parcela do território, contínua ou não, incluída no perímetro urbano pelo Plano Diretor ou por lei municipal específica; \n \n \n \n DECRETO-LEI 271/67:\n \n \"§ 3º Considera-se zona urbana, para os fins dêste decreto-lei, a da edificação contínua das povoações, as partes adjacentes e as áreas que, a critério dos Municípios, possivelmente venham a ser ocupadas por edificações contínuas dentro dos seguintes 10 (dez) anos.\"\n \n Entendemos satisfeita a exigência de localização urbana quando atendida uma das situações acima descritas . \n \n \n LEI 11.977/09:\n \n Art. 47. Para efeitos da regularização fundiária de assentamentos urbanos, consideram-se: \n \n I – área urbana: parcela do território, contínua ou não, incluída no perímetro urbano pelo Plano Diretor ou por lei municipal específica; \n \n \n \n DECRETO-LEI 271/67:\n \n \"§ 3º Considera-se zona urbana, para os fins dêste decreto-lei, a da edificação contínua das povoações, as partes adjacentes e as áreas que, a critério dos Municípios, possivelmente venham a ser ocupadas por edificações contínuas dentro dos seguintes 10 (dez) anos.\"\n \n Entendemos satisfeita a exigência de localização urbana quando atendida uma das situações acima descritas . \n \n \n LEI 11.977/09:\n \n Art. 47. Para efeitos da regularização fundiária de assentamentos urbanos, consideram-se: \n \n I – área urbana: parcela do território, contínua ou não, incluída no perímetro urbano pelo Plano Diretor ou por lei municipal específica; \n \n \n \n DECRETO-LEI 271/67:\n \n \"§ 3º Considera-se zona urbana, para os fins dêste decreto-lei, a da edificação contínua das povoações, as partes adjacentes e as áreas que, a critério dos Municípios, possivelmente venham a ser ocupadas por edificações contínuas dentro dos seguintes 10 (dez) anos.\"\n \n Entendemos satisfeita a exigência de localização urbana quando atendida uma das situações acima descritas .", "pergunta": "O Imóvel localiza-se dentro do Perímetro Urbano?", "op1_opt": "Sim.", "op1_res": "6", "op2_opt": "Não.", "op2_res": "12", "op3_opt": "Não sei.", "op3_res": "5", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "5", "fase": "Localização Urbana", "titulo": "Localização do imóvel em relação ao perímetro urbano.", "texto": "O interessado deve diligenciar junto ao Município (geralmente, a Secretaria de Urbanismo ou Setor de Geoprocessamento) para obter, por meio de certidão, a informação precisa relativa ao tratamento (rural ou urbano) dispensado à área em que se localiza o imóvel objeto de regularização, pela Lei Municipal que define o perímetro urbano. \n Mesmo que a área não esteja incluída no perímetro urbano atual do Município, mas desde que a consolidação da ocupação urbana seja anterior a 28/02/1977 (conforme previsão do artigo 1º, §3º, do Decreto-Lei 271/67), é possível que o Município a certifique como urbana por localização, para fins de regularização fundiária, sem prejuízo de, posteriormente, adequar sua legislação de modo abarcar a área. \n A par dessa informação, voltar ao questionário e responder conforme certidão de localização municipal.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "4", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "6", "fase": "Localização Urbana", "titulo": "Matrícula do Imóvel no CRI", "texto": "", "pergunta": "A Matrícula que consta do Cartório de Registro de Imóveis para a área já está descrita como urbana?", "op1_opt": "Sim, já foi averbada a alteração de uso do solo, nos termos do artigo 53, da Lei 6766 (ou já constava como urbana em Transcrição anterior).", "op1_res": "14", "op2_opt": "Não. A área ainda se encontra descrita na Matrícula como rural.", "op2_res": "9", "op3_opt": "Não sei.", "op3_res": "7", "op4_opt": "Não foi localizada matrícula ou transcrição para a área", "op4_res": "8", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "7", "fase": "Localização Urbana", "titulo": "Informações do imóvel no CRI", "texto": "O interessado deve diligenciar junto ao Cartório de Registro de Imóveis competente, fornecendo os dados do imóvel (nº de matrícula ou transcrição; nome de proprietários, dados dos confrontantes, descrição de marcos geográficos naturais ou artificiais, etc.) e requerer certidão da matrícula. Analisando-a, poderá verificar se já foi dado à matrícula o tratamento de imóvel urbano (averbação de descaracterização do uso do solo para urbano, conforme artigo 53, da Lei 6766 (ou se a transcrição anterior já trata a área como urbana).", "pergunta": "", "op1_opt": "Continuar", "op1_res": "6", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "8", "fase": "Localização Urbana", "titulo": "Ausência de Matrícula para a área a ser regularizada", "texto": "Nesse caso, é obrigatória a adoção de Auto de Demarcação Urbanística, independente da modalidade (se por interesse social ou específico), para que seja aberta matricula para toda a área a ser regularizada e, posteriormente, nela se registre o parcelamento. Essa matricula já será aberta com caracterização urbana, sem necessidade de qualquer comunicação ao INCRA", "pergunta": "", "op1_opt": "Continuar", "op1_res": "14", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "9", "fase": "Localização Urbana", "titulo": "Certificação de Localização Urbana pelo Município", "texto": "", "pergunta": "Foi expedida pelo Município certidão de que o imóvel se localiza no perímetro urbano e que se destina a Regularização Fundiária Urbana?", "op1_opt": "Sim.", "op1_res": "10", "op2_opt": "Não.", "op2_res": "11", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "10", "fase": "Localização Urbana", "titulo": "Alteração de Uso do Solo para Urbano, com base em certidão municipal que ateste localização urbana e destinação a processo de regularização.", "texto": "OBSERVAÇÃO: Em determinados casos, a circunscrição territorial do Cartório de Registro de Imóveis abarca EXCLUSIVAMENTE área urbana por localização. Esse é o caso de CRIs de Belo Horizonte e Vespasiano, por exemplo. Nessas hipóteses, o registrador tem segurança de estar preenchido o requisito de localização urbana independente de comprovação pontual pelo interessado, mediante certidão. Assim, o registrador poderá realizar de ofício os atos relativos à regularização independente da apresentação dos documentos mencionados para a certificação da localização urbana. \n \n Provimento 44, do CNJ:\n \"Art. 8º Para fins de regularização fundiária, o imóvel considera-se urbano, segundo o previsto nos incisos I e II do art. 47 da Lei n. 11.977, de 7 de julho de 2009, ainda que esteja cadastrado como rural junto ao Instituto Nacional de Colonização e Reforma Agrária (INCRA).\n Parágrafo único. A regularização fundiária urbana independe de averbação de cancelamento de cadastro do imóvel rural, cabendo ao registrador, após a conclusão dos procedimentos de inscrição, enviar comunicação ao INCRA para os devidos fins\".", "pergunta": "O Oficial do Registro de Imóveis procedeu conforme artigo 8º, § único, do Provimento 44, do CNJ?", "op1_opt": "sim.", "op1_res": "14", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "11", "fase": "Localização Urbana", "titulo": "Interessado deverá requerer ao Município a expedição da Certidão de Localização Urbana para, em seguida, apresentá-la ao CRI, que procederá nos termos do artigo 8º, §1º, do Provimento 44/CNJ.", "texto": "O promovente da Regularização deverá apresentar certidão municipal atestando a localização urbana e a destinação do imóvel (mesmo que parcial) a processo de regularização fundiária urbana.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "10", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "12", "fase": "Localização Urbana", "titulo": "Alteração do Perímetro Urbano", "texto": "Tratando-se de ocupação urbana consolidada após 1977, haverá necessidade de alteração prévia da Lei Municipal que define o Perímetro Urbano (ou Plano Diretor, se for o caso do Município), para incluir a área objeto de regularização. Caso a consolidação da ocupação seja, ainda, posterior a 10/04/2012 (data da entrada em vigor da Lei Federal nº12.608), deverá ser observado o artigo 42-B, do Estatuto da Cidade (Lei Federal nº 10.257/01).", "pergunta": "O Município inseriu a área a ser regularizada no Perímetro Urbano, por meio de nova Lei Municipal?", "op1_opt": "Sim.", "op1_res": "9", "op2_opt": "Não.", "op2_res": "13", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "13", "fase": "Localização Urbana", "titulo": "Regularização Fundiária Urbana dependente de alteração do perímetro urbano por Lei municipal", "texto": "O Perímetro Urbano é definido sempre por Lei Municipal (que poderá ser o próprio Plano Diretor). \n \n SEM a inclusão da área objeto de regularização no perímetro urbano (mesmo que em bolsão urbano apartado do núcleo), NÃO É POSSÍVEL a aplicação das normas de regularização previstas na Lei Federal 11.977/09, pois trata-se de área rural por localização, sujeita às normas de PARCELAMENTO RURAL. \n \n A única exceção é prevista no artigo 1º, § 3º, do DECRETO-LEI 271-67:\n \n \"§ 3º Considera-se zona urbana, para os fins dêste decreto-lei, a da edificação contínua das povoações, as partes adjacentes e as áreas que, a critério dos Municípios, possivelmente venham a ser ocupadas por edificações contínuas dentro dos seguintes 10 (dez) anos.\"\n \n \n Para situações de posse consolidadas após a entrada em vigor da Lei Federal 12.608, de 10 de abril de 2012, somente é possível a alteração do perímetro urbano se observado o artigo 42-B, do Estatuto da Cidade.\n \n Consideram-se irregulares os parcelamentos feitos fora do perímetro urbano, mesmo que para finalidades tipicamente urbanas (como as chamadas \"chácaras de recreio\") que não observem a Fração Mínima de Parcelamento Rural estabelecida para a área.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "12", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "14", "fase": "Conclusão de Fase", "titulo": "Fase de Localização Urbana Concluída. Seguir para fase de Enquadramento Social Predominante.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "15", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "15", "fase": "Enquadramento Sócio-Econômico", "titulo": "Enquadramento Sócio-Econômico", "texto": "Art. 47, VII, da Lei 11.977/09.", "pergunta": "Qual é a faixa de renda PREDOMINANTE da população beneficiária, de acordo com o critério utilizado pelo próprio Município (ou Estado, ou União, se um destes for o promovente)?", "op1_opt": "Baixa Renda.", "op1_res": "17", "op2_opt": "Renda Média ou Alta.", "op2_res": "19", "op3_opt": "Não sei.", "op3_res": "16", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "16", "fase": "Enquadramento Sócio-Econômico", "titulo": "Definição de \"Baixa Renda\":", "texto": "Inexiste uma definição objetiva e genérica de qualifique determinada população como predominantemente de \"baixa renda\". Assim, o enquadramento sócio-econômico dependerá de definição feita pelo ente promovente (se for o Estado, o critério aplicável será o estadual; se for o Município, o critério será local, podendo ainda ser definido em Lei ou pelo próprio Poder Executivo Municipal, para políticas de Habitação de Interesse Social, por exemplo). \n Sugere-se checar a informação com a Secretaria Municipal ou Estadual de Ação Social.\n \n Caso verificada a não-predominância de população de baixa renda na área a ser regularizada, o enquadramento será, por exclusão, na opção \"média ou alta renda\".\n \n \n OBSERVAÇÃO: Exige-se que haja PREDOMINÂNCIA de população de baixa renda para que se faça o enquadramento da regularização como sendo de interesse social. Predominância não significa exclusividade de baixa renda. No entanto, para a verificação das formas de titulação possíveis, deve-se observar a situação individual de cada beneficiário, pois há algumas situações (como legitimação de posse, atribuição de valor simbólico a imóveis em alienações onerosas de imóveis públicos, dispensa de licitação, isenções fiscais, gratuidades cartorárias) que só se aplicam a beneficiários que preencham individualmente (cada núcleo familiar) os requisitos de enquadramento de interesse social.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "15", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "17", "fase": "Enquadramento Sócio-Econômico", "titulo": "Requisitos adicionais do Artigo 47, II, Lei Federal 11.977/09:", "texto": "", "pergunta": "Além da \"baixa renda predominante\", pelo menos um dos requisitos adicionais do Art. 47, II, da Lei 11.977 (elencados abaixo), está presente?", "op1_opt": "Sim: Ocupação mansa e pacífica há mais de cinco anos.", "op1_res": "18", "op2_opt": "Sim: Zona de Especial Interesse Social (ZEIS)", "op2_res": "18", "op3_opt": "Sim: Área declarada de interesse para RFIS por União, Estado ou Município.", "op3_res": "18", "op4_opt": "Não. Há somente baixa renda predominante, mas nenhum dos requisitos adicionais acima elencados.", "op4_res": "19", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "18", "fase": "Enquadramento Sócio-Econômico", "titulo": "A Regularização Fundiária será enquadrada como de INTERESSE SOCIAL.", "texto": "Nesse caso, há obrigações impostas ao Poder Público que se aplicam à regularização de interesse social (por exemplo: arcar com o custo de obras de implantação do sistema viário e de infra-estrutura básica - conforme art. 55, da Lei 11.977) mesmo que na área haja alguns beneficiários que não satisfaçam pontualmente os requisitos pessoais de enquadramento como de interesse social. No entanto, a verificação dos instrumentos de titulação utilizáveis a um determinado beneficiário, bem como o valor da alienação (se simbólico ou de mercado), hipóteses de isenções fiscais Municipais, etc. que se aplicam a de Regularização Fundiária de Interesse Social requerem, também, a análise da situação econômica INDIVIDUAL do beneficiário.\n \n De acordo com o art. 290-A, da Lei 6015, e o art. 68, da Lei 11977, será concedida GRATUIDADE de emolumentos e taxas, em processos de regularização de interesse social, para:\n \n i. Averbação do Auto de Demarcação Urbanística;\n ii. Registro do Parcelamento;\n iii. Registro de Título de Legitimação de Posse;\n iv. Registro da conversão da posse em propriedade;\n v. Registro de título translativo ou aquisitivo de direito real, DESDE QUE o beneficiário individual seja de interesse social. \n vi. Primeira averbação de construção residencial de até 70m² em imóvel objeto de regularização de interesse social.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "20", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "19", "fase": "Enquadramento Sócio-Econômico", "titulo": "A Regularização Fundiária da área será enquadrada como de INTERESSE ESPECÍFICO.", "texto": "Nesse caso, por interpretação teleológica e extensiva da Lei 11.977, para a maximização da aplicação de princípios constitucionais, sobretudo da função social da propriedade urbana, será possível a utilização de Auto de Demarcação Urbanística para a conformação objetiva registral entre a área a ser regularizada e aquela acaso constante do registro imobiliário, independente da participação do titular registral (acaso existente). No entanto, não será possível, na fase de titulação final, a adoção da via da usucapião administrativa (decorrente da conversão de títulos de legitimação de posse em propriedade), aplicável apenas a regularização de interesse social. \n \n Não há previsão legal de gratuidade de emolumentos e taxas cartorárias para regularizações fundiárias de interesse especifico.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "20", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "20", "fase": "Conclusão de Fase", "titulo": "Fase de Enquadramento Social Predominante Concluída. Prossiga para Fase de Verificação Ambiental da Área Ocupada", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "21", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "21", "fase": "Verificação Ambiental", "titulo": "Verificação Ambiental da Área Ocupada", "texto": "", "pergunta": "A ocupação localiza-se em Área de Preservação Permanente (A.P.P.), conforme definição do artigo 4º, da Lei 12.651 (Código Florestal)?", "op1_opt": "Sim.", "op1_res": "23", "op2_opt": "Não.", "op2_res": "22", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "22", "fase": "Conclusão de Fase", "titulo": "Fase de Verificação Ambiental Concluída. Avançar para Fase de Verificação da Temporalidade da Ocupação.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "24", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "23", "fase": "Verificação Ambiental", "titulo": "Ocupação de APP em \"Área Urbana Consolidada\"", "texto": "Art. 47. Para efeitos da regularização fundiária de assentamentos urbanos, consideram-se: \n \n (...) \n \n II – área urbana consolidada: parcela da área urbana com densidade demográfica superior a 50 (cinquenta) habitantes por hectare e malha viária implantada e que tenha, no mínimo, 2 (dois) dos seguintes equipamentos de infraestrutura urbana implantados: \n \n a) drenagem de águas pluviais urbanas; \n \n b) esgotamento sanitário; \n \n c) abastecimento de água potável; \n \n d) distribuição de energia elétrica; ou \n \n e) limpeza urbana, coleta e manejo de resíduos sólidos;", "pergunta": "A ocupação em APP está localizada em área urbana CONSOLIDADA?", "op1_opt": "Sim", "op1_res": "29", "op2_opt": "Não", "op2_res": "36", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "24", "fase": "Temporalidade da Ocupação", "titulo": "Tempo de Ocupação", "texto": "", "pergunta": "A consolidação da ocupação da área a ser regularizada é anterior a 07/07/2009, data da entrada em vigor da Lei 11.977?", "op1_opt": "Sim.", "op1_res": "25", "op2_opt": "Não.", "op2_res": "28", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "25", "fase": "Temporalidade da Ocupação", "titulo": "Ocupação anterior a 07/07/2009.", "texto": "Nesse caso, é possível a flexibilização do percentual de transferência de área ao Município e tamanho dos lotes previstos em Lei Municipal, conforme artigo 52, da Lei Federal nº 11.977/09:\n \n \"Art. 52. Na regularização fundiária de assentamentos consolidados anteriormente à publicação desta Lei, o Município poderá autorizar a redução do PERCENTUAL DE ÁREAS DESTINADAS AO USO PÚBLICO e da ÁREA MÍNIMA DOS LOTES definidos na legislação de parcelamento do solo urbano\".\n \n \n OBSERVAÇÃO: A flexibilização contida no mencionado artigo 52 vale, INDISTINTAMENTE, para regularizações de interesse SOCIAL OU ESPECÍFICO.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "27", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "26", "fase": "Temporalidade da Ocupação", "titulo": "Ocupação posterior a 07/07/2009.", "texto": "Para flexibilizar o tamanho dos lotes (abaixo dos 125m² previstos na Lei 6.766/79, ou em Lei Municipal, se superior aos 125m²) e o percentual de área a ser transferido ao Município (abaixo do previsto em Lei Municipal), deverá ser editada nova Lei Municipal, que estabelecerá novo marco temporal e o regramento para mencionadas flexibilizações. \n \n Salienta-se que essas flexibilizações destinam-se a permitir a aprovação e o registro do loteamento, e são, assim, voltadas aos beneficiários, permitindo que os imóveis por eles ocupados saiam do \"limbo jurídico\". No entanto, eventual inadimplemento de execução de obras, descumprimento de parâmetros urbanísticos ou inobservância de percentual de transferência de área ao Município sujeitam o loteador irregular às sanções penais e civis previstas na Lei 6.766. (vide artigos 43 e 50 da Lei).\n \n Como o fundamento da Regularizaçao Fundiária Urbana é o reconhecimento da posse consolidada e o intuito é a titulação dos ocupantes, não há necessidade de se requerer a apresentação dos documentos previstos no artigo 18, da Lei 6.766. \n \n OBSERVAÇÃO: \n A flexibilização de parâmetros urbanísticos e percentual a ser transferido ao Município por meio de Lei Municipal posterior a 2009 é controversa, e pode ser objeto de questionamento pelo Ministério Público.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "39", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "27", "fase": "Temporalidade da Ocupação", "titulo": "Tempo de Ocupação", "texto": "PROVIMENTO 44, DO CNJ:\n \"Art. 24. A comprovação da época da implantação do parcelamento poderá ser feita mediante a apresentação de:\n I - planta, ainda que de origem particular, desde que apresentada e depositada em qualquer repartição pública, incluídas as arquivadas\n no Registro de Imóveis;\n II - cadastramento municipal, lançamentos fiscais de época ou certidão emitida pela administração pública municipal;\n III - fotos aéreas encomendadas pelos poderes públicos; ou\n IV - compromissos de compra e venda em que a época da contratação possa ser comprovada\".", "pergunta": "A ocupação é anterior a 19 DE DEZEMBRO DE 1979?", "op1_opt": "Sim.", "op1_res": "38", "op2_opt": "Não.", "op2_res": "40", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "28", "fase": "Tempo de Ocupação", "titulo": "Tamanho dos Lotes e Percentual de Área transferida ao Município", "texto": "ATENÇÃO PARA O INCISO II E PARA O PARÁGRAFO 1º, abaixo:\n \n Lei Federal 6.766/79:\n Art. 4º. Os loteamentos deverão atender, pelo menos, aos seguintes requisitos:\n \n I - as áreas destinadas a sistemas de circulação, a implantação de equipamento urbano e comunitário, bem como a espaços livres de uso público, serão proporcionais à densidade de ocupação prevista pelo plano diretor ou aprovada por lei municipal para a zona em que se situem. (Redação dada pela Lei nº 9.785, de 1999)\n \n II - os lotes terão área mínima de 125m² (cento e vinte e cinco metros quadrados) e frente mínima de 5 (cinco) metros, salvo quando o loteamento se destinar a urbanização específica ou edificação de conjuntos habitacionais de interesse social, previamente aprovados pelos órgãos públicos competentes;\n \n III - ao longo das águas correntes e dormentes e das faixas de domínio público das rodovias e ferrovias, será obrigatória a reserva de uma faixa não-edificável de 15 (quinze) metros de cada lado, salvo maiores exigências da legislação específica; (Redação dada pela Lei nº 10.932, de 2004)\n \n IV - as vias de loteamento deverão articular-se com as vias adjacentes oficiais, existentes ou projetadas, e harmonizar-se com a topografia local.\n \n § 1o A legislação municipal definirá, para cada zona em que se divida o território do Município, os usos permitidos e os índices urbanísticos de parcelamento e ocupação do solo, que incluirão, obrigatoriamente, as áreas mínimas e máximas de lotes e os coeficientes máximos de aproveitamento. (Redação dada pela Lei nº 9.785, de 1999)", "pergunta": "As unidades imobiliárias existentes na área a ser regularizada preenchem os requisitos do artigo 4º, II e § 1º, da Lei 6766/79?", "op1_opt": "Sim.", "op1_res": "39", "op2_opt": "Não.", "op2_res": "26", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "29", "fase": "Verificação Ambiental", "titulo": "Tempo de Ocupação em A.P.P.", "texto": "(artigo 54, da Lei 11977/09)", "pergunta": "A ocupação é anterior a 31/12/2007?", "op1_opt": "Sim.", "op1_res": "31", "op2_opt": "Não.", "op2_res": "36", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "30", "fase": "Verificação Ambiental", "titulo": "Área de Risco", "texto": "(artigo 54, par. 1º, da Lei 11.977, arts. 64 e 65 da Lei 12.651 - Código Florestal)", "pergunta": "A área de A.P.P. ocupada classifica-se como Área de Risco?", "op1_opt": "Sim.", "op1_res": "36", "op2_opt": "Não.", "op2_res": "31", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "31", "fase": "Verificação Ambiental", "titulo": "Intervenção ambiental", "texto": "", "pergunta": "A intervenção traz melhoria ambiental?", "op1_opt": "Sim.", "op1_res": "32", "op2_opt": "Não.", "op2_res": "36", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "32", "fase": "Verificação Ambiental", "titulo": "Enquadramento Social da Ocupação em A.P.P.", "texto": "Artigo 54, par. 1º, 2º e/ou 3º, da Lei 11.977 e artigos 64 e 65, da Lei 12.651 (Código Florestal).", "pergunta": "A Regularização pretendida em A.P.P. é de Interesse:", "op1_opt": "Social.", "op1_res": "34", "op2_opt": "Específico.", "op2_res": "33", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "33", "fase": "Verificação Ambiental", "titulo": "Regularização de ocupação de interesse específico em A.P.P.", "texto": "Código Florestal: Art. 65. Na regularização fundiária de interesse específico dos assentamentos inseridos em área urbana consolidada e que ocupam Áreas de Preservação Permanente não identificadas como áreas de risco, a regularização ambiental será admitida por meio da aprovação do projeto de regularização fundiária, na forma da Lei no 11.977, de 7 de julho de 2009.\n \n § 1o O processo de regularização ambiental, para fins de prévia autorização pelo órgão ambiental competente, deverá ser instruído com os seguintes elementos:\n \n I - a caracterização físico-ambiental, social, cultural e econômica da área; \n \n II - a identificação dos recursos ambientais, dos passivos e fragilidades ambientais e das restrições e potencialidades da área; \n \n III - a especificação e a avaliação dos sistemas de infraestrutura urbana e de saneamento básico implantados, outros serviços e equipamentos públicos; \n \n IV - a identificação das unidades de conservação e das áreas de proteção de mananciais na área de influência direta da ocupação, sejam elas águas superficiais ou subterrâneas; \n \n V - a especificação da ocupação consolidada existente na área; \n \n VI - a identificação das áreas consideradas de risco de inundações e de movimentos de massa rochosa, tais como deslizamento, queda e rolamento de blocos, corrida de lama e outras definidas como de risco geotécnico; \n \n VII - a indicação das faixas ou áreas em que devem ser resguardadas as características típicas da Área de Preservação Permanente com a devida proposta de recuperação de áreas degradadas e daquelas não passíveis de regularização; \n \n VIII - a avaliação dos riscos ambientais; \n \n IX - a comprovação da melhoria das condições de sustentabilidade urbano-ambiental e de habitabilidade dos moradores a partir da regularização; e \n \n X - a demonstração de garantia de acesso livre e gratuito pela população às praias e aos corpos d’água, quando couber. \n \n § 2o Para fins da regularização ambiental prevista no caput, ao longo dos rios ou de qualquer curso d’água, será mantida faixa não edificável com largura mínima de 15 (quinze) metros de cada lado. \n \n § 3o Em áreas urbanas tombadas como patrimônio histórico e cultural, a faixa não edificável de que trata o § 2o poderá ser redefinida de maneira a atender aos parâmetros do ato do tombamento.", "pergunta": "Foi observado o requisito adicional de cumprimento do artigo 65, da Lei Federal nº 12.651(Código Florestal)?", "op1_opt": "Sim.", "op1_res": "35", "op2_opt": "Não.", "op2_res": "36", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "34", "fase": "Verificação Ambiental", "titulo": "Possível a regularização da ocupação em APP.", "texto": "Uma vez atendidos os requisitos do artigo 54, parágrafos 1º, 2º, e/ou 3º, da Lei 11.977, e do artigo 64, da Lei 12.651 (Código Florestal), é possível a regularização com manutenção das ocupações de INTERESSE SOCIAL.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "22", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "35", "fase": "Verificação Ambiental", "titulo": "Possível a regularização da ocupação em APP.", "texto": "Uma vez atendidos os requisitos do artigo 54, parágrafos 1º, 2º, e/ou 3º, da Lei 11.977, e do artigo 65, da Lei 12.651 (Código Florestal), é possível a regularização com manutenção das ocupações de INTERESSE ESPECÍFICO.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "22", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "36", "fase": "Verificação Ambiental", "titulo": "Impossível a regularização da ocupação em A.P.P.", "texto": "Nesse caso, não se mostra possível a regularização das ocupações, devendo o Pode Público providenciar a desocupação e a demolição das construções.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "37", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "37", "fase": "Verificação Ambiental", "titulo": "Prosseguir apenas com o que não for ocupação em APP ou que atenda aos requisitos mencionados relativos a APP.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "22", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "38", "fase": "Temporalidade da Ocupação", "titulo": "Para o registro do Parcelamento, aplica-se a simplificação documental do artigo 71, da Lei 11.977/09 e artigos 22 e 25, do Provimento 44, do CNJ.", "texto": "Provimento 44, do CNJ: \n \"Art. 22. Tratando-se de áreas parceladas antes da vigência da Lei 6.766, de 19 de dezembro de 1979, o registro da regularização fundiária\n será feito a requerimento do interessado, dirigido ao oficial de registro de imóveis e acompanhado dos seguintes documentos:\n I - certidão da matrícula ou transcrição referente à gleba objeto de parcelamento;\n II - planta e memorial descritivo do parcelamento objeto de regularização;\n III - documento expedido pelo Poder Executivo municipal que ateste a conformidade legal do procedimento de regularização, observados\n os requisitos de implantação do parcelamento e de sua integração à cidade; e\n IV - prova da responsabilidade técnica do profissional legalmente habilitado a que foi confiada a regularização.\n (...)\n Art. 25. Os registros necessários para a regularização fundiária na hipótese desta Seção poderão ser feitos por meio de planta aprovada, pelo Município, para essa finalidade específica ou em quaisquer dos programas de regularização fundiária anteriores à Lei n. 11.977, de 7 de julho de 2009.\n Parágrafo único. A certidão municipal indicando que o parcelamento foi implantado antes de 19 de dezembro de 1979 e que está integrado e consolidado à cidade, com irreversibilidade de ocupação dispensará outras manifestações, licenças ou alvarás\".", "pergunta": "", "op1_opt": "Continuar", "op1_res": "39", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "39", "fase": "Conclusão de Fase", "titulo": "Finalizada a Fase de Análise da Temporalidade da Ocupação. Prossiga para a Fase de Conformação Objetiva da Área e Análise Registral", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "41", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "40", "fase": "Temporalidade da Ocupação", "titulo": "Para o registro do parcelamento, aplica-se o artigo 51, da Lei 11.977 (necessidade de aprovação urbanístico-ambiental de PROJETO DE REGULARIZAÇÃO)", "texto": "LEI FEDERAL Nº 11.977/09:\n \n \"Art. 51. O projeto de regularização fundiária deverá definir, no mínimo, os seguintes elementos: \n \n I – as áreas ou lotes a serem regularizados e, se houver necessidade, as edificações que serão relocadas; \n \n II – as vias de circulação existentes ou projetadas e, se possível, as outras áreas destinadas a uso público; \n \n III – as medidas necessárias para a promoção da sustentabilidade urbanística, social e ambiental da área ocupada, incluindo as compensações urbanísticas e ambientais previstas em lei; \n \n IV - as condições para promover a segurança da população em situações de risco, considerado o disposto no parágrafo único do art. 3º da Lei nº 6.766, de 19 de dezembro de 1979; e (Redação dada pela Lei nº 12.424, de 2011)\n \n V – as medidas previstas para adequação da infraestrutura básica. \n \n § 1o O projeto de que trata o caput não será exigido para o registro da sentença de usucapião, da sentença declaratória ou da planta, elaborada para outorga administrativa, de concessão de uso especial para fins de moradia. \n \n § 2o O Município definirá os requisitos para elaboração do projeto de que trata o caput, no que se refere aos desenhos, ao memorial descritivo e ao cronograma físico de obras e serviços a serem realizados. \n \n § 3o A regularização fundiária pode ser implementada por etapas\".", "pergunta": "", "op1_opt": "Continuar", "op1_res": "39", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "41", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "Conformação Objetiva da Área e Análise Registral", "texto": "Deve-se confrontar a descrição da Área a ser Regularizada (AR) com a descrição constante da Área Matriculada (AM) no Cartório de Registro de Imóveis :", "pergunta": "Qual a relação entre Área a ser Regularizada (AR) e Área descrita em Matrícula/Transcrição (AM)?", "op1_opt": "Há total coincidência descritiva entre a área a ser regularizada e aquela constante de uma matrícula imobiliária, cumpridas as exigências do artigo 176, da Lei 6015 (AR = AM)", "op1_res": "42", "op2_opt": "Há aparente coincidência descritiva, mas a descrição deve ser atualizada para atendimento ao artigo 176, da Lei 6015 (AR ~ AM)", "op2_res": "43", "op3_opt": "A área a ser regularizada corresponde exatamente à soma da área descrita em duas ou mais matrículas (AR = AM1 + AM2 + ...)", "op3_res": "46", "op4_opt": "A Área a ser Regularizada corresponde a uma parte de uma área descrita em uma matrícula AR = AM/X", "op4_res": "47", "op5_opt": "A área a ser regularizada encontra-se descrita parcialmente em uma e outra matrícula (AR = AM1/X + AM2/Y)", "op5_res": "48", "op6_opt": "Não foi encontrada no acervo do CRI qualquer matrícula ou transcrição para a área a ser regularizada (AM = 0)", "op6_res": "49" }, { "secao": "42", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "AR = AM . Matrícula apta a receber o registro do parcelamento.", "texto": "Nesse caso, como a descrição da área a ser regularizada está exatamente conforme a matricula, e esta cumpre os requisitos de especialidade objetiva do artigo 176, da Lei 6015, não há necessidade de prática de ato registral prévio, devendo ser já apresentada a documentação para Registro do Parcelamento.\n \n Para Registro do Parcelamento, deverá ser apresentada ao CRI a documentação aplicável à regularização pretendida, que será a do artigo 51, da Lei 11977 (para ocupações posteriores a 1979), ou do artigo 71, da mesma Lei (se a ocupação for anterior a 1979).\n \n Feito o registro do Parcelamento, serão criadas as matrículas individuais de cada lote, com ou sem a averbação das construções, o que dependerá da apresentação dos documentos específicos para tanto, consistentes em: \n i. Certidão de Habite-se, que pode ser simplificado desde que essa modalidade conste de Lei Municipal; e \n ii. CND do INSS, lembrando que essa é dispensada em procedimentos de regularização fundiária de interesse social.\n \n Registrado o Parcelamento, as matriculas individuais de cada unidade imobiliária estarão aptas a receber os títulos de transmissão (ou aquisição originária) de propriedade.\"Nesse caso, como a descrição da área a ser regularizada está exatamente conforme a matricula, e esta cumpre os requisitos de especialidade objetiva do artigo 176, da Lei 6015, não há necessidade de prática de ato registral prévio, devendo ser já apresentada a documentação para Registro do Parcelamento.\n \n Para Registro do Parcelamento, deverá ser apresentada ao CRI a documentação aplicável à regularização pretendida, que será a do artigo 51, da Lei 11977 (para ocupações posteriores a 1979), ou do artigo 71, da mesma Lei (se a ocupação for anterior a 1979).\n \n Feito o registro do Parcelamento, serão criadas as matrículas individuais de cada lote, com ou sem a averbação das construções, o que dependerá da apresentação dos documentos específicos para tanto, consistentes em: \n i. Certidão de Habite-se, que pode ser simplificado desde que essa modalidade conste de Lei Municipal; e \n ii. CND do INSS, lembrando que essa é dispensada em procedimentos de regularização fundiária de interesse social.\n \n Registrado o Parcelamento, as matriculas individuais de cada unidade imobiliária estarão aptas a receber os títulos de transmissão (ou aquisição originária) de propriedade.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "51", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "43", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "AR ~ AM", "texto": "Nesse caso, será necessária a prática de alguma ato registral para conformar a área a ser regularizada com aquela constante de uma matrícula. Esse ato registral pode ser típico (por exemplo: averbação de retificação de área, a requerimento do proprietário) ou excepcional (por exemplo: adoção de Auto de Demarcação Urbanística, o que possibilita a conformação de AR e AM mesmo na ausência de manifestação do proprietário registral.", "pergunta": "Proprietário (titular registral) participa do Processo de Regularização, requerendo a prática de atos registrais típicos?", "op1_opt": "Proprietário participa requerendo atos típicos", "op1_res": "44", "op2_opt": "Proprietário Inerte.", "op2_res": "45", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "44", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "Proprietário(s) requer(em) prática de atos registrais", "texto": "Nesse caso, poderão ser realizados, para a conformação entre AR e AM, os atos registrais típicos, como Retificação de Área, Apuração de Remanescente, Inserção de Medidas Perimetrais (art 213, II, da Lei 6015), bem como desmembramento, fusão de matriculas, etc. \n Não há, portanto, a necessidade de se recorrer à figura do Auto de Demarcação Urbanística.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "51", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "45", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "Proprietário(s) se mantem inerte(s), ou seja, não impugna(m) o Projeto de Regularização, mas não requer(em) a prática de atos registrais.", "texto": "Nesse caso, não havendo coincidência entre a Área a ser Regularizada (AR) e a Área Matriculada (AM), haverá necessidade de ser proceder a um Auto de Demarcação Urbanística para a conformação objetiva registral, como requisito para o registro do parcelamento. \n Averbando-se o Auto de Demarcação Urbanística, será aberta uma Matricula exatamente para a Área a ser Regularizada (AR).\n Nessa matrícula, deverão ser informadas as situações de titularidade constantes da(s) matricula(s) encontradas, fazendo-se remissões reciprocas.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "51", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "46", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "AR = AM1 + AM2...", "texto": "A Área a ser Regularizada corresponde exatamente à soma de duas ou mais Matrículas, que contêm os requisitos do artigo 176, da Lei 6015.", "pergunta": "Titular registral participa do Processo de Regularização, requerendo a prática de atos registrais?", "op1_opt": "Proprietário Anuente.", "op1_res": "44", "op2_opt": "Proprietário Inerte.", "op2_res": "45", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "47", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "AR = AM/X", "texto": "", "pergunta": "Titular registral participa, requerendo a prática de atos registrais típicos?", "op1_opt": "Proprietário requerente.", "op1_res": "44", "op2_opt": "Proprietário Inerte = Auto de Demarcação Urbanística", "op2_res": "45", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "48", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "AR = AM1/X + AM2/Y", "texto": "", "pergunta": "Titulares registrais participam, requerendo a prática de atos registrais típicos?", "op1_opt": "Sim.", "op1_res": "44", "op2_opt": "Não, eles se mantêm inertes.", "op2_res": "45", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "49", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "AM = 0. Auto de Demarcação Urbanística Obrigatório.", "texto": "Nesse caso, não foi encontrado qualquer registro anterior para a Área a ser Regularizada (AR).\n Necessário fazer Auto de Demarcação Urbanística, cuja averbação permitirá a abertura inaugural de Matrícula com a exata descrição dada à Área a ser Regularizada.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "50", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "50", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "Deverá ser aberta matrícula para objeto do Auto de Demarcação Urbanística, com a informação \"Proprietário Não-Identificado\" (conforme art. 15, par. único, II, b, do Provimento 44 do CNJ).", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "51", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "51", "fase": "Conformação Objetiva da Área e Análise Registral", "titulo": "Fase de Conformação Objetiva Concluída. Prosseguir para Fase de Formas de Titulação.", "texto": "Matrícula está apta a receber o Registro do Parcelamento e, em seguida, os títulos translativos (ou aquisitivos) de propriedade (ou outros direitos, conforme o caso).", "pergunta": "", "op1_opt": "Continuar", "op1_res": "52", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "52", "fase": "Formas de Titulação Aplicáveis", "titulo": "Formas de Titulação Aplicáveis", "texto": "É determinante para a fase final de titulação a análise prévia de:\n \n i. Existência ou não de registro anterior para a área;\n \n ii. Natureza pública ou privada do imóvel, acaso encontrado no acervo do Cartório;\n \n iii. Anuência do proprietário ao processo, titulando ou não os adquirentes por via negocial, seja gratuita ou onerosa;\n \n iv. Existência de títulos ou documentos que demonstrem indícios de negócio jurídico (mesmo que não formalizado), que justifiquem a posse dos imóveis pelos beneficiários da regularização.\n \n Ressalta-se que, havendo possibilidade (ou seja, havendo titular registral para a área objeto de regularização), a via de titulação derivada deve ser preferencialmente buscada (mesmo que a eventual titulação onerosa seja apenas simbólica, ou gratuita). \n \n Em se tratando de imóvel público, somente é possível a titulação derivada. Nesse caso, mesmo que haja titulação por \"legitimação de posse\", essa nunca poderá ser convertida em propriedade por usucapião administrativa, vez que inexiste usucapião sobre imóveis públicos.", "pergunta": "Foi encontrada Matrícula/Transcrição para a área a ser regularizada?", "op1_opt": "Sim.", "op1_res": "54", "op2_opt": "Não.", "op2_res": "53", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "53", "fase": "Formas de Titulação Aplicáveis", "titulo": "Inexistência de registro anterior ou impossibilidade de identificação dos proprietários em razão de imprecisão dos registros existentes.", "texto": "Nesse caso somente é possível Aquisição Originária, isto é, usucapião, que poderá ser administrativa (via titulo de legitimação de posse, caso se trata de beneficiário de interesse social), usucapião extrajudicial (excepcionalmente, sem anuência de proprietário ou confrontantes) ou usucapião judicial (quando nenhuma das modalidades anteriores for possível ou aplicável) .", "pergunta": "", "op1_opt": "Continuar", "op1_res": "56", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "54", "fase": "Formas de Titulação Aplicáveis", "titulo": "Matrícula encontrada", "texto": "Nesse caso, deve-se buscar fazer, preferencialmente, transmissão derivada (isto é, mediante a apresentação de título que veicule um negócio jurídico entre proprietário e adquirente). Somente quando a via negocial não for possível é que se deve buscar formas de aquisição originária (usucapião).", "pergunta": "", "op1_opt": "Continuar", "op1_res": "55", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "55", "fase": "Formas de Titulação Aplicáveis", "titulo": "Tipo de Proprietário", "texto": "", "pergunta": "O Proprietário é Público ou Particular?", "op1_opt": "Público.", "op1_res": "60", "op2_opt": "Particular.", "op2_res": "67", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "56", "fase": "Formas de Titulação Aplicáveis", "titulo": "Aquisição Originária Obrigatória", "texto": "Nesse caso, deve-se verificar especificamente a situação individual do beneficiário a ser titulado, pois existe forma aplicável somente a beneficiários de interesse social (legitimação de posse).", "pergunta": "Beneficiário individual é de Interesse Social?", "op1_opt": "Sim.", "op1_res": "57", "op2_opt": "Não.", "op2_res": "59", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "57", "fase": "Formas de Titulação Aplicáveis", "titulo": "Aquisição Originária (obrigatória, por ausência de registro anterior para a área) a Beneficiário Individual de Interesse Social", "texto": "Nesse caso, como regra, poder-sei-a recorrer à figura da Legitimação de Posse, prevista no artigo 47, IV, da Lei 11.977 (\"ato do poder público destinado a conferir título de reconhecimento de posse de imóvel objeto de demarcação urbanística, com a identificação do ocupante e do tempo e natureza da posse\"), que será convertida em propriedade SOMENTE após 5 ANOS, contados do REGISTRO do título.\n \n NO ENTANTO, defendemos a possibilidade de adoção, para a hipótese, da USUCAPIÃO EXTRAJUDICIAL, prevista no artigo 1.071, do Novo Código de Processo Civil, excepcionalmente SEM anuência do proprietário, pois proprietário não há para a área, conforme comprovado em prévio procedimento de Auto de Demarcação Urbanística.\n \n Tal entendimento encontra respaldo no artigo 1.018-A, do Provimento 260, da Corregedoria-Geral de Justiça de Minas Gerais (incluído pelo Provimento CGJ 325-2016).\n \n Explica-se: após a averbação do Auto de Demarcação Urbanística, em que não se localizou qualquer existência de registro anterior para a área, abre-se matrícula imobiliária específica para a área objeto de regularização.\n \n Tal matrícula deve ser aberta com a informação: \"PROPRIETÁRIO NÃO IDENTIFICADO\", conforme previsão do artigo 15, b, do Provimento 44 do CNJ.\n \n Em seguida, registra-se o parcelamento da área, dando origem as matriculas individuais de cada lote. Também nas matrículas abertas para os lotes constará, em seu preâmbulo, a informação: \"PROPRIETÁRIO NÃO IDENTIFICADO\".\n \n Desse modo, havendo apresentação de documentação para processamento extrajudicial de usucapião, não será necessária (porque impossível) a anuência do proprietário na planta e no memorial descritivo. \n \n Com isso, permite-se que o beneficiário da regularização fundiaria de interesse social tenha titulação direta e imediata do direito de propriedade, não sendo necessário o aguardo do período de 5 anos da legitimação de posse.\n \n Pela mesma razão, não se deve exigir anuência dos confrontantes (isto é, titulares de direitos reais sobre os imóveis vizinhos), caso as matrículas vizinhas sejam também oriundas do Auto de Demarcação Urbanística (mesmo que já tituladas a beneficiários da regularização). A anuência dos confrontantes será necessária, no entanto, sempre que houver matrícula com titular identificado, no auto, para o imóvel confrontante.\n \n Entendemos que a titulação por via de usucapião extrajudicial seja aplicável, igualmente, a beneficiários de interesse específico, sem manifestação do proprietário, para imóveis cuja matricula não tenha sido localizada no acervo cartorário.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "58", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "58", "fase": "Formas de Titulação Aplicáveis", "titulo": "O PRIMEIRO REGISTRO da usucapião extrajudicial será GRATUITO para beneficiários COM SITUAÇÃO INDIVIDUAL DE INTERESSE SOCIAL COMPROVADA.", "texto": "Aplica-se, para a concessão da gratuidade, o disposto no artigo 290-A, da Lei 6.015:\n \n \"Art. 290-A. Devem ser realizados independentemente do recolhimento de custas e emolumentos: (Incluído pela Lei nº 11.481, de 2007)\n \n  I - o PRIMEIRO registro de direito real constituído em favor de beneficiário de regularização fundiária de interesse social em áreas urbanas e em áreas rurais de agricultura familiar; (Incluído pela Lei nº 11.481, de 2007)\"", "pergunta": "", "op1_opt": "Continuar", "op1_res": "78", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "59", "fase": "Formas de Titulação Aplicáveis", "titulo": "USUCAPIÃO EXTRAJUDICIAL como forma de titulação a beneficiário de interesse ESPECÍFICO, quando não se localizar matrícula para a área.", "texto": "Defendemos a possibilidade de adoção, para a hipótese, da USUCAPIÃO EXTRAJUDICIAL, prevista no artigo 1.071, do Novo Código de Processo Civil, excepcionalmente SEM anuência do proprietário, pois proprietário não há para a área, conforme comprovado em prévio procedimento de Auto de Demarcação Urbanística (no caso, obrigatório, MESMO QUE ADAPTADO PARA A ESCALA INDIVIDUAL, do imóvel usucapido).\n \n Tal entendimento encontra respaldo no artigo 1.018-A, do Provimento 260, da Corregedoria-Geral de Justiça de Minas Gerais (incluído pelo Provimento CGJ 325-2016).\n \n Explica-se: após a averbação do Auto de Demarcação Urbanística, em que não se localizou qualquer existência de registro anterior para a área, abre-se matrícula imobiliária específica para a área objeto de regularização.\n \n Tal matrícula deve ser aberta com a informação: \"PROPRIETÁRIO NÃO IDENTIFICADO\", conforme previsão do artigo 15, b, do Provimento 44 do CNJ.\n \n Em seguida, registra-se o parcelamento da área, dando origem as matriculas individuais de cada lote. Também nas matrículas abertas para os lotes constará, em seu preâmbulo, a informação: \"PROPRIETÁRIO NÃO IDENTIFICADO\".\n \n Desse modo, havendo apresentação de documentação para processamento extrajudicial de usucapião, não será necessária (porque impossível) a anuência do proprietário na planta e no memorial descritivo. \n \n Pela mesma razão, não se deve exigir anuência dos confrontantes (isto é, titulares de direitos reais sobre os imóveis vizinhos), caso as matrículas vizinhas sejam também oriundas do Auto de Demarcação Urbanística (mesmo que já tituladas a beneficiários da regularização). A anuência dos confrontantes será necessária, no entanto, sempre que houver matrícula com titular identificado, no auto, para o imóvel confrontante.\n \n \n \n \n Para a titulação por via de usucapião extrajudicial, deve ser apresentada a documentação prevista no artigo 216-A, da Lei 6.015, (incluído pelo Novo Código de Processo Civil), SEM NECESSIDADE DE APRESENTAÇÃO de anuências de titulares de direitos reais sobre o imóvel e sobre os imóveis confrontantes, não os havendo, e com aproveitamento das notificações (pessoais e por edital) da anterior fase de Demarcação Urbanística:\n \n \n \n LEI 6.015:\n \n \"“Art. 216-A. Sem prejuízo da via jurisdicional, é admitido o pedido de reconhecimento extrajudicial de usucapião, que será processado diretamente perante o cartório do registro de imóveis da comarca em que estiver situado o imóvel usucapiendo, a requerimento do interessado, representado por advogado, instruído com:\n \n I - ata notarial lavrada pelo tabelião, atestando o tempo de posse do requerente e seus antecessores, conforme o caso e suas circunstâncias;\n \n II - planta e memorial descritivo assinado por profissional legalmente habilitado, com prova de anotação de responsabilidade técnica no respectivo conselho de fiscalização profissional, e pelos titulares de direitos reais e de outros direitos registrados ou averbados na matrícula do imóvel usucapiendo e na matrícula dos imóveis confinantes;\n \n III - certidões negativas dos distribuidores da comarca da situação do imóvel e do domicílio do requerente;\n \n IV - justo título ou quaisquer outros documentos que demonstrem a origem, a continuidade, a natureza e o tempo da posse, tais como o pagamento dos impostos e das taxas que incidirem sobre o imóvel.\n \n § 1o O pedido será autuado pelo registrador, prorrogando-se o prazo da prenotação até o acolhimento ou a rejeição do pedido.\n \n § 2o Se a planta não contiver a assinatura de qualquer um dos titulares de direitos reais e de outros direitos registrados ou averbados na matrícula do imóvel usucapiendo e na matrícula dos imóveis confinantes, esse será notificado pelo registrador competente, pessoalmente ou pelo correio com aviso de recebimento, para manifestar seu consentimento expresso em 15 (quinze) dias, interpretado o seu silêncio como discordância.\n \n § 3o O oficial de registro de imóveis dará ciência à União, ao Estado, ao Distrito Federal e ao Município, pessoalmente, por intermédio do oficial de registro de títulos e documentos, ou pelo correio com aviso de recebimento, para que se manifestem, em 15 (quinze) dias, sobre o pedido.\n \n § 4o O oficial de registro de imóveis promoverá a publicação de edital em jornal de grande circulação, onde houver, para a ciência de terceiros eventualmente interessados, que poderão se manifestar em 15 (quinze) dias.\n \n § 5o Para a elucidação de qualquer ponto de dúvida, poderão ser solicitadas ou realizadas diligências pelo oficial de registro de imóveis.\n \n § 6o Transcorrido o prazo de que trata o § 4o deste artigo, sem pendência de diligências na forma do § 5o deste artigo e achando-se em ordem a documentação, com inclusão da concordância expressa dos titulares de direitos reais e de outros direitos registrados ou averbados na matrícula do imóvel usucapiendo e na matrícula dos imóveis confinantes, o oficial de registro de imóveis registrará a aquisição do imóvel com as descrições apresentadas, sendo permitida a abertura de matrícula, se for o caso.\n \n § 7o Em qualquer caso, é lícito ao interessado suscitar o procedimento de dúvida, nos termos desta Lei.\n \n § 8o Ao final das diligências, se a documentação não estiver em ordem, o oficial de registro de imóveis rejeitará o pedido.\n \n § 9o A rejeição do pedido extrajudicial não impede o ajuizamento de ação de usucapião.\n \n § 10. Em caso de impugnação do pedido de reconhecimento extrajudicial de usucapião, apresentada por qualquer um dos titulares de direito reais e de outros direitos registrados ou averbados na matrícula do imóvel usucapiendo e na matrícula dos imóveis confinantes, por algum dos entes públicos ou por algum terceiro interessado, o oficial de registro de imóveis remeterá os autos ao juízo competente da comarca da situação do imóvel, cabendo ao requerente emendar a petição inicial para adequá-la ao procedimento comum.”", "pergunta": "", "op1_opt": "Continuar", "op1_res": "78", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "60", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário Público", "texto": "", "pergunta": "Qual a postura do proprietário em relação ao processo?", "op1_opt": "Impugnante.", "op1_res": "61", "op2_opt": "Inerte.", "op2_res": "62", "op3_opt": "Anuente, participante do processo.", "op3_res": "64", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "61", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário Público impugna regularização em determinada (ou toda a) área", "texto": "Nesse caso, deve ser realizada uma tentativa de Conciliação, em reunião a ser conduzida pelo Registrador de Imóveis (art. 57, par. 9o, Lei 11.977).", "pergunta": "Foi obtido acordo na reunião de Conciliação conduzida pelo registrador de imóveis?", "op1_opt": "Sim, e proprietário público se manterá inerte em relação à titulação.", "op1_res": "62", "op2_opt": "Sim e proprietário público fará titulação derivada aos beneficiários.", "op2_res": "64", "op3_opt": "Não. Proprietário público manteve impugnação.", "op3_res": "63", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "62", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário Público se mantém inerte após prazo para impugnação", "texto": "", "pergunta": "Houve expedição anterior, pelo proprietário público, de alguns dos títulos previstos no Art. 993, do Prov. 260/CGJ (para titulação derivada)?", "op1_opt": "Sim. Cessão.", "op1_res": "73", "op2_opt": "Sim. Promessa de Cessão.", "op2_res": "73", "op3_opt": "Sim. Compromisso de Compra e Venda.", "op3_res": "73", "op4_opt": "Não. Impossibilidade de aquisição originária (imóvel publico) ou derivada.", "op4_res": "78", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "63", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário Público mantém Impugnação: REGULARIZAÇÃO É ENCERRADA especificamente em relação à área impugnada.", "texto": "Em relação a área que não tenha sido objeto de impugnação, VOLTAR e PROCEDER COMO \"proprietário público inerte\" ou \"proprietário público anuente\".", "pergunta": "", "op1_opt": "Continuar", "op1_res": "78", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "64", "fase": "Formas de Titulação Aplicáveis", "titulo": "Anuente - Público", "texto": "", "pergunta": "Beneficiário Individual é de Interesse Social ou Específico?", "op1_opt": "Interesse Social.", "op1_res": "65", "op2_opt": "Interesse Específico.", "op2_res": "66", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "65", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário Público anuente, Beneficiário de Interesse Social", "texto": "", "pergunta": "Ente público possui previsão legal* para fazer qual das formas de titulação abaixo? (*Em havendo previsão, deve ser preferencialmente transmitida a propriedade plena)", "op1_opt": "Transmissão de direitos reais limitados - CUEM.", "op1_res": "78", "op2_opt": "Transmissão de direitos reais limitados - CDRU.", "op2_res": "78", "op3_opt": "Transmissão da Propriedade Plena - Doação.", "op3_res": "78", "op4_opt": "Transmissão da Propriedade Plena - Contrato de Compra e Venda por valor simbólico.", "op4_res": "78", "op5_opt": "Transmissão da Propriedade Plena - Compromisso anterior quitado (ou outro documento previsto no art. 993, Prov. 260).", "op5_res": "78", "op6_opt": "", "op6_res": "" }, { "secao": "66", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário Público anuente, Beneficiário individual que não preenche requisitos de interesse social (ou seja: beneficiário de interesse específico).", "texto": "", "pergunta": "Qual será a forma de titulação aplicável?", "op1_opt": "Contrato ou Escritura de Compra e Venda (art. 108, do Código Civil)", "op1_res": "78", "op2_opt": "Compromisso anterior quitado (ou outro documento previsto no art. 993, do Prov. CGJ 260)", "op2_res": "78", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "67", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário Particular", "texto": "", "pergunta": "Qual a postura do proprietário em relação ao processo?", "op1_opt": "Impugnante, mesmo após tentativa de conciliação no CRI.", "op1_res": "69", "op2_opt": "Inerte", "op2_res": "71", "op3_opt": "Anuente", "op3_res": "68", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "68", "fase": "Formas de Titulação Aplicáveis", "titulo": "Particular anuente. Beneficiário de interesse social OU específico. SOLUÇÃO: TITULAÇÃO PREFERENCIALMENTE DERIVADA, como Escritura Pública ou Contrato Particular (a depender do artigo 108, do Código Civil), podendo ser feita Compra e Venda ou Doação. Possível ainda a adoção de algum dos documentos elencados no artigo 993, do Provimento 993, da CGJ-MG. Possível, ainda, Usucapião Extrajudicial.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "78", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "69", "fase": "Formas de Titulação Aplicáveis", "titulo": "Impugnante - Particular", "texto": "ENCERRA-SE a Regularização em relação à Área Impugnada. Em relação ao restante, proceder como \"proprietário inerte\" ou \"proprietário anuente\"", "pergunta": "", "op1_opt": "Continuar", "op1_res": "70", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "70", "fase": "Formas de Titulação Aplicáveis", "titulo": "Beneficiário deve buscar a via de usucapião judicial.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "78", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "71", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário particular se mantém inerte.", "texto": "", "pergunta": "Beneficiário Individual é de Interesse Social?", "op1_opt": "Sim.", "op1_res": "72", "op2_opt": "Não.", "op2_res": "77", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "72", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário Particular inerte; Beneficiário individual de Interesse Social", "texto": "PROVIMENTO 260, CGJ-MG:\n \n \"Art. 993. Registrado o projeto de regularização fundiária, os compradores, compromissários ou cessionários poderão requerer o registro dos seus contratos, padronizados ou não, apresentando o respectivo instrumento ao oficial de registro competente, com a guia de pagamento ou de isenção, imunidade ou não incidência do Imposto sobre Transmissão de Bens Imóveis.\n § 1o Os compromissos de compra e venda, as cessões e as promessas de cessão valerão como título hábil para transmissão da propriedade quando acompanhados da respectiva prova de quitação das obrigações do adquirente e serão registrados nas matrículas das correspondentes unidades imobiliárias resultantes da regularização fundiária.\n § 2o O registro de transmissão da propriedade poderá ser obtido, ainda, mediante a comprovação idônea, perante o oficial do registro, da existência de pré-contrato, promessa de cessão, proposta de compra, reserva de lote ou outro instrumento do qual constem a manifestação da vontade das partes, a indicação da fração ideal, lote ou unidade, o preço e o modo de pagamento e a promessa de contratar.\n § 3o A prova de quitação será feita por meio de declaração escrita ou recibo assinado pelo loteador, com firma reconhecida, ou com a apresentação da quitação da última parcela do preço avençado.\n § 4o Equivale à prova de quitação a certidão emitida após 5 (cinco) anos do vencimento da última prestação pelo distribuidor da comarca de localização do imóvel e da comarca do domicílio do adquirente, se diversa (Código Civil, art. 206, § 5o, I), que explicite a inexistência de ação judicial contra o adquirente ou seus cessionários.\"", "pergunta": "Beneficiário possui algum dos documentos previstos no artigo 993, do Provimento 260, acima elencados?", "op1_opt": "Sim.", "op1_res": "73", "op2_opt": "Não.", "op2_res": "74", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "73", "fase": "Formas de Titulação Aplicáveis", "titulo": "Titulação com documento previsto no artigo 993, do Provimento 260/2013, da CGJ/MG .", "texto": "Trata-se, nesse caso, de TITULAÇÃO DERIVADA, em que se transmite a PROPRIEDADE PLENA do imóvel.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "78", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "74", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário particular inerte; Beneficiário de Interesse Social SEM documentos do artigo 993, do Provimento 260.", "texto": "LEI 11.977: \n \"Art. 59. A legitimação de posse devidamente registrada constitui direito em favor do detentor da posse direta para fins de moradia. (Redação dada pela Lei nº 12.424, de 2011)\n \n § 1o A legitimação de posse será concedida aos moradores cadastrados pelo poder público, desde que: (Renumerado do parágrafo único pela Lei nº 12.424, de 2011)\n \n I - não sejam concessionários, foreiros ou proprietários de outro imóvel urbano ou rural; (Redação dada pela Lei nº 12.424, de 2011)\n \n II - não sejam beneficiários de legitimação de posse concedida anteriormente. (Redação dada pela Lei nº 12.424, de 2011)\n \n III - (revogado). \n \n § 2o A legitimação de posse também será concedida ao coproprietário da gleba, titular de cotas ou frações ideais, devidamente cadastrado pelo poder público, desde que exerça seu direito de propriedade em um lote individualizado e identificado no parcelamento registrado. (Incluído pela Lei nº 12.424, de 2011)\".", "pergunta": "O beneficiário de interesse social preenche ainda os requisitos para titulação por via de Legitimação de Posse, prevista no artigo 59, da Lei 11.977?", "op1_opt": "Sim.", "op1_res": "75", "op2_opt": "Não.", "op2_res": "76", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "75", "fase": "Formas de Titulação Aplicáveis", "titulo": "Título de Legitimação de Posse (usucapião administrativa).", "texto": "Art. 60. Sem prejuízo dos direitos decorrentes da posse exercida anteriormente, o detentor do título de legitimação de posse, após 5 (cinco) anos de seu registro, poderá requerer ao oficial de registro de imóveis a conversão desse título em registro de propriedade, tendo em vista sua aquisição por usucapião, nos termos do art. 183 da Constituição Federal.\n \n § 1o Para requerer a conversão prevista no caput, o adquirente deverá apresentar: \n \n I - certidões do cartório distribuidor demonstrando a inexistência de ações em andamento que caracterizem oposição à posse do imóvel objeto de legitimação de posse; (Redação dada pela Medida Provisória nº 514, de 2010)\n \n II – declaração de que não possui outro imóvel urbano ou rural; \n \n III – declaração de que o imóvel é utilizado para sua moradia ou de sua família; e \n \n IV – declaração de que não teve reconhecido anteriormente o direito à usucapião de imóveis em áreas urbanas. \n \n § 2o As certidões previstas no inciso I do § 1o serão relativas ao imóvel objeto de legitimação de posse e serão fornecidas pelo poder público. (Redação dada pela Medida Provisória nº 514, de 2010)\n \n § 3o No caso de área urbana de mais de 250m² (duzentos e cinquenta metros quadrados), o prazo para requerimento da conversão do título de legitimação de posse em propriedade será o estabelecido na legislação pertinente sobre usucapião. (Incluído pela Lei nº 12.424, de 2011)\n \n Art. 60-A. O título de legitimação de posse poderá ser extinto pelo poder público emitente quando constatado que o beneficiário não está na posse do imóvel e não houve registro de cessão de direitos. (Incluído pela Lei nº 12.424, de 2011)", "pergunta": "", "op1_opt": "Continuar", "op1_res": "78", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "76", "fase": "Formas de Titulação Aplicáveis", "titulo": "Única via possível de titulação: USUCAPIÃO JUDICIAL DE MATRÍCULA.", "texto": "Se titular registral se mantém inerte, não é possível titulação derivada atual.\n Titulação derivada, assim, somente seria possível se o beneficiário pudesse apresentar documentação prevista no artigo 993, Prov. 260-CGJ, o que não é o caso.\n Não se pode cogitar de usucapião extrajudicial, pois não haverá anuência na planta e memorial.\n Por outro lado, para ser possível legitimação de posse, o beneficiário teria de ser de interesse social e preencher os requisitos próprios (artigo 59, Lei 11.977).\n Assim, a única via possível é mesmo a da usucapião judicial.\n Mesmo nesse caso, a prévia regularização objetiva do parcelamento será extremamente útil e contribuirá para maior celeridade processual, vez que a usucapião será de matricula específica para a unidade.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "78", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "77", "fase": "Formas de Titulação Aplicáveis", "titulo": "Proprietário Particular inerte; Beneficiário individual não preenche requisitos de Interesse Social.", "texto": "Aplica-se tanto a beneficiários de regularização fundiária de interesse específico quanto a beneficiários de regularização de interesse social que não preencham individualmente os requisitos de enquadramento pessoal como interesse social.", "pergunta": "Beneficiário possui algum dos documentos previstos no artigo 993, do Provimento 260 CGJ/MG?", "op1_opt": "Sim.", "op1_res": "73", "op2_opt": "Não.", "op2_res": "76", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "78", "fase": "FINAL", "titulo": "Você completou todas as etapas! Por favor, avalie nosso Guia Interativo!", "texto": "", "pergunta": "De 1 a 5, como você avalia o Guia Prático de Regularização Fundiária Urbana do CORI-MG?", "op1_opt": "1 (nota mínima)", "op1_res": "79", "op2_opt": "2", "op2_res": "79", "op3_opt": "3", "op3_res": "79", "op4_opt": "4", "op4_res": "79", "op5_opt": "5 (nota máxima)", "op5_res": "79", "op6_opt": "", "op6_res": "" }, { "secao": "79", "fase": "FINAL", "titulo": "Envie um email para oficial@registroitabira.com.br com o seu comentário, e nos ajude a aperfeiçoar a experiência do usuário.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "80", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "80", "fase": "FINAL", "titulo": "Além de promover atualizações periódicas a este \"Guia Interativo\", EM BREVE disponibilizaremos no site do CORI-MG o \"Manual de Regularização Fundiária Urbana\", fruto da parceria institucional entre o CORI-MG, o MP-MG, a OAB-MG e a SEDRU. Além disso, contaremos com uma Sessão \"Perguntas e Respostas\".", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "81", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }, { "secao": "81", "fase": "FINAL", "titulo": "O Departamento de Regularização Fundiária do CORI-MG agradece o seu interesse e participação!", "texto": "", "pergunta": "", "op1_opt": "", "op1_res": "", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "", "op6_opt": "", "op6_res": "" }];
                                                                                                                       //
    // insere todos os subprocessos no banco                                                                           // 124
    for (var i = 0; i < subprocessos.length; i++) {                                                                    // 125
        SubProcessos.insert(subprocessos[i], { bypassCollection2: true });                                             // 126
    }                                                                                                                  // 127
                                                                                                                       //
    console.log(subprocessos.length, " secoes foram inseridas");                                                       // 129
    console.log('Iniciando processo de linkagem!');                                                                    // 130
                                                                                                                       //
    // obtem subprocessos do banco                                                                                     // 132
    subprocessos = SubProcessos.find().fetch();                                                                        // 133
                                                                                                                       //
    var _loop = function _loop(_i) {                                                                                   // 7
                                                                                                                       //
        var subprocesso = subprocessos[_i],                                                                            // 137
            keys = Object.keys(subprocesso),                                                                           // 137
            novoSubprocesso = {                                                                                        // 137
            _id: subprocesso._id                                                                                       // 140
        };                                                                                                             // 139
                                                                                                                       //
        // Vincula o novoSubprocesso ao processo criado                                                                // 143
        novoSubprocesso.process = processo;                                                                            // 144
                                                                                                                       //
        // faz o mapeamento das propriedades do schema para as do csv                                                  // 146
        novoSubprocesso.title = subprocesso.titulo;                                                                    // 147
        novoSubprocesso.text = subprocesso.texto;                                                                      // 148
        novoSubprocesso.phase = subprocesso.fase;                                                                      // 149
                                                                                                                       //
        // cria o vetor de options                                                                                     // 151
        novoSubprocesso.options = [];                                                                                  // 152
                                                                                                                       //
        // obtem as opcoes                                                                                             // 154
        var opcoes_aux = keys.filter(function (el) {                                                                   // 155
            return el.indexOf("op") >= 0;                                                                              // 155
        });                                                                                                            // 155
                                                                                                                       //
        // descobre as opcoes preenchidas                                                                              // 157
        var opcoes_preenchidas = opcoes_aux.filter(function (el) {                                                     // 158
            return subprocesso[el] !== "";                                                                             // 158
        });                                                                                                            // 158
                                                                                                                       //
        console.log(subprocesso.secao);                                                                                // 160
                                                                                                                       //
        // Obtem o valor correto de cada opcao                                                                         // 162
                                                                                                                       //
        var _loop2 = function _loop2(j) {                                                                              // 7
                                                                                                                       //
            var obj = {                                                                                                // 165
                valor: subprocesso[opcoes_preenchidas[j]],                                                             // 166
                secao: subprocesso[opcoes_preenchidas[j + 1]]                                                          // 167
            };                                                                                                         // 165
                                                                                                                       //
            var subprocessoReferente = subprocessos.filter(function (el) {                                             // 170
                return el.secao == obj.secao;                                                                          // 170
            })[0];                                                                                                     // 170
                                                                                                                       //
            novoSubprocesso.options.push({                                                                             // 172
                option: obj.valor,                                                                                     // 173
                subprocess: {                                                                                          // 174
                    _id: subprocessoReferente._id,                                                                     // 175
                    title: subprocessoReferente.titulo,                                                                // 176
                    text: subprocessoReferente.texto                                                                   // 177
                }                                                                                                      // 174
            });                                                                                                        // 172
        };                                                                                                             // 7
                                                                                                                       //
        for (var j = 0; j < opcoes_preenchidas.length; j += 2) {                                                       // 163
            _loop2(j);                                                                                                 // 163
        }                                                                                                              // 180
                                                                                                                       //
        // Salva o subprocesso no banco                                                                                // 182
        SubProcessos.update({ _id: novoSubprocesso._id }, { $set: novoSubprocesso }, { bypassCollection2: true });     // 183
                                                                                                                       //
        //console.log("Fim do link da secao", subprocesso.secao);                                                      // 185
    };                                                                                                                 // 7
                                                                                                                       //
    for (var _i = 0; _i < subprocessos.length; _i++) {                                                                 // 135
        _loop(_i);                                                                                                     // 135
    }                                                                                                                  // 186
                                                                                                                       //
    console.log("Fim do processo de linkagem");                                                                        // 188
                                                                                                                       //
    console.log("Inserindo o firstsubprocess no processo");                                                            // 190
    processo.firstsubprocess = SubProcessos.find({ secao: FIRST_SUBPROCESS_SECAO }).fetch()[0];                        // 191
    Processos.update({ _id: processo._id }, { $set: processo }, { bypassCollection2: true });                          // 192
    console.log("Fim da inserção do firstsubprocess no processo");                                                     // 193
                                                                                                                       //
    //console.log("fixtures Meteor.startup");                                                                          // 195
                                                                                                                       //
    // Add default admin account                                                                                       // 197
    if (Meteor.users.find().count() === 0) {                                                                           // 198
        Accounts.createUser({                                                                                          // 199
            username: 'default@admin',                                                                                 // 200
            email: 'default@admin.com',                                                                                // 201
            password: 'default@admin'                                                                                  // 202
        });                                                                                                            // 199
                                                                                                                       //
        Accounts.createUser({                                                                                          // 205
            username: 'asdf@asdf',                                                                                     // 206
            email: 'asdf@asdf',                                                                                        // 207
            password: 'asdfasdf'                                                                                       // 208
        });                                                                                                            // 205
    }                                                                                                                  // 210
});                                                                                                                    // 213
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"register-api.js":["../../api/processos/model.js","../../api/subprocessos/model.js","../../api/meusprojetos/model.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/server/register-api.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.import("../../api/processos/model.js");module.import("../../api/subprocessos/model.js");module.import("../../api/meusprojetos/model.js");
                                                                                                                       // 2
                                                                                                                       // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},"server":{"main.js":["../imports/startup/server/fixtures.js","../imports/startup/server/register-api.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.import('../imports/startup/server/fixtures.js');module.import('../imports/startup/server/register-api.js');     // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
