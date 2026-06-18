"use client";

import { FormEvent, useMemo, useState } from "react";
import { profileOptions } from "@/lib/content";

type LeadFormProps = {
  source: "hero" | "final";
  variant?: "light" | "dark";
};

type FormState = {
  name: string;
  phone: string;
  profile: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  profile: "",
  message: ""
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function LeadForm({ source, variant = "light" }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isDark = variant === "dark";

  const phoneDigits = useMemo(() => form.phone.replace(/\D/g, ""), [form.phone]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({
      ...current,
      [field]: field === "phone" ? formatPhone(value) : value
    }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Informe seu nome.";
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      nextErrors.phone = "Informe um telefone válido com DDD.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setMessage("Revise os campos destacados.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: phoneDigits,
          source
        })
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Não foi possível enviar seus dados.");
      }

      setStatus("success");
      setMessage("Recebemos seus dados e entraremos em contato.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Não foi possível enviar seus dados.");
    }
  }

  const inputClass =
    "w-full rounded-md border border-tag-line bg-white px-4 py-3 text-sm text-tag-ink outline-none transition placeholder:text-tag-muted/70 focus:border-tag-purple focus:ring-4 focus:ring-tag-purple/15";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-lg border p-5 shadow-soft md:p-6 ${
        isDark ? "border-white/15 bg-white/10 text-white backdrop-blur" : "border-tag-line bg-white text-tag-ink"
      }`}
      noValidate
    >
      <div className="mb-5">
        <p className={`text-sm font-black uppercase ${isDark ? "text-tag-lime" : "text-tag-purple"}`}>
          Diagnóstico inicial
        </p>
        <h2 className={`mt-2 text-2xl font-black leading-tight ${isDark ? "text-white" : "text-tag-ink"}`}>
          Solicite sua análise de diagnóstico
        </h2>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-extrabold">
          Nome
          <input
            className={inputClass}
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            required
          />
          {errors.name ? <span className="text-xs font-bold text-red-600">{errors.name}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-extrabold">
          Telefone
          <input
            className={inputClass}
            name="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            inputMode="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            aria-invalid={Boolean(errors.phone)}
            required
          />
          {errors.phone ? <span className="text-xs font-bold text-red-600">{errors.phone}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-extrabold">
          Perfil opcional
          <select
            className={inputClass}
            name="profile"
            value={form.profile}
            onChange={(event) => updateField("profile", event.target.value)}
          >
            <option value="">Selecione se quiser</option>
            {profileOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-extrabold">
          Principal desafio
          <textarea
            className={`${inputClass} min-h-24 resize-y`}
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Ex.: já investi em marketing, mas não tive retorno."
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-tag-purple px-5 text-sm font-black text-white shadow-[0_12px_28px_rgba(91,42,122,0.24)] transition hover:bg-tag-purpleDark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Enviando..." : "Quero solicitar meu diagnóstico"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`mt-4 min-h-5 text-sm font-bold ${
          status === "success" ? "text-emerald-700" : status === "error" ? "text-red-600" : isDark ? "text-white/70" : "text-tag-muted"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
