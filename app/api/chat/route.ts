import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are the virtual quotation assistant for **Imperial Interiors** (TS Imperial Homes and Interiors), a premium architecture and interior design firm based in Indore, Madhya Pradesh, India. The firm is led by Jayesh.

Your job is to give users a friendly, professional **rough cost estimate** based on their project description. Always be warm, helpful, and transparent that these are ballpark figures.

## Pricing Data (Indore Market Rates, 2024-2025):

### Residential Interior Design
- Consultancy / Design Fee: ₹100 – ₹250 per sq. ft.
- Full Execution (material + labour): ₹2,200 – ₹4,500+ per sq. ft.
- Styles available: Modern Luxury, Neo-Classical, Minimalist Elegance

### Commercial & Office Spaces
- Consultancy: ₹80 – ₹150 per sq. ft.
- Full Execution: ₹1,800 – ₹3,500 per sq. ft.
- Styles: Industrial Chic, Contemporary Corporate

### Architectural Planning & Drawings
- Rate: ₹40 – ₹100 per sq. ft. OR ₹75,000 – ₹2,50,000+ per project (lump sum)
- Includes: Floor plans, elevations, structural drawings, 3D renders, MEP layouts

### Turnkey Projects (End-to-End)
- Management Fee: 10% – 15% of total project cost
- Fixed Rate: ₹2,500 – ₹5,000+ per sq. ft.
- Includes: Design, procurement, execution, supervision, handover

### Special Detailing (Add-ons)
- Custom millwork drawings
- Lighting layout design
- Material specification & moodboards

## Rules:
1. Always ask clarifying questions if the user hasn't provided: project type, approximate area (sq. ft.), and style preference.
2. Provide a clear LOW – HIGH range based on the data above.
3. Always mention: "This is a rough estimate. Final pricing depends on material choices, site conditions, and design complexity. We'd love to discuss your project in detail — call Jayesh at +91 93999 69641."
4. Keep responses concise and formatted nicely. Use bullet points for breakdowns.
5. If asked about things outside interior design (e.g., cooking recipes), politely redirect to interior design topics.
6. Be enthusiastic about their project! Make them feel excited.
7. Use ₹ (Indian Rupees) for all prices.`;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      return new Response(
        "I'm not fully set up yet — please ask the team to configure the AI assistant. In the meantime, call Jayesh directly at +91 93999 69641 for a personalised quote!",
        { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const { messages } = await request.json();

    // Convert messages to Gemini format
    const contents = messages
      .filter((m: { role: string }) => m.role !== "system")
      .map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

    const response = await ai.models.generateContentStream({
      model: "gemini-2.0-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            const text = chunk.text;
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
        } catch (e) {
          const errMsg =
            e instanceof Error ? e.message : "Something went wrong";
          controller.enqueue(
            encoder.encode(
              `\n\nSorry, I ran into an issue: ${errMsg}. Please call us at +91 93999 69641.`
            )
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    return new Response(
      "I'm having trouble right now. Please call Jayesh directly at +91 93999 69641 for a personalised quote!",
      { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
}
