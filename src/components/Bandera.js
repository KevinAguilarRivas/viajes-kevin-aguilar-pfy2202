// Bandera como imagen (los emojis de bandera no se ven en Windows)
export default function Bandera({ codigo, pais, className = '' }) {
  if (!codigo) return null;
  return (
    <img
      src={`https://flagcdn.com/w40/${codigo}.png`}
      srcSet={`https://flagcdn.com/w80/${codigo}.png 2x`}
      width="20"
      height="15"
      alt={`Bandera de ${pais}`}
      loading="lazy"
      className={`inline-block h-[15px] w-5 rounded-[2px] object-cover align-[-2px] ${className}`}
    />
  );
}
