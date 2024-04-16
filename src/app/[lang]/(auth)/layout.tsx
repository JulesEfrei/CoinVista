export default function Layout({ children }) {
    return (
      <>
        <div className="flex flex-col items-center relative top-64">
          <p className="text-h4">Welcome to Coinvista</p>
          <section>{children}</section>
        </div>
      </>
    );
  }