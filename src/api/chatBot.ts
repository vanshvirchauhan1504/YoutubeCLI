import LlamaAI from "../../node_modules/llamaai";
import { Video } from './types';
// const Llamaai = require('../../node_modules/llamaai');



export async function answerQuestions(videoId: string): Promise<string[]> {
 
  const apiToken = "LL-jN8yawU5UCgOsfmjR5TlKdq0xLViF2kKgTAJ4yMEH90VXDLSJATjKcHecMOOs8vB";
    const llamaAPI = new LlamaAI(apiToken);
    
    const apiRequestJson = {
      messages: [{ role: "user", content: "What is the weather like in Boston?" }],
      functions: [
        {
          name: "get_current_weather",
          description: "Get the current weather in a given location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g. San Francisco, CA",
              },
              days: {
                type: "number",
                description: "for how many days ahead you wants the forecast",
              },
              unit: { type: "string", enum: ["celsius", "fahrenheit"] },
            },
          },
          required: ["location", "days"],
        },
      ],
      stream: false,
      function_call: "get_current_weather",
    };
    
    llamaAPI
      .run(apiRequestJson)
      .then((response:any) => {
        // Process response
      })
      .catch((error:any) => {
        // Handle errors
      });
    // Logic to answer questions about video metadata and content
    // You can integrate LLM API here for answering questions
    return [];
  }
  

 
  

