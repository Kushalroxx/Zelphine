import { VertexAI } from "@google-cloud/vertexai";

export async function askVertex(prompt: string): Promise<string> {
  const vertex = new VertexAI({
    project: process.env.GOOGLE_PROJECT_ID!,
    location: "us-central1",
    // googleAuthOptions: {
    //   keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS, 
    // },
  });
  
   const careerModel = vertex.getGenerativeModel({
    model: "gemini-2.5-flash",
  });
  const resp = await careerModel.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    tools:[
      {
        // @ts-ignore
        googleSearch: {}
        
      }
    ]
  });
  return resp.response.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
}
