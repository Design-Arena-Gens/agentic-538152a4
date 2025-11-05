"use client";
import { useState } from 'react';

export const metadata = { title: '???????? ? ???.????' };

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  async function onSubmit(formData: FormData) {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-semibold">????????? ? ????</h1>
      <p className="mt-4 text-white/70 max-w-3xl">???????? ??????????? ? ?????? ??????? ??????????? ? ????.</p>

      <form className="mt-6 grid gap-4 md:max-w-xl" action={onSubmit}>
        <div className="grid gap-1">
          <label className="text-sm text-white/80">???</label>
          <input name="name" required className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-white/80">Email</label>
          <input name="email" type="email" required className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-white/80">???????</label>
          <input name="phone" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-white/80">?????????</label>
          <textarea name="message" rows={4} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400" />
        </div>
        <button className="button-primary" disabled={status==='loading'}>
          {status==='loading' ? '?????????' : '?????????'}
        </button>
        {status==='success' && <div className="text-green-400 text-sm">???????! ?? ???????? ? ????.</div>}
        {status==='error' && <div className="text-red-400 text-sm">????????? ??????. ?????????? ?????.</div>}
      </form>
    </div>
  );
}
