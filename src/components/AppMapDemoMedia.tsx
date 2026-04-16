export function AppMapDemoMedia() {
  return (
    <video
      src="/map-screen.MOV"
      className="aspect-9/19.5 h-auto  w-full object-cover object-top rounded-3xl border border-zinc-800 shadow-2xl shadow-amber-800 bg-zinc-900"
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      style={{ display: 'block' }}
    />
  );
}
