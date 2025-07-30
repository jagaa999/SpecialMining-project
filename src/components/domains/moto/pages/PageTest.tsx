export default async function MotoPageTest() {
  const now = new Date();
  return (
    <>
      <div>
        <h1>Бидний тухай</h1>
        <p>Энэ бол SSG-д зориулсан агуулга.</p>
      </div>
      <div className="p-4 space-y-2">
        <h1 className="text-xl font-bold">🕓 ISR Шалгалт</h1>
        <p>
          Энэ хуудас <strong>static</strong> болон 3 секунд тутам{" "}
          <strong>шинэчлэгддэг</strong>.
        </p>
        <p>
          Хуудас үүссэн цаг:{" "}
          <span className="font-mono text-blue-600">
            {now.toLocaleString("mn-MN", {
              hour12: false,
              timeZone: "Asia/Ulaanbaatar",
            })}
          </span>
        </p>
      </div>
    </>
  );
}
