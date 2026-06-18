import { NextRequest, NextResponse } from "next/server";
import { validateLeadPayload } from "@/lib/lead-validation";

export async function POST(request: NextRequest) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Envie os dados em formato JSON." },
      { status: 400 }
    );
  }

  const validation = validateLeadPayload(payload);

  if (!validation.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Revise os campos obrigatórios.",
        errors: validation.errors
      },
      { status: 400 }
    );
  }

  const lead = {
    ...validation.data,
    receivedAt: new Date().toISOString()
  };

  const webhookUrl = process.env.WEBHOOK_URL;

  if (webhookUrl) {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { ok: false, message: "Não foi possível enviar o lead para a integração configurada." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Lead enviado com sucesso." });
  }

  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { ok: false, message: "WEBHOOK_URL não configurado para recebimento de leads." },
      { status: 503 }
    );
  }

  // Em desenvolvimento, a ausência de WEBHOOK_URL não bloqueia o teste do formulário.
  // Configure WEBHOOK_URL no ambiente para integrar com CRM, WhatsApp ou automação externa.
  return NextResponse.json({
    ok: true,
    message: "Lead recebido em modo de desenvolvimento.",
    lead
  });
}
