import { NextResponse } from "next/server";

const OCCUPATIONS = new Set(["nutritionist", "dietitian", "doctor"]);

function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

interface PartnerPayload {
  name: string;
  email: string;
  contact: string;
  occupation: string;
  description: string;
}

function validate(body: unknown): { ok: true; data: PartnerPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const { name, email, contact, occupation, description } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return { ok: false, error: "Name is required." };
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Valid email is required." };
  }
  if (typeof contact !== "string" || !/^[+\d\s()-]{7,15}$/.test(contact.trim())) {
    return { ok: false, error: "Valid contact number is required." };
  }
  if (typeof occupation !== "string" || !OCCUPATIONS.has(occupation)) {
    return { ok: false, error: "Please select a valid occupation type." };
  }
  if (typeof description !== "string" || !description.trim()) {
    return { ok: false, error: "Description is required." };
  }
  if (countWords(description) > 100) {
    return { ok: false, error: "Description must be 100 words or fewer." };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      contact: contact.trim(),
      occupation,
      description: description.trim(),
    },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validate(body);

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
      return NextResponse.json(
        { error: "Form submission is not configured yet. Please contact the site admin." },
        { status: 503 },
      );
    }

    const payload = {
      ...result.data,
      submittedAt: new Date().toISOString(),
    };

    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const responseText = await sheetResponse.text();
    let sheetResult: { success?: boolean; error?: string } = {};

    try {
      sheetResult = JSON.parse(responseText);
    } catch {
      if (!sheetResponse.ok) {
        throw new Error("Google Sheets webhook failed.");
      }
    }

    if (!sheetResponse.ok || sheetResult.success === false) {
      throw new Error(sheetResult.error || "Failed to save to Google Sheets.");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Partner form error:", err);
    return NextResponse.json(
      { error: "Unable to submit your application. Please try again later." },
      { status: 500 },
    );
  }
}
