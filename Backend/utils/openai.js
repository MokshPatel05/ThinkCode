import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{
                role: "user",
                content: message
            }]
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();

        if (!response.ok) {
            console.log("OpenAI API Error:", data);
            throw new Error(data.error?.message || "OpenAI API request failed");
        }

        return data.choices[0].message.content; //reply
    } catch (err) {
        console.log("OpenAI Error:", err.message);
        throw err;
    }
}

export default getOpenAIAPIResponse;