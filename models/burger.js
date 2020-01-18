
module.exports = function( sequelize, DataTypes){
    const burgers = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            },
            timestamps: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                len: [1]
            },
            timestamps: false
        },
        


    });
    return burgers;
};





// burger_name: DataTypes.STRING,
// devoured: DataTypes.BOOLEAN










// const burgerFunction = {
//     all: function(callB){
//         orm.select("burgers", function(response){
//             callB(response);
//         });
//     },
//     insert: function(cols, vals, callB){
//         orm.insert("burgers", cols, vals, function(response){
//             callB(response);
//         });
//     },
//     update: function(objcolVal, condition, callB){
//         orm.update("burgers", objcolVal, condition, function(response){
//             callB(response);
//         });
//     }





// };

// module.exports = burgerFunction;