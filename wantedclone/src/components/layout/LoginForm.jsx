export default function LoginForm({ children }) {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-Gray01 py-50">
      <div className="bg-white w-[400px] h-[843px] flex flex-col justify-center px-5 rounded-md border-[1px] border-gray-300">
        {children}
      </div>
    </div>
  );
}
