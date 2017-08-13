require('dotenv').config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');
var Project = require('../models/project');
var Step = require('../models/step');

mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Project.remove({}, (err) => console.log(err));
Step.remove({}, (err) => console.log(err));

const edStep1 = new Step ({
    name: "Step 1: Test the LED",
    description: "Test your LED to determine color, brightness and functionality. Pinch the LED legs, or leads, to the battery terminals. The longer LED lead should be touching the positive terminal (+) of the battery and the shorter LED lead should be touching the negative terminal (-) of the battery.",
    image: "https://cdn.instructables.com/F0T/3OHX/MEWEP27TLRN/F0T3OHXMEWEP27TLRN.MEDIUM.jpg"
});
const edStep2 = new Step ({
    name: "Step 2: Tape the LED to the Battery",
    description: "Cut a piece of the strapping tape approximately 5-inches long. Tape the LED leads to the battery, making sure to wrap the tape around both sides of the battery 2-3 times. Keep the tape very tight as you wrap.",
    image: "https://cdn.instructables.com/FWA/KQD3/902EP27TLT0/FWAKQD3902EP27TLT0.MEDIUM.jpg"
});
const edStep3 = new Step ({
    name: "Step 3: Tape the Magnet to the Battery",
    description: "Place the magnet on the positive side of the battery and continue to tightly wrap the tape.",
    image: "https://cdn.instructables.com/FS3/85A2/KOBEP27TLUD/FS385A2KOBEP27TLUD.MEDIUM.jpg"
});
const edStep4 = new Step ({
    name: "Step 4: Toss the LED Magnet",
    description: "Now throw your LED magnets on any magnetic surface and watch how quickly it can dissent into chaotic fun.",
    image: "https://cdn.instructables.com/FK8/IQJ7/YW3EP27TMIV/FK8IQJ7YW3EP27TMIV.MEDIUM.jpg"
});

const edProject1 = new Project({
    name: "LED Magnets",
    description: "Learn how to make inexpensive LED magnets that you can stick to any magnetic surface, making the world a bit more colorful.",
    materials: ["10mm Diffused LED", "CR2032 3V Lithium Batteries", "Strapping Tape", "1/2\" Dia x 1/8\" Thick NdFeB Disc Magnet, Ni-Cu-Ni plated"],
    category: "",
    image:"https://cdn.stylepark.com/articles/2010/ent-ecg-and-nhs/v305208_958_480_360-2.jpg",
    views: 0,
    steps: [edStep1,edStep2,edStep3,edStep4]
});

const edUser = new User ({
    firstName: "Edward",
    lastName: "Nigma",
    userName: "E.Nygma?",
    email: "edward.nigma@me.com",
    password: "riddler",
    blurb: "Yes, it is I, Edward Nigma. My genius has allowed me to create a dazzling selection of challenges and easy-to-make projects. Can you complete them all? Are you ready to give up yet? Your puny mind is no match for my own.",
    projects: [edProject1]
})



const selinaStep1 = new Step ({
    name: "Step 1: Half Lap Joints",
    description: "Make half lap joints for the seat and the back to keep the widths the same and to make it a lot stronger so that it never moves. The build will not rely solely on screws.",
    image: "https://cdn.instructables.com/F13/X508/J654R6YC/F13X508J654R6YC.MEDIUM.jpg"
});

const selinaStep2 = new Step ({
    name: "Step 2: Assemble the Seat & Back",
    description: "Using screws, assemble everything. Connect the two sides of the seat and back together with 1x4 slats, spaced at 1/2 inch apart. ",
    image: "https://cdn.instructables.com/FUU/OS2B/J654R6XW/FUUOS2BJ654R6XW.MEDIUM.jpg"
});

const selinaStep3 = new Step ({
    name: "Step 3: Connect the Legs",
    description: "There's a second piece of wood for support for the back legs to make it easier to assemble.",
    image: "https://cdn.instructables.com/F7C/UBI1/J654R6XM/F7CUBI1J654R6XM.MEDIUM.jpg"
});

const selinaStep4 = new Step ({
    name: "Step 4: Arm Rests",
    description: "After the angle of the seat is determined, the last part to figure out are the arm rests. 1x4s were used for the arm rests.",
    image: "https://cdn.instructables.com/FSI/NRUH/J654R6XB/FSINRUHJ654R6XB.MEDIUM.jpg"
});

const selinaProject1 = new Project({
    name: "Custom Lawn Chairs",
    description: "Here are my instructions on how to make cheap and easy-to-build lawn chairs that are great for both outdoor and indoor use. Pieces are 2 X 4 framing lumber unless noted otherwise.",
    materials: ["(2)Front Legs - 27\" long angled 78 degrees to 26 3/8\"", "Back Legs - 24 1/4\" long, 23 1/2\" on short side 78 degrees on bottom 114 degrees on the top", "Short Back Legs - 11 1/2\" 78 degree parallelogram", "Seat - 25\" long Back - 28\" long", "Seat & Back intersect @ 75 degrees & trim excess", "Slats - 10 pieces @ 22\" long - use 1\"x4\"", "Arm Rests - 2 pieces @ 30\" long - use 1\" x 4\""],
    category: "",
    image:"https://cdn.instructables.com/FQ9/02FS/J654R6WX/FQ902FSJ654R6WX.MEDIUM.jpg",
    views: 0,
    steps: [selinaStep1, selinaStep2, selinaStep3, selinaStep4]
});

const selinaStep5 = new Step ({
    name: "Step 1: Mix Your (Cake) Ingredients",
    description: "Melt the butter in the microwave in a mug, or a mason jar, for 30 seconds. hen melted, beat in egg, sugar, cream, vanilla extract, baking powder, and flour. Carefully distribute the rainbow sprinkles through the batter – don’t stir too much, or all the colors will run!",
    image: "https://cdn.instructables.com/FFU/0IOC/IDTAMXI6/FFU0IOCIDTAMXI6.MEDIUM.jpg"
});

const selinaStep6 = new Step ({
    name: "Step 2: Microwave Your Mixture",
    description: "Cook in the microwave. Your cook time will vary between 45 seconds and 1.5 minutes depending on your wattage. Your cake will be finished when the top of the cake looks dry.",
    image: "https://cdn.instructables.com/F1K/EWW4/IDTAMXJJ/F1KEWW4IDTAMXJJ.MEDIUM.jpg"
});

const selinaStep7 = new Step ({
    name: "Step 3: Frost, Admire, & Eat!",
    description: "Once the cake cools, spread the frosting/ whip cream on top of the cake. Then top off your frosted cake with rainbow sprinkles.",
    image: "https://cdn.instructables.com/FPE/R27C/IDTAMXJY/FPER27CIDTAMXJY.MEDIUM.jpg"
});

const selinaProject2 = new Project({
    name: "Funfetti Mug Cake (5-min)",
    description: "Funfetti is the very embodiment of the sweet, celebratory goodness that we associate with birthday cake. All you need is a Mason jar (or mug), a few well-known cake making ingredients, and a microwave.",
    materials: ["(3 tbsp) Flour", "(1 tbsp) Butter", "(1/4 tsp) Vanilla Extract", "(2 tbsp) Sugar", "(1/4 tsp) Baking Powder", "Egg Yolk", "Rainbow Sprinkles", "Frosting/ Whip Cream"],
    category: "",
    image:"https://cdn.instructables.com/F2N/QN2M/IEKJ3U2O/F2NQN2MIEKJ3U2O.MEDIUM.jpg",
    views: 0,
    steps: [selinaStep5, selinaStep6, selinaStep7]
});

const selinaUser = new User ({
    firstName: "Selina",
    lastName: "Kyle",
    userName: "Catbird",
    email: "selina.kyle@me.com",
    password: "catwoman",
    blurb: "Hi, Selina Kyle here! Thanks for stopping by. Your goal is simple! You must complete at least one of my projects and, well, you'll see. Ready for your first one?... What's the matter, Cat got your tongue?",
    projects: [selinaProject1, selinaProject2]
})

edUser.save((err) => {
    if (err) console.log(err);
    console.log('Edward was created');
})

selinaUser.save((err) => {
    if (err) console.log(err);
    console.log('Selina was created');
})

mongoose.connection.close();