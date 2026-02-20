"use client";

export default function GlobalError({ reset }) {
  return (
    <html>
      <body>
        <div style={{ padding: "2rem", textAlign: "center", color: "#fff", background: "#000319", minHeight: "100vh" }}>
          <h2>Something went wrong.</h2>
          <button onClick={() => reset()} style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", cursor: "pointer" }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
