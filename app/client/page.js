"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl">{count}</h1>
      <div className="flex-row px-4 space-x-2 mt-5">
        <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
          decrease
        </button>
        <button className="btn btn-primary" onClick={() => setCount(0)}>
          reset
        </button>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          increase
        </button>
      </div>
    </div>
  );
};

export default ClientPage;
