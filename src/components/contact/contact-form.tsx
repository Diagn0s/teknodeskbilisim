"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { services } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-16 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          Talebiniz alındı
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          En kısa sürede ekibimiz sizinle iletişime geçecektir. Bizi tercih
          ettiğiniz için teşekkür ederiz.
        </p>
        <Button
          variant="outline"
          className="mt-2 rounded-full"
          onClick={() => setStatus("idle")}
        >
          Yeni bir talep gönder
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Ad Soyad</Label>
        <Input id="name" name="name" required placeholder="Adınız Soyadınız" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Firma</Label>
        <Input id="company" name="company" placeholder="Firma adı" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">E-posta</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="ornek@firma.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" name="phone" type="tel" placeholder="05xx xxx xx xx" />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Label htmlFor="service">İlgilendiğiniz Hizmet</Label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
        >
          <option value="" disabled>
            Bir hizmet seçin
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
          <option value="diger">Diğer</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Label htmlFor="message">Mesajınız</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Projeniz veya talebiniz hakkında kısaca bilgi verin"
        />
      </div>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="h-11 w-full rounded-full sm:w-auto sm:px-8"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Gönderiliyor
            </>
          ) : (
            <>
              Talebi Gönder
              <Send className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
