export default function Select({ children, ...props }) {
  return (
    <select
      className="text-sm rounded-lg w-full m-2 p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      {...props}
    >
      {children}
    </select>
  );
}
