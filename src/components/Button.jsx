export default function Button({ children, ...props }) {
  return (
    <button
      type="button"
      class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white "
      {...props}
    >
      {children}
    </button>
  );
}
