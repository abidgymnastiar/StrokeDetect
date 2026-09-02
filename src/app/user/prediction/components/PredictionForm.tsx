'use client';

import React, { useState } from 'react';
import {
  LuActivity,
  LuBrain,
  LuCalendarDays,
  LuCigarette,
  LuDroplet,
  LuGauge,
  LuHeart,
  LuHeartPulse,
  LuInfo,
  LuScale,
  LuScanLine,
  LuShieldCheck,
  LuTriangleAlert,
  LuUserRound,
  LuUsers,
} from 'react-icons/lu';

type YesNo = 'ya' | 'tidak' | '';

type FormState = {
  usia: string;
  jenisKelamin: string;
  sistolik: string;
  gulaDarah: string;
  penyakitJantung: YesNo;
  kolesterol: string;
  merokok: YesNo;
  obesitas: YesNo;
  riwayatKeluarga: YesNo;
  gejala1: string;
  gejala2: string;
};

const initialState: FormState = {
  usia: '',
  jenisKelamin: '',
  sistolik: '',
  gulaDarah: '',
  penyakitJantung: '',
  kolesterol: '',
  merokok: '',
  obesitas: '',
  riwayatKeluarga: '',
  gejala1: '',
  gejala2: '',
};

const genderOptions = ['Laki-laki', 'Perempuan'];

const symptomOptions = [
  'Tidak ada',
  'Bicara pelo / cadel mendadak',
  'Wajah mencong / asimetris',
  'Lemah atau mati rasa satu sisi tubuh',
  'Gangguan penglihatan mendadak',
  'Pusing berat / kehilangan keseimbangan',
  'Sakit kepala hebat mendadak',
];

type RiskLevel = {
  key: 'rendah' | 'sedang' | 'tinggi';
  label: string;
  dot: string;
  text: string;
  badge: string;
  message: string;
};

const riskLevels: Record<RiskLevel['key'], RiskLevel> = {
  rendah: {
    key: 'rendah',
    label: 'Risiko Rendah',
    dot: 'bg-success',
    text: 'text-success',
    badge: 'bg-success/10 text-success',
    message: 'Kemungkinan stroke rendah. Tetap jaga pola hidup sehat.',
  },
  sedang: {
    key: 'sedang',
    label: 'Risiko Sedang',
    dot: 'bg-amber-500',
    text: 'text-amber-500',
    badge: 'bg-amber-500/10 text-amber-600',
    message: 'Perlu waspada. Perbaiki pola hidup dan lakukan pemeriksaan rutin.',
  },
  tinggi: {
    key: 'tinggi',
    label: 'Risiko Tinggi',
    dot: 'bg-danger',
    text: 'text-danger',
    badge: 'bg-danger/10 text-danger',
    message: 'Segera konsultasikan kondisi Anda ke tenaga medis.',
  },
};

const num = (v: string) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

const scoreForm = (f: FormState) => {
  let score = 0;

  const usia = num(f.usia);
  if (usia >= 55) score += 2;
  else if (usia >= 45) score += 1;

  const sis = num(f.sistolik);
  if (sis >= 140) score += 2;
  else if (sis >= 130) score += 1;

  const gula = num(f.gulaDarah);
  if (gula >= 126) score += 2;
  else if (gula >= 100) score += 1;

  const kol = num(f.kolesterol);
  if (kol >= 240) score += 2;
  else if (kol >= 200) score += 1;

  if (f.penyakitJantung === 'ya') score += 2;
  if (f.merokok === 'ya') score += 1;
  if (f.obesitas === 'ya') score += 1;
  if (f.riwayatKeluarga === 'ya') score += 1;

  [f.gejala1, f.gejala2].forEach((g) => {
    if (g && g !== 'Tidak ada') score += 2;
  });

  if (score <= 3) return { level: riskLevels.rendah, score };
  if (score <= 7) return { level: riskLevels.sedang, score };
  return { level: riskLevels.tinggi, score };
};

type FieldProps = {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
  helper?: string;
};

const Field = ({ icon: Icon, label, children, helper }: FieldProps) => (
  <div className="grid md:grid-cols-[1fr_1.7fr] gap-2 md:gap-6 md:items-center py-4 border-b border-default-200 last:border-0">
    <div className="flex items-center gap-3">
      <span className="size-9 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="size-4.5" />
      </span>
      <span className="text-sm font-medium text-default-800">{label}</span>
    </div>
    <div>
      {children}
      {helper && <p className="mt-1.5 text-xs text-default-400">{helper}</p>}
    </div>
  </div>
);

type YesNoProps = {
  name: string;
  value: YesNo;
  onChange: (v: YesNo) => void;
};

const YesNoField = ({ name, value, onChange }: YesNoProps) => (
  <div className="flex items-center gap-6 h-9.25">
    {(['ya', 'tidak'] as const).map((opt) => (
      <label key={opt} className="flex items-center gap-2 text-sm text-default-700 cursor-pointer">
        <input
          type="radio"
          name={name}
          className="form-radio"
          checked={value === opt}
          onChange={() => onChange(opt)}
        />
        {opt === 'ya' ? 'Ya' : 'Tidak'}
      </label>
    ))}
  </div>
);

const SidebarCard = ({
  icon: Icon,
  title,
  children,
  tone = 'default',
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  tone?: 'default' | 'danger';
}) => (
  <div
    className={`rounded-2xl border p-5 ${
      tone === 'danger'
        ? 'border-danger/20 bg-danger/5'
        : 'border-default-200 bg-card shadow-sm'
    }`}
  >
    <div className="flex items-center gap-2.5 mb-3">
      <span
        className={`size-8 rounded-lg flex items-center justify-center ${
          tone === 'danger' ? 'bg-danger/10 text-danger' : 'bg-primary/10 text-primary'
        }`}
      >
        <Icon className="size-4" />
      </span>
      <h6
        className={`text-sm font-semibold ${
          tone === 'danger' ? 'text-danger' : 'text-default-800'
        }`}
      >
        {title}
      </h6>
    </div>
    <div className="text-sm leading-relaxed text-default-500">{children}</div>
  </div>
);

const PredictionForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [result, setResult] = useState<{ level: RiskLevel; score: number } | null>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = scoreForm(form);
    setResult(res);
    requestAnimationFrame(() => {
      document.getElementById('hasil-prediksi')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      {/* Main form */}
      <div className="lg:col-span-8">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-default-200 bg-card shadow-sm">
          <div className="px-6 py-5 border-b border-default-200">
            <div className="flex items-center gap-3">
              <span className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <LuGauge className="size-5" />
              </span>
              <div>
                <h5 className="text-base font-semibold text-default-800">Faktor Risiko</h5>
                <p className="text-sm text-default-500">
                  Lengkapi data berikut sesuai dengan kondisi Anda saat ini.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6">
            <Field icon={LuCalendarDays} label="Usia (Tahun)" helper="Masukkan usia Anda dalam tahun">
              <input
                type="number"
                min={0}
                className="form-input"
                placeholder="Contoh: 45"
                value={form.usia}
                onChange={(e) => set('usia', e.target.value)}
              />
            </Field>

            <Field icon={LuUserRound} label="Jenis Kelamin">
              <select
                className="form-input"
                value={form.jenisKelamin}
                onChange={(e) => set('jenisKelamin', e.target.value)}
              >
                <option value="">Pilih jenis kelamin</option>
                {genderOptions.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              icon={LuHeartPulse}
              label="Hipertensi"
              helper="Masukkan tekanan darah sistolik Anda (mmHg)"
            >
              <div className="relative">
                <input
                  type="number"
                  min={0}
                  className="form-input pe-16"
                  placeholder="Contoh: 120"
                  value={form.sistolik}
                  onChange={(e) => set('sistolik', e.target.value)}
                />
                <span className="absolute inset-y-0 end-0 flex items-center px-3 text-xs text-default-400 border-s border-default-200">
                  mmHg
                </span>
              </div>
            </Field>

            <Field
              icon={LuDroplet}
              label="Diabetes Melitus"
              helper="Masukkan kadar gula darah puasa Anda (mg/dL)"
            >
              <div className="relative">
                <input
                  type="number"
                  min={0}
                  className="form-input pe-16"
                  placeholder="Contoh: 110"
                  value={form.gulaDarah}
                  onChange={(e) => set('gulaDarah', e.target.value)}
                />
                <span className="absolute inset-y-0 end-0 flex items-center px-3 text-xs text-default-400 border-s border-default-200">
                  mg/dL
                </span>
              </div>
            </Field>

            <Field icon={LuHeart} label="Penyakit Jantung">
              <YesNoField
                name="penyakitJantung"
                value={form.penyakitJantung}
                onChange={(v) => set('penyakitJantung', v)}
              />
            </Field>

            <Field
              icon={LuGauge}
              label="Kolesterol Tinggi"
              helper="Masukkan kadar kolesterol total Anda (mg/dL)"
            >
              <div className="relative">
                <input
                  type="number"
                  min={0}
                  className="form-input pe-16"
                  placeholder="Contoh: 200"
                  value={form.kolesterol}
                  onChange={(e) => set('kolesterol', e.target.value)}
                />
                <span className="absolute inset-y-0 end-0 flex items-center px-3 text-xs text-default-400 border-s border-default-200">
                  mg/dL
                </span>
              </div>
            </Field>

            <Field icon={LuCigarette} label="Merokok">
              <YesNoField name="merokok" value={form.merokok} onChange={(v) => set('merokok', v)} />
            </Field>

            <Field icon={LuScale} label="Obesitas">
              <YesNoField name="obesitas" value={form.obesitas} onChange={(v) => set('obesitas', v)} />
            </Field>

            <Field icon={LuUsers} label="Riwayat Stroke Keluarga">
              <YesNoField
                name="riwayatKeluarga"
                value={form.riwayatKeluarga}
                onChange={(v) => set('riwayatKeluarga', v)}
              />
            </Field>
          </div>

          {/* Symptoms */}
          <div className="mx-6 my-6 rounded-xl border border-default-200 bg-default-50 p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <LuActivity className="size-4" />
              </span>
              <div>
                <h6 className="text-sm font-semibold text-default-800">
                  Gejala yang Anda Rasakan Saat Ini
                </h6>
                <p className="text-xs text-default-500">
                  Pilih gejala yang Anda alami dalam beberapa waktu terakhir.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-default-700 mb-1.5">Gejala 1</label>
                <select
                  className="form-input"
                  value={form.gejala1}
                  onChange={(e) => set('gejala1', e.target.value)}
                >
                  <option value="">Pilih gejala</option>
                  {symptomOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-default-700 mb-1.5">Gejala 2</label>
                <select
                  className="form-input"
                  value={form.gejala2}
                  onChange={(e) => set('gejala2', e.target.value)}
                >
                  <option value="">Pilih gejala</option>
                  {symptomOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <button
              type="submit"
              className="btn bg-primary text-white w-full py-3 text-base font-medium"
            >
              <LuScanLine className="size-5" />
              Analisis Risiko Stroke
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-default-400">
              <LuShieldCheck className="size-3.5" />
              Data Anda aman dan tidak akan disimpan tanpa izin.
            </p>

            {result && (
              <div
                id="hasil-prediksi"
                className="mt-6 rounded-xl border border-default-200 bg-card p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-default-400">
                      Hasil Estimasi
                    </p>
                    <h5 className={`mt-1 text-xl font-semibold ${result.level.text}`}>
                      {result.level.label}
                    </h5>
                    <p className="mt-1 text-sm text-default-500">{result.level.message}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-lg px-3 py-1 text-sm font-semibold ${result.level.badge}`}
                  >
                    Skor {result.score}
                  </span>
                </div>
                <p className="mt-4 text-xs text-default-400">
                  Estimasi awal berdasarkan faktor risiko yang Anda masukkan, bukan diagnosis medis.
                </p>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <SidebarCard icon={LuInfo} title="Tentang Deteksi Stroke">
          Sistem ini menganalisis faktor risiko dan gejala yang Anda masukkan menggunakan metode data
          mining <span className="font-medium text-primary">C4.5</span> untuk memperkirakan
          kemungkinan terjadinya stroke.
        </SidebarCard>

        <SidebarCard icon={LuShieldCheck} title="Kategori Risiko">
          <ul className="flex flex-col gap-3">
            {Object.values(riskLevels).map((lvl) => (
              <li key={lvl.key} className="flex gap-3">
                <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${lvl.dot}`} />
                <div>
                  <p className={`text-sm font-semibold ${lvl.text}`}>{lvl.label}</p>
                  <p className="text-xs text-default-500">{lvl.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </SidebarCard>

        <SidebarCard icon={LuTriangleAlert} title="Penting!" tone="danger">
          Hasil analisis ini bukan diagnosis medis. Segera konsultasikan ke tenaga medis jika Anda
          mengalami gejala stroke seperti lemah anggota gerak, bicara pelo, wajah mencong, atau sakit
          kepala hebat mendadak.
        </SidebarCard>
      </div>

      {/* Privacy banner */}
      <div className="lg:col-span-12">
        <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4">
          <span className="size-9 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <LuBrain className="size-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-primary">Privasi Terjamin</p>
            <p className="text-sm text-default-500">
              Kami menjaga kerahasiaan data Anda sesuai dengan kebijakan privasi yang berlaku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionForm;
