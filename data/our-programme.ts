export interface Programme {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    images: string[]; // Array of image URLs
    category: string; // Optional: For filtering purposes
    slug: string; // Unique identifier for the programme, used in the URL
}

export const programmes: Programme[] = [
    {
        id: 1,
        title: "AAGAJ - Aware Adolescent Girls Action for Justice",
        shortDescription: "Empowering adolescent girls with gender awareness and molding them into confident, self-aware individuals.",
        description: "Aware Adolescent Girls Action for Justice Program, as the name suggests, is a holistic initiative working with adolescent girls to empower them with gender awareness, and mold them into confident, self-aware individuals, and responsible citizens. The project, directly reaching out to more than 1600 adolescent girls intensively, and 1300+ girls through school sessions and campaigns extensively thus attempts to create a safe space for these girls, where they can engage with topics that no one else talks to them openly about and share their insights and concerns.\n\nThe project, spread over 120 villages of 1 district of Himachal (Solan), works on the grassroots level to engage with the adolescent girls of the community and create a space for them to discuss and learn about a range of issues concerning them.\n\nThe workshops and meetings focus on the different ways in which gender and patriarchy impact the lives of girls and women, and how they intersect with their physical, mental, and reproductive health, experiences of violence, education, relationships, and rights and entitlements. We focus on their overall physical, mental, and emotional development as well as enhancing their awareness and participation in the decision-making processes at the household and community levels.\n\nThe work of the AAGAJ team has transformed the ways the adolescent girls of our collectives have started viewing themselves and the world. The girls now feel seen and heard, and believe themselves to be empowered individuals with their own unique identity.",
        images: [
            "/images/aagaj-1.jpg",
            "/images/aagaj-2.jpg",
            "/images/aagaj-3.jpg"
        ],
        category: "Gender Awareness",
        slug: "aagaj-aware-adolescent-girls"
    },
    {
        id: 2,
        title: "Woman Health Programme",
        shortDescription: "Addressing the broader aspects of women's health beyond medical care.",
        description: "The state of India cares little about the deeper aspects of women’s health and is mainly interested in population control, prenatal care, and safe motherhood. As a result, we as part of the larger Women’s Movement in India have criticized the current status quo. The critique has pushed the policymakers, us, and other NGOs to look at women’s healthcare issues beyond medical care. We have worked for the integrated development model, which includes a focus on the socio-cultural, economic, and political growth as well. Each of these aspects has a deep influence on health. Therefore, we believe it is not possible to raise the health status and quality of life of women unless the efforts are made to enhance the overall status of women in society and also challenge acts of human rights violation.\n\nIn Himachal Pradesh, the family, society, and state have ignored women for a long time. Gender indoctrination discourages women from paying attention to the health needs of their body and forces them to remain silent about many of their sexuality-related problems. The image of good women, in India, is one who is confined to four walls, quiet, submissive, and sacrificing. The society of Himachal Pradesh too, caught in the web of this “good women” image, has forced women to become submissive and indoctrinated. Adding onto this, the traditional healing practices where women’s knowledge was important are slowly fading out.\n\nFor a long time, what escaped the attention of many developmental planners was a very large group of women and adolescent girls who suffered multiple health problems and had no redressal mechanism to respond to their needs without any moral judgement. As a women’s organization, it is our assumption that in order to address the overall wellbeing of women, rural communities must be made more capable and proactive. This will only occur when women and young girls demand their rights by engaging with the health delivery systems and demand health facilities including information on their own bodies and wellbeing.",
        images: [
            "/images/woman-health-1.jpg",
            "/images/woman-health-2.jpg",
            "/images/woman-health-3.jpg"
        ],
        category: "Health",
        slug: "woman-health-programme"
    },
    {
        id: 3,
        title: "TB Free Programme",
        shortDescription: "An initiative to eliminate tuberculosis and empower communities.",
        description: "Tuberculosis is one of the very old diseases known. It is a major health problem in the developing world. The problem is worsening due to HIV/AIDS and an increase in MDR TB cases throughout the world.\n\nI want tell you that every year 14000 new TUBERCULOSIS (TB) patients are coming to Himachal Pradesh. TB Mukt Gram Panchayat is an initiative to make every panchayat or small geography TB free. The initiative was launched by the Prime Minister on World TB Day in March 2023. The goal of the initiative is to: \n\n- Empower panchayats to understand the extent of the TB problem\n- Take action to solve the problem\n- Create healthy competition among panchayats\n- Recognize the contribution of panchayats",
        images: [
            "/images/tb-free-1.jpg",
            "/images/tb-free-2.jpg"
        ],
        category: "Health",
        slug: "tb-free-programme"
    },
    {
        id: 4,
        title: "SUSTAINABLE AGRICULTURE, FOREST AND LAND",
        shortDescription: "Revitalizing organic agriculture and preserving traditional knowledge.",
        description: "The SAFAL program aims to revitalize organic agricultural production and traditional knowledge. Green Revolution technology in Himachal Pradesh is largely characterized by hybrid seeds, and synthetic fertilizers and pesticides. Initially, the use of synthetic pesticides and fertilizers saw an exciting increase in production levels. With 70% of Himachal Pradesh relying on agriculture as their primary livelihood, the potential to increase incomes and promote food security was enticing. However, in recent years, farmers have begun reporting concerns over poor soil quality, changes in their vegetables’ resistance to disease, and most recently, the lack of adaptability in the face of increasingly erratic weather patterns. New technologies and harsh pesticides have jeopardized the environment that many farmers rely on for food. Continuing, these pesticides cause many diseases and often have adverse side effects that farmers are unaware of. Essentially, the pesticides aid short term crop health but over time, they damage the environment, making it hard for villagers to grow crops.\n\nTo stop this issue, SAFAL works with 80 farmer groups throughout Kangra valley. We help farmers receive information on agricultural subsidies, distribution of seeds, and traditional seed preservation. We also organize a variety of demonstration events on organic practices such as making vermi-compost pits or various bio-pesticides. These pesticides are much more safe for the environment and the farmers.\n\nWe at SAFAL strive to help farmers understand the importance of their work and produce, their ability to act autonomously using natural growing methods, and to develop a local agriculture system based on organic growing methods with an eye on long term ecological sustainability. We believe that by working with farmers to increase their agricultural skillset and knowledge, we are building a more adaptable and sustainable local food system that allows families to meet their nutritional needs while living in harmony with their surrounding ecology.\n\nWe operate a small, all-natural supply chain, GreenLeaf, which connects farmers in our “all-natural” farmer collective with a local consumer market. By purchasing produce at market price, typically 30-70% more per than farmers otherwise receive, GreenLeaf strives to incentivize the production of organic produce and ease the transition from synthetic based agriculture to organic growing methods.\n\nLastly, we work primarily with female farmers. Many female farmers are overlooked despite their irreplaceable work. By working closely with female farmers, we help women claim their identity as farmers and recognize their invaluable contributions to the local economy and their family’s self-sufficiency.",
        images: [
            "/images/safal-1.jpg",
            "/images/safal-2.jpg",
            "/images/safal-3.jpg"
        ],
        category: "Agriculture",
        slug: "sustainable-agriculture-forest-land"
    }
];
