import Avengers from './06Class.js';

let TonyStark = new Avengers("Ironman", "Jarvis and Nano Tech suit", "Repulsor Beam");
let SteveRogers = new Avengers("Captain America", "Super Strength", "Shield");
let BruceBanner = new Avengers("Hulk", "Super Strength", "Gamma Radiation");
let NatashaRomanoff = new Avengers("Black Widow", "Martial Arts", "Gadgets");
let Thor = new Avengers("Thor", "God of Thunder", "Storm breaker");
let ClintBarton = new Avengers("Hawkeye", "Archery", "Bow and Arrow");
let WandaMaximoff = new Avengers("Scarlet Witch", "Reality Manipulation", "Chaos Magic");
let Vision = new Avengers("Vision", "Density Control", "Mind Stone");
let PeterParker = new Avengers("Spider-Man", "Wall-Crawling", "Web-Shooters");
let StephenStrange = new Avengers("Doctor Strange", "Sorcery", "Eye of Agamotto");
let SamWilson = new Avengers("Falcon", "Flight", "Wingsuit");
let BuckyBarnes = new Avengers("Winter Soldier", "Super Soldier Serum", "Vibranium Arm");
let CarolDanvers = new Avengers("Captain Marvel", "Super Strength and Flight", "Photon Blasts");
let TChalla = new Avengers("Black Panther", "Enhanced Strength and Agility", "Vibranium Suit");
let ScottLang = new Avengers("Ant-Man", "Size Manipulation", "Pym Particles");
let rhodneyRhoades = new Avengers("Rhodey", "Flight and Combat Skills", "War Machine Suit");
let wong = new Avengers("Wong", "Sorcery", "Mystic Arts");
let groot = new Avengers("Groot", "Regeneration and Strength", "Tree-like Form");
let rocket = new Avengers("Rocket Raccoon", "Marksmanship and Engineering", "Weapons and Gadgets");
let drax = new Avengers("Drax", "Super Strength and Durability", "Knives");
let gamora = new Avengers("Gamora", "Super Strength and Agility", "Sword");
let nebula = new Avengers("Nebula", "Cybernetic Enhancements", "Blasters");
let mantis = new Avengers("Mantis", "Empathy and Telepathy", "Martial Arts");
let peterQuill = new Avengers("Star-Lord", "Expert Marksman and Pilot", "Element Guns");


TonyStark.getAvengerDetails();
// SteveRogers.getAvengerDetails();
// BruceBanner.getAvengerDetails();
// NatashaRomanoff.getAvengerDetails();
// Thor.getAvengerDetails();
// ClintBarton.getAvengerDetails();
// WandaMaximoff.getAvengerDetails();
// Vision.getAvengerDetails();
// PeterParker.getAvengerDetails();
// StephenStrange.getAvengerDetails();

//SteveRogers.getInfo();
console.log(SteveRogers.getInfo());

TonyStark.enrolPowerType("Blast");
SteveRogers.enrolPowerType("Combat");
BruceBanner.enrolPowerType("Combat");
NatashaRomanoff.enrolPowerType("Speed");
Thor.enrolPowerType("Universal");
ClintBarton.enrolPowerType("Speed");
WandaMaximoff.enrolPowerType("Universal");
Vision.enrolPowerType("Blast");
PeterParker.enrolPowerType("Speed");
StephenStrange.enrolPowerType("Universal");
SamWilson.enrolPowerType("Speed");
BuckyBarnes.enrolPowerType("Combat");
CarolDanvers.enrolPowerType("Universal");
TChalla.enrolPowerType("Combat");
ScottLang.enrolPowerType("Speed");
rhodneyRhoades.enrolPowerType("Blast");
wong.enrolPowerType("Blast");
groot.enrolPowerType("Combat");
rocket.enrolPowerType("Speed");
drax.enrolPowerType("Combat");
gamora.enrolPowerType("Speed");
nebula.enrolPowerType("Blast");
mantis.enrolPowerType("Speed");
peterQuill.enrolPowerType("Blast");

const ironmanPowerType = TonyStark.getPowerType();
console.log("Ironman Power Type: " + ironmanPowerType);
console.log("Ironman Power Type: " + TonyStark.getPowerType()); 
console.log("Ironman Power Type: " + TonyStark.PowerType); //undefined because PowerType is private
