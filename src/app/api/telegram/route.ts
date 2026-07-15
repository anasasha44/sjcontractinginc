import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log("BOT_TOKEN exists:", !!TELEGRAM_BOT_TOKEN);
    console.log("CHAT_ID exists:", !!TELEGRAM_CHAT_ID);

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return NextResponse.json(
        { error: "Missing Telegram environment variables" },
        { status: 500 }
      );
    }

    const message = `📩 SJ Contracting Inc - New Newsletter Subscriber

📧 Email: ${email}
🕒 Time: ${new Date().toLocaleString()}`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok) {
      return NextResponse.json(
        { error: "Telegram request failed", details: telegramData },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: telegramData });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}