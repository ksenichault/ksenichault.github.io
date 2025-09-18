

const projectsData = [

    {
        id: 1,
        title: "Stylized Beach Game (Work-in-Progress)",
        category: "Games",
        image: "/img/game-basque/grass.png", 
        description: "Stylized 3D Landscape in Blender and Unity",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {image: "/img/game-basque/grass.png", 
                text: "This project is a work-in-progress, inspired by the landscapes of the Pays Basque region. I am exploring a stylized, Animal Crossing inspired aesthetic rather than realism, with the overall idea and composition still under development."},
            {image: "/img/game-basque/pavement.png", 
                text: "To date, I have created the sand, tile, and rock textures using Substance Designer (my first experience with the software). "},
            {image: "/img/game-basque/water.png", 
                text: "The water was implemented with a custom shader in Unity, based on an online tutorial, and the grass model and shader were also developed following tutorial guidance. All models are currently being created in Blender and remain in progress."},
            ]
    },
    {
        id: 2,
        title: "Disney Princess Character Recognition",
        category: "AI",
        description: "Computer Vision, Image and Video Classification",
        image: "/img/princess-recognition/result-group-img.png",
        blocks: [
            {
                video: "https://drive.google.com/file/d/1ps8g49MYdwGnPSSX8002hpuLxToB3-5y/preview", text: "This project, completed for my Image Analysis and Computer Vision course, focused on recognizing Disney princesses in both images and videos using deep learning approaches.\
 I built a dataset of 4,500 curated images across 9 princess classes, splitting it into 80% training and 20% testing. Each frame was cropped around the character present in the frame with the YOLO algorithm, excluding irrelevant content. To improve robustness, I applied a rich data augmentation pipeline (noise, blur, lighting variation, flips, rotations, zoom, etc.), ensuring the models could generalize well to new inputs." },
            {
                image: "/img/princess-recognition/cnn-layers.png", text: "Two models were trained and compared: a custom Convolutional Neural Network (CNN) built from scratch and a MobileNetV2 transfer learning model, fine-tuned on the dataset.\
 Both models were integrated with YOLO for bounding box detection, allowing the system to identify and classify characters in real time from single princess images, multiple princess images, and live video streams." },
            { image: "/img/princess-recognition/result-group-img.png", text: "The results were strong: both models achieved over 90% accuracy on the test set of known princesses, though they tended to misclassify unfamiliar characters by forcing them into the closest known category." },
        ],
    },
    {
        id: 20,
        title: "Gardenia: An Interactive AR Garden Game",
        category: "Games",
        image: "/img/gardenia/gardenia-screen.png",
        description: "AR Game with Physical Interactions",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {
                video: "https://drive.google.com/file/d/1wENKvNCJymManJxPElu2wYZeebpKEAqX/preview", text: "This project, developed as a group project, is an interactive AR experience, focuses on growing and managing virtual flowers using physical objects and gestures. Players interact with the game by planting seeds, watering flowers, and picking fully grown flowers, all while controlling weather conditions and time progression." },
            {
                image: "/img/gardenia/gardenia-screen.png", text: "The game features three types of flowers, each with unique growth requirements affected by weather, water levels, and temperature. A dynamic weather system impacts flower growth and water consumption, and visual and audio feedback were implemented to create an immersive and engaging experience." },
            { image: "/img/gardenia/gardenia-interaction.png", text: "Physical objects like a QR-coded board, seed bags, a water cup, and a basket allow tangible interactions, making gameplay intuitive and interactive. Players monitor flower growth through UI indicators showing water levels, growth stage, and temperature, while using gestures and object placement to influence outcomes.\
                " },
        ],
    },
    {
        id: 3,
        title: "Moonlight Manor - 3D Escape Game",
        category: "Games",
        image: "/img/escape-game/thumbnail.png",
        description: "3d Unity puzzle game",
        link: "https://github.com/yourname/ai-image-classifier",
        
        blocks: [
            {
                video: "https://drive.google.com/file/d/1wfM3WHbx2GAmkVnWi3DcfZCGN9SVdIY4/preview", text: "This project, completed as a group assignment, is a 3D local 2-player escape game called Moonlight Manor, built in Unity with fully custom 3D models and assets created in Blender. Players navigate six distinct rooms, solving puzzles such as locks, jigsaw puzzles, sliding 8 puzzles, laundry organization, and pipe rotation to progress through the manor. Each room features interactive objects, environmental details, and visual cues to guide the players, creating a cohesive and immersive experience." },
            {
                image: "/img/escape-game/cadenas.png", text: "I contributed primarily to the 3D modeling, environmental art, and puzzle design, ensuring each room was visually distinct and that puzzles were intuitive and engaging.\
                I implemented most of the puzzle logic and interactive coding, handling how each puzzle responds to player actions, updates the game state, and triggers door unlocks, ensuring smooth and consistent gameplay across all rooms.\
                 Lighting, props, and UI elements were crafted to enhance gameplay immersion, and sound effects were integrated to provide audio feedback for interactions. The project demonstrates a combination of interactive puzzle design, 3D asset creation, and environmental storytelling in a game context." },                
        ],
    },
    {
        id: 4,
        title: "Rewrite Your Past - VR Memory Manipulation",
        category: "UX",
        image: "/img/rewrite-your-past/emotion.png",
        description: "Critical Design of VR Memory Manipulation",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {
                video: "https://drive.google.com/file/d/1n3ah3-oJifUrt5HANyWqFz4VZoF0K0WS/preview", text: "This project explores the ethical boundaries of immersive technology through a VR experience focused on memory manipulation. Designed as a critical provotype, Rewrite Your Past allows users to revisit personal memories, alter their environments, and reshape their emotions, only to reveal how easily those memories can be distorted or even replaced without consent." },
            {
                image: "/img/rewrite-your-past/emotion.png", text: "Players begin by selecting an emotion, represented as floating bubbles, and stepping into memories tied to that feeling. Once inside, they can modify elements such as weather, objects, or background scenery to reduce the intensity of negative emotions. However, the app eventually takes control, glitching into fabricated memories that overwrite the original ones, raising unsettling questions about authenticity and the fragility of memory." },       
                {image:"/img/rewrite-your-past/change.png", text: "The experience combines interactive design in Figma, immersive 3D memory scenes modeled in Blender, and glitch animations edited in CapCut. User testing revealed both intrigue and discomfort, as intended, with participants noting the therapeutic potential of such tools alongside their dystopian dangers."},         
                {image: "/img/rewrite-your-past/new-memory.png", text: "This project highlights the double-edged nature of VR: its power to heal through guided therapy, but also its capacity to blur reality and induce false memories. By provoking reflection rather than providing solutions, Rewrite Your Past critically engages with the future of memory, technology, and human perception." },
        ],
    },
    {
        id: 5,
        title: "Interactive Data Visualization",
        category: "Web",
        image: "/img/names-vis/vis.png",
        description: "Gender Effects and Name Popularity Trends - with d3.js",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {video: "https://drive.google.com/file/d/13iMkKDDT7S4pfDePSMLDy73-qhuC5-AF/preview", text: "Developed with D3.js, this interactive visualization explores how unisex baby names evolve across time and gender. A bar chart highlights the top 20 unisex names for any selected year, color-coded by male–female ratio. A line chart reveals how these proportions shift historically, while a detailed ratio chart appears when selecting specific points in time. Users can navigate the data by searching names, clicking directly on charts, or adjusting the year with a slider, making it easy to uncover naming trends and gender effects."},
        ]
    },
    {
        id: 6,
        title: "Global Coffee Trends - Interactive Data Visualization",
        category: "Web",
        image: "/img/coffee-vis/coffee-vis.png",
        description: "Coffee production and consumption visualization with d3.js",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {video: "https://drive.google.com/file/d/1tWZBuj9f3pEHpn5Guwb5BS37zWulXZ6U/preview", text: "Developed with D3.js, this project visualizes the global coffee industry across trade, production, consumption, and pricing. The dashboard combines a choropleth map, dynamic bar charts, and line charts to show top producers, import/export networks, and long-term trends. Additional interactive views explore coffee type preferences worldwide with a radar chart, compare prices per cup and daily consumption using pictorial unit charts, and highlight lifetime coffee spending by country with a lollipop chart.\
            These visualizations make it easy to explore both global trade dynamics and cultural consumption habits, offering an engaging look at one of the world's most important commodities."},
        ]
    },
    {
        id: 7,
        title: "Stylized 3D Game Assets",
        category: "3D",
        image: "/img/blender/game/bottle.png",
        description: "Low-Poly Models in Blender",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {image: "/img/blender/game/puit.png", text: "This is a collection of game-style 3D assets created over time, exploring different techniques and aesthetics. The set includes a low-poly well, a wooden crate with a hand-painted texture made in Procreate, and stylized bottles. "},
            {image: "/img/blender/game/bottle.png", text:"These models experiment with non-realistic, stylized styles often used in games."},
            {image: "/img/blender/game/wood-crate.png", text:" Creating them allowed me to explore different techniques and find a style that I could refine and incorporate into a future game project."},

        ]
    },
    {
        id: 8,
        title: "Tangled-Inspired Realistic Scene",
        category: "3D",
        image: "/img/blender/tangled/tangled-1.png", 
        description: "Realistic scene in Blender",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {image: "/img/blender/tangled/tangled-1.png", 
                text: "This project is inspired by the Disney movie 'Tangled', specifically the lantern scene. My goal was to capture the atmosphere of that scene by recreating it in Blender."},
            
            {image: "/img/blender/tangled/tangled-2.png", text:"I composed the scene with key elements: the lanterns, the water, and the boat, while experimenting with a more realistic style. I explored various lighting setups, color tones, and ambient effects to evoke the same enchanting mood as the original movie."},
            ]
    },
    {
        id: 9,
        title: "Stylized Forest Scene",
        category: "3D",
        image: "/img/blender/nature_1.png", 
        description: "Forest Environment in Blender",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {image: "/img/blender/nature_1.png", 
                text: "For this project, I wanted to create a stylized forest scene. The challenge was to find a balance between a semi-realistic look and a stylized, game-inspired finish. I first created each model (tree, butterfly, flower, rock, grass…), then spent time composing the environment."},
            
            ]
    },
    {
        id: 10,
        title: "Stylized Food model",
        category: "3D",
        image: "/img/blender/soup.png", 
        description: "Stylized Ghibli-Inspired Soup Model in Blender",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {image: "/img/blender/soup.png", 
                text: "For this project, I created a stylized soup model inspired by a Ghibli-style cartoon aesthetic, following a YouTube tutorial for guidance.\
                "},
            
            ]
    },
    
    {
        id: 12,
        title: "Stylized Materials for Games",
        category: "3D",
        image: "/img/substance-designer/sand.png",
        description: "Materials made with Substance Designer",
        link: "https://yourportfolio.com/blender-animation",
        blocks: [
            {image: "/img/substance-designer/sand.png", 
                text: "These are various stylized materials I created in Substance Designer, including tile, pavement, and sand materials."},
            {image: "/img/substance-designer/rock.png", 
                text: "These materials are intended for use in a game, designed to be slightly realistic while maintaining a stylized aesthetic. "},
            {image: "/img/substance-designer/pavement.png", },
            {image: "/img/substance-designer/tile-green.png", },


            ]
    },

];

export default projectsData;
