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
    title: {                                                                                                           // 2
        type: String,                                                                                                  // 3
        defaultValue: '',                                                                                              // 4
        label: 'Titulo',                                                                                               // 5
        formOptions: {                                                                                                 // 6
            VISIBLE: true,                                                                                             // 7
            FIELD_COMPONENT: 'TextField'                                                                               // 8
        },                                                                                                             // 6
        formValidation: {                                                                                              // 10
            required: { value: true, message: 'O título do meuprojeto é obrigatório' }                                 // 11
        },                                                                                                             // 10
        dataTableConfig: {                                                                                             // 13
            link: {                                                                                                    // 14
                router: 'MeusProjetosView',                                                                            // 15
                field: '_id'                                                                                           // 16
            }                                                                                                          // 14
        }                                                                                                              // 13
    },                                                                                                                 // 2
    text: {                                                                                                            // 20
        type: String,                                                                                                  // 21
        defaultValue: '',                                                                                              // 22
        label: 'Texto',                                                                                                // 23
        formOptions: {                                                                                                 // 24
            VISIBLE: true,                                                                                             // 25
            FIELD_COMPONENT: 'TextField'                                                                               // 26
        },                                                                                                             // 24
        formValidation: {                                                                                              // 28
            required: { value: true, message: 'O texto do meuprojeto é obrigatório' }                                  // 29
        }                                                                                                              // 28
    },                                                                                                                 // 20
    name: {                                                                                                            // 32
        type: "String",                                                                                                // 33
        defaultValue: "",                                                                                              // 34
        label: 'Nome',                                                                                                 // 35
        formOptions: {                                                                                                 // 36
            VISIBLE: true,                                                                                             // 37
            FIELD_COMPONENT: 'TextField'                                                                               // 38
        },                                                                                                             // 36
        formValidation: {                                                                                              // 40
            required: { value: true, message: 'O nome é obrigatório!' }                                                // 41
        }                                                                                                              // 40
    },                                                                                                                 // 32
    cpf: {                                                                                                             // 44
        type: String,                                                                                                  // 45
        defaultValue: '',                                                                                              // 46
        label: 'CPF',                                                                                                  // 47
        formOptions: {                                                                                                 // 48
            VISIBLE: true,                                                                                             // 49
            FIELD_COMPONENT: 'TextField'                                                                               // 50
        },                                                                                                             // 48
        formValidation: {                                                                                              // 52
            required: { value: true, message: 'O CPF é obrigatório' }                                                  // 53
        }                                                                                                              // 52
    },                                                                                                                 // 44
    cep: {                                                                                                             // 56
        type: String,                                                                                                  // 57
        defaultValue: '',                                                                                              // 58
        label: 'CEP',                                                                                                  // 59
        formOptions: {                                                                                                 // 60
            VISIBLE: true,                                                                                             // 61
            FIELD_COMPONENT: 'TextField'                                                                               // 62
        },                                                                                                             // 60
        formValidation: {                                                                                              // 64
            required: { value: true, message: 'O CEP é obrigatório' }                                                  // 65
        }                                                                                                              // 64
    },                                                                                                                 // 56
    rua: {                                                                                                             // 68
        type: String,                                                                                                  // 69
        defaultValue: '',                                                                                              // 70
        label: 'Rua',                                                                                                  // 71
        formOptions: {                                                                                                 // 72
            VISIBLE: true,                                                                                             // 73
            FIELD_COMPONENT: 'TextField'                                                                               // 74
        },                                                                                                             // 72
        formValidation: {                                                                                              // 76
            required: { value: true, message: "A rua é obrigatória" }                                                  // 77
        }                                                                                                              // 76
    },                                                                                                                 // 68
    bairro: {                                                                                                          // 80
        type: String,                                                                                                  // 81
        defaultValue: '',                                                                                              // 82
        label: 'bairro',                                                                                               // 83
        formOptions: {                                                                                                 // 84
            VISIBLE: true,                                                                                             // 85
            FIELD_COMPONENT: 'TextField'                                                                               // 86
        },                                                                                                             // 84
        formValidation: {                                                                                              // 88
            required: { value: true, message: "O bairro é obrigatório" }                                               // 89
        }                                                                                                              // 88
    },                                                                                                                 // 80
    localidade: {                                                                                                      // 92
        type: String,                                                                                                  // 93
        defaultValue: '',                                                                                              // 94
        label: 'Localidade',                                                                                           // 95
        formOptions: {                                                                                                 // 96
            VISIBLE: true,                                                                                             // 97
            FIELD_COMPONENT: 'TextField'                                                                               // 98
        },                                                                                                             // 96
        formValidation: {                                                                                              // 100
            required: { value: true, message: "A localidade é obrigatória" }                                           // 101
        }                                                                                                              // 100
    },                                                                                                                 // 92
    uf: {                                                                                                              // 104
        type: String,                                                                                                  // 105
        defaultValue: '',                                                                                              // 106
        label: 'UF',                                                                                                   // 107
        formOptions: {                                                                                                 // 108
            VISIBLE: true,                                                                                             // 109
            FIELD_COMPONENT: 'TextField'                                                                               // 110
        },                                                                                                             // 108
        formValidation: {                                                                                              // 112
            required: { value: true, message: "UF é obrigatório" }                                                     // 113
        }                                                                                                              // 112
    },                                                                                                                 // 104
    process: {                                                                                                         // 116
        type: Object,                                                                                                  // 117
        blackbox: true,                                                                                                // 118
        defaultValue: [],                                                                                              // 119
        label: 'Processo',                                                                                             // 120
        formOptions: {                                                                                                 // 121
            VISIBLE: true,                                                                                             // 122
            FIELD_COMPONENT: 'CollectionSelectField',                                                                  // 123
            OPTIONSCOLLECTION: {                                                                                       // 124
                COLLECTIONBASE: 'CollectionProcessos',                                                                 // 125
                COLLECTION_SCHEMA: 'tableview',                                                                        // 126
                FIRST_FIELD: 'name'                                                                                    // 127
            }                                                                                                          // 124
        },                                                                                                             // 121
        formValidation: {                                                                                              // 130
            required: { value: true, message: 'O ID da Seção é obrigatório' }                                          // 131
        }                                                                                                              // 130
    },                                                                                                                 // 116
    tasks: {                                                                                                           // 134
        type: [Object],                                                                                                // 135
        blackbox: true,                                                                                                // 136
        defaultValue: [],                                                                                              // 137
        label: 'Subprocessos',                                                                                         // 138
        optional: true                                                                                                 // 139
    },                                                                                                                 // 134
    createdDate: {                                                                                                     // 141
        type: Date,                                                                                                    // 142
        label: "Data de Criação",                                                                                      // 143
        autoValue: function () {                                                                                       // 144
            function autoValue() {                                                                                     // 144
                if (this.isInsert) return new Date();                                                                  // 145
            }                                                                                                          // 147
                                                                                                                       //
            return autoValue;                                                                                          // 144
        }(),                                                                                                           // 144
        denyUpdate: true,                                                                                              // 148
        optional: true,                                                                                                // 149
        formOptions: {                                                                                                 // 150
            VISIBLE: true,                                                                                             // 151
            FIELD_COMPONENT: 'TextField',                                                                              // 152
            FIELD_TYPE: 'date'                                                                                         // 153
        }                                                                                                              // 150
    }                                                                                                                  // 141
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
CollectionProcessos.setPermissions(permissions);                                                                       // 44
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
CollectionSubProcessos.addSubSchema('default', ['title', 'text', 'options', 'process', 'tasks', 'phase']);             // 14
                                                                                                                       //
CollectionSubProcessos.addSubSchema('insert', ['title', 'text', 'options', 'process', 'tasks', 'phase']);              // 17
                                                                                                                       //
CollectionSubProcessos.addSubSchema('update', ['title', 'text', 'options', 'process', 'tasks', 'phase']);              // 20
                                                                                                                       //
CollectionSubProcessos.addSubSchema('view', ['title', 'text', 'options', 'process', 'tasks', 'phase']);                // 23
                                                                                                                       //
CollectionSubProcessos.addSubSchema('tableview', ['title', 'text']);                                                   // 26
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
        }                                                                                                              // 28
    },                                                                                                                 // 20
    phase: {                                                                                                           // 32
        type: String,                                                                                                  // 33
        defaultValue: '',                                                                                              // 34
        label: 'Fase',                                                                                                 // 35
        formOptions: {                                                                                                 // 36
            VISIBLE: true,                                                                                             // 37
            FIELD_COMPONENT: 'TextField'                                                                               // 38
        },                                                                                                             // 36
        formValidation: {                                                                                              // 40
            required: { value: true, message: 'A fase a qual o subprocesso pertence é obrigatória' }                   // 41
        }                                                                                                              // 40
    },                                                                                                                 // 32
    process: {                                                                                                         // 44
        type: Object,                                                                                                  // 45
        blackbox: true,                                                                                                // 46
        defaultValue: [],                                                                                              // 47
        label: 'Processo',                                                                                             // 48
        formOptions: {                                                                                                 // 49
            VISIBLE: true,                                                                                             // 50
            FIELD_COMPONENT: 'CollectionSelectField',                                                                  // 51
            OPTIONSCOLLECTION: {                                                                                       // 52
                COLLECTIONBASE: 'CollectionProcessos',                                                                 // 53
                COLLECTION_SCHEMA: 'tableview',                                                                        // 54
                FIRST_FIELD: 'name'                                                                                    // 55
            }                                                                                                          // 52
        },                                                                                                             // 49
        formValidation: {                                                                                              // 58
            required: { value: true, message: 'O ID da Seção é obrigatório' }                                          // 59
        }                                                                                                              // 58
    },                                                                                                                 // 44
    options: {                                                                                                         // 62
        type: [Object],                                                                                                // 63
        blackbox: true,                                                                                                // 64
        defaultValue: [],                                                                                              // 65
        label: 'Opções',                                                                                               // 66
        optional: true,                                                                                                // 67
        formOptions: {                                                                                                 // 68
            VISIBLE: true,                                                                                             // 69
            FIELD_COMPONENT: 'MaterialUITableEdit',                                                                    // 70
            FIELD_SCHEMA: {                                                                                            // 71
                option: {                                                                                              // 72
                    type: String,                                                                                      // 73
                    defaultValue: '',                                                                                  // 74
                    label: 'Opção',                                                                                    // 75
                    formOptions: {                                                                                     // 76
                        VISIBLE: true,                                                                                 // 77
                        FIELD_COMPONENT: 'TextField'                                                                   // 78
                    }                                                                                                  // 76
                },                                                                                                     // 72
                subprocess: {                                                                                          // 81
                    type: Object,                                                                                      // 82
                    blackbox: true,                                                                                    // 83
                    defaultValue: [],                                                                                  // 84
                    label: 'SubProcesso',                                                                              // 85
                    formOptions: {                                                                                     // 86
                        VISIBLE: true,                                                                                 // 87
                        FIELD_COMPONENT: 'CollectionSelectField',                                                      // 88
                        OPTIONSCOLLECTION: {                                                                           // 89
                            COLLECTIONBASE: 'CollectionSubProcessos',                                                  // 90
                            COLLECTION_SCHEMA: 'tableview',                                                            // 91
                            FIRST_FIELD: 'title'                                                                       // 92
                        }                                                                                              // 89
                    }                                                                                                  // 86
                }                                                                                                      // 81
            }                                                                                                          // 71
        },                                                                                                             // 68
        formValidation: {                                                                                              // 98
            required: { value: true, message: 'O preenchimento da seções é obrigatório' }                              // 99
        }                                                                                                              // 98
    },                                                                                                                 // 62
    tasks: {                                                                                                           // 102
        type: [Object],                                                                                                // 103
        blackbox: true,                                                                                                // 104
        defaultValue: [],                                                                                              // 105
        label: 'Tarefas',                                                                                              // 106
        optional: true,                                                                                                // 107
        formOptions: {                                                                                                 // 108
            VISIBLE: true,                                                                                             // 109
            FIELD_COMPONENT: 'MaterialUITableEdit',                                                                    // 110
            FIELD_SCHEMA: {                                                                                            // 111
                task: {                                                                                                // 112
                    type: String,                                                                                      // 113
                    defaultValue: '',                                                                                  // 114
                    label: 'Tarefa',                                                                                   // 115
                    formOptions: {                                                                                     // 116
                        VISIBLE: true,                                                                                 // 117
                        FIELD_COMPONENT: 'TextField'                                                                   // 118
                    }                                                                                                  // 116
                },                                                                                                     // 112
                description: {                                                                                         // 121
                    type: Object,                                                                                      // 122
                    blackbox: true,                                                                                    // 123
                    defaultValue: [],                                                                                  // 124
                    label: 'Descrição',                                                                                // 125
                    formOptions: {                                                                                     // 126
                        VISIBLE: true,                                                                                 // 127
                        FIELD_COMPONENT: 'TextField'                                                                   // 128
                    }                                                                                                  // 126
                },                                                                                                     // 121
                completed: {                                                                                           // 131
                    type: Boolean,                                                                                     // 132
                    defaultValue: false,                                                                               // 133
                    label: 'Completa?',                                                                                // 134
                    formOptions: {                                                                                     // 135
                        VISIBLE: false,                                                                                // 136
                        FIELD_COMPONENT: 'TextField'                                                                   // 137
                    }                                                                                                  // 135
                }                                                                                                      // 131
            }                                                                                                          // 111
        },                                                                                                             // 108
        formValidation: {                                                                                              // 142
            required: { value: true, message: 'O preenchimento da seções é obrigatório' }                              // 143
        }                                                                                                              // 142
    },                                                                                                                 // 102
    createdDate: {                                                                                                     // 146
        type: Date,                                                                                                    // 147
        label: "Data de Criação",                                                                                      // 148
        autoValue: function () {                                                                                       // 149
            function autoValue() {                                                                                     // 149
                if (this.isInsert) return new Date();                                                                  // 150
            }                                                                                                          // 152
                                                                                                                       //
            return autoValue;                                                                                          // 149
        }(),                                                                                                           // 149
        denyUpdate: true,                                                                                              // 153
        optional: true,                                                                                                // 154
        formOptions: {                                                                                                 // 155
            VISIBLE: true,                                                                                             // 156
            FIELD_COMPONENT: 'TextField',                                                                              // 157
            FIELD_TYPE: 'date'                                                                                         // 158
        }                                                                                                              // 155
    },                                                                                                                 // 146
    updatedDate: {                                                                                                     // 161
        type: Date,                                                                                                    // 162
        label: "Ultima atualização",                                                                                   // 163
        autoValue: function () {                                                                                       // 164
            function autoValue() {                                                                                     // 164
                if (this.isUpdate || this.isInsert) return new Date();                                                 // 165
            }                                                                                                          // 167
                                                                                                                       //
            return autoValue;                                                                                          // 164
        }(),                                                                                                           // 164
        optional: true,                                                                                                // 168
        formOptions: {                                                                                                 // 169
            VISIBLE: true,                                                                                             // 170
            FIELD_COMPONENT: 'TextField',                                                                              // 171
            FIELD_TYPE: 'date'                                                                                         // 172
        }                                                                                                              // 169
    }                                                                                                                  // 161
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
                                                                                                                       //
    // se o banco esta vazio                                                                                           // 14
    if (Processos.findOne() && SubProcessos.findOne()) {                                                               // 15
        return;                                                                                                        // 16
    }                                                                                                                  // 17
                                                                                                                       //
    console.log("Removendo todos os Processos");                                                                       // 19
    Processos.remove({});                                                                                              // 20
    console.log("Todos os Processos foram removidos");                                                                 // 21
                                                                                                                       //
    console.log("Removendo todos os SubProcessos");                                                                    // 23
    SubProcessos.remove({});                                                                                           // 24
    console.log("Todos os SubProcessos foram removidos");                                                              // 25
                                                                                                                       //
    // Criando processso de Regularização Fundiária                                                                    // 27
    var processo = {                                                                                                   // 28
        name: "Regularização Fundiária",                                                                               // 29
        description: "Meu processo"                                                                                    // 30
    };                                                                                                                 // 28
                                                                                                                       //
    console.log("Criando processo de Regularização Fundiária");                                                        // 33
                                                                                                                       //
    // insere o processo no banco                                                                                      // 35
    var processoId = Processos.insert(processo, { bypassCollection2: true });                                          // 36
                                                                                                                       //
    processo = Processos.findOne({ _id: processoId });                                                                 // 38
                                                                                                                       //
    console.log("Processo de Regularização Fundiária criado");                                                         // 40
                                                                                                                       //
    var subprocessos = [{ "secao": "4", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Localização do Imóvel conforme Lei Municipal ou art. 1º, §3º, do Decreto-Lei 271/67.", "texto": "", "pergunta": "O Imóvel localiza-se dentro do Perímetro Urbano?", "op1_opt": "Sim", "op1_res": "6", "op2_opt": "Não", "op2_res": "12", "op3_opt": "Não sei", "op3_res": "5", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "5", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Localização do imóvel em relação ao perímetro urbano.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "6", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "6", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Matrícula do Imóvel no CRI", "texto": "", "pergunta": "A Matrícula que consta do Cartório de Registro de Imóveis para a área já está descrita como urbana?", "op1_opt": "Sim, já foi averbada a alteração de uso do solo, nos termos do artigo 53, da Lei 6766 (ou já constava como urbana em Transcrição anterior).", "op1_res": "14", "op2_opt": "Não. A área ainda encontra-se descrita na Matrícula como rural.", "op2_res": "9", "op3_opt": "Não sei.", "op3_res": "7", "op4_opt": "Não foi localizada matrícula ou transcrição para a área", "op4_res": "8", "op5_opt": "", "op5_res": "" }, { "secao": "7", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Informações do imóvel no CRI", "texto": "O interessado deve diligenciar junto ao Cartório de Registro de Imóveis competente, fornecendo os dados do imóvel (nº de matrícula ou transcrição; nome de proprietários, dados dos confrontantes, descrição de marcos geográficos naturais ou artificiais, etc.) e requerer certidão da matrícula. Analisando-a, poderá verificar se já foi dado à matrícula o tratamento de imóvel urbano (averbação de descaracterização do uso do solo para urbano, conforme artigo 53, da Lei 6766 (ou se a transcrição anterior já trata a área como urbana).", "pergunta": "", "op1_opt": "Continuar", "op1_res": "8", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "8", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Ausência de Matrícula para a área a ser regularizada", "texto": "Nesse caso, é obrigatória a adoção de Auto de Demarcação Urbanística, independente da modalidade (se por interesse social ou específico), para que seja aberta matricula para toda a área a ser regularizada e, posteriormente, nela se registre o parcelamento. Essa matricula já será aberta com caracterização urbana, sem necessidade de qualquer comunicação ao INCRA", "pergunta": "", "op1_opt": "Continuar", "op1_res": "14", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "9", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Certificação Urbana pelo Município", "texto": "", "pergunta": "Foi expedida pelo Município certidão de que o imóvel se localiza no perímetro urbano e que se destina a Regularização Fundiária Urbana?", "op1_opt": "Sim", "op1_res": "10", "op2_opt": "Não", "op2_res": "11", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "10", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Averbação de ofício da Alteração de Uso do Solo para Urbano", "texto": "OBSERVAÇÃO: Em determinados casos, a circunscrição territorial do Cartório de Registro de Imóveis abarca EXCLUSIVAMENTE área urbana por localização. Esse é o caso de CRIs de Belo Horizonte e Vespasiano, por exemplo. Nesses casos, o registrador tem segurança de estar preenchido o requisito de localização urbana independente de comprovação pontual pelo interessado, mediante certidão. Assim, nesse caso, o registrador poderá realizar de ofício os atos relativos à regularização independente da apresentação dos documentos mencionados para a certificação da localização urbana.", "pergunta": "O Oficial do Registro de Imóveis averbou a alteração de uso do solo, de rural para urbano, de ofício, nos termos do artigo 8º, § único, do Provimento 44, do CNJ?", "op1_opt": "Sim", "op1_res": "14", "op2_opt": "Não", "op2_res": "11", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "11", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Interessado deverá requerer ao Oficial de Registro de Imóveis a averbação da alteração de uso do solo para urbano, nos termos do artigo 8º, §1º, do Provimento 44/CNJ.", "texto": "Para tanto, o promovente da Regularização deverá apresentar certidão municipal atestando a localização urbana e a destinação do imóvel (mesmo que parcial) a processo de regularização fundiária urbana.", "pergunta": "Oficial de Registro averbou alteração?", "op1_opt": "Sim", "op1_res": "14", "op2_opt": "Não", "op2_res": "14", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "12", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Alteração do Perímetro Urbano", "texto": "Tratando-se de ocupação urbana consolidada após 1977, haverá necessidade de alteração prévia da Lei Municipal que define o Perímetro Urbano (ou Plano Diretor, se for o caso do Município), para incluir a área objeto de regularização. Caso a consolidação da ocupação seja, ainda, posterior a 10/04/2012 (data da entrada em vigor da Lei Federal nº12.608), deverá ser observado o artigo 42-B, do Estatuto da Cidade (Lei Federal nº 10.257/01).", "pergunta": "O Município inseriu a área a ser regularizada no Perímetro Urbano, por meio de nova Lei Municipal?", "op1_opt": "Sim", "op1_res": "9", "op2_opt": "Não", "op2_res": "13", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "13", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Regularização Fundiária Urbana Impossível!", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "12", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "14", "fase": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "titulo": "Fase de Localização Urbana Concluída com Sucesso! Seguir para fase de Enquadramento Social Predominante.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "15", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "15", "fase": "", "titulo": "Enquadramento Sócio-Econômico", "texto": "Art. 47, VII, da Lei 11.977/09.", "pergunta": "Qual é a faixa de renda PREDOMINANTE da população beneficiária, de acordo com o critério utilizado pelo próprio Município (ou Estado, se este for o promovente)?", "op1_opt": "Baixa Renda", "op1_res": "17", "op2_opt": "Renda Média ou Alta", "op2_res": "19", "op3_opt": "Não sei", "op3_res": "16", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "16", "fase": "", "titulo": "Definição de 'Baixa Renda':", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "15", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "17", "fase": "", "titulo": "Requisitos adicionais do Artigo 47, II, Lei Federal 11.977", "texto": "", "pergunta": "Além da 'baixa renda predominante', pelo menos um dos requisitos adicionais do Art. 47, II, da Lei 11.977 (elencados abaixo), está presente?", "op1_opt": "Sim: Ocupação mansa e pacífica há mais de cinco anos", "op1_res": "18", "op2_opt": "Sim: Zona de Especial Interesse Social (ZEIS)", "op2_res": "18", "op3_opt": "Sim: Área declarada de interesse para RFIS por União, Estado ou Município", "op3_res": "18", "op4_opt": "Não. Há somente baixa renda predominante, mas nenhum dos requisitos adicionais acima elencados.", "op4_res": "19", "op5_opt": "", "op5_res": "" }, { "secao": "18", "fase": "", "titulo": "A Regularização Fundiária será enquadrada como de INTERESSE SOCIAL.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "21", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "19", "fase": "", "titulo": "A Regularização Fundiária da área será enquadrada como de INTERESSE ESPECÍFICO.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "19", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "20", "fase": "", "titulo": "Verificação da Característica Ambiental da Área Ocupada", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "21", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "21", "fase": "", "titulo": "Característica Ambiental da Área Ocupada", "texto": "", "pergunta": "A ocupação localiza-se em Área de Preservação Permanente (A.P.P.)?", "op1_opt": "Sim", "op1_res": "23", "op2_opt": "Não", "op2_res": "22", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "22", "fase": "", "titulo": "FASE: Verificação da Temporalidade da Ocupação", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "24", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "23", "fase": "", "titulo": "Ocupação de APP em 'Área Urbana Consolidada'", "texto": "", "pergunta": "A ocupação em APP está localizada em área urbana CONSOLIDADA?", "op1_opt": "Sim", "op1_res": "29", "op2_opt": "Não", "op2_res": "36", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "24", "fase": "", "titulo": "Tempo de Ocupação", "texto": "", "pergunta": "A consolidação da ocupação da área a ser regularizada é anterior a 07/07/2009, data da entrada em vigor da Lei 11.977?", "op1_opt": "Sim", "op1_res": "25", "op2_opt": "Não", "op2_res": "28", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "25", "fase": "", "titulo": "Ocupação anterior a 07/07/2009.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "27", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "26", "fase": "", "titulo": "Ocupação posterior a 07/07/2009.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "40", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "27", "fase": "", "titulo": "Tempo de Ocupação", "texto": "", "pergunta": "A ocupação é anterior a 19 DE DEZEMBRO DE 1979?", "op1_opt": "Sim", "op1_res": "38", "op2_opt": "Não", "op2_res": "40", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "28", "fase": "", "titulo": "Tamanho dos Lotes e Percentual de Área transferida ao Município", "texto": "", "pergunta": "As unidades imobiliárias existentes na área a ser regularizada preenchem os requisitos do artigo 4º, II e § 1º, da Lei 6766/79?", "op1_opt": "Sim", "op1_res": "40", "op2_opt": "Não", "op2_res": "26", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "29", "fase": "", "titulo": "Tempo de Ocupação em A.P.P.", "texto": "(artigo 54, da Lei 11977)", "pergunta": "A ocupação é anterior a 31/12/2007?", "op1_opt": "Sim", "op1_res": "31", "op2_opt": "Não", "op2_res": "36", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "30", "fase": "", "titulo": "Área de Risco", "texto": "(artigo 54, par. 1º, da Lei 11.977, arts. 64 e 65 da Lei 12.651 - Código Florestal)", "pergunta": "A área de A.P.P. ocupada classifica-se como Área de Risco?", "op1_opt": "Sim", "op1_res": "36", "op2_opt": "Não", "op2_res": "31", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "31", "fase": "", "titulo": "Intervenção ambiental", "texto": "", "pergunta": "A intervenção traz melhoria ambiental?", "op1_opt": "Sim", "op1_res": "32", "op2_opt": "Não", "op2_res": "36", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "32", "fase": "", "titulo": "Enquadramento Social da Ocupação em A.P.P.", "texto": "Artigo 54, par. 1º, 2º e/ou 3º, da Lei 11.977 e artigos 64 e 65, da Lei 12.651 (Código Florestal).", "pergunta": "A Regularização pretendida em A.P.P. é de Interesse:", "op1_opt": "Social", "op1_res": "34", "op2_opt": "Específico", "op2_res": "33", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "33", "fase": "", "titulo": "Regularização de ocupação de interesse específico em A.P.P.", "texto": "", "pergunta": "Foi observado o requisito adicional de cumprimento do artigo 65, da Lei Federal nº 12.651(Código Florestal)?", "op1_opt": "Sim", "op1_res": "35", "op2_opt": "Não", "op2_res": "36", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "34", "fase": "", "titulo": "Possível a regularização da ocupação em APP.", "texto": "Uma vez atendidos os requisitos do artigo 54, parágrafos 1º, 2º, e/ou 3º, da Lei 11.977, e do artigo 64, da Lei 12.651 (Código Florestal), é possível a regularização com manutenção das ocupações de INTERESSE SOCIAL.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "22", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "35", "fase": "", "titulo": "Possível a regularização da ocupação em APP.", "texto": "Uma vez atendidos os requisitos do artigo 54, parágrafos 1º, 2º, e/ou 3º, da Lei 11.977, e do artigo 65, da Lei 12.651 (Código Florestal), é possível a regularização com manutenção das ocupações de INTERESSE ESPECÍFICO.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "22", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "36", "fase": "", "titulo": "Impossível a regularização da ocupação em A.P.P.", "texto": "Nesse caso, não se mostra possível a regularização das ocupações, devendo o Pode Público providenciar a desocupação e a demolição das construções.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "37", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "37", "fase": "", "titulo": "Prosseguir apenas com o que não for ocupação em APP ou que atenda aos requisitos mencionados relativos a APP.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "22", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "38", "fase": "", "titulo": "Para o registro do Parcelamento, aplica-se a simplificação documental do artigo 71, da Lei 11.977/09 e artigos 22 e 25, do Provimento 44, do CNJ.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "39", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "39", "fase": "FASE: Conformação Objetiva da Área e Análise Registral", "titulo": "FASE: Conformação Objetiva da Área e Análise Registral", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "41", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "40", "fase": "", "titulo": "Para o registro do parcelamento, aplica-se o artigo 51, da Lei 11.977 (necessidade de aprovação urbanístico-ambiental de PROJETO DE REGULARIZAÇÃO)", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "39", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "41", "fase": "", "titulo": "Conformação Objetiva da Área e Análise Registral", "texto": "Deve-se confrontar a descrição da Área a ser Regularizada (AR) com a descrição constante da Área Matriculada (AM) no Cartório de Registro de Imóveis :", "pergunta": "Qual a relação entre Área a ser Regularizada (AR) e Área descrita em Matrícula/Transcrição (AM)?", "op1_opt": "ERRO - Continuar", "op1_res": "49", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "42", "fase": "", "titulo": "AR = AM . Matrícula apta a receber o registro do parcelamento.", "texto": "Nesse caso, como a descrição da área a ser regularizada está exatamente conforme a matricula, e esta cumpre os requisitos de especialidade objetiva do artigo 176, da Lei 6015, não há necessidade de prática de ato registral prévio, devendo ser já apresentada a documentação para Registro do Parcelamento. Para Registro do Parcelamento, deverá ser apresentada ao CRI a documentação aplicável à regularização pretendida, que será a do artigo 51, da Lei 11977 (para ocupações posteriores a 1979), ou do artigo 71, da mesma Lei (se a ocupação for anterior a 1979). Feito o registro do Parcelamento, serão criadas as matrículas individuais de cada lote, com ou sem a averbação das construções, o que dependerá da apresentação dos documentos específicos para tanto, consistentes em: i. Certidão de Habite-se, que pode ser simplificado desde que essa modalidade conste de Lei Municipal; e ii. CND do INSS, lembrando que essa é dispensada em procedimentos de regularização fundiária de interesse social. Registrado o Parcelamento, as matriculas individuais de cada unidade imobiliária estarão aptas a receber os títulos de transmissão (ou aquisição originária) de propriedade", "pergunta": "", "op1_opt": "Continuar", "op1_res": "52", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "43", "fase": "", "titulo": "AR ~ AM", "texto": "Nesse caso, será necessária a prática de alguma ato registral para conformar a área a ser regularizada com aquela constante de uma matrícula. Esse ato registral pode ser típico (por exemplo: averbação de retificação de área, a requerimento do proprietário) ou excepcional (por exemplo: adoção de Auto de Demarcação Urbanística, o que possibilita a conformação de AR e AM mesmo na ausência de manifestação do proprietário registral.", "pergunta": "Titular registral participa do Processo de Regularização, requerendo a prática de atos registrais?", "op1_opt": "Proprietário participa requerendo atos típicos", "op1_res": "44", "op2_opt": "Proprietário Inerte.", "op2_res": "45", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "44", "fase": "", "titulo": "Proprietário(s) requer(em) prática de atos registrais", "texto": "Nesse caso, poderão ser realizados, para a conformação entre AR e AM, os atos registrais típicos, como Retificação de Área, Apuração de Remanescente, Inserção de Medidas Perimetrais (art 213, II, da Lei 6015), bem como desmembramento, fusão de matriculas, etc. Não há, portanto, a necessidade de se recorrer à figura do Auto de Demarcação Urbanística.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "51", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "45", "fase": "", "titulo": "Proprietário(s) se mantem inerte(s), ou seja, não impugna(m) o Projeto de Regularização, mas não requer(em) a prática de atos registrais.", "texto": "Nesse caso, não havendo coincidência entre a Área a ser Regularizada (AR) e a Área Matriculada (AM), haverá necessidade de ser proceder a um Auto de Demarcação Urbanística para a conformação objetiva registral, como requisito para o registro do parcelamento. Averbando-se o Auto de Demarcação Urbanística, será aberta uma Matricula exatamente para a Área a ser Regularizada (AR). Nessa matrícula, deverão ser informadas as situações de titularidade constantes da(s) matricula(s) encontradas, fazendo-se remissões reciprocas.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "51", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "46", "fase": "", "titulo": "AR = AM1 + AM2...", "texto": "A Área a ser Regularizada corresponde exatamente à soma de duas ou mais Matrículas, que contêm os requisitos do artigo 176, da Lei 6015.", "pergunta": "Titular registral participa do Processo de Regularização, requerendo a prática de atos registrais?", "op1_opt": "Proprietário Anuente.", "op1_res": "44", "op2_opt": "Proprietário Inerte.", "op2_res": "45", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "47", "fase": "", "titulo": "AR = AM/X", "texto": "", "pergunta": "Titular registral participa, requerendo a prática de atos registrais típicos?", "op1_opt": "Proprietário requerente.", "op1_res": "44", "op2_opt": "Proprietário Inerte = Auto de Demarcação Urbanística", "op2_res": "45", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "48", "fase": "", "titulo": "AR = AM1/X + AM2/Y", "texto": "", "pergunta": "Titulares registrais participam, requerendo a prática de atos registrais típicos?", "op1_opt": "Sim", "op1_res": "44", "op2_opt": "Não, eles se mantem inertes.", "op2_res": "45", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "49", "fase": "", "titulo": "AM = 0. Auto de Demarcação Urbanística Obrigatório.", "texto": "Nesse caso, não foi encontrado qualquer registro anterior para a Área a ser Regularizada (AR). Necessário fazer Auto de Demarcação Urbanística, cuja averbação permitirá a abertura inaugural de Matrícula com a exata descrição dada à Área a ser Regularizada.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "50", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "50", "fase": "", "titulo": "Deverá ser aberta matrícula para objeto do Auto de Demarcação Urbanística, com a informação 'Proprietário Não-Identificado' (conforme art. 15, par. único, II, b, do Provimento 44 do CNJ).", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "51", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "51", "fase": "", "titulo": "Fase de Conformação Objetiva Concluída. Matrícula está apta a receber o Registro do Parcelamento e, em seguida, os títulos translativos (ou aquisitivos) de propriedade (ou outros direitos, conforme o caso).", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "52", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "52", "fase": "FASE: Formas de Titulação Aplicáveis", "titulo": "FASE: Formas de Titulação Aplicáveis", "texto": "", "pergunta": "Foi encontrada Matrícula/Transcrição para a área a ser regularizada?", "op1_opt": "Sim", "op1_res": "54", "op2_opt": "Não", "op2_res": "53", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "53", "fase": "", "titulo": "Inexistência de registro anterior ou impossibilidade de identificação dos proprietários em razão de imprecisão dos registros existentes.", "texto": "Nesse caso só é possível Aquisição Originária, isto é, usucapião, que poderá ser administrativa (via titulo de legitimação de posse), extrajudicial (excepcionalmente, sem anuência de proprietário ou confrontantes) e judicial (quando nenhuma das modalidades anteriores for possível ou aplicável) .", "pergunta": "", "op1_opt": "Continuar", "op1_res": "56", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "54", "fase": "", "titulo": "Matrícula encontrada", "texto": "Nesse caso, deve-se buscar fazer, preferencialmente, transmissão derivada (isto é, mediante a apresentação de título que veicule um negócio jurídico entre proprietário e adquirente). Somente quando a via negocial não for possível é que se deve buscar formas de aquisição originária (usucapião).", "pergunta": "", "op1_opt": "Continuar", "op1_res": "55", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "55", "fase": "", "titulo": "Tipo de Proprietário", "texto": "", "pergunta": "O Proprietário é Público ou Particular?", "op1_opt": "Público.", "op1_res": "60", "op2_opt": "Particular.", "op2_res": "67", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "56", "fase": "", "titulo": "Aquisição Originária Obrigatória", "texto": "Nesse caso, deve-se verificar especificamente a situação individual do beneficiário a ser titulado, pois existe forma aplicável somente a beneficiários de interesse social (legitimação de posse).", "pergunta": "Beneficiário individual é de Interesse Social?", "op1_opt": "Sim", "op1_res": "57", "op2_opt": "Não", "op2_res": "59", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "57", "fase": "", "titulo": "Aquisição Originária (obrigatória, por ausência de registro anterior para a área) a Beneficiário Individual de Interesse Social", "texto": "Nesse caso, como regra, poder-sei-a recorrer à figura da Legitimação de Posse, prevista no artigo 47, IV, da Lei 11.977 ('ato do poder público destinado a conferir título de reconhecimento de posse de imóvel objeto de demarcação urbanística, com a identificação do ocupante e do tempo e natureza da posse'), que será convertida em propriedade SOMENTE após 5 ANOS, contados do REGISTRO do título. NO ENTANTO, defendemos a possibilidade de adoção, para a hipótese, da USUCAPIÃO EXTRAJUDICIAL, prevista no artigo 1.071, do Novo Código de Processo Civil, excepcionalmente SEM anuência do proprietário, pois proprietário não há para a área, conforme comprovado em prévio procedimento de Auto de Demarcação Urbanística. Tal entendimento encontra respaldo no artigo 1.018-A, do Provimento 260, da Corregedoria-Geral de Justiça de Minas Gerais (incluído pelo Provimento CGJ 325-2016). Explica-se: após a averbação do Auto de Demarcação Urbanística, em que não se localizou qualquer existência de registro anterior para a área, abre-se matrícula imobiliária específica para a área objeto de regularização. Tal matrícula deve ser aberta com a informação: 'PROPRIETÁRIO NÃO IDENTIFICADO', conforme previsão do artigo 15, b, do Provimento 44 do CNJ. Em seguida, registra-se o parcelamento da área, dando origem as matriculas individuais de cada lote. Também nas matrículas abertas para os lotes constará, em seu preâmbulo, a informação: 'PROPRIETÁRIO NÃO IDENTIFICADO'. Desse modo, havendo apresentação de documentação para processamento extrajudicial de usucapião, não será necessária (porque impossível) a anuência do proprietário na planta e no memorial descritivo. Com isso, permite-se que o beneficiário da regularização fundiaria de interesse social tenha titulação direta e imediata do direito de propriedade, não sendo necessário o aguardo do período de 5 anos da legitimação de posse. Pela mesma razão, não se deve exigir anuência dos confrontantes (isto é, titulares de direitos reais sobre os imóveis vizinhos), caso as matrículas vizinhas sejam também oriundas do Auto de Demarcação Urbanística (mesmo que já tituladas a beneficiários da regularização). A anuência dos confrontantes será necessária, no entanto, sempre que houver matrícula com titular identificado, no auto, para o imóvel confrontante. Entendemos que a titulação por via de usucapião extrajudicial seja aplicável, igualmente, a beneficiários de interesse específico, sem manifestação do proprietário, para imóveis cuja matricula não tenha sido localizada no acervo cartorário.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "58", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "58", "fase": "", "titulo": "O PRIMEIRO REGISTRO da usucapião extrajudicial será GRATUITO para beneficiários COM SITUAÇÃO INDIVIDUAL DE INTERESSE SOCIAL COMPROVADA.", "texto": "Aplica-se, para a concessão da gratuidade, o disposto no artigo 290-A, da Lei 6.015: 'Art. 290-A. Devem ser realizados independentemente do recolhimento de custas e emolumentos: (Incluído pela Lei nº 11.481, de 2007) I - o PRIMEIRO registro de direito real constituído em favor de beneficiário de regularização fundiária de interesse social em áreas urbanas e em áreas rurais de agricultura familiar; (Incluído pela Lei nº 11.481, de 2007)'", "pergunta": "", "op1_opt": "Continuar", "op1_res": "79", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "59", "fase": "", "titulo": "USUCAPIÃO EXTRAJUDICIAL como forma de titulação a beneficiário de interesse ESPECÍFICO, quando não se localizar matrícula para a área.", "texto": "Defendemos a possibilidade de adoção, para a hipótese, da USUCAPIÃO EXTRAJUDICIAL, prevista no artigo 1.071, do Novo Código de Processo Civil, excepcionalmente SEM anuência do proprietário, pois proprietário não há para a área, conforme comprovado em prévio procedimento de Auto de Demarcação Urbanística (no caso, obrigatório, MESMO QUE ADAPTADO PARA A ESCALA INDIVIDUAL, do imóvel usucapido). Tal entendimento encontra respaldo no artigo 1.018-A, do Provimento 260, da Corregedoria-Geral de Justiça de Minas Gerais (incluído pelo Provimento CGJ 325-2016). Explica-se: após a averbação do Auto de Demarcação Urbanística, em que não se localizou qualquer existência de registro anterior para a área, abre-se matrícula imobiliária específica para a área objeto de regularização. Tal matrícula deve ser aberta com a informação: 'PROPRIETÁRIO NÃO IDENTIFICADO', conforme previsão do artigo 15, b, do Provimento 44 do CNJ. Em seguida, registra-se o parcelamento da área, dando origem as matriculas individuais de cada lote. Também nas matrículas abertas para os lotes constará, em seu preâmbulo, a informação: 'PROPRIETÁRIO NÃO IDENTIFICADO'. Desse modo, havendo apresentação de documentação para processamento extrajudicial de usucapião, não será necessária (porque impossível) a anuência do proprietário na planta e no memorial descritivo. Pela mesma razão, não se deve exigir anuência dos confrontantes (isto é, titulares de direitos reais sobre os imóveis vizinhos), caso as matrículas vizinhas sejam também oriundas do Auto de Demarcação Urbanística (mesmo que já tituladas a beneficiários da regularização). A anuência dos confrontantes será necessária, no entanto, sempre que houver matrícula com titular identificado, no auto, para o imóvel confrontante. Para a titulação por via de usucapião extrajudicial, deve ser apresentada a documentação prevista no artigo 216-A, da Lei 6.015, (incluído pelo Novo Código de Processo Civil), SEM NECESSIDADE DE APRESENTAÇÃO de anuências de titulares de direitos reais sobre o imóvel e sobre os imóveis confrontantes, não os havendo, e com aproveitamento das notificações (pessoais e por edital) da anterior fase de Demarcação Urbanística: LEI 6.015: '“Art. 216-A. Sem prejuízo da via jurisdicional, é admitido o pedido de reconhecimento extrajudicial de usucapião, que será processado diretamente perante o cartório do registro de imóveis da comarca em que estiver situado o imóvel usucapiendo, a requerimento do interessado, representado por advogado, instruído com: I - ata notarial lavrada pelo tabelião, atestando o tempo de posse do requerente e seus antecessores, conforme o caso e suas circunstâncias; II - planta e memorial descritivo assinado por profissional legalmente habilitado, com prova de anotação de responsabilidade técnica no respectivo conselho de fiscalização profissional, e pelos titulares de direitos reais e de outros direitos registrados ou averbados na matrícula do imóvel usucapiendo e na matrícula dos imóveis confinantes; III - certidões negativas dos distribuidores da comarca da situação do imóvel e do domicílio do requerente; IV - justo título ou quaisquer outros documentos que demonstrem a origem, a continuidade, a natureza e o tempo da posse, tais como o pagamento dos impostos e das taxas que incidirem sobre o imóvel. § 1o O pedido será autuado pelo registrador, prorrogando-se o prazo da prenotação até o acolhimento ou a rejeição do pedido. § 2o Se a planta não contiver a assinatura de qualquer um dos titulares de direitos reais e de outros direitos registrados ou averbados na matrícula do imóvel usucapiendo e na matrícula dos imóveis confinantes, esse será notificado pelo registrador competente, pessoalmente ou pelo correio com aviso de recebimento, para manifestar seu consentimento expresso em 15 (quinze) dias, interpretado o seu silêncio como discordância. § 3o O oficial de registro de imóveis dará ciência à União, ao Estado, ao Distrito Federal e ao Município, pessoalmente, por intermédio do oficial de registro de títulos e documentos, ou pelo correio com aviso de recebimento, para que se manifestem, em 15 (quinze) dias, sobre o pedido. § 4o O oficial de registro de imóveis promoverá a publicação de edital em jornal de grande circulação, onde houver, para a ciência de terceiros eventualmente interessados, que poderão se manifestar em 15 (quinze) dias. § 5o Para a elucidação de qualquer ponto de dúvida, poderão ser solicitadas ou realizadas diligências pelo oficial de registro de imóveis. § 6o Transcorrido o prazo de que trata o § 4o deste artigo, sem pendência de diligências na forma do § 5o deste artigo e achando-se em ordem a documentação, com inclusão da concordância expressa dos titulares de direitos reais e de outros direitos registrados ou averbados na matrícula do imóvel usucapiendo e na matrícula dos imóveis confinantes, o oficial de registro de imóveis registrará a aquisição do imóvel com as descrições apresentadas, sendo permitida a abertura de matrícula, se for o caso. § 7o Em qualquer caso, é lícito ao interessado suscitar o procedimento de dúvida, nos termos desta Lei. § 8o Ao final das diligências, se a documentação não estiver em ordem, o oficial de registro de imóveis rejeitará o pedido. § 9o A rejeição do pedido extrajudicial não impede o ajuizamento de ação de usucapião. § 10. Em caso de impugnação do pedido de reconhecimento extrajudicial de usucapião, apresentada por qualquer um dos titulares de direito reais e de outros direitos registrados ou averbados na matrícula do imóvel usucapiendo e na matrícula dos imóveis confinantes, por algum dos entes públicos ou por algum terceiro interessado, o oficial de registro de imóveis remeterá os autos ao juízo competente da comarca da situação do imóvel, cabendo ao requerente emendar a petição inicial para adequá-la ao procedimento comum.”", "pergunta": "", "op1_opt": "Continuar", "op1_res": "79", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "60", "fase": "", "titulo": "Proprietário Público", "texto": "", "pergunta": "Qual a postura do proprietário em relação ao processo?", "op1_opt": "Impugnante.", "op1_res": "61", "op2_opt": "Inerte.", "op2_res": "62", "op3_opt": "Anuente, participante do processo.", "op3_res": "64", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "61", "fase": "", "titulo": "Proprietário Público impugna regularização em determinada (ou toda a) área", "texto": "Nesse caso, deve ser realizada uma tentativa de Conciliação, em reunião a ser conduzida pelo Registrador de Imóveis (art. 57, par. 9o, Lei 11.977).", "pergunta": "Foi obtido acordo na reunião de Conciliação conduzida pelo registrador de imóveis?", "op1_opt": "Sim, e proprietário público se manterá inerte em relação à titulação.", "op1_res": "62", "op2_opt": "Sim e proprietário público fará titulação derivada aos beneficiários.", "op2_res": "64", "op3_opt": "Não. Proprietário público manteve impugnação.", "op3_res": "63", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "62", "fase": "", "titulo": "Proprietário Público se mantém inerte após prazo para impugnação", "texto": "", "pergunta": "Houve expedição anterior, pelo proprietário público, de alguns dos títulos previstos no Art. 993, do Prov. 260/CGJ (para titulação derivada)?", "op1_opt": "Sim. Cessão.", "op1_res": "73", "op2_opt": "Sim. Promessa de Cessão.", "op2_res": "73", "op3_opt": "Sim. Compromisso de Compra e Venda.", "op3_res": "73", "op4_opt": "Não. Impossibilidade de aquisição originária (imóvel publico) ou derivada.", "op4_res": "79", "op5_opt": "", "op5_res": "" }, { "secao": "63", "fase": "", "titulo": "Proprietário Público mantém Impugnação: REGULARIZAÇÃO É ENCERRADA especificamente em relação à área impugnada.", "texto": "Em relação a área que não tenha sido objeto de impugnação, VOLTAR e PROCEDER COMO 'proprietário público inerte' ou 'proprietário público anuente'.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "79", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "64", "fase": "", "titulo": "Anuente - Público", "texto": "", "pergunta": "Beneficiário Individual é de Interesse Social ou Específico?", "op1_opt": "Interesse Social.", "op1_res": "65", "op2_opt": "Interesse Específico.", "op2_res": "66", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "65", "fase": "", "titulo": "Proprietário Público anuente, Beneficiário de Interesse Social", "texto": "", "pergunta": "Ente público possui previsão legal* para fazer qual das formas de titulação abaixo? (*Em havendo previsão, deve ser preferencialmente transmitida a propriedade plena)", "op1_opt": "Transmissão de direitos reais limitados - CUEM.", "op1_res": "79", "op2_opt": "Transmissão de direitos reais limitados - CDRU.", "op2_res": "79", "op3_opt": "Transmissão da Propriedade Plena - Doação.", "op3_res": "79", "op4_opt": "Transmissão da Propriedade Plena - Contrato de Compra e Venda por valor simbólico.", "op4_res": "79", "op5_opt": "Transmissão da Propriedade Plena - Compromisso anterior quitado (ou outro documento previsto no art. 993, Prov. 260).", "op5_res": "79" }, { "secao": "66", "fase": "", "titulo": "Proprietário Público anuente, Beneficiário individual que não preenche requisitos de interesse social", "texto": "", "pergunta": "Qual será a forma de titulação aplicável?", "op1_opt": "Contrato ou Escritura de Compra e Venda (art. 108, do Código Civil)", "op1_res": "79", "op2_opt": "Compromisso anterior quitado (ou outro documento previsto no art. 993, do Prov. CGJ 260)", "op2_res": "79", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "67", "fase": "", "titulo": "Proprietário Particular", "texto": "", "pergunta": "Qual a postura do proprietário em relação ao processo?", "op1_opt": "Impugnante, mesmo após conciliação no CRI", "op1_res": "69", "op2_opt": "Inerte", "op2_res": "71", "op3_opt": "Anuente", "op3_res": "68", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "68", "fase": "", "titulo": "Particular anuente. Beneficiário de interesse social OU específico. SOLUÇÃO: TITULAÇÃO DERIVADA, com Escritura Pública ou Contrato Particular (a depender do artigo 108, do Código Civil), podendo ser feita Compra e Venda ou Doação. Possível ainda a adoção de algum dos documentos elencados no artigo 993, do Provimento 993, da CGJ-MG.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "79", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "69", "fase": "", "titulo": "Impugnante - Particular", "texto": "ENCERRA-SE a Regularização em relação à Área Impugnada. Em relação ao restante, proceder como 'proprietário inerte' ou 'proprietário aquente'", "pergunta": "", "op1_opt": "Continuar", "op1_res": "70", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "70", "fase": "", "titulo": "Beneficiário deve buscar a via de usucapião judicial.", "texto": "", "pergunta": "", "op1_opt": "Continuar", "op1_res": "79", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "71", "fase": "", "titulo": "Proprietário particular se mantém inerte.", "texto": "", "pergunta": "Beneficiário Individual é de Interesse Social?", "op1_opt": "Sim", "op1_res": "72", "op2_opt": "Não", "op2_res": "78", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "72", "fase": "", "titulo": "Proprietário Particular inerte; Beneficiário individual de Interesse Social", "texto": "PROVIMENTO 260, CGJ-MG: 'Art. 993. Registrado o projeto de regularização fundiária, os compradores, compromissários ou cessionários poderão requerer o registro dos seus contratos, padronizados ou não, apresentando o respectivo instrumento ao oficial de registro competente, com a guia de pagamento ou de isenção, imunidade ou não incidência do Imposto sobre Transmissão de Bens Imóveis. § 1o Os compromissos de compra e venda, as cessões e as promessas de cessão valerão como título hábil para transmissão da propriedade quando acompanhados da respectiva prova de quitação das obrigações do adquirente e serão registrados nas matrículas das correspondentes unidades imobiliárias resultantes da regularização fundiária. § 2o O registro de transmissão da propriedade poderá ser obtido, ainda, mediante a comprovação idônea, perante o oficial do registro, da existência de pré-contrato, promessa de cessão, proposta de compra, reserva de lote ou outro instrumento do qual constem a manifestação da vontade das partes, a indicação da fração ideal, lote ou unidade, o preço e o modo de pagamento e a promessa de contratar. § 3o A prova de quitação será feita por meio de declaração escrita ou recibo assinado pelo loteador, com firma reconhecida, ou com a apresentação da quitação da última parcela do preço avençado. § 4o Equivale à prova de quitação a certidão emitida após 5 (cinco) anos do vencimento da última prestação pelo distribuidor da comarca de localização do imóvel e da comarca do domicílio do adquirente, se diversa (Código Civil, art. 206, § 5o, I), que explicite a inexistência de ação judicial contra o adquirente ou seus cessionários.'", "pergunta": "Beneficiário possui algum dos documentos previstos no artigo 993, do Provimento 260, acima elencados?", "op1_opt": "Sim", "op1_res": "73", "op2_opt": "Não", "op2_res": "74", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "73", "fase": "", "titulo": "Titulação com documento previsto no artigo 993, do Provimento 260/2013, da CGJ/MG .", "texto": "Trata-se, nesse caso, de TITULAÇÃO DERIVADA, em que se transmite a PROPRIEDADE PLENA do imóvel.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "79", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "74", "fase": "", "titulo": "Proprietário particular inerte; Beneficiário de Interesse Social SEM documentos do artigo 993, do Provimento 260.", "texto": "LEI 11.977: 'Art. 59. A legitimação de posse devidamente registrada constitui direito em favor do detentor da posse direta para fins de moradia. (Redação dada pela Lei nº 12.424, de 2011) § 1o A legitimação de posse será concedida aos moradores cadastrados pelo poder público, desde que: (Renumerado do parágrafo único pela Lei nº 12.424, de 2011) I - não sejam concessionários, foreiros ou proprietários de outro imóvel urbano ou rural; (Redação dada pela Lei nº 12.424, de 2011) II - não sejam beneficiários de legitimação de posse concedida anteriormente. (Redação dada pela Lei nº 12.424, de 2011) III - (revogado). § 2o A legitimação de posse também será concedida ao coproprietário da gleba, titular de cotas ou frações ideais, devidamente cadastrado pelo poder público, desde que exerça seu direito de propriedade em um lote individualizado e identificado no parcelamento registrado. (Incluído pela Lei nº 12.424, de 2011)'.", "pergunta": "O beneficiário de interesse social preenche ainda os requisitos para titulação por via de Legitimação de Posse, prevista no artigo 59, da Lei 11.977?", "op1_opt": "Sim", "op1_res": "75", "op2_opt": "Não", "op2_res": "77", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "75", "fase": "", "titulo": "Título de Legitimação de Posse (usucapião administrativa).", "texto": "Art. 60. Sem prejuízo dos direitos decorrentes da posse exercida anteriormente, o detentor do título de legitimação de posse, após 5 (cinco) anos de seu registro, poderá requerer ao oficial de registro de imóveis a conversão desse título em registro de propriedade, tendo em vista sua aquisição por usucapião, nos termos do art. 183 da Constituição Federal. § 1o Para requerer a conversão prevista no caput, o adquirente deverá apresentar: I - certidões do cartório distribuidor demonstrando a inexistência de ações em andamento que caracterizem oposição à posse do imóvel objeto de legitimação de posse; (Redação dada pela Medida Provisória nº 514, de 2010) II – declaração de que não possui outro imóvel urbano ou rural; III – declaração de que o imóvel é utilizado para sua moradia ou de sua família; e IV – declaração de que não teve reconhecido anteriormente o direito à usucapião de imóveis em áreas urbanas. § 2o As certidões previstas no inciso I do § 1o serão relativas ao imóvel objeto de legitimação de posse e serão fornecidas pelo poder público. (Redação dada pela Medida Provisória nº 514, de 2010) § 3o No caso de área urbana de mais de 250m² (duzentos e cinquenta metros quadrados), o prazo para requerimento da conversão do título de legitimação de posse em propriedade será o estabelecido na legislação pertinente sobre usucapião. (Incluído pela Lei nº 12.424, de 2011) Art. 60-A. O título de legitimação de posse poderá ser extinto pelo poder público emitente quando constatado que o beneficiário não está na posse do imóvel e não houve registro de cessão de direitos. (Incluído pela Lei nº 12.424, de 2011)", "pergunta": "", "op1_opt": "Continuar", "op1_res": "79", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "76", "fase": "", "titulo": "Única via possível de titulação: USUCAPIÃO JUDICIAL DE MATRÍCULA.", "texto": "Se titular registral se mantém inerte, não é possível titulação derivada atual. Titulação derivada, assim, somente seria possível se o beneficiário pudesse apresentar documentação prevista no artigo 993, Prov. 260-CGJ, o que não é o caso. Não se pode cogitar de usucapião extrajudicial, pois não haverá anuência na planta e memorial. Por outro lado, não se mostra possível a titulação por legitimação de posse, por ausência de requisitos próprios relativos ao beneficiário (artigo 59, Lei 11.977). Assim, a única via possível é mesmo a da usucapião judicial. Mesmo nesse caso, será útil a prévia regularização objetiva do parcelamento, pois a tramitação judicial será de usucapião de matricula específica da unidade já oriunda de parcelamento registrado.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "79", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "77", "fase": "", "titulo": "Única via possível de titulação: USUCAPIÃO JUDICIAL DE MATRÍCULA.", "texto": "Se titular registral se mantém inerte, não é possível titulação derivada atual. Titulação derivada, assim, somente seria possível se o beneficiário pudesse apresentar documentação prevista no artigo 993, Prov. 260-CGJ, o que não é o caso. Não se pode cogitar de usucapião extrajudicial, pois não haverá anuência na planta e memorial. Por outro lado, para ser possível legitimação de posse, o beneficiário teria de ser de interesse social e preencher os requisitos próprios (artigo 59, Lei 11.977). Assim, a única via possível é mesmo a da usucapião judicial. Mesmo nesse caso, a prévia regularização objetiva do parcelamento será extremamente útil e contribuirá para maior celeridade processual, vez que a usucapião será de matricula específica para a unidade.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "79", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "78", "fase": "", "titulo": "Proprietário Particular inerte; Beneficiário individual não preenche requisitos de Interesse Social.", "texto": "Aplica-se tanto a beneficiários de regularização fundiária de interesse específico quanto a beneficiários de regularização de interesse social que não preencham individualmente os requisitos de enquadramento pessoal como interesse social.", "pergunta": "Beneficiário possui algum dos documentos previstos no artigo 993, do Provimento 260 CGJ/MG?", "op1_opt": "Sim", "op1_res": "73", "op2_opt": "Não", "op2_res": "73", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "79", "fase": "", "titulo": "Você completou todas as etapas! Por favor, avalie nosso Guia Prático!", "texto": "", "pergunta": "De 1 a 5, como você avalia o Guia Prático de Regularização Fundiária Urbana do CORI-MG?", "op1_opt": "1 (nota mínima)", "op1_res": "80", "op2_opt": "2", "op2_res": "80", "op3_opt": "3", "op3_res": "80", "op4_opt": "4", "op4_res": "80", "op5_opt": "5 (nota máxima)", "op5_res": "80" }, { "secao": "80", "fase": "", "titulo": "Obrigado por sua avaliação! O esforço de melhoria dessa ferramenta é contínuo. Você poderia nos dar alguma sugestão de como melhorá-la?", "texto": "Deixe, abaixo, o seu comentário, e nos ajude a aperfeiçoar a experiência do usuário.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "81", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "81", "fase": "", "titulo": "Além de promover atualizações periódicas a este 'Guia Prático', EM BREVE disponibilizaremos no site do CORI-MG o 'Manual de Regularização Fundiária Urbana', fruto da parceria institucional entre o CORI-MG, o MP-MG, a OAB-MG e a SEDRU. Além disso, contaremos com uma Sessão 'Perguntas e Respostas'.", "texto": "Os e-mails cadastrados receberão notificação quando as ferramentas estiverem disponíveis para consulta.", "pergunta": "", "op1_opt": "Continuar", "op1_res": "82", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }, { "secao": "82", "fase": "", "titulo": "O Departamento de Regularização Fundiária do CORI-MG agradece o seu interesse e participação!", "texto": "Ao final, selecione a opção caso deseje receber um extrato com as respostas e soluções obtidas, no e-mail fornecido para cadastro.", "pergunta": "", "op1_opt": "", "op1_res": "", "op2_opt": "", "op2_res": "", "op3_opt": "", "op3_res": "", "op4_opt": "", "op4_res": "", "op5_opt": "", "op5_res": "" }];
                                                                                                                       //
    // insere todos os subprocessos no banco                                                                           // 122
    for (var i = 0; i < subprocessos.length; i++) {                                                                    // 123
        SubProcessos.insert(subprocessos[i], { bypassCollection2: true });                                             // 124
    }                                                                                                                  // 125
                                                                                                                       //
    console.log(subprocessos.length, " secoes foram inseridas");                                                       // 127
    console.log('Iniciando processo de linkagem!');                                                                    // 128
                                                                                                                       //
    // obtem subprocessos do banco                                                                                     // 130
    subprocessos = SubProcessos.find().fetch();                                                                        // 131
                                                                                                                       //
    var _loop = function _loop(_i) {                                                                                   // 7
                                                                                                                       //
        var subprocesso = subprocessos[_i],                                                                            // 135
            keys = Object.keys(subprocesso),                                                                           // 135
            novoSubprocesso = {                                                                                        // 135
            _id: subprocesso._id                                                                                       // 138
        };                                                                                                             // 137
                                                                                                                       //
        // Vincula o novoSubprocesso ao processo criado                                                                // 141
        novoSubprocesso.process = processo;                                                                            // 142
                                                                                                                       //
        // faz o mapeamento das propriedades do schema para as do csv                                                  // 144
        novoSubprocesso.title = subprocesso.titulo;                                                                    // 145
        novoSubprocesso.text = subprocesso.texto;                                                                      // 146
        novoSubprocesso.phase = subprocesso.fase;                                                                      // 147
                                                                                                                       //
        // cria o vetor de options                                                                                     // 149
        novoSubprocesso.options = [];                                                                                  // 150
                                                                                                                       //
        // obtem as opcoes                                                                                             // 152
        var opcoes_aux = keys.filter(function (el) {                                                                   // 153
            return el.indexOf("op") >= 0;                                                                              // 153
        });                                                                                                            // 153
                                                                                                                       //
        // descobre as opcoes preenchidas                                                                              // 155
        var opcoes_preenchidas = opcoes_aux.filter(function (el) {                                                     // 156
            return subprocesso[el] !== "";                                                                             // 156
        });                                                                                                            // 156
                                                                                                                       //
        // Obtem o valor correto de cada opcao                                                                         // 158
                                                                                                                       //
        var _loop2 = function _loop2(j) {                                                                              // 7
                                                                                                                       //
            var obj = {                                                                                                // 161
                valor: subprocesso[opcoes_preenchidas[j]],                                                             // 162
                secao: subprocesso[opcoes_preenchidas[j + 1]]                                                          // 163
            };                                                                                                         // 161
                                                                                                                       //
            var subprocessoReferente = subprocessos.filter(function (el) {                                             // 166
                return el.secao == obj.secao;                                                                          // 166
            })[0];                                                                                                     // 166
                                                                                                                       //
            novoSubprocesso.options.push({                                                                             // 168
                option: obj.valor,                                                                                     // 169
                subprocess: {                                                                                          // 170
                    _id: subprocessoReferente._id,                                                                     // 171
                    title: subprocessoReferente.titulo,                                                                // 172
                    text: subprocessoReferente.texto                                                                   // 173
                }                                                                                                      // 170
            });                                                                                                        // 168
        };                                                                                                             // 7
                                                                                                                       //
        for (var j = 0; j < opcoes_preenchidas.length; j += 2) {                                                       // 159
            _loop2(j);                                                                                                 // 159
        }                                                                                                              // 176
                                                                                                                       //
        // Salva o subprocesso no banco                                                                                // 178
        SubProcessos.update({ _id: novoSubprocesso._id }, { $set: novoSubprocesso }, { bypassCollection2: true });     // 179
                                                                                                                       //
        //console.log("Fim do link da secao", subprocesso.secao);                                                      // 181
    };                                                                                                                 // 7
                                                                                                                       //
    for (var _i = 0; _i < subprocessos.length; _i++) {                                                                 // 133
        _loop(_i);                                                                                                     // 133
    }                                                                                                                  // 182
                                                                                                                       //
    console.log("Fim do processo de linkagem");                                                                        // 184
                                                                                                                       //
    console.log("Inserindo o firstsubprocess no processo");                                                            // 186
    processo.firstsubprocess = SubProcessos.findOne();                                                                 // 187
    Processos.update({ _id: processo._id }, { $set: processo }, { bypassCollection2: true });                          // 188
    console.log("Fim da inserção do firstsubprocess no processo");                                                     // 189
                                                                                                                       //
    //console.log("fixtures Meteor.startup");                                                                          // 191
                                                                                                                       //
    // Add default admin account                                                                                       // 193
    if (Meteor.users.find().count() === 0) {                                                                           // 194
        Accounts.createUser({                                                                                          // 195
            username: 'default@admin',                                                                                 // 196
            email: 'default@admin.com',                                                                                // 197
            password: 'default@admin'                                                                                  // 198
        });                                                                                                            // 195
                                                                                                                       //
        Accounts.createUser({                                                                                          // 201
            username: 'asdf@asdf',                                                                                     // 202
            email: 'asdf@asdf',                                                                                        // 203
            password: 'asdfasdf'                                                                                       // 204
        });                                                                                                            // 201
    }                                                                                                                  // 206
});                                                                                                                    // 209
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
