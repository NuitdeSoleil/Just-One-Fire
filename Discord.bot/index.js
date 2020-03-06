//MODULE DISCORD  
const Discord = require("discord.js");
const client =new Discord.Client();
client.login("Njc5NzY0Mjg1NTA4OTQ0MDY3.XlZd4A.DKOjh8iPkiuurNe3aZQbMk63bTs");
//MODULE FS
const fs = require("fs");
client.commands = new Discord.Collection();

//DÉBUTS DU CODE
fs.readdir("./Commandes/", (error, f) => {
    if (error) console.log(error);
    //VÉRIFIER SI IL Y A UN FICHIER JS
    let commandes = f.filter(f => f.split(".").pop() === 'js');
    if (commandes.length <= 0) return console.log("aucune commande trouvé!")
    else if (commandes.length > 0) return console.log("il y a un ou plusieur fiche JS")

    commandes.forEach((f) => {
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargé!`);
    client.commands.set(commande.help.name, commande);    
    });
}); 

fs.readdir("./Events/", (error, f) => {
    if (error) console.log(error);
    console.log(`${f.length} events en chargements`)
    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];
    client.on(event, events.bind(null, client));
    });
}); 