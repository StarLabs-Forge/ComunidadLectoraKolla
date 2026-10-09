import React from 'react';

type Variant = 'horizontal' | 'vertical' | 'isotipo';

interface KollaLogoProps {
  variant?: Variant;
  /** Altura en px del logotipo completo (el ancho se ajusta solo). */
  height?: number;
  tagline?: boolean;
  className?: string;
  title?: string;
}

/** Cruz andina escalonada (chakana) con anillo central, en coordenadas 0-100. */
const CROSS_PATH =
  'M36 4H64V22H78V36H96V64H78V78H64V96H36V78H22V64H4V36H22V22H36Z';

function Symbol({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      style={{ flex: 'none' }}
    >
      <path d={CROSS_PATH} fill="var(--kolla-primary)" />
      <circle cx="50" cy="50" r="20" fill="#F8F3EE" />
      <circle cx="50" cy="50" r="11" fill="var(--kolla-primary)" />
    </svg>
  );
}

export default function KollaLogo({
  variant = 'horizontal',
  height = 36,
  tagline = false,
  className,
  title = 'Kolla',
}: KollaLogoProps) {
  const wordStyle: React.CSSProperties = {
    fontFamily: 'var(--font-playfair), serif',
    fontWeight: 800,
    letterSpacing: '0.01em',
    lineHeight: 1,
    color: 'var(--kolla-text)',
  };

  if (variant === 'isotipo') {
    return (
      <span className={className} role="img" aria-label={title} style={{ display: 'inline-flex' }}>
        <Symbol size={height} />
      </span>
    );
  }

  const vertical = variant === 'vertical';
  const symbolSize = vertical ? height * 0.62 : height;
  const fontSize = vertical ? height * 0.34 : height * 0.78;

  return (
    <span
      className={className}
      role="img"
      aria-label={title}
      style={{
        display: 'inline-flex',
        flexDirection: vertical ? 'column' : 'row',
        alignItems: 'center',
        gap: vertical ? height * 0.1 : height * 0.28,
      }}
    >
      <Symbol size={symbolSize} />
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: vertical ? 'center' : 'flex-start', gap: fontSize * 0.18 }}>
        <span style={{ ...wordStyle, fontSize }}>KOLLA</span>
        {tagline && (
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: Math.max(fontSize * 0.2, 8),
              letterSpacing: '0.28em',
              color: 'var(--kolla-text-secondary)',
              whiteSpace: 'nowrap',
            }}
          >
            LECTURA · ESCRITURA · COMUNIDAD
          </span>
        )}
      </span>
    </span>
  );
}
