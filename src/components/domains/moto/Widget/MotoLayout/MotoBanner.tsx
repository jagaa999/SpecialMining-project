export default function MotoBanner() {
  return (
    <div className="w-full h-[200px] relative">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
      />
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Welcome to My Website
        </h2>
      </div>
    </div>
  );
}
