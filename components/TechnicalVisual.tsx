export function TechnicalVisual() {
  return (
    <div className="grid border-t border-tag-line bg-white p-5 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="text-xs font-black uppercase text-tag-purple">Painel de decisão</p>
        <div className="mt-4 grid gap-2">
          <span className="h-2 w-11/12 rounded-sm bg-tag-purple/80" />
          <span className="h-2 w-8/12 rounded-sm bg-tag-navy/70" />
          <span className="h-2 w-10/12 rounded-sm bg-tag-lime" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 md:mt-0">
        <span className="h-12 rounded-md border border-tag-line bg-tag-soft" />
        <span className="h-12 rounded-md border border-tag-line bg-tag-purple" />
        <span className="h-12 rounded-md border border-tag-line bg-tag-navy" />
      </div>
    </div>
  );
}
