import Link from "next/link";

const Index = () => {
  return (
    <>
      <div>
        <nav className="nav">
          <Link href="/" className="link">
            Main
          </Link>
          <Link href="/users" className="link">
            Users
          </Link>
        </nav>
        <h1>Main page</h1>
        <style jsx>{`
          .nav {
            background: gray;
            padding: 15px;
          }
          .link {
            text-decoration: none;
            color: blue;
            font-size: 20px;
            margin: 10px;
          }
        `}</style>
      </div>
    </>
  );
};

export default Index;
