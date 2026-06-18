export type LeadPayload = {
  name: string;
  phone: string;
  profile?: string;
  message?: string;
  source?: string;
};

export type LeadValidationResult =
  | { success: true; data: LeadPayload }
  | { success: false; errors: Record<string, string> };

const toText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function validateLeadPayload(payload: unknown): LeadValidationResult {
  if (!payload || typeof payload !== "object") {
    return {
      success: false,
      errors: { form: "Dados inválidos." }
    };
  }

  const record = payload as Record<string, unknown>;
  const name = toText(record.name);
  const phone = onlyDigits(toText(record.phone));
  const profile = toText(record.profile);
  const message = toText(record.message);
  const source = toText(record.source);
  const errors: Record<string, string> = {};

  if (name.length < 2) {
    errors.name = "Informe seu nome.";
  }

  if (phone.length < 10 || phone.length > 11) {
    errors.phone = "Informe um telefone válido com DDD.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name,
      phone,
      ...(profile ? { profile } : {}),
      ...(message ? { message } : {}),
      ...(source ? { source } : {})
    }
  };
}
