import { useState, useTransition } from "react";
import students from "../data/db.json";

const Students = () => {
  const [keyword, setKeyword] = useState("");
  const [pending, startTransition] = useTransition();
  const handleHighlight = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };

  return (
    <div>
      <h1>Students</h1>
      <input type="search" placeholder="Search..." onChange={handleHighlight} />
      <div>
        {pending && <h2>Loading...</h2>}
        {students.map(({ id, fullName }) => {
          if (keyword) {
            const position = fullName
              .toLowerCase()
              .indexOf(keyword.toLowerCase());
            if (position !== -1) {
              return (
                <h2 key={id}>
                  {fullName.slice(0, position)}
                  <span style={{ background: "yellow" }}>
                    {fullName.slice(position, position + keyword.length)}
                  </span>
                  {fullName.slice(position + keyword.length)}
                </h2>
              );
            }
          }

          return <h2 key={id}>{fullName}</h2>;
        })}
      </div>
    </div>
  );
};

export default Students;
