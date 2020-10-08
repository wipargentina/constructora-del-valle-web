export default function AmenitiesList(prosp) {
  const items = prosp.items;
  return (
    <>
      {items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span></span> {item.text}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
