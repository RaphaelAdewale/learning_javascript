import OpenAI from "openai";

let openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function generateExcuse(request, response) {
    let context = 
        "Keep the excuse short. keep it realistic. Do not make it too complex. Use the information I provide about me to genrate a response";
    let aboutMe =
        "26 year old. CEO of eLongson. Content creator. Gym and code everyday, play video games and watch movie in spare time";
    let userInput = request.query.user_input;

    let prompt = 
        "Generate a realistic excuse for this:" + 
        userInput +
        " Context:" +
        context +
        " About Me: " +
        aboutMe;

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: 'gpt-3.5-turbo',
          });

    response.send(chatCompletion.choices[0].message.content);
}