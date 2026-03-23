export default function Background() {
  return (
    <div 
      className="fixed inset-0 z-[-1] bg-black bg-cover bg-center bg-no-repeat opacity-80"
      style={{ 
        backgroundImage: "url('https://ludt.uk/63/asset/scroll.webp')",
      }}
    />
  );
}
