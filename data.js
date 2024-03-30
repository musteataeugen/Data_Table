const data = {
    // HW1a: add contacts to each employee
    //      using a plain object {}
    //      phone:...,email:....,viber:...etc.
    employees: [
        {
        name:"John Doe",
        photo:'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerShirt&eyeType=EyeRoll&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Pale', 
        job: "developer",
        experience: 10, 
        salary: 110_000,
        contacts: {
            phone : +44756382465,
            email : 'johnyDoe@yahoo.com',
            web_site : 'devTools.co.uk'
        }},
        {
        name:"Marry Poppins",
        photo:'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
        job: "tester", 
        experience: 9, 
        salary: 100_000,
        contacts: {
            phone : +33586731249,
            viber : 'Marry Tester',
            whatsApp : 'Briliant'
        }},
        {
        name:"Pete Cringe",
        photo:'https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=PastelYellow&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=CollarSweater&clotheColor=PastelBlue&eyeType=Surprised&eyebrowType=UpDown&mouthType=Sad&skinColor=DarkBrown',
        job: "developer", 
        experience: 15, 
        salary: 150_000,
        contacts: {
            viber : +40158627438,
            telegram : 'MagicPete',
            web_site : 'Cringe_dev_pro.github.io'
        }}
    ]
}