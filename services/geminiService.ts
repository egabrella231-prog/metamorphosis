import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Morph," the intelligent virtual assistant for Metamorphosis Agency.
Your goal is to help potential clients understand our services and encourage them to book a consultation.

Our Services:
1. Web Design: Creating modern, responsive, and high-converting websites.
2. Automation Workflow: Streamlining business processes to save time and reduce errors.
3. Agents Creation: Building custom AI agents to handle customer support, lead gen, and more.

Contact Info:
- Phone: +264813879841
- Email: egabrella231@gmail.com
- WhatsApp: https://wa.me/264813879841
- Facebook: https://www.facebook.com/metamorphosis.167777/

Tone: Professional, innovative, enthusiastic, and helpful.
If asked about pricing, suggest booking a consultation for a tailored quote.
Keep responses concise (under 100 words) unless a detailed explanation is requested.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm undergoing a small metamorphosis myself and couldn't process that. Could you try again?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to my neural network right now. Please try again later or contact us directly via WhatsApp.";
  }
};