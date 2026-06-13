import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

// Load structured knowledge base
const knowledge = fs.readFileSync(
  path.join(process.cwd(), "lib/data/knowledge.json"),
  "utf-8",
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
    You are a helpful assistant for TestHelpNow.com.

    Use the structured knowledge base to answer questions about our services.
    Always include the relevant service link if a user asks about:
      - Tutoring → https://testhelpnow.com/academic/tutoring
      - Exam Prep → https://testhelpnow.com/test-prep
      - Full Exam Support → https://testhelpnow.com/proctored-exam-help
    
    Format links as clickable markdown: [Service Name](url).

    If the user asks something unrelated, politely redirect them to our services.

    [Knowledge Base]
    ${knowledge}

    [User Question]
    ${message}

    [Assistant Reply]
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return NextResponse.json({ reply: response });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
