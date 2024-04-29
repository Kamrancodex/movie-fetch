export default function Error({ error }) {
  return (
    <div className="flex flex-col place-items-center bg-indigo-950 flex flex-col m-6 p-6 rounded-md drop-shadow-sm px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-red-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
          Movie not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-200">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </div>
  );
}
